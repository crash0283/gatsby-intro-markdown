import React from "react"
import styles from "../styles/bio.module.css"

const People = props => {
  return (
    <div className={styles.user}>
      <img
        src={props.avatar}
        className={styles.avatar}
        alt=""
      />
      <div className={styles.description}>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  )
}

export default People
