import React from 'react'


const Item = ({ children, active }) => {
  return (
    <li className={`font-semibold flex flex-row space-x-4 items-center ${active}`}>
      { children }
    </li>
  )
}

export default Item