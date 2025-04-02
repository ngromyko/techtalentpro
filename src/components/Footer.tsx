import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center  space-y-8">
        <div className="flex flex-col space-x-4">
          <h6>Contact Us</h6>
          <p>Dominikanów 30 31-409 Kraków, Poland</p>
          <div className="flex space-x-2 items-center">
            <MdOutlineMailOutline />
            <span>info@doit-solution.com</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400">
            LinkedIn
          </a>
          <a href="#" className="hover:text-blue-400">
            Facebook
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-gray-400">© 2024 DoIT Solution. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
