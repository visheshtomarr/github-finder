import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <div>
        <div className="flex flex-col justify-between h-screen">
          <Navbar title='Github Finder' />
          <main>Content</main>
        </div>
      </div> 
    </Router>
  );
}

export default App;
