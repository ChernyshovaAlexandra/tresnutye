import React from 'react'
import EggImg from '../images/egg.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default class Egg extends React.Component {
    render() {
        return (
            <div className="row align-items-center justify-content-center egg-container">
                <div className="col-lg-6 eggImg">
                    <LazyLoadImage src={EggImg} alt="" />
                </div>
                <div className="col-lg-6">
                    <h2 className="header">
                        найди настоящее <br/>
                        <span className="header bigger">золотое яйцо  <br/>
                        <span className="header bigger">585 пробы</span></span>
                        </h2>
                </div>
            </div>
        )
    }
}