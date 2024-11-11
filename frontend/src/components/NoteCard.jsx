import React from 'react'
import { MdMarkunread } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { FormatDate } from './FormatDate';


const NoteCard = ({note}) => {

  const body = `${note.body.split(" ").slice(0, 20).join(" ")} ...`
  const color = note.category == "BUSINESS" ? "blue" : note.category == "PERSONAL" ? "green" : "purple"

  return (
    <div className="col-md-4 single-note-item all-category">
      <div className="card card-body">
        <span className="side-stick" style={{ backgroundColor: color }}></span>
        <bold >{note.category}</bold>
        <FaNoteSticky style={{ marginLeft: "auto", color: color }} />
        <Link to={`/notes/${note.slug}`} style={{textDecoration: "none", color: "black"}}>
          <h4
            className="note-title text-truncate w-75 mb-0"
            data-noteheading="Book a Ticket for Movie"
          >
            {note.title}
          </h4>
        </Link>
        
        <p className="note-date font-12 text-muted">{FormatDate(note.updated)}</p>
        <div className="note-content">
          <p
            className="note-inner-content text-muted"
            data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis."
          >
           {body}
          </p>
        </div>
      </div>
    </div>
  )
}

export default NoteCard