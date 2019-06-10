import React, { Component } from 'react'
//import logo from './logo.svg';
import './App.css'

class App extends Component {
  render() {
    return (
      <div id="Group" className="group">
        <div id="Menu" className="menu">
          <button id="Sacola" className="menu-itens menu-item1">
            SACOLA
          </button>
          <button id="Pagamento" className="menu-itens menu-item2">
            PAGAMENTO
          </button>
          <button id="Confirmacao" className="menu-itens menu-item3">
            CONFIRMAÇÂO
          </button>
        </div>

        <div id="titProduto" className="titProduto">
          PRODUTOS
        </div>

        <div id="Produtos" className="produtos">
          <div id="Produto1" className="itemProduto">
            <img
              alt="Imagem do Produto: L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
              title="Imagem do Produto: L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
              className="imgproduto"
              src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
            />
            <div className="txtproduto9">
              <text className="txtproduto">
                L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium
              </text>
              <text className="vlrproduto">R$ 225,90</text>
            </div>
          </div>

          <div id="Produto2" className="itemProduto">
            <img
              alt="Imagem do Produto: Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml"
              title="Imagem do Produto: Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml"
              className="imgproduto"
              src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg"
            />
            <div className="txtproduto9">
              <text className="txtproduto">
                Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml
              </text>
              <text className="vlrproduto">R$ 299,00</text>
            </div>
          </div>

          <div id="Produto3" className="itemProduto">
            <img
              alt="Imagem do Produto: Senscience Inner Restore Intensif - Máscara Capilar 50ml"
              title="Imagem do Produto: Senscience Inner Restore Intensif - Máscara Capilar 50ml"
              className="imgproduto"
              src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png"
            />
            <div className="txtproduto9">
              <text className="txtproduto">
                Senscience Inner Restore Intensif - Máscara Capilar 50ml
              </text>
              <text className="vlrproduto">R$ 99,90</text>
            </div>
          </div>
        </div>

        <div id="Totais" className="totais">
          <div id="TotProdutos" className="totprodutos">
            <div id="TotProdutos9" className="totprodutos9">
              PRODUTOS
            </div>
            <div id="ValProdutos" className="valprodutos">
              R$ 624,80
            </div>
          </div>

          <div id="TotFrete" className="totprodutos">
            <div id="Totfrete9" className="totprodutos9 totalfrete">
              FRETE
            </div>
            <div id="ValFrete" className="valprodutos">
              R$ 5,30
            </div>
          </div>

          <div id="TotDesconto" className="totprodutos totaldesconto">
            <div id="TotDesconto9" className="totprodutos9">
              DESCONTO
            </div>
            <div id="ValDesconto" className="valprodutos">
              - R$ 30,00
            </div>
          </div>

          <div id="TotTotal" className="totprodutos totaltotal">
            <div id="TotTotal9" className="totprodutos9">
              TOTAL
            </div>
            <div id="ValTotal" className="valprodutos">
              R$ 600,10
            </div>
          </div>
        </div>

        <button id="Seguir" className="seguir">
          SEGUIR PARA O PAGAMENTO
        </button>
      </div>
    )
  }
}

export default App
