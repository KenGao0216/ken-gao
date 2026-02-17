import { useEffect, useState } from 'react'

function Pi({ digits, count }) {
  const [shown, setShown] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.2 }
    )

    const el = document.getElementById('pi-display')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (started && shown < count) {
      const timeout = setTimeout(() => setShown(shown + 1), 6)
      return () => clearTimeout(timeout)
    }
  }, [started, shown, count])

  const displayDigits = digits.slice(0, shown)
  const lines = []
  for (let i = 0; i < displayDigits.length; i += 60) {
    lines.push(displayDigits.slice(i, i + 60))
  }

  return (
    <div id="pi-display" className="pi-container">
      <div className="pi-counter">
        <span className="pi-counter-number">{shown > 1 ? shown - 1 : 0}</span>
        <span className="pi-counter-label">digits revealed</span>
      </div>
      <div className="pi-digits">
        {lines.map((line, idx) => (
          <span key={idx} className="pi-line">{line}</span>
        ))}
        {shown < count && <span className="pi-cursor">|</span>}
      </div>
    </div>
  )
}

export default Pi
