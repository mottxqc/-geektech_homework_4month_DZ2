import styles from './search.module.css'

function search() {
  return (
    <form className={styles.searchForm} action="#">
      <input className={styles.searchInput} type="text" name="search" />
      <button className="button">Search</button>
    </form>
  )
}

export default search