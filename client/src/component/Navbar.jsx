
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">CampusForge</div>
        <div>
          <Link to="/" className="text-white mx-4">Home</Link> 
          <Link to="/about" className="text-white mx-4">About</Link>
          <Link to="/contact" className="text-white mx-4">Contact</Link> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
