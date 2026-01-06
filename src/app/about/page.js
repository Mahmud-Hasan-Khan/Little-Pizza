export default function AboutPage() {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            The best pizza in town.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Our Story"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Our Story</h3>
            <p className="mt-4 text-gray-600">
              Little Pizza is a family-owned business that has been serving the
              best pizza in town for over 20 years. We are passionate about our
              food and our customers. We use only the freshest ingredients and
              our dough is made fresh daily.
            </p>
            <p className="mt-4 text-gray-600">
              Our mission is to provide our customers with the best possible
              dining experience. We are committed to using only the freshest
              ingredients and providing excellent customer service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
