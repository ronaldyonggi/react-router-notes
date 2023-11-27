import { Link } from "react-router-dom";

export default function Notes({ notes }) {
    return (
        <div>
            <h2>Notes</h2>
            <ul>
                {notes.map(note => 
                <li key={note.id}>
                    <Link to={`/notes/${note.id}`}>{note.content}</Link>
                </li>
                    )}
            </ul>
        </div>
    )
}