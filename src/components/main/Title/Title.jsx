import React from 'react'
import './Title.scss'

function Title({children}) {
  return (
    <div className="chapter-title">
      {children}
    </div>
  )
}

export default Title
