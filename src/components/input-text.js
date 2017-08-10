import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const InputGlow = () => {
  return (
    <input
      className={css(styles.glow)}
      type='text'
      placeholder='glow'
      required
    />
  )
}
const InputThick = () => {
  return (
    <input
      className={css(styles.thick)}
      type='text'
      placeholder='thick'
      required
    />
  )
}
const InputDouble = () => {
  return (
    <input
      className={css(styles.double)}
      type='text'
      placeholder='double'
      required
    />
  )
}
const InputUnderline = () => {
  return (

    <input
      className={css(styles.underline)}
      type='text'
      placeholder='underline'
      required
    />
  )
}
const InputInset = () => {
  return (
    <input
      className={css(styles.inset)}
      type='text'
      placeholder='inset'
      required
    />
  )
}
const PlaceHolder = () => {
  return (
    <input
      className={css(styles.placeholder)}
      type='text'
      placeholder='placeholder'
      required
    />
  )
}

const styles = StyleSheet.create({
  glow: {
    // espacio entre el borde y las letras
    padding: '20px',
    border: 'solid 1px #dcdcdc',
    // se anima el box shadow y el color del borde al hacer focux
    transition: 'box-shadow 0.3s, border 0.3s',
    ':focus': {
      border: 'solid 1px #707070',
      'box-shadow': '0 0 5px 1px #969696'
    }
  },
  thick: {
    padding: '10px',
    border: 'solid 5px #c9c9c9',
    transition: 'border 0.3s',
    ':focus': {
      border: 'solid 5px #969696'
    }
  },
  double: {
    padding: '10px',
    border: 'solid 5px #c9c9c9',
    'box-shadow': 'inset 0 0 0 1px #707070',
    transition: 'box-shadow 0.3s, border 0.3s',
    ':focus': {
      border: 'solid 5px #969696'
    }
  },
  underline: {
    padding: '10px',
    border: 'none',
    'border-bottom': 'solid 2px #c9c9c9',
    transition: 'border 0.3s',
    ':focus': {
      'border-bottom': 'solid 2px #969696'
    }
  },
  inset: {
    padding: '10px',
    border: 'solid 1px #fff',
    'box-shadow': 'inset 1px 1px 2px 0 #707070',
    transition: 'box-shadow 0.3s',
    ':focus': {
      'box-shadow': 'inset 1px 1px 2px 0 #c9c9c9'
    }
  },
  placeholder: {
    // espacio entre el borde y las letras
    padding: '20px',
    border: 'solid 1px #dcdcdc',
    // se anima el box shadow y el color del borde al hacer focus
    transition: 'box-shadow 0.3s, border 0.3s',
    ':focus': {
      border: 'solid 1px #707070',
      'box-shadow': '0 0 5px 1px #969696'
    },
    // afecta solo al texto del placeholder
    '::placeholder': {
      color: 'pink'
    },
    // afecta al elemento mientras se esté mostrando el placeholder
    ':placeholder-shown': {
      border: 'solid 1px #D82614'
    }
  }
})

export default [InputGlow, InputThick, InputDouble, InputUnderline, InputInset,
  PlaceHolder]
