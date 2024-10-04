import { createBoard } from '@wixc3/react-board';
import { Projects } from '../../../components/projects/projects';

export default createBoard({
    name: 'Projects',
    Board: () => <Projects />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 1034.6970954356848,
    },
});
