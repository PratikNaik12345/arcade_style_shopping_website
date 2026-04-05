import React from 'react'
import KeychainSVG from './KeychainSVG'

export default function BasketPanel({ cart, onCheckout, basketMinis }) {
  const total = cart.reduce((s, c) => s + c.price, 0)

  return (
    <div
      className="flex-shrink-0 w-[125px] rounded-[10px] p-2.5 flex flex-col gap-1.5 relative overflow-hidden"
      style={{
        background: 'rgba(0,0,0,0.45)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3), 0 0 12px rgba(180,77,255,0.08)',
      }}
      id="basket-panel"
    >
      {/* Label */}
      <div className="font-orbit text-[10px] text-white/60 font-bold text-center tracking-wider">
        BASKET
      </div>

      {/* Row */}
      <div className="flex justify-between items-center">
        <span className="text-[11px] text-white/55">
          {cart.length} item{cart.length !== 1 ? 's' : ''}
        </span>
        <span className="font-orbit text-[15px] font-extrabold text-arcade-gold text-shadow-gold">
          ₹{total}
        </span>
      </div>

      {/* Checkout */}
      <button
        className="border-none rounded-md py-2 text-white font-orbit text-[9px] font-bold tracking-wider cursor-pointer transition-all duration-200 hover:scale-[1.03]"
        style={{
          background: 'linear-gradient(135deg, #ff2d95, #cc1155)',
          boxShadow: '0 0 12px rgba(255,45,149,0.25)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 22px rgba(255,45,149,0.45)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 0 12px rgba(255,45,149,0.25)'
        }}
        onClick={onCheckout}
      >
        CHECKOUT
      </button>

      {/* Mini bounced keychains */}
      <div className="absolute inset-0 pointer-events-none">
        {basketMinis.map((mini) => (
          <div
            key={mini.uid}
            className="absolute w-[22px] h-[34px] rounded-sm overflow-hidden opacity-75 animate-bounce-in"
            style={{
              left: mini.x,
              bottom: mini.y,
              boxShadow: '0 1px 5px rgba(0,0,0,0.4)',
            }}
          >
            <KeychainSVG kc={mini.kc} width={22} />
          </div>
        ))}
      </div>
    </div>
  )
}
