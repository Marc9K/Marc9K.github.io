import { createBoard } from '@wixc3/react-board';
import { SimpleIcon } from '../../../components/simple-icon/simple-icon';

export default createBoard({
    name: 'SimpleIcon',
    Board: () => <SimpleIcon />,
    isSnippet: true,
});