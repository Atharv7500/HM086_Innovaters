export default function About() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-4">About the Goals</h1>
      <p className="text-slate-500 mb-6">
        The Sustainable Development Goals (SDGs) are a collection of 17 interlinked global goals designed to be a "blueprint to achieve a better and more sustainable future for all".
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
            "No Poverty", "Zero Hunger", "Good Health and Well-being", "Quality Education", "Gender Equality",
            "Clean Water and Sanitation", "Affordable and Clean Energy", "Decent Work and Economic Growth",
            "Industry, Innovation and Infrastructure", "Reduced Inequalities", "Sustainable Cities and Communities",
            "Responsible Consumption and Production", "Climate Action", "Life Below Water", "Life on Land",
            "Peace, Justice and Strong Institutions", "Partnerships for the Goals"
        ].map((goal, index) => (
            <div key={index} className="p-4 border rounded-lg bg-white shadow-sm">
                <span className="text-blue-600 font-bold block mb-2">Goal {index + 1}</span>
                <h3 className="font-medium">{goal}</h3>
            </div>
        ))}
      </div>
    </div>
  )
}
