import React from 'react'
import styles from 'styles/pagination.module.scss'

export default function Pagination({len, page, setPage}) {
  return (
    <div className={styles.pagination}>
      {Array(len)
        .fill(0)
        .map((_, index) => (
          <span
            className={`${styles.span} ${page === index + 1 && styles.active}`}
            key={index}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </span>
        ))}
    </div>
  )
}
