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
            <div>
                <p>윤년</p>
                <p> 2017년 1월 1일에서 1년 빼기</p>
                <p>{moment("2017-01-01").subtract(1, "year").format()}</p>
                <p>2017년 1월 1일에서 365일 빼기</p>
                <p>{moment("2017-01-01").subtract(365,"day").format() }</p>
            </div>
        </div>
    )
} 

export default MomentExample