import { GlobalStyle } from "../src/assets/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/assets/styles/theme";
import Header from "./components/Header/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
