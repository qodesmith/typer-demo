import typer from 'typer-js'
import { demoItemChange } from 'actions'
export default typerDemo

window.typer = typer

function typerDemo() {
  return
  typerDemoExample()

  typer('#explanation .container')
    .line()
    .pause(1000)
    .continue('Welcome to the <span class="lime fw5">Typer.js</span> demonstration!')
    .pause(1200)
    .back(14, 40)
    .continue('tutorial.')
    .pause(1000)
    .back(9, 50)
    .continue('explanation-of-all-the-methods!')
    .pause(1200)
    .back('all', 10)
    .continue("<span class='lime'>Typer</span> is a JavaScript <em>typing</em> library")
    .line('that will wow all your friends and make you famous.')
    .pause(1000)
    .empty()
    .continue("Let's get started.")
    .pause(1000)
    .back('all', 10)
    .continue('<span class="lime">Typer</span> has <strong class="underline i">no dependencies</strong>.')
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
    .continue('The 2nd argument is a speed - milliseconds / character typed:')
    .emit('typer-3')
    .listen('typer-4')
    .pause(1500)
    .empty()
    .continue('The speed is optional.')
    .pause()
    .line('If no speed is given, <span class="lime">Typer</span> will default to a speed of 70.')
    .pause(1500)
}

function typerDemoExample() {
  typer('#example .container')
    .cursor({block: true, blink: 'hard'})
    .line()
    .listen('typer-1')
    .continue(`typer(<span class="yellow">'.someClass'</span>,`)
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
    .listen('typer-3')
    .continue(', <span class="purple">100</span>)')
    .emit('typer-4');
}