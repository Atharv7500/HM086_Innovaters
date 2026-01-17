import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
// import { ArrowLeft, CheckCircle2 } from "lucide-react";

// Mock icons
const ArrowLeft = (p:any) => <span {...p}>&larr;</span>
const CheckCircle2 = (p:any) => <span {...p}>✓</span>

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Mock data simulation based on ID
  const project = {
    id: id,
    title: `Project #${id}: Sustainable Initiative`,
    org: "Impact Organization",
    sdg: "Goal 6: Clean Water and Sanitation",
    description: "This project aims to provide clean and accessible water to rural communities through innovative filtration systems and community-led management.",
    funding: "$50,000 / $75,000",
    status: "In Progress",
    partners: ["GreenEarth NGO", "TechSolutions Inc."]
  };

  return (
    <div className="container py-10">
      <div className="mb-6">
        <Link href="/projects" className="text-sm text-slate-500 hover:text-slate-900 flex items-center">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Projects
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">{project.title}</h1>
                <p className="text-slate-500 text-lg">Lead by {project.org}</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>About the Project</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                        {project.description}
                    </p>
                    <div className="mt-6">
                        <h3 className="font-semibold mb-2">Key Objectives</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start text-sm text-slate-600">
                                <CheckCircle2 className="mr-2 h-4 w-4 text-green-500 mt-0.5" /> Install 50 water filtration units
                            </li>
                            <li className="flex items-start text-sm text-slate-600">
                                <CheckCircle2 className="mr-2 h-4 w-4 text-green-500 mt-0.5" /> Train 200 community members
                            </li>
                            <li className="flex items-start text-sm text-slate-600">
                                <CheckCircle2 className="mr-2 h-4 w-4 text-green-500 mt-0.5" /> Establish maintenance fund
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Impact Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 rounded-lg text-center">
                            <div className="text-2xl font-bold text-blue-600">2,500+</div>
                            <div className="text-xs text-slate-500 uppercase font-medium mt-1">Beneficiaries</div>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg text-center">
                            <div className="text-2xl font-bold text-green-600">95%</div>
                            <div className="text-xs text-slate-500 uppercase font-medium mt-1">Completion Rate</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <span className="text-sm font-medium text-slate-500 block">Primary SDG</span>
                        <span className="text-sm font-semibold">{project.sdg}</span>
                    </div>
                    <div>
                        <span className="text-sm font-medium text-slate-500 block">Status</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {project.status}
                        </span>
                    </div>
                     <div>
                        <span className="text-sm font-medium text-slate-500 block">Funding</span>
                        <div className="w-full bg-slate-200 rounded-full h-2.5 mt-1 mb-1">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '66%' }}></div>
                        </div>
                        <span className="text-xs text-slate-500">{project.funding}</span>
                    </div>
                     <div>
                        <span className="text-sm font-medium text-slate-500 block">Partners</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                            {project.partners.map(p => (
                                <span key={p} className="text-xs bg-slate-100 px-2 py-1 rounded">{p}</span>
                            ))}
                        </div>
                    </div>
                    
                    <Button className="w-full mt-4">Request Partnership</Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  )
}
