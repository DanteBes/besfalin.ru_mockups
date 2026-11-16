import styles from "./DeveloperMode.module.css"

function DeveloperMode() {
  return (
    <main className={styles.main} >
      <section className={styles.side}>
        {
          // выбор цвета темы
        }
        <input type="color" name={"color2"} className={styles.colorPicker}></input>
        <input type="color" name={"color2"} className={styles.colorPicker}></input>
      </section>
      <section className={styles.side + " " + styles.elementsContainer}>
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
