"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function CreateProject() {
  const router = useRouter()

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-3.5rem)] py-10">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Create a New Project</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Project Title</label>
            <input className="w-full h-10 px-3 py-2 border rounded-md" placeholder="e.g. Sustainable Water Initiative" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <textarea className="w-full h-24 px-3 py-2 border rounded-md" placeholder="Describe the impact..." />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Target SDG</label>
            <select className="w-full h-10 px-3 py-2 border rounded-md bg-white">
                <option>Goal 1: No Poverty</option>
                <option>Goal 6: Clean Water and Sanitation</option>
                <option>Goal 13: Climate Action</option>
            </select>
          </div>
        </CardContent>
        <CardFooter className="justify-end space-x-2">
            <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
            <Button onClick={() => router.push('/dashboard')}>Create Project</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
