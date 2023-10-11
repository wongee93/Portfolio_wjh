const TimeTable = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // const SquareSpan = () => <span></span>;
    const SquareSpan = ({ color }) => <span style={{ backgroundColor: color }}></span>;


    const rows = 7;
    const columns = 52;
    const spans = [];

    // for (let i = 0; i < rows * columns; i++) {
    //     spans.push(<SquareSpan key={i} />);
    // }
    for (let i = 0; i < rows * columns; i++) {
        const currentColumn = i % columns;
        const color = (currentColumn >= 26 && currentColumn <= 38) ? '#40c463' : ''; // 27번째부터 43번째 column에 빨간색을 지정
        spans.push(<SquareSpan key={i} color={color} />);
    }
    return (
        <div className='timeline-box'>
            <div className='overview-title'>Timeline</div>
            <div className='timeline-wrapper'>
                <div className='timetable-wrapper'>
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
                <div className='timetable-history-type'>
                    <span className='history-type'><span className='education'></span>Education</span>
                    <span className='history-type'><span className='project'></span>Project</span>
                    <span className='history-type'><span className='work'></span>Work</span>
                </div>
            </div>
        </div>
    )
}

export default TimeTable;