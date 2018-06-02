import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuItems } from 'utils/constants'
import { demoItemChange, togglePlay } from 'actions'


const itemCls = 'item tc radius-0-5 pa3 pointer'
const activeCls = `${itemCls} bg-lime black fw4`
const disabledCls = itemCls.replace('pointer', 'not-allowed')
const cntrlCls = 'pointer ba-1px control'

class Controls extends Component {
  constructor(props) {
    super(props)
    this.state = { opacityNum: 0 }
  }

  componentDidMount() {
    const panes = document.querySelectorAll('#explanation, #example')

    setTimeout(() => {
      // Fade-in the controls-container (our React portion of the app).
      this.setState({ opacityNum: 100 })

      // Fade in the demo container.
      const container = document.querySelector('#typer-demo-container')
      container.classList.remove('o-0')
      container.classList.add('o-100')

      // Extend the panes vertically.
      setTimeout(() => {
        panes.forEach((pane, i) => {
          pane.classList.remove('h-0')
          pane.classList.add(`h-${i ? 66 : 34}`)
          pane.classList.add('pv3')
        })

        // Extend the panes horizontally
        setTimeout(() => {
          panes.forEach(pane => {
            pane.classList.remove('w-0')
            pane.classList.add('w-100')
          })
        }, 500)
      }, 500)
    }, 100)
  }

  render() {
    const { demoItem, index, playing, prev, playStop, next, changeItem } = this.props
    const { opacityNum } = this.state
    const clickable = false
    const buttonCls = `${cntrlCls}${clickable ? '' : ' white-70 not-allowed'}`

    return (
      <div className={`controls-container o-${opacityNum}`}>
        <div className='df dn-m justify-between no-select mb4 white-70 ph6-t'>
          {
            menuItems.map((item, i) => (
              <div
                key={item}
                onClick={() => changeItem(clickable, i, index)}
                className={!clickable ? disabledCls : item === demoItem ? activeCls : itemCls}
              >
                {item}
              </div>
            ))
          }
        </div>

        <div className='tc tl-m no-select df-m'>
          <div>
            <button className={`${buttonCls} pr4`} onClick={() => prev(clickable, index)}>〈</button>
            <button
              className={`${buttonCls} play-stop mh3`}
              onClick={() => playStop(clickable)}
            >
              {playing ? '◼' : '▶'}
            </button>
            <button className={`${buttonCls} pl4`} onClick={() => next(clickable, index)}>〉</button>
          </div>
          <div className='b dn df-m flex-grow-1 align-items-center justify-center'>
            <span className={!clickable && 'white-70'}>{demoItem}</span>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ app }) => ({
  demoItem: app.demoItem,
  index: app.index,
  playing: app.playing
})

const mapDispatchToProps = dispatch => ({
  prev: (clickable, index) => clickable && index && dispatch(demoItemChange(index - 1)),
  playStop: clickable => clickable && dispatch(togglePlay()),
  next: (clickable, index) => {
    if (!clickable || index === menuItems.length - 1) return
    dispatch(demoItemChange(index + 1))
  },
  changeItem: (clickable, newIndex, currentIndex) => {
    if (!clickable || newIndex === currentIndex) return
    dispatch(demoItemChange(newIndex))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
