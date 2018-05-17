import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { menuItems } from 'utils/constants'
import { demoItemChange, togglePlay } from 'actions'


const style = { width: `calc(100% / ${menuItems.length})` }
const itemCls = 'item tc radius-0-5 pa3 pointer'
const activeCls = 'bg-lime black fw4'
const cntrlCls = 'pointer ba-1px control'

const Controls = ({ demoItem, index, playing, prev, playStop, next, changeItem }) => (
  <Fragment>

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
        onClick={() => playStop(playing, index)}
      >
        {playing ? '◼' : '▶'}
      </button>
      <button className={`${cntrlCls} pl4`} onClick={() => next(index)}>〉</button>
    </div>
  </Fragment>
)

const mapStateToProps = ({ app }) => ({
  demoItem: app.demoItem,
  index: app.index,
  playing: app.playing
})

const mapDispatchToProps = dispatch => ({
  prev: index => {
    if (index === null) return dispatch(demoItemChange(0))
    if (!index) return
    dispatch(demoItemChange(index - 1))
  },
  playStop: (playing, index) => {
    if (index === null) dispatch(demoItemChange(0))
    dispatch(togglePlay(!playing))
  },
  next: index => {
    if (index === null) return dispatch(demoItemChange(0))
    if (index === menuItems.length - 1) return
    dispatch(demoItemChange(index + 1))
  },
  changeItem: (newIndex, currentIndex) => {
    if (newIndex === currentIndex) return
    dispatch(demoItemChange(newIndex))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
