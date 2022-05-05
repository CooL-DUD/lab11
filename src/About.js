import './About.css'
import React from 'react';
import Onepunch from './json/onepunch.json';

function About() {
    return (
        <section className="About">
            <h3>About us</h3>
            <p>We are very very good! <i>OK?</i></p>
            {Onepunch.map((detail, index) => {
                return(
                    <img class="ok" alt="ok" src={detail.onepunch}/>)
            })}
        </section>
    );
}
export default About;