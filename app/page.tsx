import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Medical Background"
          fill
          className="object-cover animate-particle-form"
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
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-base font-medium">QuantumViking</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/rd" className="text-xs text-gray-600 hover:text-black">
                Cutting-edge R&D
              </Link>
              <Link href="/ai" className="text-xs text-gray-600 hover:text-black">
                Adaptive AI
              </Link>
              <span className="text-xs text-gray-400">quantumviking.com</span>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Link 
              href="https://mp.weixin.qq.com/s/BqKwo38p-xDop8vUrJBlKw" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-black text-white px-4 py-1.5 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <span className="text-xs">GPT4o深度解析</span>
              <span className="text-sm transition-transform duration-300 group-hover:rotate-45">+</span>
            </Link>
            <Link 
              href="https://mp.weixin.qq.com/s/sDu5Ed_oAwhYTsNGitIEUQ" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full text-xs transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:scale-105 active:scale-95"
            >
              ChatGPT原理剖析
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative min-h-screen">
        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center z-10" style={{ marginTop: '-25vh' }}>
          <div className="space-y-2 text-center">
            <div className="text-base tracking-widest text-emerald-700 mb-8 animate-particle-form font-medium">
              量子维京
            </div>
            <h1 className="text-6xl font-bold tracking-wider animate-float-up delay-200">
              Quantum Viking
            </h1>
            <h2 className="text-6xl font-bold tracking-wider animate-float-up delay-400 text-white/70 backdrop-blur-sm">
              Digital Architect of Tomorrow
            </h2>
          </div>
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between px-12 py-12">
          {/* Top space for nav */}
          <div className="h-20" />
          
          {/* Bottom content */}
          <div className="grid grid-cols-2 gap-8">
            {/* Left side - Engineering text */}
            <div className="space-y-3">
              <p className="text-xs text-gray-500 font-medium animate-float-up">Precision Engineering</p>
              <div className="space-y-4">
                <p className="text-xl font-semibold leading-tight animate-float-up delay-200">
                  Tracking AI frontiers, demystifying tech complexities,
                </p>
                <p className="text-xl font-semibold leading-tight animate-float-up delay-400">
                  and chronicling humanity's Singularity journey
                </p>
                <p className="text-xl font-semibold leading-tight animate-float-up delay-600">
                  through dedicated AI insights
                </p>
              </div>
            </div>

            {/* Right side - Social Icons */}
            <div className="flex justify-end items-end space-x-12">
              <Link 
                href="https://tiktok.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-12 h-12 transition-all duration-500 ease-out hover:scale-[2.0] hover:-translate-y-4 hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.7)] hover:bg-white/20 rounded-full p-2 animate-float-up delay-200 block cursor-pointer active:scale-75 active:rotate-12 active:drop-shadow-[0_0_50px_rgba(255,255,255,0.9)] active:translate-y-2 z-30"
              >
                <Image
                  src="/tiktok.png"
                  alt="TikTok"
                  fill
                  className="object-contain transition-all duration-500 hover:brightness-150"
                  priority
                />
              </Link>
              <div className="relative group">
                <Link 
                  href="https://mp.weixin.qq.com/s/Hh8v3JYbVYKQMwlxsJSvvA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-12 h-12 transition-all duration-500 ease-out hover:scale-[2.0] hover:-translate-y-4 hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.7)] hover:bg-white/20 rounded-full p-2 animate-float-up delay-400 block cursor-pointer active:scale-75 active:rotate-12 active:drop-shadow-[0_0_50px_rgba(255,255,255,0.9)] active:translate-y-2 z-30"
                >
                  <Image
                    src="/wechat.png"
                    alt="WeChat"
                    fill
                    className="object-contain transition-all duration-500 hover:brightness-150"
                    priority
                  />
                </Link>
                {/* WeChat Articles Popup */}
                <div className="absolute bottom-full right-0 mb-4 w-80 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto z-50">
                  <div className="p-4 space-y-3">
                    <Link 
                      href="https://mp.weixin.qq.com/s/Hh8v3JYbVYKQMwlxsJSvvA" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      最新文章
                    </Link>
                    <Link 
                      href="https://mp.weixin.qq.com/s/BqKwo38p-xDop8vUrJBlKw" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      GPT4o真的是最强AI画师吗？深度拆解模型能力边界
                    </Link>
                    <Link 
                      href="https://mp.weixin.qq.com/s/sDu5Ed_oAwhYTsNGitIEUQ" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      自回归模型与注意力机制：ChatGPT的「大脑」如何运作？
                    </Link>
                  </div>
                  {/* Arrow */}
                  <div className="absolute bottom-0 right-4 transform translate-y-full">
                    <div className="w-4 h-4 bg-white transform rotate-45 -translate-y-2"></div>
                  </div>
                </div>
              </div>
              <Link 
                href="https://www.xiaohongshu.com/user/profile/5c638e5f00000000110114bd" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-12 h-12 transition-all duration-500 ease-out hover:scale-[2.0] hover:-translate-y-4 hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.7)] hover:bg-white/20 rounded-full p-2 animate-float-up delay-600 block cursor-pointer active:scale-75 active:rotate-12 active:drop-shadow-[0_0_50px_rgba(255,255,255,0.9)] active:translate-y-2 z-30"
              >
                <Image
                  src="/xiaohongshu.png"
                  alt="Xiaohongshu"
                  fill
                  className="object-contain transition-all duration-500 hover:brightness-150"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Center Image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 mb-8">
          <div className="relative w-48 h-48">
            <Image
              src="/bottom-image.png"
              alt="Bottom Image"
              fill
              className="object-contain animate-particle-form"
            />
          </div>
        </div>
      </main>
    </div>
  )
} 