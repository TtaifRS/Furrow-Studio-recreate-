import React, { useRef, useEffect } from "react"

import {
  Banner,
  Video,
  Canvas,
  BannerTitle,
  Headline,
} from "../../styles/homeStyle.js"

import { useGlobalStateContext } from "../../context/globalContext"

import useWIndowSize from "../../hooks/useWindowSize"

const HomeBanner = () => {
  let canvas = useRef(null)
  const size = useWIndowSize()
  const { currentTheme } = useGlobalStateContext()

  useEffect(() => {
    let renderingElement = canvas.current
    let drawingElement = renderingElement.cloneNode()

    let drawingCtx = drawingElement.getContext("2d")
    let renderingCtx = renderingElement.getContext("2d")

    let lastX
    let lastY

    let moving = false

    renderingCtx.globalCompositeOperation = "source-over"
    renderingCtx.fillStyle = currentTheme === "dark" ? "#000000" : "#ffffff"
    renderingCtx.fillRect(0, 0, size.width, size.height)

    renderingElement.addEventListener("mouseover", e => {
      moving = true
      lastX = e.pageX - renderingElement.offsetLeft
      lastY = e.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mouseup", e => {
      moving = false
      lastX = e.pageX - renderingElement.offsetLeft
      lastY = e.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mousemove", e => {
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over"
        renderingCtx.globalCompositeOperation = "destination-out"
        let currentX = e.pageX - renderingElement.offsetLeft
        let currentY = e.pageY - renderingElement.offsetTop
        drawingCtx.lineJoin = "round"
        drawingCtx.moveTo(lastX, lastY)
        drawingCtx.lineTo(currentX, currentY)
        drawingCtx.closePath()
        drawingCtx.lineWidth = 120
        drawingCtx.stroke()
        lastX = currentX
        lastY = currentY
        renderingCtx.drawImage(drawingElement, 0, 0)
      }
    })
  }, [currentTheme])

  return (
    <Banner>
      <Video>
        <video
          height={size.height}
          width={size.width}
          loop
          autoPlay
          preload
          src={require("../../assets/video/video.mp4")}
        />
      </Video>
      <Canvas ref={canvas} />
      <BannerTitle>
        <Headline>DIG</Headline>
        <Headline>DEEP</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner

import React, { useEffect, useRef } from "react"
//Custom Hook
import useWindowSize from "../../hooks/useWindowSize"
//Context
import { useGlobalStateContext } from "../../context/globalContext"
//Styled Components
import {
  Banner,
  Video,
  BannerTitle,
  Canvas,
  Headline,
} from "../../styles/homeStyle"
