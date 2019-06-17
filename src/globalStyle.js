import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`  
  body {
    font-family: 'Muli', sans-serif;

    h1 {
      font-weight: 800;
      font-size: 36px;

    p {
      font-size: 18px;
    }
  }
`;

{/*
  USO:
  import { GlobalStyle } from './styles/global'

class App extends Component {
  render() {

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle/>
          <Container/>
        </>
      </ThemeProvider>

    )
  }
}
*/}