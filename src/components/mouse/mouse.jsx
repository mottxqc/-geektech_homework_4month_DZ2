import styles from './mouse.module.css'

function mouse({ mouse }) {
  return (
    <li className={styles.mouse}>
      <img
        className={styles.mouseImage}
        src={mouse.image}
        alt={mouse.title}
      />
      <div className={styles.mouseText}>
        <h3 className={styles.mouseTitle}>{mouse.title}</h3>
        <div className={styles.mouseInfo}>
          <p className={styles.mousePrice}>${mouse.price}</p>
          <a
            className={styles.mouseButton + " button"}
            href={"path-to-mouse/" + mouse.id}
          >
            Show more
          </a>
        </div>
      </div>
    </li>
  )
}

export default mouse