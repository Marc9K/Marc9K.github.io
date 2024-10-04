import classNames from 'classnames';
import styles from './cv.module.scss';
import { About } from '../about/about';
import { Projects } from '../projects/projects';
import { Footer } from '../footer/footer';

export interface CvProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CV = ({ className }: CvProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames('row', styles.about)}>
                <About full={false} />
                <Footer full={false} />
            </div>

            <Projects full={false} platforms={['iOS', 'macOS', 'WEB', 'Android™']} />
        </div>
    );
};
