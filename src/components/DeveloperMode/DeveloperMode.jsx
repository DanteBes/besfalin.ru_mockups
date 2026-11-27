import styles from './DeveloperMode.module.css'
import { useEffect, useState, useRef } from 'react'

function DeveloperMode() {
  const [bgColor, setBgColor] = useState('#151c28')
  const [textColor, setTextColor] = useState('#eef1f6')
  const [accentColor, setAccentColor] = useState('#f0c15c')
  const [panelColor, setPanelColor] = useState('#0d121e')

  const inputRef = useRef(null);

  const selectAll = (e) => {
    const input = e?.currentTarget ?? inputRef.current
    input?.select()
  }

  useEffect(() => {
    document.documentElement.style.setProperty('--bg-clr', bgColor)
    window.sessionStorage.setItem('bgColor', bgColor)
  }, [bgColor])

  useEffect(() => {
    document.documentElement.style.setProperty('--txt-clr', textColor)
    window.sessionStorage.setItem('textColor', textColor)
  }, [textColor])

  useEffect(() => {
    document.documentElement.style.setProperty('--accent-clr', accentColor)
    window.sessionStorage.setItem('accentColor', accentColor)
  }, [accentColor])

  useEffect(() => {
    document.documentElement.style.setProperty('--panel-clr-main', panelColor)
    window.sessionStorage.setItem('panelColor', panelColor)
  }, [panelColor])

  const HEXtoRGB = (color) => {
    let hex = color.replace(/^#/, '')
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
    }

    return (
      'rgb(' +
      parseInt(hex.slice(0, 2), 16) +
      ', ' +
      parseInt(hex.slice(2, 4), 16) +
      ', ' +
      parseInt(hex.slice(4, 6), 16) +
      ')'
    )
  }

  const HEXtoHSL = (color) => {
    let hex = color.replace(/^#/, '')
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
    }

    const r = parseInt(hex.slice(0, 2), 16) / 255
    const g = parseInt(hex.slice(2, 4), 16) / 255
    const b = parseInt(hex.slice(4, 6), 16) / 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const delta = max - min

    let h = 0
    let s = 0
    const l = (max + min) / 2

    if (delta !== 0) {
      s = delta / (1 - Math.abs(2 * l - 1))

      if (max === r) {
        h = ((g - b) / delta) % 6
      } else if (max === g) {
        h = (b - r) / delta + 2
      } else {
        h = (r - g) / delta + 4
      }
      h *= 60
      if (h < 0) h += 360
    }

    return 'hsl(' + Math.round(h) + ', ' + Math.round(s * 100) + '%, ' + Math.round(l * 100) + '%)'
  }

  return (
    <main className={styles.main}>
      <section className={styles.side}>
        {
          // выбор цвета темы
        }
        <div className={styles.containerColors}>
          <div className={styles.colorsRow}>
            <div className={styles.colorInput}>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => {
                  setBgColor(e.target.value)
                }}
                name={'color1'}
                id={'color1'}
                className={styles.colorPicker}
              ></input>
              <label className={styles.colorPickerLabel} for={'color1'}>
                Фон:<br></br> меняется цвет основного фона сайта.
              </label>
            </div>
            <div className={styles.textInputs}>
              {/* hex text */}
              <input
                className={styles.textInput}
                value={bgColor}
                name={'bgInputColor1'}
                id={'bgInputColor1'}
                ref={inputRef}
                onClick={() => {
                  navigator.clipboard.writeText(bgColor)
                  selectAll()
                }}
              ></input>
              {/* rgb text */}
              <input
                className={styles.textInput}
                value={HEXtoRGB(bgColor)}
                name={'bgInputColor2'}
                id={'bgInputColor2'}
                onClick={(e) => {
                  navigator.clipboard.writeText(HEXtoRGB(bgColor))
                  selectAll(e)
                }}
              ></input>
              {/* hsl text */}
              <input
                className={styles.textInput}
                value={HEXtoHSL(bgColor)}
                name={'bgInputColor3'}
                id={'bgInputColor3'}
                onClick={(e) => {
                  navigator.clipboard.writeText(HEXtoHSL(bgColor))
                  selectAll(e)
                }}
              ></input>
            </div>
          </div>
          <div className={styles.colorsRow}>
            <div className={styles.colorInput}>
              <input
                type="color"
                value={textColor}
                onChange={(e) => {
                  setTextColor(e.target.value)
                }}
                name={'color2'}
                id={'color2'}
                className={styles.colorPicker}
              ></input>
              <label className={styles.colorPickerLabel} for={'color2'}>
                Текст:<br></br> меняется цвет всего текста на сайте, кроме кнопок
              </label>
            </div>
            <div className={styles.textInputs}>
              {/* hex text */}
              <input
                className={styles.textInput}
                value={textColor}
                name={'textInputColor1'}
                id={'textInputColor1'}
                onClick={(e) => {
                  navigator.clipboard.writeText(textColor)
                  selectAll(e)
                }}
              ></input>
              {/* rgb text */}
              <input
                className={styles.textInput}
                value={HEXtoRGB(textColor)}
                name={'textInputColor2'}
                id={'textInputColor2'}
                onClick={(e) => {
                  navigator.clipboard.writeText(HEXtoRGB(textColor))
                  selectAll(e)
                }}
              ></input>
              {/* hsl text */}
              <input
                className={styles.textInput}
                value={HEXtoHSL(textColor)}
                name={'textInputColor3'}
                id={'textInputColor3'}
                onClick={(e) => {
                  navigator.clipboard.writeText(HEXtoHSL(textColor))
                  selectAll(e)
                }}
              ></input>
            </div>
          </div>
          <div className={styles.colorsRow}>
            <div className={styles.colorInput}>
              <input
                type="color"
                value={accentColor}
                onChange={(e) => {
                  setAccentColor(e.target.value)
                }}
                name={'color3'}
                id={'color3'}
                className={styles.colorPicker}
              ></input>
              <label className={styles.colorPickerLabel} for={'color3'}>
                Акцент:<br></br> меняется цвет кнопок, рамок и иконок
              </label>
            </div>
            <div className={styles.textInputs}>
              {/* hex text */}
              <input
                className={styles.textInput}
                value={accentColor}
                name={'accentInputColor1'}
                id={'accentInputColor1'}
                onClick={(e) => {
                  navigator.clipboard.writeText(accentColor)
                  selectAll(e)
                }}
              ></input>
              {/* rgb text */}
              <input
                className={styles.textInput}
                value={HEXtoRGB(accentColor)}
                name={'accentInputColor2'}
                id={'accentInputColor2'}
                onClick={(e) => {
                  navigator.clipboard.writeText(HEXtoRGB(accentColor))
                  selectAll(e)
                }}
              ></input>
              {/* hsl text */}
              <input
                className={styles.textInput}
                value={HEXtoHSL(accentColor)}
                name={'accentInputColor3'}
                id={'accentInputColor3'}
                onClick={(e) => {
                  navigator.clipboard.writeText(HEXtoHSL(accentColor))
                  selectAll(e)
                }}
              ></input>
            </div>
          </div>
          <div className={styles.colorsRow}>
            <div className={styles.colorInput}>
              <input
                type="color"
                value={panelColor}
                onChange={(e) => {
                  setPanelColor(e.target.value)
                }}
                name={'color4'}
                id={'color4'}
                className={styles.colorPicker}
              ></input>
              <label className={styles.colorPickerLabel} for={'color4'}>
                Фон секций: <br></br> просто фон секций
              </label>
            </div>
            <div className={styles.textInputs}>
              {/* hex text */}
              <input
                className={styles.textInput}
                value={panelColor}
                name={'panelInputColor1'}
                id={'panelInputColor1'}
                onClick={(e) => {
                  navigator.clipboard.writeText(panelColor)
                  selectAll(e)
                }}
              ></input>
              {/* rgb text */}
              <input
                className={styles.textInput}
                value={HEXtoRGB(panelColor)}
                name={'panelInputColor2'}
                id={'panelInputColor2'}
                onClick={(e) => {
                  navigator.clipboard.writeText(HEXtoRGB(panelColor))
                  selectAll(e)
                }}
              ></input>
              {/* hsl text */}
              <input
                className={styles.textInput}
                value={HEXtoHSL(panelColor)}
                name={'panelInputColor3'}
                id={'panelInputColor3'}
                onClick={(e) => {
                  navigator.clipboard.writeText(HEXtoHSL(panelColor))
                  selectAll(e)
                }}
              ></input>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.side + ' ' + styles.elementsContainer}>
        {
          // список элементов которые красятся для наглядности
        }
        <ul className={styles.elementsList}>
          <li className={styles.element}>
            <h1>Привет</h1>
          </li>
          <li className={styles.element}>
            <p>Проверка темы</p>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default DeveloperMode
