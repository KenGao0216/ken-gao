import React, { useEffect, useState } from 'react'

function Pi({ digits, count }) {
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (shown < count) {
      const timeout = setTimeout(() => setShown(shown + 1), 8) 
      return () => clearTimeout(timeout)
    }
  }, [shown, count])

  const displayDigits = digits.slice(0, shown)
  const lines = []
  for (let i = 0; i < displayDigits.length; i += 75) {
    lines.push(displayDigits.slice(i, i + 75))
  }

  return (
    <div style={{
      fontFamily: 'monospace',
      fontSize: '1.3rem',
      margin: '2rem auto',
      color: '#334155',
      borderRadius: '12px',
      padding: '1.2rem',
      maxWidth: 600,
      letterSpacing: '0.08em',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ fontFamily: 'inherit', fontSize: '1.1rem', marginBottom: '0.7rem', color: '#64748b' }}>
        Amount of pi memorised so far:
      </div>
      {lines.map((line, idx) => (
        <span key={idx}>{line}<br /></span>
      ))}
    </div>
  )
}

export default Pi