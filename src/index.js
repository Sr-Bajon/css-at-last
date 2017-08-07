import React from 'react'
import ReactDOM from 'react-dom'
import './style/main.css'
import { StyleSheet, css } from 'aphrodite/no-important'

import InputStudy from './components/input-study'

let root = document.createElement('div')
root.setAttribute('id', 'root')
document.body.appendChild(root)

const HolaComponent = () => (
  <div id='grid-container' className={css(styles.container)}>
    <header className={css([styles['item-a'], styles.backGrey])} />
    <div className={css(styles['item-c'])}><p>Input type="text"</p></div>
    <div className={css([styles['item-b']])}>
      <InputStudy />
    </div>
    <footer className={css([styles['item-d'], styles.backGrey])} />
  </div>
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

  container: {
    display: 'grid',
    // 'grid-template-columns': '200px 200px 200px 200px',
    'grid-template-columns': '20% 80%',
    'grid-template-rows': '100px 100px 100px',
    'grid-template-areas': `"header header"
                           "text main"
                           "footer footer"`
  }
})

ReactDOM.render(<HolaComponent />, document.getElementById('root'))
