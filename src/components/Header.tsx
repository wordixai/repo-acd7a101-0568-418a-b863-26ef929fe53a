import { ShoppingCart, Heart, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cartStore";

const Header = () => {
  const { toggleCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-40 w-full bg-white comic-border-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-pop-gradient-1 rounded-full comic-border flex items-center justify-center animate-wiggle">
              <span className="text-white font-comic text-xl">P</span>
            </div>
            <h1 className="font-comic text-3xl text-foreground">
              POP<span className="text-pop-pink">SHOP</span>
            </h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for awesome stuff..."
                className="w-full px-4 py-3 pl-12 font-handwritten text-lg rounded-2xl comic-border bg-pop-yellow/20 focus:outline-none focus:ring-4 focus:ring-pop-orange/50"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-pop-pink/20 rounded-full">
              <Heart className="w-6 h-6" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:bg-pop-orange/20 rounded-full"
              onClick={toggleCart}
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-pop-red text-white comic-border-white text-xs animate-bounce">
                  {totalItems}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 pl-12 font-handwritten rounded-2xl comic-border bg-pop-yellow/20 focus:outline-none focus:ring-4 focus:ring-pop-orange/50"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;