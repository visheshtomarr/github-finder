import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Alert from "./components/layout/Alert";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Navbar from "./components/layout/Navbar";
import User from "./pages/User";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="text-white">
            <div className="flex flex-col justify-between h-screen">
              <Navbar title='Github Finder' />

              <main className="container mx-auto px-3 pb-12">
                <Alert />
                <Routes>
                  <Route path="/" element={ <Home /> } />
                  <Route path="/about" element={ <About /> } />
                  <Route path="/user/:login" element={ <User /> } /> 
                  <Route path="/notfound" element={ <Notfound /> } />
                  <Route path="/*" element={ <Notfound /> } />
                </Routes>  
              </main>
              <Footer />
            </div>
          </div> 
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
