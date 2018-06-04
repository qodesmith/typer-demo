import typer from 'typer-js'
import { demoItemChange } from 'actions'
export default lineDemo

function lineDemo(dispatch, index) {
  typer('#explanation .container')
    .line('And now on to .line!')

  const previousExampleContents1 = [
    `typer(<span class="yellow">'.someClass'</span>, <span class="mediumorchid">100</span>)`
  ]
  const previousExampleContents2 = [
    `  .cursor({ block<span class="mediumorchid">: true</span>`,
    `, blink<span class="mediumorchid">:</span> <span class="yellow">'hard'</span> })`
  ].join('')

  typer('#example .container', 40)
    .cursor({ block: true, blink: 'hard' })

    // Populate with previous demo contents.
    .line(previousExampleContents1, 1)
    .line([previousExampleContents2], 1)
}
