import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Brand.css";
import NikeLogo from "./assets/NikeLogo.png";
import shoes from "./assets/shoes.png";
import flipkart from "./assets/flipkart.png";
import amazon from "./assets/amazon.png";

function App() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={NikeLogo} alt="nike logo" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>Location</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <button>Login</button>
            </nav>
            <div className="container">
                <div className="left-container">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>
                        YOUR FEET DESERVE THE BEST AND WE ARE HERE TO SERVE YOU WITH YOUR BEST NIKE SHOES TO EXCEL YOUR
                        PERFORMANCE
                    </p>
                    <div className="btn">
                        <button className="shopbtn">Shop Now</button>
                        <button className="categorybtn">Category</button>
                    </div>
                    <div className="shop-site">
                        <h4>Also Available on</h4>
                        <img src={flipkart} className="flipkart"></img>
                        <img src={amazon} className="amazon"></img>
                    </div>
                </div>

                <div className="rigt-container">
                    <img src={shoes} alt="nike shoes" className="nike-shoes" />
                </div>
            </div>
        </div>
    );
}

export default App;
