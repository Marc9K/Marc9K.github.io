import { createBoard } from '@wixc3/react-board';
import { Project } from '../../../components/project/project';

const xp = {
    title: 'Team builder',
    year: 2022,
    team: 6,
    platforms: [
        {
            title: 'web',
            appendix: ' ',
        },
    ],
    stack: [
        {
            title: 'Blazor',
            appendix: 'blazor',
        },
        {
            title: 'C#',
            appendix: 'csharp',
        },
    ],
    description: `Implemented notification 
    `,
    github: 'https://github.com/Marc9K/GrowSystem',
    screenshots: {
        directory: 'grow/',
        quantity: 2,
        format: '.jpeg',
    },
};

export default createBoard({
    name: 'Project',
    Board: () => <Project project={xp} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        canvasHeight: 281,
    },
});
