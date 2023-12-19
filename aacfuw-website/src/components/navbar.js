import React from 'react'
import Link from 'gatsby'

export default function navbar() {
  return (
    <nav> 
        <h1>AACF</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/">Members</Link>
            <Link to="/">Large Group</Link>
            <Link to="/">Small Group</Link>
            <Link to="/">Worship</Link>
            <Link to="/">Events</Link>
            <Link to="/">Prayer</Link>
        </div>
    </nav>
  )
}
