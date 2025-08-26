import { Button } from "@/components/ui/button";
import { Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pop-gradient-1 dots-pattern overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pop-yellow rounded-full comic-border animate-bounce hidden lg:block" />
      <div className="absolute top-32 right-20 w-16 h-16 bg-pop-purple rounded-full comic-border animate-wiggle hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-pop-blue rounded-full comic-border animate-bounce-in hidden lg:block" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full comic-border mb-6 animate-bounce-in">
              <Sparkles className="w-5 h-5 text-pop-pink" />
              <span className="font-handwritten text-lg font-bold">New Collection Drop!</span>
              <Zap className="w-5 h-5 text-pop-yellow" />
            </div>
            
            <h1 className="font-comic text-6xl md:text-8xl lg:text-9xl text-white mb-6 transform -rotate-2">
              RETRO
              <br />
              <span className="text-pop-yellow transform rotate-1 inline-block">VIBES</span>
              <br />
              <span className="text-pop-pink transform -rotate-1 inline-block">ONLY!</span>
            </h1>
            
            <p className="font-handwritten text-xl md:text-2xl text-white/90 mb-8 max-w-md mx-auto lg:mx-0">
              Discover amazing pop art fashion & accessories that make you stand out from the crowd!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-pop-secondary animate-wiggle">
                Shop Now! 🛍️
              </button>
              <button className="btn-pop-accent">
                View Collection ✨
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-3xl comic-border p-8 animate-bounce-in">
                <img
                  src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&h=600&fit=crop"
                  alt="Pop Art Fashion Model"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-pop-pink rounded-full comic-border w-16 h-16 flex items-center justify-center animate-wiggle">
                  <span className="font-comic text-white text-2xl">⚡</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-pop-yellow rounded-full comic-border w-20 h-20 flex items-center justify-center">
                  <span className="font-comic text-black text-2xl">🎨</span>
                </div>
              </div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute inset-0 dots-pattern-orange opacity-30 rounded-3xl" />
          </div>
        </div>
      </div>

      {/* SVG Filter for hand-drawn effect */}
      <svg width="0" height="0">
        <defs>
          <filter id="roughPaper">
            <feTurbulence baseFrequency="0.04" numOctaves="5" result="noise" seed="2" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
          </filter>
        </defs>
      </svg>
    </section>
  );
};

export default Hero;