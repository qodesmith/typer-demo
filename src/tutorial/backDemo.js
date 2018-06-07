import typer from 'typer-js'
import { demoItemChange } from 'actions'
export default backDemo

function backDemo(dispatch, index) {
  typer('#explanation .container')
    .line('Back demo!')

  const previousExampleContents1 = [
    `typer(<span class="yellow">'.someClass'</span>, <span class="mediumorchid">100</span>)`
  ]
  const previousExampleContents2 = [
    `  .cursor({ block<span class="mediumorchid">: true</span>`,
    `, blink<span class="mediumorchid">:</span> <span class="yellow">'hard'</span> })`
  ].join('')
  const previousExampleContents3 = [
    `  .line(<span class="yellow">'Typer.js rules!'</span>, <span class="mediumorchid">100</span>)`
  ]

  typer('#example .container', 40)
    .cursor({ block: true, blink: 'hard' })
    .continue(previousExampleContents1, 1)
    .line([previousExampleContents2], 1)
    .line([previousExampleContents3], 1)
}
