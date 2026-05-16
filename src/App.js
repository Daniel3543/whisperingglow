import './App.css';
import Header from './component/Header';
import About from './component/About';
import Products from './component/Products';
import Sets from './component/Sets';
import Reviews from './component/Reviews';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <Products />
        <Sets />
        <Reviews />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
