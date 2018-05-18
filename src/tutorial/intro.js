import typer from 'typer-js'
import { demoItemChange } from 'actions'
export default intro


function intro(dispatch, demoPanes) {
  const demoContainer = document.querySelector('#typer-demo-container')
  const origCls = demoContainer.className
  demoContainer.className = `${origCls} align-items-center justify-center lime mono`

  typer(demoContainer).line('test')
}
