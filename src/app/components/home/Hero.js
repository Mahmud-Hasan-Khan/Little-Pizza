export default function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Authentic Pizza, Delivered to Your Door.
        </h1>
        <p className="mt-4 text-lg">
          Experience the taste of tradition, made with love.
        </p>
        <button className="mt-8 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition duration-300">
          Order Online
        </button>
      </div>
    </div>
  );
}
