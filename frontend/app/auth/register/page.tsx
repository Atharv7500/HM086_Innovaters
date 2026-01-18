"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { useState } from "react"
import api from "@/lib/api"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      role: 'STARTUP',
      organization_name: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setError('')
      setLoading(true)

      try {
          // Note: Backend might expect different field names, adjusting to likely DRF defaults
          // DRF default UserViewSet usually expects username, password, email.
          // Custom fields (role, organization_name) might need to be in a profile or extended user serializer.
          // For now, assuming direct mapping to the CustomUser model fields.
          await api.post('users/', {
              username: formData.username,
              email: formData.email,
              password: formData.password,
              role: formData.role,
              organization_name: formData.organization_name
          });

          // Redirect to login on success
          router.push("/auth/login?registered=true")
      } catch (err: any) {
          console.error(err)
          setError(JSON.stringify(err.response?.data) || "Registration failed.")
      } finally {
          setLoading(false)
      }
  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-3.5rem)] py-10">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
          <p className="text-sm text-center text-slate-500">
            Join the platform to collaborate on SDG goals
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md break-words">{error}</div>}
            
            <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">Username</label>
                <input 
                    id="username" 
                    className="flex h-10 w-full rounded-md border border-slate-200 px-3 py-2 text-sm" 
                    placeholder="johndoe" 
                    required
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>
            
            <div className="space-y-2">
                <label htmlFor="organization_name" className="text-sm font-medium">Organization Name</label>
                <input
                    id="organization_name"
                    placeholder="Acme Inc. / Global NGO"
                    className="flex h-10 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                    value={formData.organization_name}
                    onChange={handleChange}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium">Organization Type</label>
                <select
                    id="role"
                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value="STARTUP">Startup</option>
                    <option value="NGO">NGO</option>
                    <option value="GOVERNMENT">Government</option>
                    <option value="RESEARCH">Research Institute</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="flex h-10 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            
            <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <input
                    id="password"
                    type="password"
                    className="flex h-10 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                    required
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>

            <Button className="w-full mt-4" type="submit" disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>
          
        </CardContent>
        <CardFooter className="justify-center">
            <p className="text-sm text-slate-500">
                Already have an account? <Link href="/auth/login" className="text-blue-600 hover:underline">Login</Link>
            </p>
        </CardFooter>
      </Card>
    </div>
  )
}
