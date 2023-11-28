
export default function Note({ note }) {
    return (
        <div>
            <h2>{note.content}</h2>
            <div>{note.user}</div>
            <div><strong>{note.important ? 'important' : 'not important'}</strong></div>
        </div>
    )
}