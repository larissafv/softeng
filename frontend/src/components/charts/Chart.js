import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';

const Chart = () => {
    const invest = [
        { x: 0, y: 2 },
        { x: 1, y: 1 },
        { x: 2, y: 4 },
        { x: 3, y: 3 },
        { x: 4, y: 2 },
        { x: 5, y: 2 },
        { x: 6, y: 5 },
        { x: 7, y: 3 },
        { x: 8, y: 1 },
    ]
    const rec = [
        { x: 0, y: 6 },
        { x: 1, y: 6 },
        { x: 2, y: 7 },
        { x: 3, y: 5 },
        { x: 4, y: 6 },
        { x: 5, y: 7 },
        { x: 6, y: 7 },
        { x: 7, y: 6 },
        { x: 8, y: 6 },
    ]
    const desp = [
        { x: 0, y: 8 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 1 },
        { x: 5, y: 7 },
        { x: 6, y: 6 },
        { x: 7, y: 3 },
        { x: 8, y: 2 },
    ]

    return (
        <div className={{ marginTop: '15px' }}>
            <XYPlot height={450} width={900}>
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries data={invest} color="white" />
                <LineSeries data={rec} color="pink" />
                <LineSeries data={desp} color="purple" />
            </XYPlot>
        </div>
    )
}

export default Chart;