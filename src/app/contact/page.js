export default function ContactPage() {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            We would love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            <form className="mt-4">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-3 py-2 border rounded-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Our Location</h3>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.555518382767!2d-73.868016884594!3d40.7497799793282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f3c9a0c1a1b%3A0x2a2b7a3b3b3b3b3b!2sLittle%20Pizza!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
