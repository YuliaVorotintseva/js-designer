import Block from "./block";
import {row, css} from '../utils'

export default class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHtml = () => {
        const {alt = 'image', styles, imgStyles} = this.options
        return row(`<img src="${this.value}" style="${css(imgStyles)}" alt="${alt}" />`, css(styles))
    }
}
