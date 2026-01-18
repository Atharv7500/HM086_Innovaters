"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Removed Badge if not available
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import api from "@/lib/api";

interface Project {
    id: number;
    title: string;
    description: string;
    sdg_goals: string[];
    owner: number;
    timeline: string;
    required_partners: string;
    required_resources: string;
    created_at: string;
}

export default function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
        try {
            const response = await api.get(`projects/${id}/`);
            setProject(response.data);
        } catch (err) {
            console.error("Failed to fetch project", err);
            setError("Project not found or failed to load.");
        } finally {
            setLoading(false);
        }
    };
    fetchProject();
  }, [id]);

  if (loading) return <div className="container py-10 text-center">Loading project details...</div>;
  if (error || !project) return <div className="container py-10 text-center text-red-500">{error || "Project not found"}</div>;

  return (
    <div className="container py-10 max-w-4xl">
      <Button variant="ghost" onClick={() => router.back()} className="mb-6 pl-0 hover:bg-transparent hover:text-blue-600">
        &larr; Back to Projects
      </Button>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
            <div>
                {project.sdg_goals && project.sdg_goals.length > 0 && (
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                        {project.sdg_goals[0]}
                    </span>
                )}
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">{project.title}</h1>
                <p className="text-lg text-slate-500">
                    Project #{project.id} • Created on {new Date(project.created_at).toLocaleDateString()}
                </p>
            </div>

            <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-2">About the Project</h3>
                <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                    {project.description}
                </p>
            </div>
            
            {(project.required_partners || project.required_resources) && (
                <div className="grid sm:grid-cols-2 gap-4">
                     {project.required_partners && (
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-slate-500">Seeking Partners</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-medium">{project.required_partners}</p>
                            </CardContent>
                        </Card>
                     )}
                     {project.required_resources && (
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-slate-500">Resource Needs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-medium">{project.required_resources}</p>
                            </CardContent>
                        </Card>
                     )}
                </div>
            )}
        </div>

        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Collaboration Status</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Match Score</span>
                            <span className="font-semibold text-green-600">Calculated on Request</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Timeline</span>
                            <span className="font-medium">{project.timeline || "Not specified"}</span>
                        </div>
                        <div className="pt-4 border-t border-slate-100">
                             <div className="flex items-center space-x-3 mb-4">
                                <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
                                    {/* Owner Initial */}
                                    {/* Using Mock ID for now as username isn't in default response yet */}
                                    O
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Project Owner</p>
                                    <p className="text-xs text-slate-500">Connect to view profile</p>
                                </div>
                             </div>
                        </div>
                    </div>
                    
                    <Link href={`/projects/${project.id}/collaborate`}>
                        <Button className="w-full mt-4">Request Partnership</Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
