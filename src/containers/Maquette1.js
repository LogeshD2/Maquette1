import React from 'react';
import Header from '../components/Header/Header';
import Herosection from './Herosection/Herosection';
import Ourclients from './Ourclients/Ourclients';
import Helping from './Helping/Helping';
import Design from './Design/Design';
import Telsa from './Tesla/Tesla';

export default function Maquette1() {
  return (
    <div className=''>
      <Header/>
      <Herosection/>
      <Ourclients/>
      <Helping/>
      <Design/>
      <Telsa/>
    </div>
  );
}

