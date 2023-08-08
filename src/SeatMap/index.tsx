import MiniMap from './MiniMap';
import SectionDetail from './SectionDetail';
import { SeatMapData } from '../types/seatMap';

const SeatMap = (props: SeatMapData) => {
    const { viewType } = props;
    return (
        <>
            {
                (viewType === 'miniMap') && (<MiniMap />)
            }
            {
                (viewType === 'section') && (<SectionDetail />)
            }
        </>
    );
}

export default SeatMap;