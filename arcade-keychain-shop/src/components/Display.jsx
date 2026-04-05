import React from 'react'
import SkyBackground from './SkyBackground'
import ClawMechanism from './ClawMechanism'
import Carousel from './Carousel'

export default function Display({ keychains, currentIndex, isGrabbing, cableHeight, onSelect }) {
  return (
    <div
      className="flex-1 relative mx-2 my-1.5 rounded-[14px] overflow-hidden glass-reflect"
      style={{
        background: 'linear-gradient(180deg, #0a0520, #100830, #180e40)',
        border: '2px solid rgba(255,255,255,0.06)',
        boxShadow: 'inset 0 0 60px rgba(0,0,0,0.6), inset 0 2px 0 rgba(255,255,255,0.04), 0 0 20px rgba(0,0,0,0.5)',
      }}
    >
      <SkyBackground />
      <ClawMechanism
        currentIndex={currentIndex}
        isGrabbing={isGrabbing}
        cableHeight={cableHeight}
      />
      <Carousel
        keychains={keychains}
        currentIndex={currentIndex}
        onSelect={onSelect}
      />
    </div>
  )
}
