import { createBoard } from '@wixc3/react-board';
import { IEducation, Education } from '../../../components/education/education';

const education: IEducation = {
    url: 'https://en.wikipedia.org/wiki/Novosibirsk_State_University',
    logo: 'https://english.nsu.ru/bitrix/templates/nsu/images/Logo_en_white-green.svg',
    title: 'Computer Science and Computer Engineering',
    level: 5,
    year: 2019,
    achievement: "Grade 8"
};

export default createBoard({
    name: 'Education',
    Board: () => <Education education={education} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 412,
        windowHeight: 915,
    },
});
