import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBookOpen, faWrench, faFolderOpen, faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    const [selectedItem, setSelectedItem] = useState('');

    return (
        <nav className='nav-bar'>
            <div className='app-header-global'>
                <span className='menu-icon-wrapper'>
                    <FontAwesomeIcon icon={faBars} className='hamburger-icon' />
                </span>
                <FontAwesomeIcon icon={faGithub} className='github-icon' />
                <span className='name-tag'>
                    원지현 / 프론트엔드 개발자
                </span>
            </div>
            <div className='app-header-local'>
                <ul>
                    <li onClick={() => setSelectedItem('overview')} className={selectedItem === 'overview' ? 'selected' : ''}><Link to="/"><FontAwesomeIcon icon={faBookOpen} className='menu-list-icon' />Overview</Link></li>
                    <li onClick={() => setSelectedItem('skill')} className={selectedItem === 'skill' ? 'selected' : ''}><Link to="/skill"><FontAwesomeIcon icon={faWrench} className='menu-list-icon' />Skill</Link></li>
                    <li onClick={() => setSelectedItem('project')} className={selectedItem === 'project' ? 'selected' : ''}><Link to="/project"><FontAwesomeIcon icon={faFolderOpen} className='menu-list-icon' />Project</Link></li>
                    <li onClick={() => setSelectedItem('work')} className={selectedItem === 'work' ? 'selected' : ''}><Link to="/work"><FontAwesomeIcon icon={faBriefcase} className='menu-list-icon' />Work Experience</Link></li>
                    <li onClick={() => setSelectedItem('education')} className={selectedItem === 'education' ? 'selected' : ''}><Link to="/education"><FontAwesomeIcon icon={faGraduationCap} className='menu-list-icon' />Education</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;