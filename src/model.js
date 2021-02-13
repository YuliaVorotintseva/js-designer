import image from './assets/galaxy.jpg'
import ColumnsBlock from './classes/columns'
import ImageBlock from './classes/image'
import TextBlock from './classes/text'
import TitleBlock from './classes/title'

export const model = [
    new TitleBlock('SITE DESIGNER', {
        tag: 'h1',
        styles: {
            background: 'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)',
            color: 'white',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new TextBlock('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptas facilis officia sapiente excepturi assumenda rem velit earum maiores inventore deleniti qui dolor harum expedita aspernatur dolorem, ut fugiat. Ab.', {
        tag: 'p',
        styles: {
            padding: '1.5rem',
            'font-size': '24px'
        }
    }),
    new ColumnsBlock([
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptas facilis officia sapiente excepturi assumenda rem velit earum maiores inventore deleniti qui dolor harum expedita aspernatur dolorem, ut fugiat. Ab.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptas facilis officia sapiente excepturi assumenda rem velit earum maiores inventore deleniti qui dolor harum expedita aspernatur dolorem, ut fugiat. Ab.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptas facilis officia sapiente excepturi assumenda rem velit earum maiores inventore deleniti qui dolor harum expedita aspernatur dolorem, ut fugiat. Ab.'
    ], {
        styles: {
            background: 'white',
            padding: '1.5rem',
            'font-size': '16px'
        }
    }),
    new ImageBlock(image, {
        alt: 'galaxy', styles: {
            'justify-content': 'center',
            padding: '1rem',
        }, imgStyles: {
            width: '500px',
            height: 'auto',
        }
    })
]
