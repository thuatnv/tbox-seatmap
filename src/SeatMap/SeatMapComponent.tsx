import React, {Fragment} from 'react';
import MiniMap from './MiniMap';
import SectionDetail from './SectionDetail';
import { SeatMapData } from '../types/seatMap';

export const SeatMapComponent = (props: SeatMapData) => {
    const { viewType } = props;
    return (
        <Fragment>
            {
                (viewType === 'miniMap') && (<MiniMap />)
            }
            {
                (viewType === 'section') && (<SectionDetail />)
            }
        </Fragment>
    );
}
