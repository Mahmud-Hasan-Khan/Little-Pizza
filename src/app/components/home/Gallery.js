const images = [
  {
    src: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Pizza",
  },
  {
    src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Pizza",
  },
  {
    src: "https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Pizza",
  },
  {
    src: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Pizza",
  },
];

export default function Gallery() {
  return (
    <div className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Our Gallery</h2>
          <p className="mt-4 text-lg text-gray-600">
            A glimpse of our delicious pizzas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
