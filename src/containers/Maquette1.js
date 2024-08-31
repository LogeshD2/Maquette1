import React from 'react';
import Header from '../components/Header/Header';
import Herosection from './Herosection/Herosection';
import Ourclients from './Ourclients/Ourclients';
import Helping from './Helping/Helping';
import Design from './Design/Design';
import Telsa from './Tesla/Tesla';
import Caring from './Caring/Caring';
import Pellantesque from './Pellantesque/Pellantesque';
import Footer from '../components/Footer/Footer';

export default function Maquette1() {
  return (
    <div className="flex flex-col min-h-screen">

      <header className="flex-shrink-0">
        <Header />
      </header>

      <main className="flex-grow">
        <Herosection />
        <Ourclients />
        <Helping />
        <Design />
        <Telsa />
        <Caring />
        <Pellantesque />
      </main>

      <footer className="flex-shrink-0">
        <Footer />
      </footer>
    </div>
  );
}
