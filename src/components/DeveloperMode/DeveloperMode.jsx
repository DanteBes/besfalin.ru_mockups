import styles from './DeveloperMode.module.css'
import { FiCopy } from 'react-icons/fi'
import { useEffect, useState } from 'react'

function DeveloperMode() {
  const [bgColor, setBgColor] = useState('#151c28');
  const [textColor, setTextColor] = useState('#eef1f6');
  const [accentColor, setAccentColor] = useState('#f0c15c');
  const [panelColor, setPanelColor] = useState('#0d121e');

  useEffect(() => {
    document.documentElement.style.setProperty('--bg-clr', bgColor)
  }, [bgColor])

  useEffect(() => {
    document.documentElement.style.setProperty('--txt-clr', textColor)
  }, [textColor])

  useEffect(() => {
    document.documentElement.style.setProperty('--accent-clr', accentColor)
  }, [accentColor])

  useEffect(() => {
    document.documentElement.style.setProperty('--panel-clr-main', panelColor)
  }, [panelColor])

  return (
    <main className={styles.main}>
      <section className={styles.side}>
        {
          // выбор цвета темы
        }
        <div className={styles.containerColors}>
          <input type="color" value={bgColor} onChange={(e) => {setBgColor(e.target.value)}} name={'color2'} className={styles.colorPicker}></input>
          <input type="color" value={textColor} onChange={(e) => { setTextColor(e.target.value) }} name={'color2'} className={styles.colorPicker}></input>
          <input type="color" value={accentColor} onChange={(e) => {setAccentColor(e.target.value)}} name={'color3'} className={styles.colorPicker}></input>
          <input type="color" value={panelColor} onChange={(e) => {setPanelColor(e.target.value)}} name={'color4'} className={styles.colorPicker}></input>
        </div>
        <div className={styles.colorInputContainer}>
          <input
            type="text"
            placeholder={'rgb(0, 0, 0)'}
            name={'colorCodeRGB'}
            className={styles.colorCodeInput}
          ></input>
          <FiCopy className={styles.copyIcon} />
        </div>
        <div className={styles.colorInputContainer}>
          <input
            type="text"
            placeholder={'#000000'}
            name={'colorCodeHEX'}
            className={styles.colorCodeInput}
          ></input>
          <FiCopy className={styles.copyIcon} />
        </div>
        <div className={styles.colorInputContainer}>
          <input
            type="text"
            placeholder={'hsl(0 0% 0%)'}
            name={'colorCodeHSL'}
            className={styles.colorCodeInput}
          ></input>
          <FiCopy className={styles.copyIcon} />
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
