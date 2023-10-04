import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBookOpen, faWrench, faFolderOpen, faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Navbar = () => {
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
                    <FontAwesomeIcon icon={faBookOpen} className='menu-list-icon' /><li>Overview</li>
                    <FontAwesomeIcon icon={faWrench} className='menu-list-icon' /><li>Skill</li>
                    <FontAwesomeIcon icon={faFolderOpen} className='menu-list-icon' /><li>Proejct</li>
                    <FontAwesomeIcon icon={faBriefcase} className='menu-list-icon' /><li>Work Experience</li>
                    <FontAwesomeIcon icon={faGraduationCap} className='menu-list-icon' /><li>Education</li>
                </ul>
            </div>
        </nav>
    )
}
