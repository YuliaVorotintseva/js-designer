import Sidebar from './sidebar'
import Site from './site'

export default class App {
    constructor(model) {
        this.model = model
    }

    init() {
        const site = new Site('#site')
        site.render(this.model)

        new Sidebar('#panel', block => {
            this.model.push(block)
            site.render(this.model)
        })
    }
}