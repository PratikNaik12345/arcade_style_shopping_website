import React, { useState, useCallback, useEffect, useRef } from 'react'
import { KEYCHAINS } from './data/keychains'
import Header from './components/Header'
import Display from './components/Display'
import ControlPanel from './components/ControlPanel'
import MachineBottom from './components/MachineBottom'
import Toast from './components/Toast'
import FlyingPrize from './components/FlyingPrize'

let uidCounter = 0

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(2)
  const [cart, setCart] = useState([])
  const [busy, setBusy] = useState(false)
  const [isGrabbing, setIsGrabbing] = useState(false)
  const [cableHeight, setCableHeight] = useState(40)
  const [chutePrizes, setChutePrizes] = useState([])
  const [basketMinis, setBasketMinis] = useState([])
  const [toast, setToast] = useState({ message: '', visible: false })
  const [flyingPrize, setFlyingPrize] = useState(null)

  const busyRef = useRef(false)

  // ── Navigate carousel ──
  const navigate = useCallback((dir) => {
    if (busyRef.current) return
    setCurrentIndex((prev) =>
      Math.max(0, Math.min(KEYCHAINS.length - 1, prev + dir))
    )
  }, [])

  // ── Show toast ──
  const showToast = useCallback((message) => {
    setToast({ message, visible: true })
  }, [])

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }))
  }, [])

  // ── Grab sequence ──
  const doGrab = useCallback(() => {
    if (busyRef.current) return
    busyRef.current = true
    setBusy(true)

    // Step 1: Lower claw
    setCableHeight(180)
    setIsGrabbing(true)

    setTimeout(() => {
      // Step 2: Lift claw
      setCableHeight(40)

      setTimeout(() => {
        setIsGrabbing(false)

        // Step 3: Get source/target rects for flying animation
        const activeCard = document.querySelector(
          `[data-keychain-id="${KEYCHAINS[busyRef.currentIndex ?? 2].id}"]`
        )
        const basketPanel = document.getElementById('basket-panel')
        const kc = KEYCHAINS[busyRef.currentIndex ?? 2]

        let sourceRect = null
        let targetRect = null

        if (activeCard) sourceRect = activeCard.getBoundingClientRect()
        if (basketPanel) targetRect = basketPanel.getBoundingClientRect()

        // Launch flying prize
        if (sourceRect && targetRect) {
          setFlyingPrize({ kc, sourceRect, targetRect })
        }

        // Step 4: Add to cart
        setCart((prev) => [...prev, kc])

        // Step 5: Add to chute
        setChutePrizes((prev) => {
          const next = [...prev, kc]
          return next.length > 4 ? next.slice(-4) : next
        })

        showToast(`🎉 Grabbed ${kc.name}!`)

        // Step 6: After fly animation completes, add basket mini
        setTimeout(() => {
          setFlyingPrize(null)
          setBasketMinis((prev) => [
            ...prev,
            {
              uid: ++uidCounter,
              kc,
              x: `${5 + ((uidCounter * 17) % 65)}px`,
              y: `${3 + ((uidCounter * 13) % 18)}px`,
            },
          ])
          busyRef.current = false
          setBusy(false)
        }, 700)
      }, 650)
    }, 750)
  }, [showToast])

  // Keep busyRef.currentIndex in sync
  useEffect(() => {
    busyRef.currentIndex = currentIndex
  }, [currentIndex])

  // ── Keyboard controls ──
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        navigate(-1)
      } else if (e.key === 'ArrowRight') {
        navigate(1)
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        doGrab()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [navigate, doGrab])

  // ── Cart actions ──
  const handleCartClick = useCallback(() => {
    if (cart.length === 0) {
      showToast('Basket empty — grab some keychains!')
      return
    }
    const names = [...new Set(cart.map((c) => c.name))].join(', ')
    showToast(`🛒 ${names}`)
  }, [cart, showToast])

  const handleCheckout = useCallback(() => {
    if (cart.length === 0) {
      showToast('Grab some keychains first!')
      return
    }
    const total = cart.reduce((s, c) => s + c.price, 0)
    showToast(`✨ Checkout: ${cart.length} items — ₹${total}`)
  }, [cart, showToast])

  const handleSelect = useCallback(
    (i) => {
      if (!busyRef.current) setCurrentIndex(i)
    },
    []
  )

  return (
    <>
      {/* ── ARCADE MACHINE SHELL ── */}
      <div
        className="w-[min(480px,100vw)] h-screen h-[100dvh] flex flex-col relative overflow-hidden"
        style={{
          background:
            'linear-gradient(180deg, #261448 0%, #1a0e32 15%, #120828 85%, #0a0418 100%)',
          borderLeft: '5px solid #706088',
          borderRight: '5px solid #706088',
          boxShadow:
            '-30px 0 80px rgba(180,77,255,0.12), 30px 0 80px rgba(255,45,149,0.12), inset 3px 0 0 #c0b8d0, inset -3px 0 0 #c0b8d0',
        }}
      >
        {/* Chrome trim strips */}
        <div className="chrome-strip-l" />
        <div className="chrome-strip-r" />

        {/* Sections */}
        <Header cartCount={cart.length} onCartClick={handleCartClick} />

        <Display
          keychains={KEYCHAINS}
          currentIndex={currentIndex}
          isGrabbing={isGrabbing}
          cableHeight={cableHeight}
          onSelect={handleSelect}
        />

        <ControlPanel
          onNavigate={navigate}
          onGrab={doGrab}
          grabDisabled={busy}
          cart={cart}
          onCheckout={handleCheckout}
          basketMinis={basketMinis}
        />

        <MachineBottom chutePrizes={chutePrizes} />
      </div>

      {/* ── FLYING PRIZE OVERLAY ── */}
      {flyingPrize && (
        <FlyingPrize
          kc={flyingPrize.kc}
          sourceRect={flyingPrize.sourceRect}
          targetRect={flyingPrize.targetRect}
          onComplete={() => setFlyingPrize(null)}
        />
      )}

      {/* ── TOAST ── */}
      <Toast
        message={toast.message}
        visible={toast.visible}
        onHide={hideToast}
      />
    </>
  )
}
