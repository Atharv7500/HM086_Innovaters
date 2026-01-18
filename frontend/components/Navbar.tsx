import Link from "next/link"
import { Button } from "./ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-14 items-center pl-4 sm:pl-8 lg:pl-16">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              SDG Impact Hub
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/projects" className="transition-colors hover:text-slate-900/80 text-slate-900/60">
              Explore Projects
            </Link>
            <Link href="/impact" className="transition-colors hover:text-slate-900/80 text-slate-900/60">
              Impact Tracking
            </Link>
            <Link href="/about" className="transition-colors hover:text-slate-900/80 text-slate-900/60">
              About Goals
            </Link>
            <Link href="/dashboard" className="transition-colors hover:text-slate-900/80 text-slate-900/60">
              Dashboard
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end pr-4 sm:pr-8 lg:pr-16">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search could go here */}
          </div>
          <nav className="flex items-center space-x-2">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
