import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import { ThemeProvider } from "@mui/styles";
import { themes } from "./Theme";
import { DETAIL, DETAILS, HOME, SEARCH } from "./Routes";
import Search from "./pages/Search/Search";
import Details from "./pages/Details";

function App() {
  return (
    <ThemeProvider theme={themes}>
      <div>
        <Router>
          <div className="container">
            <Sidebar />
            <Routes>
              <Route path={SEARCH} element={<Search />} />

              <Route path={DETAILS} element={<Details />} />
              <Route path={DETAIL} element={<Details />} />
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
