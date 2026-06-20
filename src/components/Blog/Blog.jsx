import styles from './Blog.module.css'

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
            Здесь я пишу о том что меня беспокоит или мне нравится и так далее бла бла
          </p>
          <a className={styles.blogLink} href="#">
            Читать далее 👉
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
