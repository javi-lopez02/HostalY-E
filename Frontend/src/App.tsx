import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Navbar from "./components/NavBar";
import Oferts from "./pages/oferts/Oferts";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/auth.context";
import { NextUIProvider } from "@nextui-org/react";


function App() {
  return (
    <NextUIProvider>
      <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route element={<Navbar />}>
                <Route element={<ProtectedRoutes />}>
                  <Route path="/oferts" element={<Oferts/>}/>
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
      </AuthProvider>
    </NextUIProvider>
  );
}

export default App;
