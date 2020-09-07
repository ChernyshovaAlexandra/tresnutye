import React from 'react'
import eggVar1 from '../../images/eggVar1.png'
import eggVar2 from '../../images/eggVar2.png'
import eggVar3 from '../../images/eggVar3.png'
import pdfl from '../../images/pdf-l.png'
import Egor from '../../images/egor.jpg'
import darya from '../../images/darya.jpg' 
import kirilidanil from '../../images/kirilidanil.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './index.css'
import './mobile.css'

export default class PlayingComponent extends React.Component {
    render() {
        return (
            <div className="section play">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="header yellow centred">Что скрывает твой треснутый?</h2>

                        </div>
                    </div>
                    <div className="row eggVars align-items-center">
                        <div className="col-md-3 egg-var" data-name="карандаш"><LazyLoadImage src={eggVar1} alt="" /></div>
                        <div className="col-md-3 egg-var" data-name="ластик"><LazyLoadImage src={eggVar2} alt="" /></div>
                        <div className="col-md-3 egg-var" data-name="точилка"><LazyLoadImage src={eggVar3} alt="" /></div>
                        <div className="col-md-3 ">
                            <div className="linked-game dashed">
                                <a href="#"><LazyLoadImage src={pdfl} /></a>
                                <p><small className="header centred">Скачай и разукрась</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center indent-3 block-wth-ph">
                        <div className="col-lg-3  wth-photo">
                            <div className="photo-card card-1">
                                <LazyLoadImage src={darya}  alt=""/>
                                <div className="signature">Дарья, 9 лет</div>
                            </div>
                            <div className="photo-card card-2">
                                <LazyLoadImage src={kirilidanil}  alt=""/>
                                <div className="signature">Кирилл и Даниил, 7 лет</div>
                            </div>
                        </div>
                        <div className="col-lg-8 wth-eggs">
                            <div className="dashed centred sponsor ">
                                <h2 className="header yellow centred">Прояви фантазию</h2>
                                <p>Нарисуй или слепи, или составь композицию... проявляй фантазию придумывая свое яйцо
                                    и получи шанс стать участником розыгрыша</p>
                                    <p>Поделись своим персонажем в социальных сетях с хэштегом <b>#Треснутые</b></p>
                                    
                            </div>
                        </div>
                        <div className="col-lg-3 wth-photo">
                            <div className="photo-card card-3">
                                <LazyLoadImage src={Egor}  alt=""/>
                                <div className="signature">Егор, 7 лет</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}