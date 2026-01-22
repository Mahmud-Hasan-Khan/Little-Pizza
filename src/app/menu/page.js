"use client";
import React from "react";
import useCartStore from "../../store/cart";

const menuItems = [
  {
    name: "Classic Pepperoni",
    description: "A classic favorite with a generous serving of pepperoni.",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Pizza",
  },
  {
    name: "Margherita",
    description: "A simple yet delicious pizza with fresh mozzarella and basil.",
    price: 10.99,
    image:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Pizza",
  },
  {
    name: "BBQ Chicken",
    description: "A tangy and savory pizza with BBQ sauce and grilled chicken.",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Pizza",
  },
  {
    name: "Veggie Supreme",
    description: "A loaded pizza with all your favorite veggies.",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Pizza",
  },
  {
    name: "Garlic Bread",
    description: "A classic side of warm, buttery garlic bread.",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Sides",
  },
  {
    name: "Caesar Salad",
    description: "A fresh and crisp Caesar salad with a creamy dressing.",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Salads",
  },
  {
    name: "Coke",
    description: "A refreshing can of Coca-Cola.",
    price: 1.99,
    image:
      "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Drinks",
  },
  {
    name: "Sprite",
    description: "A refreshing can of Sprite.",
    price: 1.99,
    image:
      "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Drinks",
  },
];

const categories = ["All", "Pizza", "Sides", "Salads", "Drinks"];

export default function MenuPage() {
  const [filter, setFilter] = React.useState("All");
  const addToCart = useCartStore((state) => state.addToCart);

  const filteredMenuItems =
    filter === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  return (
    <div className="py-20 px-4 bg-gray-100">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Menu</h2>
          <p className="mt-4 text-lg text-gray-600">
            Made with the freshest ingredients and dough made daily.
          </p>
        </div>
        <div className="flex justify-center mt-8 space-x-2 md:space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${filter === category
                  ? "bg-primary text-white"
                  : "bg-white text-gray-800 hover:bg-primary/10"
                }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {filteredMenuItems.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="mt-2 text-gray-600 grow">
                  {item.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-dark">
                    ${item.price}
                  </span>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-all"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
