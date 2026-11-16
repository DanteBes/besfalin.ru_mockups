import styles from './DeveloperMode.module.css'
import { FiCopy } from 'react-icons/fi'

function DeveloperMode() {
  return (
    <main className={styles.main}>
      <section className={styles.side}>
        {
          // выбор цвета темы
        }
        <div className={styles.containerColors}>
          <input type="color" name={'color2'} className={styles.colorPicker}></input>
          <input type="color" name={'color2'} className={styles.colorPicker}></input>
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
