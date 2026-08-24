import React, { useState, useEffect } from "react";


// Animal data
const animals = [
    {
        id: 1,
        name: "Bruno",
        type: "Dog",
        age: "2 Years",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=80",
        description: "Bruno is a friendly and playful dog who loves people and enjoys outdoor activities."
    },
    {
        id: 2,
        name: "Milo",
        type: "Cat",
        age: "1 Year",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=500&q=80",
        description: "Milo is a calm and loving cat who enjoys spending time with caring families."
    },
    {
        id: 3,
        name: "Coco",
        type: "Dog",
        age: "3 Years",
        image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=500&q=80",
        description: "Coco is an energetic dog who loves playing and would be happy in an active home."
    },
    {
        id: 4,
        name: "Bella",
        type: "Dog",
        age: "2 Years",
        image:"https://images.unsplash.com/photo-1510771463146-e89e6e86560e?fm=jpg&q=60&w=3000&auto=format&fit=crop",
        description: "Bella is a gentle and affectionate dog who loves cuddles and peaceful walks."
    },
    {
        id: 5,
        name: "Rocky",
        type: "Dog",
        age: "4 Years",
        image: "https://plus.unsplash.com/premium_photo-1667673941713-ad4d4751c93b?fm=jpg&q=60&w=3000&auto=format&fit=crop",
   
        description: "Rocky is a loyal and cheerful dog who loves playing and meeting new people."
    }
];


// Animal Card Component
function AnimalCard(props) {

    return (
        <div className="animal-card">

            <img
                src={props.image}
                alt={props.name}
            />

            <div className="card-content">

                <h3>{props.name}</h3>

                <p>
                    <strong>Type:</strong> {props.type}
                </p>

                <p>
                    <strong>Age:</strong> {props.age}
                </p>

                <p className="description">
                    {props.description}
                </p>

            </div>
        </div>
    );
}


// Footer Component
function Footer({ changePage }) {

    return (
        <footer>

            <div className="footer-container">

                {/* AdoptNest Information */}
                <div className="footer-section">

                    <h2>🐾adoptNest</h2>

                    <p>
                        AdoptNest is a simple platform created to help
                        rescued animals find caring and loving homes.
                    </p>

                    <p>
                        Every animal deserves love, care and a safe place
                        to call home.
                    </p>

                </div>


                {/* Quick Links */}
                <div className="footer-section">

                    <h2>Quick Links</h2>

                    <button onClick={() => changePage("home")}>
                        Home
                    </button>

                    <button onClick={() => changePage("animals")}>
                        Animals
                    </button>

                    <button onClick={() => changePage("about")}>
                        About Us
                    </button>

                </div>


                {/* Find Us */}
                <div className="footer-section">

                    <h2>Find Us</h2>

                    <p>
                        📍 Chitkara University, Punjab, India
                    </p>

                    <p>
                        📞 +91 98765 43210
                    </p>

                    <p>
                        ✉️ adoptNest@example.com
                    </p>


                    <h2 className="social-title">
                        Social Media
                    </h2>

                    <div className="social-icons">

                        <span>f</span>
                        <span>𝕏</span>
                        <span>◎</span>
                        <span>▶</span>

                    </div>

                </div>

            </div>


            <div className="footer-bottom">

                <p>
                    adoptNest © 2026. All Rights Reserved.
                </p>

            </div>

        </footer>
    );
}


// Main App Component
function App() {

    // State
    const [currentPage, setCurrentPage] = useState("home");


    // useEffect
    useEffect(() => {

        document.title = "adoptNest - Animal Adoption";

        // DOM manipulation
        const heading = document.getElementById("page-heading");

        if (heading) {
            heading.style.transition = "0.5s";
        }

    }, [currentPage]);


    return (
        <div className="app">


            {/* Navbar */}

            <header className="header">

                <div className="logo">

                    <span>🐾</span>

                    <h1>adoptNest</h1>

                </div>


                <nav>

                    <button
                        className={currentPage === "home" ? "active" : ""}
                        onClick={() => setCurrentPage("home")}
                    >
                        Home
                    </button>

                    <button
                        className={currentPage === "animals" ? "active" : ""}
                        onClick={() => setCurrentPage("animals")}
                    >
                        Animals
                    </button>

                    <button
                        className={currentPage === "about" ? "active" : ""}
                        onClick={() => setCurrentPage("about")}
                    >
                        About Us
                    </button>

                </nav>

            </header>


            {/* HOME PAGE */}

            {currentPage === "home" && (

                <main>

                    <section className="hero">

                        <div className="hero-content">

                            <h2 id="page-heading">
                                Find a Friend. Give a Home. ❤️
                            </h2>

                            <p>
                                Welcome to adoptNest, where rescued animals
                                get a second chance to find a loving family.
                            </p>

                            <button
                                className="hero-button"
                                onClick={() => setCurrentPage("animals")}
                            >
                                Meet Our Animals
                            </button>

                        </div>

                    </section>


                    <section className="welcome-section">

                        <h2>Welcome to adoptNest</h2>

                        <p>
                            We believe every animal deserves love, care and
                            a safe home. Explore our rescued animals and
                            learn more about them.
                        </p>

                    </section>

                </main>

            )}


            {/* ANIMALS PAGE */}

            {currentPage === "animals" && (

                <main className="animals-page">

                    <section className="page-banner">

                        <h2 id="page-heading">
                            Animals Looking for a Home 🐾
                        </h2>

                        <p>
                            Meet some of our adorable rescued animals.
                        </p>

                    </section>


                    <section className="animals-section">

                        <div className="animal-container">

                            {animals.map((animal) => (

                                <AnimalCard
                                    key={animal.id}
                                    name={animal.name}
                                    type={animal.type}
                                    age={animal.age}
                                    image={animal.image}
                                    description={animal.description}
                                />

                            ))}

                        </div>

                    </section>

                </main>

            )}


            {/* ABOUT PAGE */}

            {currentPage === "about" && (

                <main>

                    <section className="about-page">

                        <h2 id="page-heading">
                            About adoptNest 🐾
                        </h2>

                        <p>
                            adoptNest is an animal rescue and adoption
                            platform designed to connect rescued animals
                            with caring families.
                        </p>

                        <p>
                            Our aim is to spread awareness about animal
                            adoption and encourage people to give animals
                            a safe and loving home.
                        </p>

                        <div className="about-boxes">

                            <div>
                                <h3>🐶 Rescue</h3>
                                <p>
                                    Supporting animals that need care
                                    and protection.
                                </p>
                            </div>

                            <div>
                                <h3>❤️ Care</h3>
                                <p>
                                    Every animal deserves kindness,
                                    attention and love.
                                </p>
                            </div>

                            <div>
                                <h3>🏠 Adopt</h3>
                                <p>
                                    Helping animals find responsible
                                    and loving families.
                                </p>
                            </div>

                        </div>

                    </section>

                </main>

            )}


            {/* Footer on every page */}

            <Footer changePage={setCurrentPage} />

        </div>
    );
}


export default App;