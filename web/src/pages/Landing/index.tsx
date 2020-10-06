import React from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Section from '../../components/Section';
import About from '../../components/About';
import Footer from '../../components/Footer';

import './styles.scss';

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Main />
      <Section />
      <About />
      <Footer />
    </div>
  );
}

export default App;
