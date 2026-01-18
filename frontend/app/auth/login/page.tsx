"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useState } from "react"
import api from "@/lib/api"
import Cookies from "js-cookie"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
      username: '',
      password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setError('')
      setLoading(true)
      
      try {
        const response = await api.post('token/', {
            username: formData.username,
            password: formData.password
        });
        
        // Save tokens
        Cookies.set('accessToken', response.data.access, { expires: 1/24 }); // 1 hour
        Cookies.set('refreshToken', response.data.refresh, { expires: 1 });  // 1 day
        
        // Redirect
        router.push("/dashboard")
      } catch (err: any) {
          console.error(err);
          setError("Login failed. Please check your credentials.")
      } finally {
          setLoading(false)
      }
  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-3.5rem)] py-10">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          <p className="text-sm text-center text-slate-500">
            Enter your username and password to access your account
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">{error}</div>}
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Username</label>
              <input
                id="username"
                placeholder="Ex: admin"
                type="text"
                className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
              </div>
              <input
                id="password"
                type="password"
                className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <Button className="w-full" type="submit" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
            </Button>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-500">Or continue with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <Button variant="outline" disabled>Google</Button>
             <Button variant="outline" disabled>Microsoft</Button>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
            <p className="text-sm text-slate-500">
                Don't have an account? <Link href="/auth/register" className="text-blue-600 hover:underline">Register</Link>
            </p>
        </CardFooter>
      </Card>
    </div>
  )
}
