import '../../index.css';
import classNames from 'classnames';
import styles from './footer.module.scss';
import { SimpleIcon } from '../simple-icon/simple-icon';
import { useLocation } from 'react-router-dom';

export interface FooterProps {
    className?: string;
    full?: boolean;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className, full = true }: FooterProps) => {
    const email = 'fin.gap0i@icloud.com';
    const phone = '+447774322780';
    const location = useLocation();
    const CVmode = location.pathname === '/cv';
    if (CVmode && full) {
        return <></>;
    }
    return (
        <div
            className={classNames(styles.root, className)}
            style={{ flexGrow: full ? undefined : '1', alignSelf: 'stretch' }}
        >
            <div className="limit">
                <div className={styles['main-points']}>
                    <div className="row">
                        <a href={`mailto:${email}`}>✉️ e-mail</a>
                        {!full && <a href={`mailto:${email}`}>{email}</a>}
                    </div>
                    <a href={`tel:${phone}`}>📞 please don't call me </a>
                </div>
                <div className={styles.socials}>
                    <a href={'https://github.com/Marc9K'} target="_blank" rel="noreferrer">
                        <SimpleIcon icon={{ title: 'GitHub', appendix: 'github' }} />
                    </a>
                    <a href={'www.linkedin.com/in/marc9k'} target="_blank" rel="noreferrer">
                        <SimpleIcon icon={{ title: 'LinkedIn', appendix: 'linkedin' }} />
                    </a>
                    <a
                        href={'https://profile.indeed.com/p/marck-z26vrsp'}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SimpleIcon icon={{ title: 'Indeed', appendix: 'indeed' }} />
                    </a>
                    <a href={'https://t.me/undefined_west'} target="_blank" rel="noreferrer">
                        <SimpleIcon icon={{ title: 'Telegram', appendix: 'telegram' }} />
                    </a>
                </div>
                📍 Lewisham, London
            </div>
        </div>
    );
};
