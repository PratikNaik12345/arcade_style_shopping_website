import React from 'react'
import Joystick from './Joystick'
import GrabButton from './GrabButton'
import BasketPanel from './BasketPanel'

export default function ControlPanel({
  onNavigate,
  onGrab,
  grabDisabled,
  cart,
  onCheckout,
  basketMinis,
}) {
  return (
    <div
      className="flex-shrink-0 h-[130px] relative flex items-center px-3.5 gap-2.5"
      style={{
        background:
          'linear-gradient(180deg, #d4a42a 0%, #b8900e 15%, #9a7808 50%, #7a5e06 85%, #5c4604 100%)',
        borderTop: '3px solid #e0b840',
        boxShadow:
          'inset 0 4px 12px rgba(255,255,255,0.12), inset 0 -4px 12px rgba(0,0,0,0.3)',
      }}
    >
      {/* Top highlight line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)',
        }}
      />

      <Joystick onNavigate={onNavigate} />
      <GrabButton onClick={onGrab} disabled={grabDisabled} />
      <BasketPanel
        cart={cart}
        onCheckout={onCheckout}
        basketMinis={basketMinis}
      />
    </div>
  )
}
