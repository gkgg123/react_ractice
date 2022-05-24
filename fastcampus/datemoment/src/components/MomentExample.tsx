import React from 'react'
import moment,{ Moment} from 'moment'
import { default as momenttz } from 'moment-timezone';

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
            <div>
                <p> 2018년 3월 10일13시에 1 day 더하기</p>
                <p>{momenttz.tz("2018-03-10 13:00:00","America/New_York").add(1, "day").format()}</p>
                <p> 2018년 3월 10일13시에 24 hour 더하기</p>
                <p>{ momenttz.tz("2018-03-10 13:00:00","America/New_York").add(24,"hour").format()}</p>
            </div>
        </div>
    )
} 

export default MomentExample