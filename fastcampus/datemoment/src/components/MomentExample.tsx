import React from 'react'
import moment,{ Moment} from 'moment'


const MomentExample = () => {
    const momentDate : Moment = moment();
    const newMomentDate : Moment = momentDate.add(1, 'week');
    const cloneNewMomentDate : Moment= newMomentDate.clone().add(1, "week");
    return (
        <div>
            <h1>Moment</h1>
            <div>Immutable Check</div>
            <div>
                {momentDate.format()}
                <br />
                {newMomentDate.format()}
                <br />
                {cloneNewMomentDate.format()}
            </div>
        </div>
    )
} 

export default MomentExample