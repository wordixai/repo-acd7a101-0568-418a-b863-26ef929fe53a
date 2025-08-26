import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { motion, AnimatePresence } from "framer-motion";

const CartSidebar = () => {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore();

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={toggleCart}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 comic-border shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b-4 border-black">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pop-gradient-1 rounded-full comic-border flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="font-comic text-2xl text-foreground">
                    Your Cart
                  </h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleCart}
                  className="hover:bg-pop-pink/20 rounded-full"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gray-100 rounded-full comic-border mx-auto mb-4 flex items-center justify-center">
                      <ShoppingBag className="w-10 h-10 text-gray-400" />
                    </div>
                    <h3 className="font-comic text-xl text-gray-600 mb-2">
                      Cart is Empty!
                    </h3>
                    <p className="font-handwritten text-gray-500">
                      Add some awesome items to get started
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white rounded-2xl comic-border p-4"
                      >
                        <div className="flex gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-xl comic-border"
                          />
                          
                          <div className="flex-1">
                            <h4 className="font-handwritten font-bold text-lg text-foreground mb-1">
                              {item.name}
                            </h4>
                            <p className="font-comic text-pop-orange">
                              {formatPrice(item.price)}
                            </p>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-3 mt-2">
                              <Button
                                size="icon"
                                variant="outline"
                                className="w-8 h-8 rounded-full comic-border"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              
                              <span className="font-comic text-lg w-8 text-center">
                                {item.quantity}
                              </span>
                              
                              <Button
                                size="icon"
                                variant="outline"
                                className="w-8 h-8 rounded-full comic-border"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-end justify-between">
                            <Button
                              size="icon"
                              variant="ghost"
                              className="w-8 h-8 hover:bg-pop-red/20 text-pop-red"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                            
                            <p className="font-comic text-lg text-foreground">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t-4 border-black p-6 bg-gray-50">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-comic text-xl text-foreground">Total:</span>
                    <span className="font-comic text-2xl text-pop-orange">
                      {formatPrice(getTotalPrice())}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full btn-pop text-lg py-3">
                      Checkout 🛒
                    </Button>
                    
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 font-handwritten comic-border"
                        onClick={toggleCart}
                      >
                        Continue Shopping
                      </Button>
                      
                      <Button
                        variant="outline"
                        className="font-handwritten comic-border text-pop-red hover:bg-pop-red/10"
                        onClick={clearCart}
                      >
                        Clear Cart
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;