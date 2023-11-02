import React, { useState } from 'react'
import LayoutSidebar from '../component/LayoutSidebar';
import TimeTable from '../component/TimeTable';
import ProjectCard from '../component/ProjectCards';
import HistoryTable from '../component/HistoryTable';

const Overview = () => {

    const [selectedYear, setSelectedYear] = useState(true);

    const handleYearButtonClick = (year) => {
        setSelectedYear(year);
    };

    return (
        <>
            <LayoutSidebar />
            <div className='layout-main'>
                <ProjectCard />
                <div className='activity-wrapper'>
                    <div className='activities'>
                        <TimeTable />
                        <HistoryTable />
                    </div>
                    <div className='year-btn-wrapper'>
                        <span className={`year-btn ${selectedYear ? 'year-btn-on' : 'year-btn-off'}`}
                            onClick={() => handleYearButtonClick(true)}>2023</span>
                        <span className={`year-btn ${!selectedYear ? 'year-btn-on' : 'year-btn-off'}`}
                            onClick={() => handleYearButtonClick(false)}>2022</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview;