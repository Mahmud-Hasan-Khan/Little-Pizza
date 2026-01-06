"use client";
import Link from "next/link";
import useCartStore from "../../../store/cart";

const menuItems = [
  {
    name: "Classic Pepperoni",
    description: "A classic favorite with a generous serving of pepperoni.",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Margherita",
    description: "A simple yet delicious pizza with fresh mozzarella and basil.",
    price: 10.99,
    image:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "BBQ Chicken",
    description: "A tangy and savory pizza with BBQ sauce and grilled chicken.",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Veggie Supreme",
    description: "A loaded pizza with all your favorite veggies.",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

export default function Menu() {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Our Menu</h2>
          <p className="mt-4 text-lg text-gray-600">
            Made with the freshest ingredients and dough made daily.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold">${item.price}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition duration-300"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
