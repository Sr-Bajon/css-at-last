import React from 'react'
import ReactDOM from 'react-dom'
import './style/main.css'
import { StyleSheet, css } from 'aphrodite/no-important'

import InputsStudy from './components/input-study'

console.log(InputsStudy)

let root = document.createElement('div')
root.setAttribute('id', 'root')
document.body.appendChild(root)

const HolaComponent = () => (
  <div id='grid-container' className={css(styles.container)} >
    <header className={css([styles['item-a'], styles.backGrey])} />
    <div className={css(styles['item-c'])} ><p >Input type="text"</p ></div >
    <div className={css([styles['item-b'], styles.inputFlexboxContainer])} >
      {InputsStudy.map((MyInput, index, arr) => {
        return (
          <div
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
  'item-b': {
    'grid-area': 'main',
    'justify-self': 'center',
    'margin': 'auto'
  },
  'item-c': {
    'grid-area': 'text'
  },

  'item-d': {
    'grid-area': 'footer'
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
    // 'grid-template-columns': '200px 200px 200px 200px',
    'grid-template-columns': '10% 90%',
    'grid-template-rows': '100px auto 100px',
    'grid-template-areas': `"header header"
                           "text main"
                           "footer footer"`
  }
})

ReactDOM.render(<HolaComponent />, document.getElementById('root'))
