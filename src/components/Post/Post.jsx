import { useParams } from 'react-router'
import MarkdownContent from '../MarkdownContent'
import { getPost } from '../../content/posts'
import styles from './Post.module.css'

function Post() {
  const { slug } = useParams()
  const post = getPost(slug)

  return (
    <section className={styles.post}>
      <div className={styles.postWrapper}>
        {post ? <MarkdownContent content={post.content} /> : <p>Пост не найден</p>}
      </div>
    </section>
  )
}

export default Post
