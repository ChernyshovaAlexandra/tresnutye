import React from 'react'
import './index.css'
import LogoD from '../../images/dixy.png'
import LogoV from '../../images/victoriya.png'
import LogoM from '../../images/megamart.png'
import MainHeader from '../../images/mainheader.png'
import RoomInner from '../RoomInnerComponent'


export default class WelcomeComponent extends React.Component {
    render() {
        return (
            <div className='welcomeWindow'>
               <RoomInner />
               <div className="lamp">
                <i className="led on blink"> </i>
                <i className="led on blink"> </i>
                </div>
            </div >
        )
    }
}