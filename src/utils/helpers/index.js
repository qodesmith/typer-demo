export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
export const wait = time => new Promise(resolve => setTimeout(resolve, time))
