'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function TypingText() {
  return (
    <>
    a <TypeAnimation sequence={[
        'Full-Stack Software Engineer.',
        1500,
        'Frontend Developer.',
        1500,
        'Backend Developer.',
        1500
    ]} className="hero-color"
        preRenderFirstString
        wrapper="span"
        repeat={Infinity}
    />
    </>
  )
}
