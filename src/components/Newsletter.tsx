import { Button } from "@/components/ui/button";
import { Mail, Gift } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-white dots-pattern-orange">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-pop-gradient-2 rounded-3xl comic-border p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full animate-bounce" />
            <div className="absolute top-8 right-8 w-6 h-6 bg-pop-yellow rounded-full animate-wiggle" />
            <div className="absolute bottom-4 left-8 w-10 h-10 bg-white rounded-full animate-bounce" />
            <div className="absolute bottom-8 right-4 w-8 h-8 bg-pop-orange rounded-full animate-wiggle" />

            <div className="relative z-10">
              {/* Header */}
              <div className="inline-flex items-center gap-2 bg-white/90 rounded-full comic-border px-4 py-2 mb-6">
                <Gift className="w-5 h-5 text-pop-orange" />
                <span className="font-comic text-lg text-foreground">FREE STUFF!</span>
                <Gift className="w-5 h-5 text-pop-orange" />
              </div>

              <h2 className="font-comic text-4xl md:text-6xl text-white mb-4 transform -rotate-1">
                JOIN THE
                <span className="text-pop-yellow"> POP PARTY!</span>
              </h2>

              <p className="font-handwritten text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get exclusive deals, early access to new drops, and awesome freebies delivered straight to your inbox!
              </p>

              {/* Newsletter Form */}
              <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto mb-6">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="w-full px-4 py-4 pl-12 font-handwritten text-lg rounded-2xl comic-border bg-white focus:outline-none focus:ring-4 focus:ring-pop-yellow/50"
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                </div>
                <Button className="btn-pop-accent px-8 py-4 text-lg whitespace-nowrap">
                  Subscribe! 🎉
                </Button>
              </div>

              <p className="font-handwritten text-sm text-white/80">
                No spam, just pure pop art awesomeness! Unsubscribe anytime.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto">
                <div className="bg-white/20 rounded-2xl comic-border-white p-4">
                  <div className="font-comic text-2xl text-white">50K+</div>
                  <div className="font-handwritten text-white/80">Subscribers</div>
                </div>
                <div className="bg-white/20 rounded-2xl comic-border-white p-4">
                  <div className="font-comic text-2xl text-white">20%</div>
                  <div className="font-handwritten text-white/80">Avg. Savings</div>
                </div>
                <div className="bg-white/20 rounded-2xl comic-border-white p-4">
                  <div className="font-comic text-2xl text-white">Weekly</div>
                  <div className="font-handwritten text-white/80">New Drops</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;