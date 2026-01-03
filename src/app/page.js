export default function Home() {
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://little-pizzanyc.square.site/uploads/b/2290333d8f63412ca6e0a430585f988267250669d0337c73b331f4e43f5505f0/Screenshot_2024-05-16_020959_1715839818.png?width=2560')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-6xl font-bold">Little Pizza</h1>
          <p className="mt-4 text-lg">THE BEST PIZZA IN TOWN</p>
          <button className="mt-8 bg-black text-white px-8 py-3 rounded-full font-semibold">Order Online</button>
        </div>
      </div>

      <div className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Our Story</h2>
            <p className="mt-4 text-lg text-gray-600">
              Little Pizza is a family-owned business that has been serving the best pizza in town for over 20 years. We are passionate about our food and our customers. We use only the freshest ingredients and our dough is made fresh daily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}