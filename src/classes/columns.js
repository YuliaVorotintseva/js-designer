import Block from "./block";
import {row, col, css} from '../utils'

export default class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHtml = () => row([...this.value].map(col).join(''), css(this.options.styles))
}
