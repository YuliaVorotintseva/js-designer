export const row = (content, styles="") => `
    <div class="row" style="${styles}">${content}</div>
`

export const col = content => `<div class="col-sm">${content}</div>`

export const css = styles => {
    if(typeof styles === 'string') return styles
    return Object.keys(styles).map(key => `${key}: ${styles[key]}`).join(';')
}

export const block = type => `
    <form name="${type}">
        <h5>${type}</h5>
        <div class="form-group form-add">
            <input class="form-control form-control-sm" name="value" placeholder="Value...">
        </div>
        <div class="form-group form-add">
            <input class="form-control form-control-sm" name="styles" placeholder="Styles...">
        </div>
        <button type="submit" class="btn btn-primary btn-sm form-add">ADD</button>
    </form>
    <hr />
`
