import { createBoard } from '@wixc3/react-board';
import { RawIcon } from '../../../components/raw-icon/raw-icon';

export default createBoard({
    name: 'RawIcon',
    Board: () => <RawIcon />,
    isSnippet: true,
});