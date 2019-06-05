import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="Group" className="group">
        <div id="Group2" className='group2'>
          <div id="Menu" className='menu'>
          <button id="Sacola" className='menu-item1'>
              SACOLA
            </button>        
            <button id="Pagamento" className='menu-item2'>
              PAGAMENTO
            </button>        
            <button id="Confirmacao" className='menu-item3'>
              CONFIRMAÇÂO
            </button>        
            {/*}
            <div id="Group3" className='menu-item1'>
              SACOLA
            </div>        
            <div id="Group3" className='menu-item2'>
              PAGAMENTO
            </div>        
            <div id="Group3" className='menu-item3'>
              CONFIRMAÇÂO
            </div>        
            */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
