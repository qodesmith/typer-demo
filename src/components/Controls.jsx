import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { menuItems } from 'utils/constants'
import { demoItemChange, togglePlay } from 'actions'


const style = { width: `calc(100% / ${menuItems.length})` }
const itemCls = 'tc radius-0-5 pa3 pointer'
const activeCls = 'bg-lime black b'

const Controls = ({ demoItem, index, playing, prev, playStop, next }) => {
  console.log(index)
  return (
    <Fragment>
      <div className='df no-select'>
        {
          menuItems.map(item => (
            <div
              key={item}
              style={style}
              className={item === demoItem ? `${itemCls} ${activeCls}` : itemCls}
            >
              {item}
            </div>
          ))
        }
      </div>
      <div className='tc no-select'>
        <div className='dib' onClick={() => prev(index)}>PREV</div>
        <div className='dib' onClick={() => playStop(playing)}>PLAY</div>
        <div className='dib' onClick={() => next(index)}>NEXT</div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = ({ app }) => ({
  demoItem: app.demoItem,
  index: app.index,
  playing: app.playing
})

const mapDispatchToProps = dispatch => ({
  prev: index => {
    if (!index) return
    dispatch(demoItemChange(index - 1))
  },
  playStop: playing => dispatch(togglePlay(!playing)),
  next: index => {
    if (index === menuItems.length - 1) return
    dispatch(demoItemChange(index + 1))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
