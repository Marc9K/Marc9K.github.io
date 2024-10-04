import classNames from 'classnames';
import styles from './projects.module.scss';
import json from '../../assets/xp/xp.json';
import { Project } from '../project/project';
import { SimpleIcon } from '../simple-icon/simple-icon';
import { useEffect, useState } from 'react';
import { log } from 'console';

export interface ProjectsProps {
    className?: string;
    full?: boolean;
    platforms?: string[];
}

const uniquePlatforms = Array.from(
    json.xp
        .reduce((map, { platforms }) => {
            platforms.forEach(({ title, appendix }) => {
                if (!map.has(title)) {
                    map.set(title, { title, appendix });
                }
            });
            return map;
        }, new Map())
        .values()
);

// load json form src/assets/xp/xp.json into a xp object

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Projects = ({ className, full = true, platforms }: ProjectsProps) => {
    const [platform, setPlatform] = useState(0);

    const [queryParams, setQueryParams] = useState({});
    let plats: string[] = [];

    // useEffect(() => {
    //     // Parse the query string
    //     const searchParams = new URLSearchParams(window.location.search);
    //     const params = {};

    //     for (let param of searchParams.entries()) {
    //         const [key, value] = param;
    //         plats.push(value);
    //     }

    //     setQueryParams(params);
    // }, []);

    let xp = json.xp.sort((a, b) => b.year - a.year);
    if (platforms && platforms.length > 0) {
        xp = xp.filter((item) =>
            item.platforms.some(
                (platform) => platforms && platforms.some((required) => required == platform.title)
                // ||
                // plats.some((required) => required == platform.title)
            )
        );
    }
    return (
        <div className={styles.megaroot}>
            {/* <div className={classNames('row', styles.stack, styles.platforms)}>
                <SimpleIcon icon={{ title: 'all', appendix: ' ' }} />
                {uniquePlatforms.map((item, index) => (
                    <div key={index}>
                        <SimpleIcon icon={item} />
                    </div>
                ))}
            </div> */}
            <div className={classNames(styles.root, className)}>
                {/* for each elemnt of xp map a <Project /> */}
                {xp.map((project, index) => (
                    <Project full={full} key={index} project={project} />
                ))}
            </div>
        </div>
    );
};
