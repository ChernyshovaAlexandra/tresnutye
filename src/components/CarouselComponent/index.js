import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { tresnutyeEggs } from "../../constants/tresnutyeEggs";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './index.css'

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
            <div className="tres-Item" index={index} >
                <LazyLoadImage src={item.img} alt="" />
                <p className="tres-Name header">{item.name}</p>
            </div>
        );
    }
}

export default class CarouselComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: true,
            items: tresnutyeEggs,
            activeSlide: 0,
            itemsPerSlide: 3
        }
    }


    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 0,
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay:true,
            autoplaySpeed: 2500,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            useTransform: true,
            centerMode: true,
            beforeChange: (current, next) => this.setState({ activeSlide: next }),
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
        const { items } = this.state
        const Tresnutye = items
        return (
            <div className="carousel" id="cracKed">
                <div className="container">
                    <div className="row">
                        <h2 className="col header centred yellow">Найди всех треснутых <br />
                            <span>получи шанс выиграть золотое яйцо</span>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mainSlider">
                            <Slider {...settings} ref={ref => this.slider = ref}>
                                {Tresnutye.map(
                                    (item, index) => (
                                        <CustomSlide item={item} index={index} key={index} />
                                    )
                                )}
                            </Slider>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2 className="header slidesOf centred">{this.state.activeSlide + 1}/{this.state.items.length}</h2>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}