import ButtonsHolder from './components/buttons/buttonsHolder/ButtonsHolder.tsx'
import Clock from './components/clock/Clock.tsx'
import Form from './components/form/Form.tsx'
import Heading from './components/head/Heading.tsx'
import Container from './layouts/Container.tsx'

function App() {

  return (
    <Container>
    <Heading />
    <ButtonsHolder />
    <Clock />
    <Form />
    </Container>
  )
}

export default App
