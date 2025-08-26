import { Palette, Shirt, Glasses, ShoppingBag, Watch } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Clothing",
    icon: Shirt,
    count: "120+ items",
    color: "pop-orange",
    rotation: "rotate-2"
  },
  {
    id: 2,
    name: "Accessories",
    icon: Glasses,
    count: "85+ items",
    color: "pop-pink",
    rotation: "-rotate-1"
  },
  {
    id: 3,
    name: "Bags",
    icon: ShoppingBag,
    count: "60+ items",
    color: "pop-yellow",
    rotation: "rotate-1"
  },
  {
    id: 4,
    name: "Art Prints",
    icon: Palette,
    count: "200+ items",
    color: "pop-blue",
    rotation: "-rotate-2"
  },
  {
    id: 5,
    name: "Watches",
    icon: Watch,
    count: "45+ items",
    color: "pop-purple",
    rotation: "rotate-3"
  }
];

const Categories = () => {
  return (
    <section className="py-20 pop-gradient-3 dots-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-comic text-5xl md:text-6xl text-white mb-4 transform rotate-1">
            SHOP BY
            <span className="text-black"> CATEGORY</span>
          </h2>
          
          <p className="font-handwritten text-xl text-white/90 max-w-2xl mx-auto">
            Find exactly what you're looking for in our awesome categories!
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <div
                key={category.id}
                className={`group cursor-pointer animate-bounce-in ${category.rotation}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-3xl comic-border p-6 text-center hover:scale-105 transform transition-all duration-300 hover:rotate-0">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-${category.color} rounded-full comic-border flex items-center justify-center group-hover:animate-wiggle`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-comic text-xl text-foreground mb-2">
                    {category.name}
                  </h3>
                  
                  <p className="font-handwritten text-muted-foreground">
                    {category.count}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-16 space-x-8">
          <div className="w-12 h-12 bg-white rounded-full comic-border flex items-center justify-center animate-bounce">
            <span className="font-comic text-2xl">🎨</span>
          </div>
          <div className="w-16 h-16 bg-white rounded-full comic-border flex items-center justify-center animate-wiggle">
            <span className="font-comic text-3xl">✨</span>
          </div>
          <div className="w-12 h-12 bg-white rounded-full comic-border flex items-center justify-center animate-bounce">
            <span className="font-comic text-2xl">🌟</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;