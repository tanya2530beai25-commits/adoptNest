import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import AnimalDetails from "./pages/AnimalDetails";
import AdoptionForm from "./pages/AdoptionForm";
import Rescue from "./pages/Rescue";
import Favorites from "./pages/Favorites";
import MyRequests from "./pages/MyRequests";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div className="app">

            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/rescue" element={<Rescue />} />

                {}
                <Route path="/animals/:id" element={<AnimalDetails />} />

                {/* protected routes*/}
                <Route
                    path="/adopt"
                    element={
                        <ProtectedRoute>
                            <AdoptionForm />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/adopt/:id"
                    element={
                        <ProtectedRoute>
                            <AdoptionForm />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/my-requests"
                    element={
                        <ProtectedRoute>
                            <MyRequests />
                        </ProtectedRoute>
                    }
                />

                {/* 404 page */}
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />

        </div>
    );
}

export default App;
