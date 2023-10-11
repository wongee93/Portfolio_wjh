const TimeTable = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // const SquareSpan = () => <span></span>;
    // const SquareSpan = ({ color }) => <span style={{ backgroundColor: color }}></span>;

    const SquareSpan = ({ type }) => {
        if (type === 'split') {
            return (
                <span className='split-colors'>
                    <div className='half-color first-color'></div>
                    <div className='half-color second-color'></div>
                </span>
            );
        }
        return <span style={{ backgroundColor: type }}></span>;
    };

    const rows = 7;
    const columns = 52;

    // 2023
    const spans_2023 = [];

    for (let i = 0; i < rows * columns; i++) {
        const currentColumn = i % columns;
        let type = '';

        if ((currentColumn >= 0 && currentColumn <= 12) || (currentColumn >= 39 && currentColumn <= 40)) { // 첫 12개의 column에 #407ec4 색상 지정
            type = '#4a91e2';
        } else if (currentColumn >= 26 && currentColumn <= 38) {
            type = '#40c463'; // 27번째부터 43번째 column에 #40c463 색상 지정
        }

        spans_2023.push(<SquareSpan key={i} type={type} />);
    }

    // 2022
    const spans_2022 = [];

    for (let i = 0; i < rows * columns; i++) {
        const currentColumn = i % columns;
        let type = '';

        if (currentColumn <= 23) {
            type = '#40c463';
        } else if (currentColumn >= 44) {
            type = 'split';
        } else if (currentColumn >= 24 && currentColumn < 44) {
            type = '#e2be49';
        }

        spans_2022.push(<SquareSpan key={i} type={type} />);
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
                            {spans_2023}
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