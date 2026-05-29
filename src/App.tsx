import { TaskContextProvider } from "./contexts/taskContext/TaskContext"
import About from "./pages/about/About"
import Home from "./pages/home/Home"
import NotFound from "./pages/notFound/NotFound"

function App() {

  return (      
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  )
}

export default App
