import { useState } from "react"
import Home from "./pages/Home"
import Notes from "./pages/Notes"
import Users from "./pages/Users"

function App() {
  const [page, setPage] = useState('home')

  const toPage = page => event => {
    event.preventDefault()
    setPage(page)
  }

  const content = () => {
    switch(page) {
      case 'home':
        return <Home />

      case 'notes':
        return <Notes />

      case 'users':
        return <Users />

      default:
        throw Error('Unknown page: ' + page)
    }
  }

  const padding = {
    padding: 5
  }

  return (
    <div>
      <div>
        <a href="" onClick={toPage('home')} style={padding}>
          home
        </a>
      </div>

      <div>
        <a href="" onClick={toPage('notes')} style={padding}>
          notes
        </a>
      </div>

      <div>
        <a href="" onClick={toPage('users')} style={padding}>
          users
        </a>
      </div>

      {content()}
    </div>
  )
}

export default App
