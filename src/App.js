import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./App.css";
import { ThemeProvider } from "@mui/styles";
import { themes } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={themes}>
      <div>
        <Router>
          <div className="container">
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
