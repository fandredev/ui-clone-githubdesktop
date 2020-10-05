import React from 'react'
import './styles.scss'

import networking from '../../assets/icons/networking.svg'
import cli from "../../assets/icons/cli.svg";
import image from "../../assets/icons/image.svg";

const About : React.FC = () => {
    return (
      <section id="about">
        <aside>
          <img src={image} alt="" />
          <p>
            <h3>Expanded image diff support</h3>
            Easily compare changed images. See the before and after, swipe or
            fade between the two, or look at just the changed parts.
          </p>
        </aside>

        <aside>
          <img src={cli} alt="Imagem ilustrativa um um código na CLI" />
          <p>
            <h3>Extensive editor & shell integrations</h3>
            Open your favorite editor or shell from the app, or jump back to
            GitHub Desktop from your shell. GitHub Desktop is your springboard
            for work.
          </p>
        </aside>
        <aside>
          <img
            src={networking}
            alt="Imagem ilustrativa de um ícone de networking"
          />
          <p>
            <h3>Community supported</h3>
            GitHub Desktop is <span>open source now!</span> Check out our
            roadmap, contribute, and help us make collaboration even easier.
          </p>
        </aside>
        <button type="button">See what's been built</button>
      </section>
    );
}

export default About
