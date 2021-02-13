import {row, col} from './utils'

const title = block => row(col(`<h1>${block.value}</h1>`))

const text = block => row(col(`<p>${block.value}</p>`))

const columns = block => row([...block.value].map(col).join(''))

const image = block => row(`<img src="${block.value}" />`)

export const templates = {title, text, columns, image}
