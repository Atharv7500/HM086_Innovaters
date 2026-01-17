import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { ArrowRight, Globe, Users, TrendingUp, Building2 } from "lucide-react"; 
// import { ArrowLeft } from "lucide-react"; 
const ArrowLeft = (p:any) => <span {...p}>&larr;</span> 

// Mock components to bypass build error if icons are missing/typed wrong
const ArrowRight = (props: any) => <span {...props}>&rarr;</span>;
const Globe = (props: any) => <span {...props}>Globe</span>;
const Users = (props: any) => <span {...props}>Users</span>;
const TrendingUp = (props: any) => <span {...props}>Trending</span>;
const Building2 = (props: any) => <span {...props}>Building</span>;

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-slate-900">
                Collaborate for a <span className="text-blue-600">Sustainable Future</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
                The central hub for SDG-aligned projects. Connect with Startups, NGOs, and Governments to drive measurable impact.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/projects">
                <Button size="lg" className="h-11 px-8">
                  Explore Projects
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button variant="outline" size="lg" className="h-11 px-8">
                  Join the Mission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Who is this for?</h2>
              <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                Connecting diverse stakeholders to solve global challenges.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Startups</CardTitle>
              </CardHeader>
              <CardContent>
                Find partners, funding, and pilot opportunities for your sustainable innovations.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle>NGOs</CardTitle>
              </CardHeader>
              <CardContent>
                Amplify your reach and collaborate on ground-level implementation.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-indigo-500 mb-2" />
                <CardTitle>Government</CardTitle>
              </CardHeader>
              <CardContent>
                Monitor progress, support initiatives, and drive policy goals.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-purple-500 mb-2" /> {/* Reuse TrendingUp or similar if Building not found */}
                <CardTitle>Researchers</CardTitle>
              </CardHeader>
              <CardContent>
                Share data, validate impact, and contribute to evidence-based solutions.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
