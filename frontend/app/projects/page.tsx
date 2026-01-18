"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import api from "@/lib/api";

// Helper components to replace missing icons for now
const Search = (p:any) => <span {...p}>Search</span>
const Filter = (p:any) => <span {...p}>Filter</span>

interface Project {
    id: number;
    title: string;
    description: string;
    sdg_goals: string[];
    owner: number;
    created_at: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
        try {
            const response = await api.get('projects/');
            setProjects(response.data);
        } catch (err) {
            console.error("Failed to fetch projects", err);
            setError("Could not load projects. Please try again later.");
        } finally {
            setLoading(false);
        }
    };
    fetchProjects();
  }, []);

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Explore Projects</h1>
          <p className="text-slate-500">Discover and partner with SDG-aligned initiatives.</p>
        </div>
        <div className="flex space-x-2 w-full md:w-auto">
             <div className="relative w-full md:w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                <input
                  type="search"
                  placeholder="Search projects..."
                  className="w-full rounded-md border border-slate-200 pl-9 pr-4 py-2 text-sm outline-none focus:ring-1 focus:ring-slate-950"
                />
             </div>
             <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Filter
             </Button>
        </div>
      </div>

      {loading && <p className="text-center py-10">Loading projects...</p>}
      {error && <p className="text-center py-10 text-red-500">{error}</p>}

      {!loading && !error && projects.length === 0 && (
          <p className="text-center py-10 text-slate-500">No projects found. Be the first to create one!</p>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            {project.sdg_goals && project.sdg_goals.length > 0 && (
                                <p className="text-xs text-blue-600 font-medium mb-1">{project.sdg_goals[0]}</p>
                            )}
                            <CardTitle className="text-xl line-clamp-1" title={project.title}>{project.title}</CardTitle>
                        </div>
                        {/* Match score is not yet calculated in backend, hiding for now or mocking */}
                        {/* <div className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full font-medium">95% Match</div> */}
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-3">{project.description}</p>
                    <Link href={`/projects/${project.id}`}>
                        <Button className="w-full" variant="outline">View Details</Button>
                    </Link>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
