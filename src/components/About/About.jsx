import styles from './About.module.css'
{
  /*import ava from '../../assets/ava.png'*/
}
import alfaava from '../../assets/AlfaAva.png'
import { IoTriangleOutline } from 'react-icons/io5'
import { useState } from 'react'
import { clsx } from 'clsx'

function About() {
  return (
    <main className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.imageWrapper}>
          {/*<img className={styles.aboutAva} src={ava} alt="А где картинка?" />*/}
          <div className={styles.objFBackground}>
            <img className={styles.objFBackgroundAva} src={alfaava} alt="А где картинка?" />
            <div className={styles.objFFrameTop} aria-hidden="true" />
            <div className={styles.objFFrameBottom} aria-hidden="true" />
            <img className={styles.objFBackgroundAvaHead} src={alfaava} alt="" aria-hidden="true" />
          </div>

          <div className={styles.aboutMinContent}>
            <p className={styles.aboutContentMinInfo}>Был в сети: 01.04.2001, 10:23 </p>
            <a href="#" className={styles.aboutContentLinkSupport}>
              Поддержать❤️
            </a>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <TextBlock title={'О себе'} isOpen={true}>
            <div className={styles.contentWrapperBox}>
              <p className={styles.contentWrapperBoxText}>
                Всем привет! Меня зовут Ярослав Бесфалин, в интернете я известен под псевдонимом
                Dante Besfalinn. Мне 23 года (на 2024 год). Родился в городе Выборг. При рождении я
                задушился пуповиной и мне поставили диагноз ДЦП (детский церебральный паралич). Этот
                диагноз принес множество проблем: я не умею ходить, не умею управлять руками, имею
                дефекты речи, а если точнее то, это затрудняет общение с незнакомыми людьми. Родные
                понимают меня без труда, но с чужими приходится просить помощи в переводе. До
                шести-семи лет я жил в Выборге, а затем родители перевезли меня в Санкт-Петербург.
                Когда пришло время идти в школу, стало ясно, что из-за моего состояния я не смогу
                посещать обычную школу и было решено обучаться на дому. Однако учителя не смогли
                адаптироваться к моим нуждам и предложили специализированную школу для детей с
                особенностями развития.
              </p>
              <p className={styles.contentWrapperBoxText}></p>
              <p className={styles.contentWrapperBoxText}></p>
              <p className={styles.contentWrapperBoxText}></p>
              <p className={styles.contentWrapperBoxText}></p>
              <p className={styles.contentWrapperBoxText}></p>
              <p className={styles.contentWrapperBoxText}></p>
              <p className={styles.contentWrapperBoxText}></p>
              <p className={styles.contentWrapperBoxText}></p>
              <p className={styles.contentWrapperBoxText}></p>
              <p className={styles.contentWrapperBoxText}></p>
              <p className={styles.contentWrapperBoxText}></p>
            </div>
          </TextBlock>
          <TextBlock title={'Новая карточка'} isOpen={false}>
            test
          </TextBlock>
        </div>
      </div>
    </main>
  )
}

function TextBlock({ title, isOpen, children }) {
  const [isActive, setIsActive] = useState(isOpen)

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={clsx(styles.textBlock, { [styles.textBlockLow]: !isActive })}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{title}</h1>
        <IoTriangleOutline
          size="2em"
          className={clsx(styles.textBlockBtn, { [styles.textBlockBtnOpen]: isActive })}
          onClick={handleToggle}
        />
      </div>
      <p className={styles.paragraph}>{children}</p>
    </div>
  )
}

export default About
