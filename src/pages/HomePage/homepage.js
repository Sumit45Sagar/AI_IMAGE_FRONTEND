import Navbar from "../common/Navbar/navbar";
import "./homepage.css";

const HomePage = (props) => {
    return(
        <div> 
            <Navbar page="home"/>
            <header className="homepage-header">
                <h1>Welcome to AI Image generator</h1>
                <p>Your one-stop solution for all your prompts</p>
            </header>
            <div className="homepage-main-container">
                <section className="homepage-section">
                    <h2>About Us</h2>
                    <p>We are providing the best AI generated images for your prompt.</p>
                </section>
                <section className="homepage-section">
                    <h2>Our Services</h2>
                    <p>Explore the wide range of AI generated images for different needs.</p>
                </section>
                <section className="homepage-section">
                    <h2>Contact Us</h2>
                    <p>Feel free to reach out to us through our contact page for any inquiries.</p>
                </section>
            </div>
        </div>
    )
}

export default HomePage;