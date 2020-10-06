import React from 'react';
import './styles.scss';

import mac from '../../assets/images/mac-desktop.png';

const Main: React.FC = () => {
  return (
    <main>
      <h1>Github Desktop</h1>
      <p>
        Focus on what matters instead of fighting with Git. Whether you&apos;re
        new to Git or a seasoned user, GitHub Desktop simplifies your
        development workflow.
      </p>
      <button type="button">Download for windows (64bit)</button>
      <p id="download">
        Download for <span>macOS</span> or{' '}
        <span>
          Windows (<abbr title="Microsoft System Installer">msi</abbr>){' '}
          <br></br>
        </span>{' '}
        By downloading, you agree to the{' '}
        <span>Open Source Applications Terms.</span>
      </p>

      <img
        src={mac}
        alt="Imagem do Github desktop nos Sistemas operacionais Windows e MAC OS"
      />
    </main>
  );
};

export default Main;
