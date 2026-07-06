import styles from './About.module.css'
import ava from '../../assets/ava.png'
import { IoTriangleOutline } from 'react-icons/io5'
import { useState } from 'react'

function About() {
  const [isActive, setIsActive] = useState(true)

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <main className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.imageWrapper}>
          <img className={styles.aboutAva} src={ava} alt="А где картинка?" />
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.textBlock}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>title</h1>
              <IoTriangleOutline onClick={handleToggle} />
            </div>
            <p className={styles.paragraph}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam lectus risus, finibus
              ornare vestibulum et, feugiat quis dui. vivamus sit amet dolor et magna facilisis
              rhoncus. curabitur maximus est sed porta scelerisque. sed suscipit, arcu volutpat
              feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus.
              donec ut tortor blandit, sagittis diam eget, suscipit eros. quisque at magna neque.
              nulla faucibus mi at nunc mattis placerat.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
