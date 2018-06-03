import React, { Component } from 'react'
import { connect } from 'react-redux'
import { menuItems } from 'utils/constants'
import { demoItemChange, togglePlay, enableControls } from 'actions'
import { wait } from 'helpers'


const itemCls = 'item tc radius-0-5 pa3 pointer'
const activeCls = `${itemCls} bg-lime black`
const disabledCls = itemCls.replace('pointer', 'not-allowed white-30')
const cntrlCls = 'pointer ba-1px control'

class Controls extends Component {
  constructor(props) {
    super(props)
    this.state = { opacityNum: 0 }
  }

  async componentDidMount() {
    const panes = document.querySelectorAll('#explanation, #example')

    await wait(100)

    // Fade-in the controls-container (our React portion of the app).
    this.setState({ opacityNum: 100 })

    // Fade in the demo container.
    const container = document.querySelector('#typer-demo-container')
    container.classList.remove('o-0')
    container.classList.add('o-100')

    // Extend the panes vertically.
    await wait(500)
    panes.forEach((pane, i) => {
      pane.classList.remove('h-0')
      pane.classList.add(`h-${i ? 66 : 34}`)
      pane.classList.add('pv3')
    })

    // Extend the panes horizontally
    await wait(500)
    panes.forEach(pane => {
      pane.classList.remove('w-0')
      pane.classList.add('w-100')
    })

    // Enable the controls.
    await wait(500)
    this.props.enable()

    // Start the demonstration.
    await wait(200)
    this.props.prev(true, 1)
  }

  render() {
    const { demoItem, index, playing, prev, playStop, next, changeItem, enabled } = this.props
    const { opacityNum } = this.state
    const buttonCls = `${cntrlCls}${enabled ? '' : ' white-30 not-allowed'}`

    return (
      <div className={`controls-container o-${opacityNum}`}>
        {/* MENU ITEMS (desktop) */}
        <div className='df dn-m justify-between no-select mb4 white-70 ph6-t'>
          {
            menuItems.map((item, i) => (
              <div
                key={item}
                onClick={() => changeItem(enabled, i, index)}
                className={!enabled ? disabledCls : item === demoItem ? activeCls : itemCls}
              >
                {item}
              </div>
            ))
          }
        </div>

        {/* CONTROLS (& mobile menu items) */}
        <div className='tc tl-m no-select df-m'>
          <div>
            <button className={`${buttonCls} pr4`} onClick={() => prev(enabled, index)}>〈</button>
            <button
              className={`${buttonCls} play-stop mh3`}
              onClick={() => playStop(enabled)}
            >
              {playing ? '◼' : '▶'}
            </button>
            <button className={`${buttonCls} pl4`} onClick={() => next(enabled, index)}>〉</button>
          </div>

          {/* MENU ITEMS (mobile) */}
          <div className='b dn df-m flex-grow-1 align-items-center justify-center'>
            <span className={enabled ? '' : 'white-70'}>{demoItem}</span>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ app }) => ({
  enabled: app.controlsEnabled,
  demoItem: app.demoItem,
  index: app.index,
  playing: app.playing
})

const mapDispatchToProps = dispatch => ({
  enable: () => dispatch(enableControls()),
  prev: (enabled, index) => enabled && index && dispatch(demoItemChange(index - 1)),
  playStop: enabled => enabled && dispatch(togglePlay()),
  next: (enabled, index) => {
    if (!enabled || index === menuItems.length - 1) return
    dispatch(demoItemChange(index + 1))
  },
  changeItem: (enabled, newIndex, currentIndex) => {
    if (!enabled || newIndex === currentIndex) return
    dispatch(demoItemChange(newIndex))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
