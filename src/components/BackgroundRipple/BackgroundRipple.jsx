import { useEffect, useRef, useState } from 'react'
import styles from './BackgroundRipple.module.css'

const CELL_SIZE = 56

function BackgroundRipple() {
  const containerRef = useRef(null)
  const [gridSize, setGridSize] = useState({ rows: 8, cols: 27 })
  const [clickedCell, setClickedCell] = useState(null)
  const [rippleKey, setRippleKey] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateGridSize = () => {
      const { width, height } = container.getBoundingClientRect()
      setGridSize({
        rows: Math.ceil(height / CELL_SIZE),
        cols: Math.ceil(width / CELL_SIZE),
      })
    }

    updateGridSize()
    window.addEventListener('resize', updateGridSize)

    return () => window.removeEventListener('resize', updateGridSize)
  }, [])

  const { rows, cols } = gridSize
  const cells = Array.from({ length: rows * cols }, (_, index) => index)

  const handleCellClick = (row, col) => {
    setClickedCell({ row, col })
    setRippleKey((key) => key + 1)
  }

  return (
    <div ref={containerRef} className={styles.backgroundRipple} aria-hidden="true">
      <div
        key={`grid-${rippleKey}`}
        className={styles.grid}
        style={{
          gridTemplateColumns: `repeat(${cols}, ${CELL_SIZE}px)`,
          gridTemplateRows: `repeat(${rows}, ${CELL_SIZE}px)`,
          width: cols * CELL_SIZE,
          height: rows * CELL_SIZE,
        }}
      >
        {cells.map((index) => {
          const row = Math.floor(index / cols)
          const col = index % cols
          const distance = clickedCell
            ? Math.hypot(clickedCell.row - row, clickedCell.col - col)
            : 0

          return (
            <div
              key={index}
              className={clickedCell ? `${styles.cell} ${styles.cellRipple}` : styles.cell}
              style={
                clickedCell
                  ? {
                      '--delay': `${Math.max(0, distance * 55)}ms`,
                      '--duration': `${200 + distance * 80}ms`,
                    }
                  : undefined
              }
              onClick={() => handleCellClick(row, col)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BackgroundRipple
