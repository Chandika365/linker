import './App.css';
import Careers from './Components/Careers';
import Catagory from './Components/Catagory';
import Connectlinker from './Components/Connectlinker';
import Contact from './Components/Contact';
import Featuresection from './Components/Featuresection';
import Header from './Components/Header';
import Herosection from './Components/Herosection';
import Logocloud from './Components/Logocloud';
import Navigationbar from './Components/Navigationbar';
import Product from './Components/Product';
import Producttestominals from './Components/Producttestominals';
import Promosection from './Components/Promosection';
import State from './Components/State';
import Teamsection from './Components/Teamsection';
import { TestimonialCard } from './Components/TestimonialCard';
import Testomionals from './Components/Testomionals';



function App() {
  return (
    <>
    {/* <Navigationbar/> */}
    {/* <Header/> */}
    <Herosection/>
    <Promosection/>
    <State/>
    <Logocloud/>
    <Featuresection/>
    <Testomionals/>
    <Teamsection/>
    <Product/>
    <Connectlinker/>
    <Producttestominals/>
    <Catagory/>
    <Careers/>
    <Contact/>
    <TestimonialCard/>
    </>

  );
}

export default App;
