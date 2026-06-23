import styles from './About.module.css'

function About() {
  return (
    <main className={styles.about}>
      <div className={styles.aboutContent}>
        <p className={styles.aboutText}>Обо мне текст</p>
      </div>
    </main>
  )
}

export default About
