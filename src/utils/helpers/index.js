export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
export const wait = time => new Promise(resolve => setTimeout(resolve, time))
export const resetContainers = () => {
  document
    .querySelectorAll('.container')
    .forEach(container => {
      container.innerHTML = ''
      container.removeAttribute('data-typer')
    })
}
