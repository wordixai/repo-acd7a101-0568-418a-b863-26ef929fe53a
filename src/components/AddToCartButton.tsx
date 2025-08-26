import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { motion } from "framer-motion";

interface AddToCartButtonProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
  className?: string;
  size?: "sm" | "default" | "lg";
  variant?: "default" | "pop" | "secondary";
}

const AddToCartButton = ({ product, className, size = "default", variant = "pop" }: AddToCartButtonProps) => {
  const [isAdded, setIsAdded] = useState(false);
  const { addItem, toggleCart } = useCartStore();

  const handleAddToCart = () => {
    // Convert price string to number
    const price = parseFloat(product.price.replace('$', ''));
    
    addItem({
      id: product.id,
      name: product.name,
      price: price,
      image: product.image
    });

    setIsAdded(true);
    
    // Reset the button state after animation
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);

    // Optionally open cart sidebar
    setTimeout(() => {
      toggleCart();
    }, 500);
  };

  const getButtonClass = () => {
    const baseClass = "relative overflow-hidden transition-all duration-300";
    const sizeClass = size === "sm" ? "px-4 py-2 text-sm" : size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3";
    const variantClass = variant === "pop" ? "btn-pop" : variant === "secondary" ? "btn-pop-secondary" : "btn-pop-accent";
    
    return `${baseClass} ${sizeClass} ${variantClass} ${className || ""}`;
  };

  return (
    <Button
      className={getButtonClass()}
      onClick={handleAddToCart}
      disabled={isAdded}
    >
      <motion.div
        className="flex items-center gap-2"
        animate={{
          scale: isAdded ? [1, 1.2, 1] : 1,
          rotate: isAdded ? [0, 10, -10, 0] : 0
        }}
        transition={{ duration: 0.5 }}
      >
        {isAdded ? (
          <>
            <Check className="w-4 h-4" />
            Added!
          </>
        ) : (
          <>
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </>
        )}
      </motion.div>
      
      {/* Success animation overlay */}
      {isAdded && (
        <motion.div
          className="absolute inset-0 bg-pop-green"
          initial={{ scale: 0, borderRadius: "50%" }}
          animate={{ scale: 2, borderRadius: "0%" }}
          transition={{ duration: 0.6 }}
        />
      )}
    </Button>
  );
};

export default AddToCartButton;