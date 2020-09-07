import React from 'react'
import SponsorModule from '../SponsorModule'
import './index.css'
import './mobile.css'

export default class MechanicsComponent extends React.Component {
    render() {
        return (
            <div className='mechanics'>
                <div className="container__inner">
                    <div className="row justify-content-center mech-inner">
                        <div className="col-lg-3 mechanics-inner">
                            <div className="row mechanics-step ">
                                <div className="col-md-auto number-step yellow" data-num="1">1</div>
                                <div className="col-md-8">
                                    <p>Собери всю коллекцию <b>«Треснутых» в коробке</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mechanics-inner">
                            <div className="row mechanics-step ">
                                <div className="col-md-auto number-step yellow" data-num="2">2</div>
                                <div className="col-md-8">
                                    <p>Сообщи нам о том, что ты <b>собрал всех</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mechanics-inner">
                            <div className="row mechanics-step ">
                                <div className="col-md-auto number-step yellow" data-num="3">3</div>
                                <div className="col-md-9">
                                    <p>Стань одним из 50 счастливчиков,
                                    которые могут <b>выиграть настоящее золотое яйцо 585 пробы</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center indent">
                        <div className="col-md-auto">
                            <button className="header button-s" onClick={() => window.location.href = "#win"}>Уже выполнил условия</button>
                        </div>
                    </div>
                    <SponsorModule />
                </div>
            </div >
        )
    }
}