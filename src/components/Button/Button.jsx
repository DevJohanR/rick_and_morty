import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
  return (
    <div className={styles.containerButton}>
        <button  onClick={props.onClick}>{props.name}</button>
    </div>
  )
}

export default Button;