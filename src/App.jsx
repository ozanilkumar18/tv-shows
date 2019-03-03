import React, { Fragment, Component } from 'react';
import Routes from './routes';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Routes />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
