
import React from 'react';
import SegmentOne from './SegmentOne'
import "./mainContent.css"
import Card from './Card'
import cardData from '../CardInfo.json';
import SegmentThree from './SegmentThree';
import SegmentFour from './SegmentFour';


function MainContent() {


  return (
    <div className='main '>

        <div className='segemnt'>
            <SegmentOne/>
        </div>
        <div className='row'>
        {cardData.map((item, index) => (
          <div className='col-md-3 col-sm-6  py-2 px-4' key={index}>
            <Card
              backgroundColor={item.backgroundColor}
              iconName={item.iconName}
              earning={item.earning}
              isIncrement={item.isIncrement}
              amount={item.amount}
              info1={item.info1}
              color={item.color}
            />
          </div>
        ))}
      </div>
        <div className='segment'>
           <SegmentThree/>
        </div>
        <div className='segment px-3'>
           <SegmentFour/>
        </div>

      
    </div>
  )
}

export default MainContent
