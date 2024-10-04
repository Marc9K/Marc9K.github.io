import '../../index.css';
import classNames from 'classnames';
import styles from './project.module.scss';
import type { Iconable } from '../simple-icon/simple-icon';
import { SimpleIcon } from '../simple-icon/simple-icon';

import { isMobile } from 'react-device-detect';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { RawIcon } from '../raw-icon/raw-icon';
import React from 'react';

export interface ProjectProps {
    className?: string;
    project: xp;
    full?: boolean;
}

export interface xp {
    title: string;
    year: number;
    team: number;
    platforms: Iconable[];
    stack: Iconable[];
    description: string;
    github?: string;
    testflight?: string;
    appStore?: string;
    macAppStore?: string;
    screenshots: {
        directory: string;
        quantity: number;
        format: string;
    };
}

const _renderItem = (item: string, index: number) => {
    return (
        <div className={styles.centered}>
            <img
                src={item}
                style={{
                    maxWidth: '100%',
                    maxHeight: '50vh',
                }}
            />
        </div>
    );
};

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
};

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Project = ({ className, project, full = true }: ProjectProps) => {
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, []);

    const exists =
        project.screenshots?.quantity &&
        project.screenshots?.directory &&
        project.screenshots?.format;
    let screenshots;
    if (full && exists && project.screenshots.quantity > 0) {
        screenshots = Array(project.screenshots.quantity)
            .fill(0)
            .map(
                (_: number, index: number) =>
                    '/' + project.screenshots.directory + (index + 1) + project.screenshots.format
            );
    }
    const row = width > 500;
    return (
        <div
            style={{ flexDirection: row ? 'row' : 'column' }}
            className={classNames(styles.root, className)}
        >
            {screenshots && (
                <div
                    style={{ maxWidth: row ? '30vw' : undefined, width: row ? undefined : '100vw' }}
                    className={styles.carousel}
                >
                    <Carousel responsive={responsive}>{screenshots.map(_renderItem)}</Carousel>
                </div>
            )}
            {/* carusel of all the photos from a src={} folder */}
            <div className={styles.text}>
                <div className={styles.title}>
                    {project.github && (
                        <a href={project.github}>
                            <RawIcon appendix={'github'} style={{ height: 25 }} />
                        </a>
                    )}
                    <h3>{project.title}</h3>
                </div>
                <div className={classNames('row', styles.stack)}>
                    {project.platforms.map((item, index) => (
                        <div key={index}>
                            <SimpleIcon icon={item} />
                        </div>
                    ))}
                </div>

                <div className={classNames('row', styles.stack)}>
                    {project.stack.map((item, index) => (
                        <div key={index}>
                            <SimpleIcon icon={item} />
                        </div>
                    ))}
                </div>
                <div className="row">
                    <em className={styles.description}>{project.year}</em>
                    {project.team > 1 && <span>{'\u00A0\u00A0'}👥 teamwork</span>}
                    {project.team == 1 && <span>{'\u00A0\u00A0'}👤 solo</span>}
                </div>
                <p
                    style={{
                        fontSize: row ? undefined : 12,
                        maxWidth: screenshots ? undefined : '100%',
                    }}
                    className={styles.description}
                >
                    {project.description}
                </p>

                {project.testflight && (
                    <a href={project.testflight}>
                        <p
                            style={{
                                maxWidth: screenshots ? undefined : '100%',
                            }}
                            className={styles.testflight}
                        >
                            Try on TestFlight
                        </p>
                    </a>
                )}
                <div className={styles.trailing}>
                    {project.appStore && (
                        <a href={project.appStore}>
                            <img src="/src/assets/logos/apple/1.svg" />
                        </a>
                    )}
                    {project.macAppStore && (
                        <a href={project.macAppStore}>
                            <img src="/src/assets/logos/apple/m1.svg" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
