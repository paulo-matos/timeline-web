import { User } from 'lucide-react'
import Image from 'next/image'

import timelineLogo from '../assets/timeline-logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16 ">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-1 top-0 w-2 bg-stripes" />

        {/* Sign In */}
        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>

          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline ">Create your account</span> and save
            your memories!
          </p>
        </a>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={timelineLogo} alt="Timeline" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Your Story
            </h1>
            <p className="text-lg leading-relaxed">
              Highlight important moments in your life and share them (if you
              want) with the world!
            </p>
          </div>

          <a
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
            href="#"
          >
            Create memory
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          Done with 🧡 by{' '}
          <a
            className="underline hover:text-gray-100"
            href="https://www.linkedin.com/in/dev-paulomatos/?locale=en_US"
            target="_blank"
            rel="noreferrer"
          >
            Paulo Matos
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[330px] text-center leading-relaxed">
            You haven&apos;t created any events yet, let&apos; start{' '}
            <a href="" className="underline hover:text-gray-50">
              creating now
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
