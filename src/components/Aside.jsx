import styles from '../styles/global.module.scss'

const Aside = () => {
  return (
    <>
      <aside className={styles.form__container_left}>
        <figure>
          <img src="https://media3.giphy.com/media/Of41uuBqB4uCKAuwxi/200w.webp?cid=ecf05e475xa2ad9znbliri2akhil220uczbngkh05ghmbi6a&ep=v1_gifs_search&rid=200w.webp&ct=g" alt="gif" width={300} />
        </figure>
      </aside>
    </>
  )
}

export default Aside