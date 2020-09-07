import React from 'react'
import dataTop from '../../data/eggsTop'
import dataBottom from '../../data/eggsBottom'
import Slider from "react-slick";
import { img } from 'react-lazy-load-image-component';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import Pedestal from '../../images/1.png'
import ShareSocialButtons from '../ShareSocialButtons'

const start_index = 0;

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="sliderNav">
            <button className="next slick-next" onClick={onClick}></button>
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="sliderNav">
            <button className="prev slick-prev" onClick={onClick}></button>
        </div>
    );
}

class CustomSlide extends React.Component {
    render() {
        const { index, item } = this.props;
        return (
            <div index={index} className="card_top">
                <img src={item.picture} alt="" />
                <div>
                    <p id="egg_name" className="col header yellow">{item.name}</p>
                </div>
            </div>
        );
    }
}

export default class GameComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: true,
            itemsTop: dataTop,
            itemsBottom: dataBottom,
            activeSlide: 0,
            itemsPerSlide: 7,
            urlSt: '',
            nameTop: dataTop[start_index].name,
            nameBottom: (dataBottom[start_index].name).slice(1),
            nameTopEng: dataTop[start_index].nameEng,
            nameBottomEng: (dataBottom[start_index].nameEng).slice(1),
        }
    }

    SamplePrevArrow(props) {
        return (
            <div className="sliderNav">
                <button className="prev slick-prev" onClick={() => { this.changeNameTopNext() }}></button>
            </div>
        );
    }

    render() {
        let settingsTop = {
            dots: false,
            infinite: true,
            speed: 0,
            margin: 0,
            slidesToShow: 7,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            useTransform: true,
            centerMode: true,
            cssEase: 'opacity 300ms linear, border-color 300ms linear, background-color 300ms linear, transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955)',
            beforeChange: (current, next) => this.setState({ activeSlide: next, nameTop: dataTop[next].name, nameTopEng: dataTop[next].nameEng }),
            afterChange: current => this.setState({ activeSlide: current }),
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                }
            ]
        };

        let settingsBottom = {
            dots: false,
            infinite: true,
            speed: 0,
            slidesToShow: 7,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            useTransform: true,
            centerMode: true,
            cssEase: 'opacity 300ms linear, border-color 300ms linear, background-color 300ms linear, transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955)',
            beforeChange: (current, next) => this.setState({ activeSlide: next, nameBottom: (dataBottom[next].name).slice(1), nameBottomEng: (dataBottom[next].nameEng).slice(1) }),
            afterChange: current => this.setState({ activeSlide: current }),
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                }
            ]
        };
        const { itemsTop, itemsBottom, nameTop, nameBottom, nameTopEng, nameBottomEng } = this.state
        const eggsTop = itemsTop
        const eggsBottom = itemsBottom
        return (
            <div className="gameComponent">
                <div className="game_wrapper" id="newPersonaj">
                    <div className="container">
                        <div className="row">
                            <h2 className="col header centred yellow">Создай нового треснутого</h2>
                        </div>
                        <div className="row justify-content-center mt-4">
                            <h3 className="col centred white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
                        </div>
                        <div className="game_container">
                            <div className="col-lg-12 eggs-top">
                                <Slider {...settingsTop} ref={ref => this.slider = ref}>
                                    {eggsTop.map(
                                        (item, index) => (
                                            <CustomSlide item={item} index={index} key={index} />
                                        )
                                    )}
                                </Slider>
                            </div>
                            <div className="col-lg-12 eggs-bottom">
                                <Slider {...settingsBottom} ref={ref => this.slider = ref}>
                                    {eggsBottom.map(
                                        (item, index) => (
                                            <CustomSlide item={item} index={index} key={index} />
                                        )
                                    )}
                                </Slider>
                            </div>
                            <div className="pedestal"><img src={Pedestal} alt="" /></div>
                        </div>
                        <div className="row game-name-div">
                            <div className="col centred">
                                <h2 className="header yellow">{nameTop + nameBottom}</h2>
                                <div className="col centred">
                                    <ShareSocialButtons photo={`https://dixy.ru/tresnutye/eggs/${nameTopEng}${nameBottomEng}.png`} name={nameTop + nameBottom} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}