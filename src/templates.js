import {row, col, css} from './utils'

const title = block => {
    const {tag = 'h1', styles} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

const text = block => {
    const {tag = 'p', styles} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

const columns = block => row([...block.value].map(col).join(''), css(block.options.styles))

const image = block => {
    const {alt = 'image', styles, imgStyles} = block.options
    return row(`<img src="${block.value}" style="${css(imgStyles)}" alt="${alt}" />`, css(styles))
}

export const templates = {title, text, columns, image}
