const testimonials = [
  {
    name: "John Doe",
    testimonial:
      "The best pizza I have ever had! The crust was perfect and the toppings were so fresh. I will definitely be back!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Jane Smith",
    testimonial:
      "I love this place! The pizza is amazing and the staff is so friendly. I would recommend this place to anyone.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Peter Jones",
    testimonial:
      "I am a regular here and I am never disappointed. The pizza is always fresh and delicious. The staff is great too!",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

export default function Testimonials() {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            We are proud to have so many happy customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
