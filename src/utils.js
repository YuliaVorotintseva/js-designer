export const row = (content, styles="") => `
    <div class="row" style="${styles}">${content}</div>
`

export const col = content => `<div class="col-sm">${content}</div>`

export const css = styles => Object.keys(styles).map(
    key => `${key}: ${styles[key]}`
).join(';')
