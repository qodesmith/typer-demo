import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuItems } from 'utils/constants'
import { demoItemChange, togglePlay } from 'actions'


const style = { width: `calc(100% / ${menuItems.length})` }
const itemCls = 'item tc radius-0-5 pa3 pointer'
const activeCls = 'bg-lime black fw4'
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

    return (
      <div className={`controls-container o-${opacityNum}`}>
        {/* MENU ITEMS */}
        <div className='df no-select mb4 white-70'>
          {
            menuItems.map((item, i) => (
              <div
                key={item}
                style={style}
                onClick={() => changeItem(i, index)}
                className={item === demoItem ? `${itemCls} ${activeCls}` : itemCls}
              >
                {item}
              </div>
            ))
          }
        </div>

        {/* CONTROLS */}
        <div className='tc no-select'>
          <button className={`${cntrlCls} pr4`} onClick={() => prev(index)}>〈</button>
          <button
            className={`${cntrlCls} play-stop mh3`}
            onClick={() => playStop(playing)}
          >
            {playing ? '◼' : '▶'}
          </button>
          <button className={`${cntrlCls} pl4`} onClick={() => next(index)}>〉</button>
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
  prev: index => index && dispatch(demoItemChange(index - 1)),
  playStop: playing => dispatch(togglePlay(!playing)),
  next: index => {
    if (index === menuItems.length - 1) return
    dispatch(demoItemChange(index + 1))
  },
  changeItem: (newIndex, currentIndex) => {
    if (newIndex === currentIndex) return
    dispatch(demoItemChange(newIndex))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
