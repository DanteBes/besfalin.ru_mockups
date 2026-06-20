import styles from './Blog.module.css'
import { CgArrowLongRight } from 'react-icons/cg'

function Blog() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContainer}>
        <div className={styles.blogLeftSide}>
          <div className={styles.blogHeader}>
            <h1 className={styles.blogTitle}>Мой блог</h1>
          </div>

          <ul className={styles.blogList}>
            <li className={styles.blogItem}>
              <a className={styles.blogLink}>
                <h2 className={styles.blogTitle}>01 Как я начал кодить</h2>
                <time className={styles.blogTime} dateTime="2026-06-06 12:00">
                  6 июня
                </time>
              </a>
            </li>
            <li className={styles.blogItem}>
              <a className={styles.blogLink}>
                <h2 className={styles.blogTitle}>02 Сломался планшет</h2>
                <time className={styles.blogTime} dateTime="2026-06-06 12:00">
                  6 июня
                </time>
              </a>
            </li>
            <li className={styles.blogItem}>
              <a className={styles.blogLink}>
                <h2 className={styles.blogTitle}>03 Мне выпал ЛЕОН!!!</h2>
                <time className={styles.blogTime} dateTime="2026-06-06 12:00">
                  6 июня
                </time>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.blogFooter}>
          <p className={styles.blogDescription}>
            Всем привет! Меня зовут Ярослав Бесфалин, в интернете я известен под псевдонимом Dante
            Besfalin. Мне 23 года (на 2024 год). Родился я в городе Выборг в 2001 году. При рождении
            произошла осложненная ситуация: я задушился пуповиной, и мне поставили диагноз ДЦП
            (детский церебральный паралич).
          </p>
          <a className={styles.blogLinkNext} href="#">
            Читать далее <CgArrowLongRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
