import styles from './About.module.css'
import ava from '../../assets/ava.png'

function About() {
  return (
    <main className={styles.about}>
      <div className={styles.aboutContent}>
        <img className={styles.aboutAva} src={ava} alt="А где картинка?" />
        <span className={styles.aboutAttendance}>
          Был в сети:
          <time dateTime="2077-07-17 02:13">2077-07-10</time>
        </span>
      </div>
    </main>
  )
}

export default About
