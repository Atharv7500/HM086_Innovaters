import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { CheckCircle2, Circle } from "lucide-react";
const CheckCircle2 = (p:any) => <span {...p}>V</span>
const Circle = (p:any) => <span {...p}>O</span>

export default function Impact() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Impact Tracking</h1>
        <p className="text-slate-500">Monitor real-time progress towards SDG milestones.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
            <CardHeader>
                <CardTitle>Clean Water Initiative</CardTitle>
                <p className="text-sm text-slate-500">Goal 6: Clean Water and Sanitation</p>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between mb-2 text-sm font-medium">
                            <span>Overall Progress</span>
                            <span>65%</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[65%]"></div>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <div>
                                <p className="font-medium">Site Survey Completed</p>
                                <p className="text-xs text-slate-500">Verified by GreenEarth NGO</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <div>
                                <p className="font-medium">Equipment Procurement</p>
                                <p className="text-xs text-slate-500">Procured from AquaSafe Ltd.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Circle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                            <div>
                                <p className="font-medium">Installation Phase</p>
                                <p className="text-xs text-slate-500">Currently in progress (30% done)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Impact Metrics</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg">
                        <p className="text-sm text-slate-500 mb-1">Lives Impacted</p>
                        <p className="text-2xl font-bold text-slate-900">1,240</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                        <p className="text-sm text-slate-500 mb-1">Water Saved (L)</p>
                        <p className="text-2xl font-bold text-slate-900">50,000</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                        <p className="text-sm text-slate-500 mb-1">Jobs Created</p>
                        <p className="text-2xl font-bold text-slate-900">15</p>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
