import classNames from 'classnames';
import styles from './education.module.scss';

export interface EducationProps {
    className?: string;
    education?: IEducation;
}

export interface IEducation {
    logo: string;
    title: string;
    level: number;
    year: number;
    url: string;
    achievement?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Education = ({ className, education }: EducationProps) => {
    if (!education) {
        return <></>;
    }
    return (
        <div className={classNames(styles.root, className)}>
            <div className="row">
                <a href={education.url}>
                    <img src={education.logo} className={styles.logo} />
                </a>
                <div className={styles.info}>
                    <h5 className={styles.data}>{education.title}</h5>
                    <div className="row">
                        <p className={classNames(styles.data, styles.description)}>
                            {education.year}
                        </p>
                        <p className={classNames(styles.data, styles.description)}>-</p>
                        <p className={classNames(styles.data, styles.description)}>
                            Level {education.level}
                        </p>
                        {education.achievement && (
                            <div className="row">
                                <p className={classNames(styles.data, styles.description)}>-</p>
                                <p className={classNames(styles.data, styles.description)}>
                                    {education.achievement}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
