import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

function Jumbotron() {

    const HandleLearnMore = () => {
        const element = document.querySelector('.sound-section')
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">Welcome to our store</h2>
            <img className="logo" src={Iphone} alt="Iphone" />
            <p className="text">
                Voila
            </p>
            <span className="description">
                Lorem ipsum dolor sit amet.
            </span>
            <ul className="links">
                <li>
                    <button className="button">Buy</button>
                </li>
                <li>
                    <a className="link" onClick={HandleLearnMore}>Learn more</a>
                </li>
            </ul>
            {/* <img className='iphone-img' src={HoldingIphone} alt="holding iphone" /> */}
        </div>
    );
}

export default Jumbotron;