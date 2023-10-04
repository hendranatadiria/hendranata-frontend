'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function TypingText({texts}: {texts: string[]}) {
  // add '1500' number after each element of array
  const sequence = React.useMemo(() => {
      const seq = texts.flatMap((el) => [el, 1500]);
      return seq;
  }, [texts]);

  return (
    <>
    a <TypeAnimation sequence={sequence} className="hero-color"
        preRenderFirstString
        wrapper="span"
        repeat={Infinity}
    />
    </>
  )
}
