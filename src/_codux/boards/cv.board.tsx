import { createBoard } from '@wixc3/react-board';
import { CV } from '../../components/cv/cv';

export default createBoard({
    name: 'CV',
    Board: () => <CV />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
