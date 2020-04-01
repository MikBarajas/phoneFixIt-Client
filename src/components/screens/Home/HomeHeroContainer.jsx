import React from "react";
import "./Styles/HomeHeroContainer.scss";

const HomeHeroContainer = props => {
    return (
    <section className="hero is-large has-bg-img">
        <div className="hero-body">
        <div className="container has-text-centered">
            <h1 className="title is-1 is-primary has-text-white">{props.title}</h1>
            <h2 className="subtitle is-3 has-text-link">{props.description}</h2>
            <button className="button is-link">Start Here</button>
        </div>
        </div>
    </section>
    );
};


export default HomeHeroContainer;
