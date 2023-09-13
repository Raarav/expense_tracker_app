import Home from "./components/pages/home/index";
import Header from "./components/header/index";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddExpnse from "./components/pages/add-expense";

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add-expense" element={<AddExpnse />} />
        </Routes>
        <div>footer</div>
    </Router>
  );
}

export default App;