import About from './componants/About';
import Contact from './componants/Contact';
import Footer from './componants/Footer';
import Hero from './componants/Hero';
import Navbar from './componants/Navbar';
import Project from './componants/Project';
import Technologies from './componants/Technologies';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 overflow-hidden text-white">
      {/* Background Gradients */}
      <div className="absolute bottom-[-20%] left-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute top-[-20%] right-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <Navbar />
      <Hero/>
      <About/>
      <Technologies/>
      <Project/>  
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
