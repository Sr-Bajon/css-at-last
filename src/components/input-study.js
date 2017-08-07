import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const InputStudy = () => {
  return (
    <input className={css(styles.input)}
      type='text' value='HOLA' />
  )
}

const styles = StyleSheet.create({
  input: {
    border: '5px solid white',
    'box-shadow':
      `inset 0 0 8px  rgba(0,0,0,0.1),
      0 0 16px rgba(0,0,0,0.1)`,
    padding: '15px',
    background: 'rgba(255,255,255,0.5)',
    margin: '0 0 10px 0'
  }
})

export default InputStudy
