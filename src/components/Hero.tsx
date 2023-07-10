import Image from 'next/image'
import timelineLogo from '../assets/timeline-logo.svg'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={timelineLogo} alt="Timeline" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Your Story
        </h1>
        <p className="text-lg leading-relaxed">
          Highlight important moments in your life and share them (if you want)
          with the world!
        </p>
      </div>

      <Link
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
        href="/memories/new"
      >
        Create memory
      </Link>
    </div>
  )
}
