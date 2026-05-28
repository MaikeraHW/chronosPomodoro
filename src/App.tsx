import ButtonsHolder from "./components/buttons/buttonsHolder/ButtonsHolder"
import Heading from "./components/head/Heading"
import Container from "./layouts/Container"
import Home from "./pages/home/Home"

function App() {

  return (
    <Container>
      <Heading />
      <ButtonsHolder />
      <Home />
    </Container>
  )
}

export default App
