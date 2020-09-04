import React, { Component } from 'react';
import './About.css';

import photoAbout from '../src/img/photoAbout.JPG'

export class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="ContainerAbout">
                    <div className="ContentAbout">
                        <img className="Photo" src={photoAbout}/>
                        <div className="TextContainer">
                            <p className="Text"> My name is Matteo Cossu. I'm a Software Developer living in Magdeburg, Germany 🍺 where I work for Ultratendency, a big data consulting company. I'm passionate about solving hard problems and discovering new stuff 🔍.
                            When I don't work, I cook 🍳. I love food and the dishes I like preparing the most are fresh pasta 🍝 and pizza 🍕. I think there isn't anything more relaxing than kneading a dough with your hands.
                            'm a bit obsessed with basketball 🏀. I regularly watch NBA, Euroleague, and LBA (italian first league). My favourite basketball team is Dinamo Sassari, that plays in LBA representing the island where I was born, Sardinia ⛱.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
