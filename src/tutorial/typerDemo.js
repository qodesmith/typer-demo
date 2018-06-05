import typer from 'typer-js'
import { demoItemChange } from 'actions'
export default typerDemo

function typerDemo(dispatch, index) {
  const doc = '<span class="i darkturquoise">document</span>'
  const dot = '<span class="deeppink">.</span>'
  const qs = '<span class="darkturquoise">querySelector</span>'

  typer('#explanation .container')
    .line()
    .pause(1000)
    .continue('Welcome to the <span class="lime fw5">Typer.js</span> demonstration!')
    .pause(1200)
    .back(14, 40)
    .continue('tutorial.')
    .pause(1000)
    .back(9, 50)
    .continue('explanation of all-the-things!')
    .pause(1200)
    .back('all', 10)
    .continue("<span class='lime'>Typer</span> is a JavaScript <em>typing</em> library")
    .line('that will wow all your friends and make you famous.')
    .pause(1000)
    .empty()
    .continue("Let's get started.")
    .pause(1000)
    .back('all', 10)
    .continue('<span class="lime">Typer</span> has <strong class="u i">no dependencies</strong>.')
    .pause()
    .line('Slap it on your page and go.')
    .pause(1000)
    .empty()
    .continue("<span class='lime'>Typer</span> itself takes two arguments.")
    .pause()
    .line('The 1st argument is any valid CSS selector:')
    .emit('typer-1')
    .listen('typer-2')
    .empty()
    .continue('The 1st argument can also be a DOM element:')
    .emit('typer-2a')
    .listen('typer-2b')
    .back('all', 10)
    .continue(`But let's stick with a string selector for now.`)
    .emit('typer-2c')
    .listen('typer-2d')
    .empty()
    .continue('The 2nd argument is a speed - milliseconds / character typed:')
    .emit('typer-3')
    .listen('typer-4')
    .pause(1500)
    .empty()
    .continue('The speed is optional.')
    .pause()
    .line('If no speed is given, <span class="lime">Typer</span> will default to a speed of 70.')
    .pause(2000)
    .empty()
    .continue(`With the speed argument, there's some fancy things we can do.`)
    .pause(1000)
    .line('If you provide an object, we can take advantage of')
    .line('<span class="b">min</span> and <span class="b">max</span> values:')
    .emit('typer-5')
    .listen('typer-6')
    .empty()
    .continue('With <span class="b">min</span> and <span class="b">max</span> values')
    .line(`we're able to simulate humanized typing.`)
    .pause(1000)
    .continue(' For example:')
    .pause()
    .line('This line is being typed with a <span class="b">min</span> of 20 and a <span class="b">max</span> of 350.', { min: 20, max: 350 })
    .pause(2000)
    .empty()
    .continue('For our example,')
    .line(`we'll stick with using a number for speed:`)
    .emit('typer-7')
    .listen('typer-8')
    .pause(2000)
    .empty()
    .run(() => dispatch(demoItemChange(index + 1)))

  typer('#example .container', 40)
    .cursor({ block: true, blink: 'hard' })
    .line()
    .listen('typer-1')
    .continue(`typer(<span class="yellow">'.someClass'</span>`)
    .pause(1500)
    .back(-6, 10)
    .continue(`<span class="yellow">'#some-id'</span>`)
    .pause(1500)
    .back(-6, 10)
    .continue(`<span class="yellow">'.class1 .class2'</span>`)
    .pause(1500)
    .back(-6, 10)
    .continue(`<span class="yellow">'#so-on.andSoForth'</span>`)
    .pause(1500)
    .back(-6, 10)
    .continue(`<span class="yellow">'.someClass'</span>`)
    .emit('typer-2')
    .listen('typer-2a')
    .back(-6, 10)
    .continue(`${doc}${dot}body`)
    .pause(1500)
    .back(-6, 10)
    .continue(`${doc}${dot}${qs}(<span class="yellow">'div'</span>)`)
    .pause(1500)
    .back('all', 10)
    .continue(`<span class="i darkturquoise">const</span> el <span class="deeppink">=</span> ${doc}${dot}${qs}(<span class="yellow">'.someClass'</span>)`)
    .line(`typer(el`)
    .pause(1500)
    .emit('typer-2b')
    .listen('typer-2c')
    .empty()
    .continue(`typer(<span class="yellow">'.someClass'</span>`)
    .pause(1500)
    .emit('typer-2d')
    .listen('typer-3')
    .continue(', <span class="mediumorchid">100</span>)')
    .emit('typer-4')
    .listen('typer-5')
    .back(4)
    .continue('{ min<span class="mediumorchid">: 20</span>, max<span class="mediumorchid">: 350</span> })')
    .pause(1500)
    .emit('typer-6')
    .listen('typer-7')
    .back(22, 10)
    .continue('<span class="mediumorchid">100</span>)')
    .emit('typer-8')
}
