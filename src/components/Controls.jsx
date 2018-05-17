import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { menuItems } from 'utils/constants'


const style = { width: `calc(100% / ${menuItems.length})` }
const itemCls = 'tc radius-0-5 pa3 pointer'
const activeCls = 'bg-lime black b'

const Controls = ({ demoItem }) => {
  return (
    <Fragment>
      <div className='df'>
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
      <div className='tc'>
        <div className='dib'>PREV</div>
        <div className='dib'>PLAY</div>
        <div className='dib'>NEXT</div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = ({ app }) => ({ demoItem: app.demoItem })

export default connect(mapStateToProps)(Controls)
