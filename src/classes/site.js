export default class Site {
    constructor(selector) {
        this.$site = document.querySelector(selector)
    }

    render = model => {
        this.$site.innerHTML = ''
        model.forEach(block => this.$site.insertAdjacentHTML('beforeend', block.toHtml()))
    }
}
