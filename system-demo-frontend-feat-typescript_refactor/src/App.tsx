import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import theme from "./styles/theme";
import { themeContext } from "./contexts";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Placenta = lazy(() => import("./pages/Placenta"));

function App() {
  const queryClient = new QueryClient();
  return (
    <themeContext.Provider value={{ theme }}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/placenta" element={<Home />} />
            <Route path="/" element={<Placenta />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </themeContext.Provider>
  );
}

export default App;
