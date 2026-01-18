"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { use } from "react";

export default function CollaborationRequest({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter()

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-3.5rem)] py-10">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Request Partnership</CardTitle>
          <p className="text-sm text-slate-500">Project #{id}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <textarea 
                className="w-full h-32 px-3 py-2 border rounded-md" 
                placeholder="Why do you want to collaborate? What specific resources or expertise can you offer?" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Offered Resources</label>
            <input 
                className="w-full h-10 px-3 py-2 border rounded-md" 
                placeholder="e.g. Funding, Technical Mentorship, Local Office Space" 
            />
          </div>
        </CardContent>
        <CardFooter className="justify-end space-x-2">
            <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
            <Button onClick={() => router.push('/dashboard')}>Send Request</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
