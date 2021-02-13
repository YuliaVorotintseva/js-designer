const model = [
    {
        type: 'title',
        value: 'Hello!'
    },
    {
        type: 'text',
        value: 'some text'
    },
    {
        type: 'columns',
        value: [
            '111111111111111',
            '222222222222222',
            '333333333333333'
        ]
    },
    {
        type: 'image',
        value: './assets/DavidBowie.jpg'
    }
]

const getTitle = block => `
    <div class="row">
        <div class="col-sm">
            <h1>${block.value}</h1>
        </div>
    </div>
`

const getText = block => `
    <div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>
`

const getColumns = block => `
    <div class="row">
        ${[...block.value].map(item => `<div class="col-sm">${item}</div>`).join('')}
    </div>
`

const getImage = block => `
    <div class="row">
        <img src="${block.value}" />
    </div>
`

const $site = document.querySelector('#site')
model.forEach(block => {
    let html = ``
    
    switch(block.type){
        case 'title':
            html = getTitle(block)
            break
        case 'text':
            html = getText(block)
            break
        case 'columns':
            html = getColumns(block)
            break
        case 'image':
            html = getImage(block)
            break
    }

    $site.insertAdjacentHTML('beforeend', html)
})
