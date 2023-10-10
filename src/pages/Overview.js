import React from 'react'
import LayoutSidebar from '../component/LayoutSidebar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Overview = () => {
    return (
        <>
            <LayoutSidebar />
            <div className='layout-main'>
                <div className='overview-title'>Project</div>
                <div className='projects-box'>
                    <ul>
                        <li className='project-box'>
                            <div className='project-title'>
                                <FontAwesomeIcon icon={faBook} className='project-icon' />
                                <a href='https://github.com/codestates-seb/seb40_main_008' target='_blank'>CLASS4989</a>
                            </div>
                            <div className='project-skill'>
                                <span className='skill-name'><span className='skill-color-black'></span>NextJS</span>
                                <span className='skill-name'><span className='skill-color-blue'></span>Typescript</span>
                            </div>
                        </li>
                        <li className='project-box'>
                            <div className='project-title'>
                                <FontAwesomeIcon icon={faBook} className='project-icon' />
                                <a href='https://github.com/wongee93/sorting_bars' target='_blank'>Sorting Bars</a>
                            </div>
                            <div className='project-skill'>
                                <span className='skill-name'><span className='skill-color-skyblue'></span>React</span>
                                <span className='skill-name'><span className='skill-color-purple'></span>Redux</span>
                                <span className='skill-name'><span className='skill-color-pink'></span>Styled Components</span>
                            </div>
                        </li>
                        <li className='project-box'>
                            <div className='project-title'>
                                <FontAwesomeIcon icon={faBook} className='project-icon' />
                                <a href='https://github.com/wongee93/Portfolio_wjh' target='_blank'>Jihyun's Portfolio</a>
                            </div>
                            <div className='project-skill'>
                                <span className='skill-name'><span className='skill-color-skyblue'></span>React</span>
                                <span className='skill-name'><span className='skill-color-yellow'></span>Javascript</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Overview;