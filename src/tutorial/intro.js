import typer from 'typer-js'
import { demoItemChange } from 'actions'
import { randomNum } from 'helpers'
export default intro


function intro(dispatch, demoPanes) {
  const demoContainer = document.querySelector('#typer-demo-container')
  const origCls = demoContainer.className
  demoContainer.className = `${origCls} align-items-center justify-center lime matrix overflow-h`

  // 1. TYPE OUT THE MATRIX SCENE.
  typer(demoContainer)
    .cursor({ block: true, blink: 'hard' })
    .line()
    .pause(1000)
    .continue('Follow the white rabbit.')
    .pause(1600)
    .empty()
    .continue(['Knock', ' knock,'], 300)
    .continue([' Neo.'], 600)
    .pause(1000)
    .run(matrixToSpans)

  // 2. CONVERT EACH LETTER TO A SPAN.
  function matrixToSpans() {
    const currentTyper = document.querySelector('.typer')
    const contents = currentTyper.textContent
      .split('')
      .map(l => `<span class="white-space relative matrix-span dib">${l}</span>`)
      .join('')

    currentTyper.innerHTML = contents
    currentTyper.classList.add('relative')
    customTransitions(currentTyper)
  }

  // 3. APPLY A CUSTOM TRANSITION TO EACH SPAN.
  function customTransitions(currentTyper) {
    const spans = currentTyper.querySelectorAll('span')
    let largestNum = 0

    spans.forEach(span => {
      const xfmTime = randomNum(250, 350) / 100
      const topTime = randomNum(100, 150) / 100
      const leftTime = randomNum(150, 250) / 100

      // This value will be needed later for
      // the setTimeout time to begin the demo.
      if (topTime > largestNum) largestNum = topTime

      const xfm = `transform ${xfmTime}s cubic-bezier(.25,.46,0,1),`
      const top = `top ${topTime}s cubic-bezier(.9,-.99,1,.96),`
      const left = `left ${leftTime}s cubic-bezier(0,0,.5,1)`
      const transition = [xfm, top, left].join('')

      span.style.transition = transition
    })

    setTimeout(() => leftAndTransform(spans, largestNum, currentTyper), 50)
  }

  // 4. EXPLOSION: APPLY CUSTOM LEFT & TRANSFORM STYLES TO EACH SPAN.
  function leftAndTransform(spans, largestNum, currentTyper) {
    // Get rid of the cursor.
    currentTyper.classList.remove('typer')

    spans.forEach(span => {
      let degrees = randomNum(140, 360)
      degrees = degrees % 2 ? degrees * -1 : degrees

      span.style.left = `${randomNum(-20, 20)}vmax`
      span.style.transform = `rotate(${degrees}deg)`
      span.style.top = '60vh'
    })

    setTimeout(() => {
      removeMatrixShowDemo()
    }, largestNum * 2000)
  }

  // 5. START DEMO: REMOVE THE MATRIX ELEMENT, SHOW THE DEMO ELEMENTS, DISPATCH AN ACTION.
  function removeMatrixShowDemo() {
    demoContainer.className = `${origCls} o-0`
    setTimeout(() => {
      demoContainer.classList.add('ready')
      demoContainer.innerHTML = demoPanes
      dispatch(demoItemChange(0))
    }, 50)
  }
}
