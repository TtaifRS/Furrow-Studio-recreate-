import React, { useState, useEffect } from "react"

import { Cursor } from "../styles/GlobalStyle"

import { useGlobalStateContext } from "../context/globalContext"

const CustomCursor = ({ toggleMenu }) => {
  const { cursorType } = useGlobalStateContext()
  const [mousePosition, setmousePosition] = useState({ x: 10, y: 10 })

  const onMouseMove = event => {
    const { pageX: x, pageY: y } = event
    setmousePosition({ x, y })
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <>
      <Cursor
        className={`${!!cursorType ? "hovered" : ""} ${cursorType} ${
          toggleMenu ? "nav-open" : ""
        }`}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />
    </>
  )
}

export default CustomCursor
