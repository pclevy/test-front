import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div id="Group" className='group'>
          
          <div id="Menu" className='menu'>
            <button id="Sacola" className='menu-itens menu-item1'>
              SACOLA
            </button>        
            <button id="Pagamento" className='menu-itens menu-item2'>
              PAGAMENTO
            </button>        
            <button id="Confirmacao" className='menu-itens menu-item3'>
              CONFIRMAÇÂO
            </button>        
          </div>

          <div id='titProduto' className='titProduto'>
            PRODUTOS
          </div>

          <div id='Produtos' className='produtos'>
            
          </div>

          <div id='Totais' className='totais'>
            
          <div id='TotProdutos' className='totprodutos'>
              <div id='TotProdutos9' className='totprodutos9'>
                PRODUTOS
              </div>
              <div id='ValProdutos' className='valprodutos'>
                R$ 624,80
              </div>
            </div>
            
            <div id='TotFrete' className='totprodutos'>
              <div id='Totfrete9' className='totprodutos9'>
                FRETE
              </div>
              <div id='ValFrete' className='valprodutos'>
                R$ 5,30
              </div>
            </div>
            
            <div id='TotFrete' className='totprodutos totaldesconto'>
              <div id='Totfrete9' className='totprodutos9'>
                DESCONTO
              </div>
              <div id='ValFrete' className='valprodutos'>
                - R$ 30,00
              </div>
            </div>
            
            <div id='TotFrete' className='totprodutos totalprodutos'>
              <div id='Totfrete9' className='totprodutos9'>
                TOTAL
              </div>
              <div id='ValFrete' className='valprodutos'>
                R$ 600,10
              </div>
            </div>
              
          </div>

          <button id='Seguir' className='seguir'>
            SEGUIR PARA O PAGAMENTO
          </button>

        </div>
    );
  }
}

export default App;
