import { BrowserRouter } from "react-router-dom";
import { Hero, About, Navbar, Feedbacks, Tech, Contact, Works, StarsCanvas } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-cover bg-hero-pattern bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
