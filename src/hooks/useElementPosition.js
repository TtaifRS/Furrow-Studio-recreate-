import { useState, useEffect } from "react"

export default function useElementPosition(el) {
  function getElement(x, y) {
    return {
      x: x,
      y: y,
    }
  }

  const [elementPositon, setElementPositon] = useState(getElement)

  useEffect(() => {
    function handlePosition() {
      let element = el.current
      let x =
        element.getBoundingClientRect().left +
        document.documentElement.scrollLeft +
        element.offsetWidth / 2

      let y =
        element.getBoundingClientRect().top +
        document.documentElement.scrollTop +
        element.offsetHeight / 2

      setElementPositon(getElement(x, y))
    }
    handlePosition()
  }, [el])

  return elementPositon
}
