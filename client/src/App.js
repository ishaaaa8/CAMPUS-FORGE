
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Footer from './component/Footer';
import Cards from './component/Cards';

function App() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <Hero/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
