import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-50 px-12 py-12">
        <div className="flex justify-between items-center">
          {/* Left side */}
          <div className="flex items-center space-x-12">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-base font-medium">QuantumViking</span>
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/about" 
              className="text-xs text-gray-600 hover:text-black"
            >
              关于我们
            </Link>
            <Link 
              href="/contact" 
              className="text-xs text-gray-600 hover:text-black"
            >
              联系我们
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative min-h-screen">
        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="space-y-2 text-center">
            <div className="text-base tracking-widest text-emerald-700 mb-8 font-medium">
              量子维京
            </div>
            <h1 className="text-6xl font-bold tracking-wider">
              Quantum Viking
            </h1>
            <h2 className="text-6xl font-bold tracking-wider text-white/70 backdrop-blur-sm">
              Digital Architect of Tomorrow
            </h2>
          </div>
        </div>
      </main>
    </div>
  )
} 