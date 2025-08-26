import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Pop Art Bomber Jacket",
    price: "$89.99",
    originalPrice: "$129.99",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    rating: 4.9,
    isNew: true,
    discount: "30% OFF"
  },
  {
    id: 2,
    name: "Retro Sunglasses",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    rating: 4.7,
    isHot: true
  },
  {
    id: 3,
    name: "Comic Style Sneakers",
    price: "$79.99",
    originalPrice: "$99.99",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    rating: 4.8,
    discount: "20% OFF"
  },
  {
    id: 4,
    name: "Pop Art Tote Bag",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4.6,
    isNew: true
  },
  {
    id: 5,
    name: "Vintage Band Tee",
    price: "$29.99",
    originalPrice: "$39.99",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.5,
    discount: "25% OFF"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-white dots-pattern-blue">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-pop-gradient-2 rounded-full comic-border px-6 py-3 mb-6 animate-wiggle">
            <span className="font-comic text-white text-xl">⭐ FEATURED PRODUCTS ⭐</span>
          </div>
          
          <h2 className="font-comic text-5xl md:text-6xl text-foreground mb-4 transform -rotate-1">
            TRENDING
            <span className="text-pop-orange"> NOW!</span>
          </h2>
          
          <p className="font-handwritten text-xl text-muted-foreground max-w-2xl mx-auto">
            Check out our most popular items that everyone's talking about!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="product-frame group animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-pop-green text-white font-comic comic-border-white">
                      NEW!
                    </Badge>
                  )}
                  {product.isHot && (
                    <Badge className="bg-pop-red text-white font-comic comic-border-white animate-wiggle">
                      🔥 HOT
                    </Badge>
                  )}
                  {product.discount && (
                    <Badge className="bg-pop-yellow text-black font-comic comic-border">
                      {product.discount}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="secondary" className="rounded-full comic-border-white hover:scale-110">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                {/* Quick Add Button */}
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" className="btn-pop text-sm animate-bounce-in">
                    Quick Add
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-pop-yellow text-pop-yellow"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground font-handwritten">
                    ({product.rating})
                  </span>
                </div>

                <h3 className="font-handwritten font-bold text-lg text-foreground group-hover:text-pop-orange transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2">
                  <span className="font-comic text-xl text-pop-orange">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="font-handwritten text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                <Button className="w-full btn-pop group-hover:animate-wiggle">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-pop-accent text-xl px-8 py-4 animate-wiggle">
            View All Products 🎉
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;