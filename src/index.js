import React from 'react'
import ReactDOM from 'react-dom'
import './style/main.css'
import { StyleSheet, css } from 'aphrodite/no-important'

import InputsText from './components/input-text'
import InputsEmail from './components/input-email'

let root = document.createElement('div')
root.setAttribute('id', 'root')
document.body.appendChild(root)

const HolaComponent = () => (
  <div id='grid-container' className={css(styles.container)} >
    <header className={css([styles['item-a'], styles.backGrey])} />
    <div className={css(styles['item-inputText-text'])} ><p >Input
      type="text"</p ></div >
    <div
      className={css([styles['item-inputText'], styles.inputFlexboxContainer])} >
      {InputsText.map((MyInput, index, arr) => {
        return (
          <div key={index}
            className={++index !== arr.length
              ? css(styles.espacioTop)
              : css([styles.espacioTop, styles.espacioDown])} >
            <MyInput />
          </div >)
      })}
    </div >

    <div className={css([styles.itemSeparator, styles.backGrey])} />

    <div className={css(styles['item-inputEmail-text'])} ><p >Input
      type="email"</p ></div >
    <div
      className={css([styles['item-inputEmail'], styles.inputFlexboxContainer])} >
      {InputsEmail.map((MyInput, index, arr) => {
        return (
          <div key={index}
            className={++index !== arr.length
             ? css(styles.espacioTop)
             : css([styles.espacioTop, styles.espacioDown])} >
            <MyInput />
          </div >)
      })}
    </div >

    <footer className={css([styles['item-d'], styles.backGrey])} />
  </div >
)

const styles = StyleSheet.create({
  backBlue: {
    'background-color': 'blue'
  },
  backYellow: {
    'background-color': 'yellow'
  },
  backGrey: {
    'background-color': 'grey'
  },
  backRed: {
    'background-color': 'red'
  },
  backGreen: {
    'background-color': 'green'
  },
  'item-a': {
    'grid-area': 'header'
  },
  'item-inputText': {
    'grid-area': 'item-inputText',
    'justify-self': 'center',
    'margin': 'auto'
  },
  'item-inputText-text': {
    'grid-area': 'item-inputText-text'
  },
  'item-inputEmail': {
    'grid-area': 'item-inputEmail',
    'justify-self': 'center',
    'margin': 'auto'
  },
  'item-inputEmail-text': {
    'grid-area': 'item-inputEmail-text'
  },

  'item-d': {
    'grid-area': 'footer'
  },

  itemSeparator: {
    'grid-area': 'separator'
  },

  espacioTop: {
    // margin para que quede espacio entre los inputs
    marginTop: '1em'
  },

  espacioDown: {
    // margin para que quede espacio entre los inputs
    marginBottom: '1em'
  },

  inputFlexboxContainer: {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-around'
  },

  container: {
    display: 'grid',
    'grid-template-columns': '10% 90%',
    'grid-template-rows': '100px auto 15px auto 100px',
    'grid-template-areas': `"header header"
                           "item-inputText-text item-inputText"
                           "separator separator"
                           "item-inputEmail-text item-inputEmail"
                           "footer footer"`
  }
})

ReactDOM.render(<HolaComponent />, document.getElementById('root'))
