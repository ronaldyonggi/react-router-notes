import { useState } from "react"
import Home from "./pages/Home"
import Notes from "./pages/Notes"
import Users from "./pages/Users"
import { BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import Login from "./pages/Login"
import Note from "./pages/Note"

const initialNotes = [
  {
      id: 1,
      content: 'HTML is easy',
      important: true,
      user: 'Matti Luukkainen'
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false,
      user: 'Matti Luukkainen'
    },
    {
      id: 3,
      content: 'Most important methods of HTTP-protocol are GET and POST',
      important: true,
      user: 'Arto Hellas'
    }
]

function App() {
  const [notes, setNotes] = useState(initialNotes)
  const [user, setUser] = useState(null)

  const login = user => setUser(user)

  const padding = {
    padding: 5
  }

  return (
    <div>
      <Router>
        <div>
          <Link style={padding} to="/">home</Link>
          <Link style={padding} to="/notes">notes</Link>
          <Link style={padding} to="/users">users</Link>
          {user
            ? <em>{user} logged in</em>
            : <Link style={padding} to="/login">login</Link>
          }
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes notes={notes} />} />
          <Route path="/notes/:id" element={<Note notes={notes} />} />
          <Route path="/users" element={user ? <Users /> : <Navigate replace to="/login" />} />
          <Route path="/login" element={<Login onLogin={login} />} />
        </Routes>

      </Router>
      <div>
        <br />
        <em>Note app, Department of Computer Science 2023</em>
      </div>
    </div>
  )
}

export default App
