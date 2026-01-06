"use client";
import Link from "next/link";
import useCartStore from "../../store/cart";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

export default function CartPage() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCartStore();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <div className="py-20 px-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Your Cart</h2>
          <p className="mt-4 text-lg text-gray-600">
            Review your order and proceed to checkout.
          </p>
        </div>
        <div className="mt-12">
          {cart.length === 0 ? (
            <div className="text-center bg-white p-12 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Your cart is empty.</h3>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link
                href="/menu"
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-md p-6"
                  >
                    <div className="flex items-center mb-4 md:mb-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="ml-4">
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <p className="text-gray-600 font-semibold">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
                        <button
                          className="text-gray-600 hover:text-primary"
                          onClick={() => decrementQuantity(item)}
                        >
                          <FaMinus />
                        </button>
                        <span className="mx-4 font-bold text-lg">
                          {item.quantity}
                        </span>
                        <button
                          className="text-gray-600 hover:text-primary"
                          onClick={() => incrementQuantity(item)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                      <button
                        className="ml-4 text-red-500 hover:text-red-700"
                        onClick={() => removeFromCart(item)}
                      >
                        <FaTrash size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 h-fit">
                <h3 className="text-2xl font-bold border-b pb-4">
                  Order Summary
                </h3>
                <div className="flex justify-between mt-4">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="font-semibold">${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-gray-600">Tax (8%)</p>
                  <p className="font-semibold">${tax.toFixed(2)}</p>
                </div>
                <div className="border-t mt-4 pt-4 flex justify-between">
                  <p className="font-bold text-lg">Total</p>
                  <p className="font-bold text-lg">${total.toFixed(2)}</p>
                </div>
                <button className="bg-primary text-white w-full py-3 mt-6 rounded-full font-semibold hover:bg-primary/90 transition-all text-lg">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
