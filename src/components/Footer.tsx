import { Heart, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 dots-pattern">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-pop-gradient-1 rounded-full comic-border-white flex items-center justify-center animate-wiggle">
                <span className="text-white font-comic text-xl">P</span>
              </div>
              <h3 className="font-comic text-3xl">
                POP<span className="text-pop-pink">SHOP</span>
              </h3>
            </div>
            
            <p className="font-handwritten text-lg text-gray-300 mb-6 max-w-md">
              Your one-stop destination for retro pop art fashion and accessories. 
              Express yourself with our bold, colorful, and totally awesome collection!
            </p>
            
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, index) => (
                <button
                  key={index}
                  className="w-12 h-12 bg-white/10 rounded-full comic-border-white flex items-center justify-center hover:bg-pop-orange hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-comic text-xl text-pop-orange mb-6">QUICK LINKS</h4>
            <ul className="space-y-3 font-handwritten">
              {["About Us", "Collections", "Size Guide", "Shipping Info", "Returns"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-pop-pink transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-comic text-xl text-pop-pink mb-6">HELP & SUPPORT</h4>
            <ul className="space-y-3 font-handwritten">
              {["Contact Us", "FAQ", "Track Order", "Customer Reviews", "Report Issue"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-pop-yellow transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="font-handwritten text-gray-300">Made with</span>
              <Heart className="w-5 h-5 text-pop-red animate-pulse" />
              <span className="font-handwritten text-gray-300">for pop art lovers</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <span>&copy; 2024 PopShop. All rights reserved.</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-pop-orange transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-pop-orange transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-pop-orange transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;