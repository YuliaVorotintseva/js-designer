import {block} from "../utils"
import TextBlock from "./text"
import TitleBlock from "./title"

export default class Sidebar {
    constructor(selector, update) {
        this.$bar = document.querySelector(selector)
        this.update = update
        this.init()
    }

    init() {
        this.$bar.insertAdjacentHTML('afterbegin', this.template)
        this.$bar.addEventListener('submit', this.add.bind(this))
    }

    get template() {
        return [
            block('title'),
            block('text')
        ].join('')
    }

    add(event) {
        event.preventDefault()

        let type = event.target.name
        let value = event.target.value.value
        let styles = event.target.styles.value

        const block = type === 'title'
            ? new TitleBlock(value, {styles})
            : new TextBlock(value, {styles})
        this.update(block)
        
        type = ''
        value = ''
        styles = ''
    }
}
