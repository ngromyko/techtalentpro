const ContactUsSection = () => (
  <section id="contact" className="py-20 bg-blue-600">
    <div className="container mx-auto px-6">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form id="contact-form" className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
          <p id="status-message" className="text-center mt-4"></p>
        </form>
      </div>
    </div>
  </section>
);

export default ContactUsSection;
