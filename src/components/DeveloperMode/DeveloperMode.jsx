import styles from './DeveloperMode.module.css'
import { FiCopy } from 'react-icons/fi'
import { useEffect, useState } from 'react'

function DeveloperMode() {
  const [bgColor, setBgColor] = useState('#151c28')
  const [textColor, setTextColor] = useState('#eef1f6')
  const [accentColor, setAccentColor] = useState('#f0c15c')
  const [panelColor, setPanelColor] = useState('#0d121e')

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

  return (
    <main className={styles.main}>
      <section className={styles.side}>
        {
          // выбор цвета темы
        }
        <div className={styles.containerColors}>
          <div className={styles.colorsRow}>
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
            <FiCopy
              onClick={() => {
                navigator.clipboard.writeText(bgColor)
              }}
              className={styles.copyIcon}
            />
          </div>
          <div className={styles.colorsRow}>
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
            <FiCopy
              onClick={() => {
                navigator.clipboard.writeText(textColor)
              }}
              className={styles.copyIcon}
            />
          </div>
          <div className={styles.colorsRow}>
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
            <FiCopy
              onClick={() => {
                navigator.clipboard.writeText(accentColor)
              }}
              className={styles.copyIcon}
            />
          </div>
          <div className={styles.colorsRow}>
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
            <FiCopy
              onClick={() => {
                navigator.clipboard.writeText(panelColor)
              }}
              className={styles.copyIcon}
            />
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
