import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Events from './components/Events';
import Footer from './components/Footer';
import Header from './components/Header';
import Team from './components/Team';

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Carousel/>
    <Events/>
    <Team/>
    <Footer/>
    </>
  );
}

export default App;
