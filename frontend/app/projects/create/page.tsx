"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useState } from "react"
import api from "@/lib/api"

export default function CreateProject() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
      title: "",
      description: "",
      sdg_goals: "Goal 1: No Poverty" // Default
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
      setLoading(true)
      setError("")
      try {
          // Send data to backend
          // Note: Backend likely expects sdg_goals as a list based on previous models.py
          await api.post('projects/', {
              title: formData.title,
              description: formData.description,
              sdg_goals: [formData.sdg_goals] 
          })
          router.push('/projects')
      } catch (err: any) {
          console.error(err)
          setError("Failed to create project. Ensure you are logged in.")
      } finally {
          setLoading(false)
      }
  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-3.5rem)] py-10">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Create a New Project</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && <div className="p-3 text-red-500 bg-red-50 rounded text-sm">{error}</div>}
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Project Title</label>
            <input 
                name="title"
                className="w-full h-10 px-3 py-2 border rounded-md" 
                placeholder="e.g. Sustainable Water Initiative" 
                value={formData.title}
                onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <textarea 
                name="description"
                className="w-full h-24 px-3 py-2 border rounded-md" 
                placeholder="Describe the impact..." 
                value={formData.description}
                onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Target SDG</label>
            <select 
                name="sdg_goals"
                className="w-full h-10 px-3 py-2 border rounded-md bg-white"
                value={formData.sdg_goals}
                onChange={handleChange}
            >
                <option>Goal 1: No Poverty</option>
                <option>Goal 2: Zero Hunger</option>
                <option>Goal 3: Good Health and Well-being</option>
                <option>Goal 4: Quality Education</option>
                <option>Goal 5: Gender Equality</option>
                <option>Goal 6: Clean Water and Sanitation</option>
                <option>Goal 7: Affordable and Clean Energy</option>
                <option>Goal 8: Decent Work and Economic Growth</option>
                <option>Goal 9: Industry, Innovation and Infrastructure</option>
                <option>Goal 10: Reduced Inequalities</option>
                <option>Goal 11: Sustainable Cities and Communities</option>
                <option>Goal 12: Responsible Consumption and Production</option>
                <option>Goal 13: Climate Action</option>
                <option>Goal 14: Life Below Water</option>
                <option>Goal 15: Life on Land</option>
                <option>Goal 16: Peace, Justice and Strong Institutions</option>
                <option>Goal 17: Partnerships for the Goals</option>
            </select>
          </div>
        </CardContent>
        <CardFooter className="justify-end space-x-2">
            <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
            <Button onClick={handleSubmit} disabled={loading}>
                {loading ? "Creating..." : "Create Project"}
            </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
