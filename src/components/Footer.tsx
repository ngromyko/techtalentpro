const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold mb-4 md:mb-0">DoIT Solution</div>
        <div className="flex space-x-4">
          {/* <!-- <a href="#" className="hover:text-blue-400">Twitter</a> --> */}
          <a href="#" className="hover:text-blue-400">
            LinkedIn
          </a>
          <a href="#" className="hover:text-blue-400">
            Facebook
          </a>
        </div>
      </div>
      {/* <!-- <div className="mt-4 text-center text-gray-400">
        <a href="#privacy-policy" onclick="loadContent('privacy-policy')" className="hover:text-blue-400">Privacy Policy</a>
    </div> --> */}
      <div className="mt-4 text-center text-gray-400">© 2024 DoIT Solution. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
