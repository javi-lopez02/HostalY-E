import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Navbar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/auth.context";
import { NextUIProvider } from "@nextui-org/react";
import Page404 from "./pages/404Page";
import { Toaster } from "sonner";
import Oferts from "./pages/Oferts";

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <AuthProvider>
          <Toaster richColors expand={true}/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<Page404 />} />

            <Route element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route path="/oferts" element={<Oferts />} />

              <Route element={<ProtectedRoutes />}></Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
