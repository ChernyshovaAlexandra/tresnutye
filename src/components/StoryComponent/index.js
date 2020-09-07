import React from 'react'
import './index.css'
import './mobile.css'
import Comics from '../../images/comics.jpg'
import ComicsMin from '../../images/comics-min.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';




export default class StoryComponent extends React.Component {
    render() {
        return (
            <div className="story" id="story">
                <LazyLoadImage className="descktop" src={Comics} alt="" />
                <LazyLoadImage className="mobile" src={ComicsMin} alt="" />

                <div className="container gray">
                    <div className="row storytxt">
                        <div className="col">
                            <p>Профессор Курочкин ещё никогда не был так близок к научному открытию, которое потрясет весь мир! Его мечта сбылась, он смог создать <b>«Золотое яйцо»</b>. Но счастье было не долгим - «Золотое яйцо» убежало. </p>
                            <p>Профессор пытался создать новое, но, как всегда, случайно, что-то пошло не так, как планировал гений. Колба «Округлина» смешалась с «Кисло-точным» и на свет <b>появились мутировавшие Эгсы</b>.</p>
                            <p>Профессор бросился на поиски своего «Золотого яйца». Вслед за ним разыскивать его бросились все 24 подопытных яйца и яйцо Феликс.
                            Они должны были быть похожи на золотое, но теперь они хотят одного - <b>найти «Золотое яйцо»</b>. Только тебе под силу возглавить их! 
                            Смешивай их друг с другом, получай новых необычных помощников в поиске «Золотого яйца». Теперь победит тот у кого будет больше помощников! <b>Вперед, на поиски!</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}