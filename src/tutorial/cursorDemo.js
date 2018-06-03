import typer from 'typer-js'
import { demoItemChange } from 'actions'
export default cursorDemo

function cursorDemo(dispatch, index) {
  typer('#explanation .container')
    .line('Now for our first method:')
    .pause(1000)
    .continue([' <span class="lime">cursor</span>!'])
    .pause(1300)
    .back('all', 10)
    .continue('<span class="lime">Typer</span> shows a cursor by default just like real typing.')
    .pause(1000)
    .line(['How exciting!'])
    .pause()
    .empty()
    .continue("While the <span class='lime'>cursor</span> method is completely <em>optional</em>,")
    .line('(<span class="lime">Typer</span> will use the default settings if it\'s not called),')
    .line("it's suggested that if used it be called first:")
    .pause(1000)
    .emit('cursor-1')
    .listen('cursor-2')
    .empty()
    .continue('The <span class="lime">cursor</span> method can take a few options.')
    .pause(1500)
    .back('all', 10)
    .continue('Option 1:')
    .pause()
    .continue(' no cursor at all!')
    .pause(1000)
    .line('This is a single argument passed to <span class="lime">cursor</span>:')
    .pause(1000)
    .continue(['<span class="mediumorchid mono"> false</span>'])
    .emit('cursor-3')

    .listen('cursor-4')
    .line("If you don't want a cursor at all,")
    .pause()
    .continue(' pass in <span class="mediumorchid mono">false</span>.')
    .pause(1500)
    .empty()
    .continue('Option 2: an object with some properties...')
    .emit('cursor-5')
    .listen('cursor-6')
    .back('all', 10)
    .continue('<strong>block</strong>')
    .pause()
    .line('By default, the cursor is the standard "line"')
    .pause(750)
    .continue([' &#8594;'])
    .pause(1500)
    .back('all', 10)
    .continue('By using <span class="mono">block: <span class="mediumorchid mono">true</span></span> below, we get the old-school style block:')
    .emit('cursor-7')
    .listen('cursor-8')
    .empty()
    .continue('<strong>blink</strong>')
    .line('This cursor has a soft blinking motion')
    .pause()
    .continue([' &#8594;'])
    .pause(1500)
    .back('all', 10)
    .continue('The cursor below has a binary (on/off) blinking motion:')
    .emit('cursor-9')
    .listen('cursor-10')
    .empty()
    .continue('<strong>color</strong>')
    .line('You can set the color of the cursor.')
    .run(function() {
      document.querySelector('.highlight.color').classList.add('show-border');
    })
    .pause(1000)
    .back('all', 10)
    .continue('If no color is specified, the cursor will default')
    .line('to the text color of the parent element.')
    .pause(1000)
    .empty()
    .continue(['<strong>color</strong'])
    .line('Feed it a named color, #hex, etc.')
    .run(function() {
      document.querySelector('.highlight.color').classList.remove('show-border');
    })
    .line('Any valid css color will do:')
    .emit('cursor-11')
    .listen('cursor-12')
    .empty()
    .continue('If you omit the cursor object <em>or</em> method altogether,')
    .line('the following default values will be used:')
    .pause()
    .line('<span class="mono">{block: <span class="mediumorchid mono">false</span>, blink: <span class="yellow">\'soft\'</span>}</span>')
    .line('and the color will be set to the parent elements\' text color.')
    .pause(1500)
    .emit('cursor-13')
    .listen('line-1')
    .run(function() {
      typerDemo.next('line');
    });

  const previousExampleContents = [`typer(<span class="yellow">'.someClass'</span>, <span class="mediumorchid">100</span>)`]

  typer('#example .container')
    .cursor({ block: true, blink: 'hard' })

    // Populate with previous demo contents.
    .line(previousExampleContents)

    .listen('cursor-1')
    .line('  .cursor()')
    .pause(1000)
    .emit('cursor-2')
    .listen('cursor-3')
    .back(1)
    .continue('<span class="mediumorchid">false</span>)')
    .pause(1000)
    .listen('dsdf')

    .emit('cursor-4')
    .listen('cursor-5')
    .back(6, 10)
    .continue('{<span class="highlight block">block: <span class="mediumorchid">true</span></span>, <span class="highlight blink">blink: <span class="yellow">\'hard\'</span></span>, <span class="highlight color">color: <span class="yellow">\'red\'</span></span>})')
    .pause(1500)
    .emit('cursor-6')
    .listen('cursor-7')
    .continue(['<span class="arrow-blink lime"> &#8594;</span>'])
    .run(function() {
      var arrow = document.querySelector('.arrow-blink');
      var hl = document.querySelector('.highlight.block');
      hl.classList.add('show-border');

      var times = 0;
      var blink = setInterval(function() {
        if (times % 2) {
          arrow.style.color = '';
        } else {
          arrow.style.color = 'transparent';
        }

        times++;
        if (times === 6) {
          clearInterval(blink);
          var e = new CustomEvent('done-blinking-block');
          document.body.dispatchEvent(e);
          hl.classList.remove('show-border');
        }
      }, 750);
    })
    .listen('done-blinking-block')
    .pause(1000)
    .back(2, 10)
    .emit('cursor-8')
    .listen('cursor-9')
    .continue(['<span class="arrow-blink lime"> &#8594;</span>'])
    .run(function() {
      var arrow = document.querySelector('.arrow-blink');
      var hl = document.querySelector('.highlight.blink');
      hl.classList.add('show-border');

      var times = 0;
      var blink = setInterval(function() {
        if (times % 2) {
          arrow.style.color = '';
        } else {
          arrow.style.color = 'transparent';
        }

        times++;
        if (times === 8) {
          clearInterval(blink);
          var e = new CustomEvent('done-blinking-blink');
          document.body.dispatchEvent(e);
          hl.classList.remove('show-border');
        }
      }, 750);
    })
    .listen('done-blinking-blink')
    .pause(1000)
    .back(2, 10)
    .emit('cursor-10')
    .listen('cursor-11')
    .back(6, 10)
    .continue('<span class="yellow">rgb(255, 0, 0)\'</span>})')
    .pause(1500)
    .back(17, 10)
    .continue('<span class="yellow">hsl(0, 100%, 50%)\'</span>})')
    .pause(1500)
    .back(20, 10)
    .continue('<span class="yellow">#ff0000\'</span>})')
    .pause(1500)
    .emit('cursor-12')
    .listen('cursor-13')
    .back(20, 10)
    .continue('})');
}
