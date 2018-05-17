import React, { Component } from 'react'
import { connect } from 'react-redux'
import Controls from 'components/Controls'
import typer from 'typer-js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  componentDidMount() {
    typer('#example .container')
      .line('Hello world!')
      .line('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, dolore, ad. Iusto numquam harum autem praesentium at, eum, neque beatae fugit officia aut doloribus eaque explicabo et illo! Quisquam, quaerat!')
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

    return <Controls />
  }
}

export default App
