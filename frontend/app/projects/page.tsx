import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Search, Filter } from "lucide-react";
const Search = (p:any) => <span {...p}>Search</span>
const Filter = (p:any) => <span {...p}>Filter</span>

const MOCK_PROJECTS = [
    { id: 1, title: "Clean Water for Rural Areas", org: "WaterLife NGO", sdg: "Goal 6", match: 95 },
    { id: 2, title: "Urban Vertical Farming", org: "AgriTech Startups", sdg: "Goal 2", match: 80 },
    { id: 3, title: "Digital Literacy Program", org: "EdFuture Foundation", sdg: "Goal 4", match: 65 },
];

export default function Projects() {
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MOCK_PROJECTS.map((project) => (
            <Card key={project.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs text-blue-600 font-medium mb-1">{project.sdg}</p>
                            <CardTitle className="text-xl">{project.title}</CardTitle>
                        </div>
                        <div className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                            {project.match}% Match
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-slate-500 mb-4">By {project.org}</p>
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
