import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoute";
import Navbar from "./components/layout/navbar/Navbar";
import MaxWidthWrapper from "./components/layout/MaxWidthWrapper";
import { AuthProvider } from "./components/layout/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <MaxWidthWrapper>
          <AppRoutes />
        </MaxWidthWrapper>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
