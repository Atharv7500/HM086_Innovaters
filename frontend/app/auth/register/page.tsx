"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

export default function RegisterPage() {
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
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                <input id="first-name" className="flex h-10 w-full rounded-md border border-slate-200 px-3 py-2 text-sm" placeholder="John" />
            </div>
            <div className="space-y-2">
                <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                <input id="last-name" className="flex h-10 w-full rounded-md border border-slate-200 px-3 py-2 text-sm" placeholder="Doe" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="org-name" className="text-sm font-medium">Organization Name</label>
            <input
              id="org-name"
              placeholder="Acme Inc. / Global NGO"
              className="flex h-10 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="role" className="text-sm font-medium">Organization Type</label>
            <select
              id="role"
              className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm"
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
            />
          </div>
          
           <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <input
              id="password"
              type="password"
              className="flex h-10 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
            />
          </div>

          <Button className="w-full mt-4">Create Account</Button>
          
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
