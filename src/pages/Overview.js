import React from 'react'
import LayoutSidebar from '../component/LayoutSidebar';
import TimeTable from '../component/TimeTable';
import ProjectCard from '../component/ProjectCards';

const Overview = () => {

    return (
        <>
            <LayoutSidebar />
            <div className='layout-main'>
                <ProjectCard />
                <TimeTable />
            </div>
        </>
    )
}

export default Overview;