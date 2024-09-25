import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { GithubProvider } from "./context/github/GithubContext";

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="text-white">
          <div className="flex flex-col justify-between h-screen">
            <Navbar title='Github Finder' />

            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/notfound" element={ <Notfound /> } />
                <Route path="/*" element={ <Notfound /> } />
              </Routes>  
            </main>
            <Footer />
          </div>
        </div> 
      </Router>
    </GithubProvider>
  );
}

export default App;
