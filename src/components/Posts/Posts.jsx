import styles from './Posts.module.css'
import { Link } from 'react-router'
import { posts } from '../../content/posts'

function Posts() {
  return (
    <main className={styles.posts}>
      <div className={styles.postsContent}>
        <h1 className={styles.postsTitle}>Посты</h1>

        {posts.length > 0 ? (
          <ul className={styles.postsList}>
            {posts.map((post, index) => (
              <li key={post.slug} className={styles.postsItem}>
                <Link to={`/post/${post.slug}`} className={styles.postsLink}>
                  <span className={styles.postsNumber}>{String(index + 1).padStart(2, '0')}</span>
                  <span className={styles.postsName}>{post.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.postsEmpty}>Постов пока нет</p>
        )}
      </div>
    </main>
  )
}

export default Posts
