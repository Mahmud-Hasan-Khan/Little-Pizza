"use client";
import { useState } from "react";
import useCartStore from "../../store/cart";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart } = useCartStore();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd process the payment here.
    // For now, we'll just log the data.
    console.log("Form Submitted", formData);
    alert("Order placed successfully! (This is a demo)");
  };

  if (cart.length === 0) {
    return (
      <div className="py-20 px-4 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">
            Your cart is empty.
          </h3>
          <p className="text-gray-600 mb-8">
            You can't proceed to checkout without any items.
          </p>
          <Link
            href="/menu"
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all"
          >
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Checkout</h2>
          <p className="mt-4 text-lg text-gray-600">
            Please fill out your details to complete the order.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Shipping Information</h3>
              {/* Form fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mt-8 mb-6">Payment Details</h3>
              <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 mb-6">
                <p>This is a demo. Please do not enter real payment details.</p>
              </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
                    <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} className="w-full p-3 border rounded-md" required />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Expiry Date (MM/YY)</label>
                    <input type="text" name="expiry" value={formData.expiry} onChange={handleChange} className="w-full p-3 border rounded-md" required />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">CVC</label>
                    <input type="text" name="cvc" value={formData.cvc} onChange={handleChange} className="w-full p-3 border rounded-md" required />
                </div>
               </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 h-fit">
              <h3 className="text-2xl font-bold border-b pb-4">
                Your Order
              </h3>
              <div className="space-y-4 mt-4">
                {cart.map(item => (
                  <div key={item.name} className="flex justify-between">
                    <span className="text-gray-600">{item.name} x {item.quantity}</span>
                    <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t mt-4 pt-4">
                 <div className="flex justify-between">
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
              </div>
               <button
                type="submit"
                className="bg-primary text-white w-full py-3 mt-6 rounded-full font-semibold hover:bg-primary/90 transition-all text-lg"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
