import Home from "./components/pages/home/index";
import Header from "./components/header/index";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddExpnse from "./components/pages/add-expense";
import Footer from "./components/footer/index"
function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add-expense" element={<AddExpnse />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;