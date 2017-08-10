import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const CheckBoxHack = () => {
  return (
    <div >
      <label htmlFor='toggle-1' className={css(checkBoxHack['cssHack-label'])} >I'm
        a
        toggle</label >
      <input type='checkbox' id='toggle-1'
        className={css(checkBoxHack['cssHack-checkbox'])} />
      <div className={css(checkBoxHack['cssHack-div'])} >I'm controlled by
        toggle. No
        JavaScript!
      </div >
    </div >
  )
}
/*
  CHECKBOX HACK

  Se usa un label conectad a un checkbox mediante el atributo for y el id del
  checkbox.
  Con CSS se oculta el checkbox completamente, moviendolo fuera de la pagina con
  absolute position o poniendo su opacidad a 0.
  Aunque esté oculto, hacer click en el label sigue cambiando el valor del
  checkbox a true y false.
  Se usa adjacent sibling combinator, selector de hermano adyacente
  https://developer.mozilla.org/es/docs/Web/CSS/Selectores_hermanos_adyacentes
  para estilizar el <div> de forma diferente cuando esté checkeado y cuano no

  Ref: https://css-tricks.com/the-checkbox-hack/
 */
const checkBoxHack = StyleSheet.create({
  'cssHack-label': {
    appearance: 'push-button',
    display: 'inline-block',
    margin: '60px 0 10px 0',
    cursor: 'pointer'
  },
  'cssHack-checkbox': {
    position: 'absolute',
    top: '-9999px',
    left: '-9999px',
    ':checked ~ div': {
      background: 'red'
    }
  },
  'cssHack-div': {
    background: 'green',
    width: '400px',
    height: '100px',
    'line-height': '100px',
    color: 'white',
    'text-align': 'center'
  }
})

const CheckBoxOne = () => (
  <section >
    <h3 >Checkbox One</h3 >
    <div className={css(CheckBoxOneStyle.div)} >
      <input type='checkbox' value={1} id='checkboxOneInput' name=''
        className={css(CheckBoxOneStyle.checkbox)} />
      <label htmlFor='checkboxOneInput'
        className={css(CheckBoxOneStyle.label)} />
    </div >
  </section >
)
const CheckBoxOneStyle = StyleSheet.create({
  div: {
    width: '40px',
    height: '10px',
    background: '#555',
    margin: '20px 80px',
    position: 'relative',
    'border-radius': '3px'
  },
  checkbox: {
    visibility: 'hidden',
    ':checked ~ label': {
      left: '27px'
    }
  },
  label: {
    display: 'block',
    width: '16px',
    height: '16px',
    'border-radius': '50%',
    transition: 'all .5s ease',
    cursor: 'pointer',
    position: 'absolute',
    top: '-3px',
    left: '-3px',
    background: '#ccc'
  }
})

const Label = () => (
  <label className={css(labelStyle.label)} />
)

const labelStyle = StyleSheet.create({
  label: {
    display: 'block',
    width: '40px',
    height: '10px',
    background: '#555',
    margin: '20px 80px',
    position: 'relative',
    'border-radius': '3px'
  }
})

export default [CheckBoxHack, CheckBoxOne, Label]
