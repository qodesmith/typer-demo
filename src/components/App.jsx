import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Matrix
} from 'components/TyperDemoViews'

const views = {
  Matrix
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  componentWillMount() {
    document.body.className = 'bg-black-80 fw1 white-80'
  }

  // React error handling!
  componentDidCatch(error) {
    this.setState({ error })
    console.log(error)
  }

  render() {
    if (this.state.error) {
      return (
        <div className='w-50 w-100-m ph3'>
          <h2>Uh oh!</h2>
          <p>Looks like the client has encountered a problem.</p>
          <p>
            Please refresh your browser and try again.
            If this issue persists, scream and run around like you're on fire.
            Or, check the console and see what was logged. I mean either one is fine.
          </p>
        </div>
      )
    }

    const View = views[this.props.demoItem]

    return <View />
  }
}

const mapStateToProps = ({ app }) => ({ demoItem: app.demoItem })

export default connect(mapStateToProps)(App)
