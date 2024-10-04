import classNames from 'classnames';
import styles from './raw-icon.module.scss';

export interface RawIconProps {
    className?: string;
    appendix?: string;
    style?: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const RawIcon = ({ className, appendix = "github", style }: RawIconProps) => {
    const base = 'https://cdn.simpleicons.org/';
    return <img
                    src={base + appendix}
                    className={className}
                    style={style}
                />;
};
