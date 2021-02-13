import Block from "./block";
import {row, col, css} from '../utils'

export default class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHtml = () => {
        const {tag = 'p', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}
