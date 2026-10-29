import styles from './Blog.module.css'
import { Link } from 'react-router'
import { CgArrowLongRight } from 'react-icons/cg'
import { posts } from '../../content/posts'

function Blog() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContainer}>
        <div className={styles.blogLeftSide}>
          <div className={styles.blogHeader}>
            <h1 className={styles.blogTitle}>Мой блог</h1>
          </div>

          <ul className={styles.blogList}>
            {posts.map((post, index) => (
              <li key={post.slug} className={styles.blogItem}>
                <Link to={`/post/${post.slug}`} className={styles.blogLink}>
                  <h2 className={styles.blogTitle}>
                    {String(index + 1).padStart(2, '0')} {post.title}
                  </h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.blogFooter}>
          <p className={styles.blogDescription}>
            Всем привет! Меня зовут Ярослав Бесфалин, в интернете я известен под псевдонимом Dante
            Besfalin. Мне 23 года (на 2024 год). Родился я в городе Выборг в 2001 году. При рождении
            произошла осложненная ситуация: я задушился пуповиной, и мне поставили диагноз ДЦП
            (детский церебральный паралич).
          </p>
          <a className={styles.blogLinkNext} href="/about">
            Читать далее <CgArrowLongRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
