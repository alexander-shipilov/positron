const DRAG_SIDE_FROM = 1;
const DRAG_SIDE_TO = 2;
const DRAG_SIDE_BOTH = 3;

function compareRanges(range1, range2) {
    return range1 && range2
        ? range1.from === range2.from || range1.to !== range2.to
        : !range1 && !range2;
}

function getRangeState(props, prevValue) {
    let nextFrom,
        nextTo;

    const { range: { from: rangeFrom, to: rangeTo }, step } = props;
    const { from: prevFrom, to: prevTo } = prevValue;

    nextFrom = Math.max(prevFrom, rangeFrom);
    if (nextFrom !== rangeFrom) {
        nextFrom = Math.min(Math.ceil(nextFrom / step) * step, rangeTo);
    }

    nextTo = Math.min(prevTo, rangeTo);
    if (nextTo !== rangeTo) {
        nextTo = Math.max(Math.floor(nextTo / step) * step, nextFrom);
    }

    return {
        value: {
            from: nextFrom,
            to: nextTo
        }
    };
}

const getRangeStateFromProps = (props) => {
    const { initialValue, range } = props;

    return getRangeState(props, Object.assign({}, range, initialValue));
};


export class RangePicker extends Component {


}

export default RangePicker;
