import React from 'react'
import LayoutSidebar from '../component/LayoutSidebar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Overview = () => {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const SquareSpan = () => <span></span>;

    const rows = 7;
    const columns = 52;
    const spans = [];

    for (let i = 0; i < rows * columns; i++) {
        spans.push(<SquareSpan key={i} />);
    }

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

                <div className='timeline-box'>
                    <div className='overview-title'>Timeline</div>
                    <div className='timeline-wrapper'>
                        <table className='timeline-table'>
                            <thead className='timeline-month'>
                                <tr>
                                    {months.map(month => <th key={month}>{month}</th>)}
                                </tr>
                            </thead>
                            <tbody className='timeline'>
                                {spans}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview;