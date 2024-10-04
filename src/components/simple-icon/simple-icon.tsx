import classNames from 'classnames';
import styles from './simple-icon.module.scss';
import firebaseLogo from '/src/assets/logos/firebase.svg';
import { RawIcon } from '../raw-icon/raw-icon';

export interface SimpleIconProps {
    className?: string;
    icon?: Iconable;
    color?: boolean;
}

export interface Iconable {
    title: string;
    appendix?: string;
    logo?: string;
    url?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SimpleIcon = ({
    className,
    icon = { title: 'firebase', logo: 'firebase' },
    color = true,
}: SimpleIconProps) => {
    const img = (
        <>
            {icon.appendix && icon.appendix.length > 1 && (
                <RawIcon
                    appendix={icon.appendix}
                    className={classNames(styles.icon, styles.iconImg)}
                />
            )}
            <span className={styles.iconText}>{icon.title}</span>
        </>
    );
    return (
        <div>
            {icon?.appendix && icon?.appendix?.length > 0 && (
                <>
                    {!icon?.url && <div className={classNames(styles.root, className)}>{img}</div>}
                    {icon.url && (
                        <a href={icon.url} className={classNames(styles.root, className)}>
                            {img}
                        </a>
                    )}
                </>
            )}
            {icon.logo && icon.logo?.length > 0 && (
                <a href={icon.url} className={styles.link}>
                    <img
                        className={classNames(styles.root, className)}
                        src={'/src/assets/logos/' + icon.logo + '.svg'}
                        alt={icon.title}
                        style={{ height: '17px' }}
                    />
                </a>
            )}
        </div>
    );
};
