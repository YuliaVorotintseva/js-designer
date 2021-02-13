import image from './assets/galaxy.jpg'

export const model = [
    {type: 'title', value: 'SITE DESIGNER', options: {
        tag: 'h1',
        styles: {
            background: 'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)',
            color: 'white',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }},
    {type: 'text', value: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptas facilis officia sapiente excepturi assumenda rem velit earum maiores inventore deleniti qui dolor harum expedita aspernatur dolorem, ut fugiat. Ab.', options: {
        tag: 'p',
        styles: {
            padding: '1.5rem',
            'font-size': '24px'
        }
    }},
    {type: 'columns',value: [
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptas facilis officia sapiente excepturi assumenda rem velit earum maiores inventore deleniti qui dolor harum expedita aspernatur dolorem, ut fugiat. Ab.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptas facilis officia sapiente excepturi assumenda rem velit earum maiores inventore deleniti qui dolor harum expedita aspernatur dolorem, ut fugiat. Ab.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptas facilis officia sapiente excepturi assumenda rem velit earum maiores inventore deleniti qui dolor harum expedita aspernatur dolorem, ut fugiat. Ab.'
    ], options: {
        styles: {
            background: 'white',
            padding: '1.5rem',
            'font-size': '16px'
        }
    }},
    {type: 'image', value: image, options: {
        alt: 'galaxy', styles: {
            'justify-content': 'center',
            padding: '1rem',
        }, imgStyles: {
            width: '500px',
            height: 'auto',
        }
    }}
]
