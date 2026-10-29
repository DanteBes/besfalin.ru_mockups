import styles from './Header.module.css'
import alfaava from '../../assets/AlfaAva.png'
import { IoLanguage } from 'react-icons/io5'
import { FaMoon } from 'react-icons/fa'
import { CiMenuBurger } from 'react-icons/ci'
import { GoChevronLeft } from 'react-icons/go'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const randomSubTitle = ['web-ddeveloper', 'разработчик сайта']

function Header() {
  // кладем в переменную состояния рандомную строку из массива
  // важно делать именно так чтобы react не ругался на правило
  // чистых функций. важно чтобы при загрузке компонента и
  // отображении его всегда выдавался одинаковый результат/вид
  // а мы с помощью useState сразу в момент рендера меняем
  // текст в переменной, тогда ошибка пропадает.
  const [textRandom] = useState(
    () => randomSubTitle[Math.floor(Math.random() * randomSubTitle.length)]
  )

  //храним состояние ismenushow и меняем через сет
  const [isMenuShow, setIsMenuShow] = useState(false)

  const handleOpenMenu = () => {
    setIsMenuShow(true)
  }

  const handleCloseMenu = () => {
    setIsMenuShow(false)
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <a href="/" className={styles.nameBlock}>
            <div className={styles.headerAvatar}>
              <img className={styles.headerAvatarImage} src={alfaava} alt="А где картинка?" />
              <div className={styles.headerFrameTop} aria-hidden="true" />
              <div className={styles.headerFrameBottom} aria-hidden="true" />
              <img className={styles.headerAvatarHead} src={alfaava} alt="" aria-hidden="true" />
            </div>
            <div className={styles.headerName}>
              <h1 className={styles.headerTitle}>Ярослав Бесфалин</h1>
              <span className={styles.headerSubTitle}>{textRandom}</span>
            </div>
          </a>
          <div className={styles.boxlink}>
            <ul className={styles.listlink}>
              <li className={styles.objlink}>
                <a className={styles.link} href="/about">
                  Обо мне
                </a>
              </li>
              <li className={styles.objlink}>
                <a className={styles.link} href="/contacts">
                  Контакты
                </a>
              </li>
              <li className={styles.objlink}>
                <a className={styles.link} href="/projects">
                  Проекты
                </a>
              </li>
              <li className={styles.objlink}>
                <a className={styles.link} href="/posts">
                  Посты
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.blockBtns}>
            <ul className={styles.listSettings}>
              <li className={styles.linkSettings}>
                <a className={styles.linkSetting}>
                  <IoLanguage />
                </a>
                <a className={styles.linkSetting}>
                  {/*<CgDarkMode />*/}
                  <FaMoon />
                </a>
                {/*<a className={}>
            <CgFormatJustify />
            </a>*/}
              </li>
            </ul>
          </div>
          <CiMenuBurger onClick={handleOpenMenu} className={styles.headerBurger} />
        </div>
      </header>
      {/* Меню рендерим вне header, чтобы его fixed-позиционирование и z-index
          не зависели от шапки. */}
      <AnimatePresence>{isMenuShow && <HeaderMenu onClose={handleCloseMenu} />}</AnimatePresence>
    </>
  )
}

function HeaderMenu({ onClose }) {
  return (
    <motion.div
      className={styles.menu}
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.3 }}
    >
      <button onClick={onClose} className={styles.menuClose}>
        <GoChevronLeft />
        <span>назад</span>
      </button>
      <div className={styles.menuLinks}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <a className={styles.menuLink} href="/about">
              Обо мне
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.menuLink} href="/contacts">
              Контакты
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.menuLink} href="/projects">
              Проекты
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.menuLink} href="/posts">
              Посты
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.menuBtns}>
        <ul className={styles.menuBtnsList}>
          <li className={styles.menuBtnsItem}>
            <a className={styles.menuBtnsLink}>
              <IoLanguage />
            </a>
          </li>
          <li className={styles.menuBtnsItem}>
            <a className={styles.menuBtnsLink}>
              <FaMoon />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default Header
