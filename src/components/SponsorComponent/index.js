import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { shopData } from '../../constants/shopData'
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


export default class SponsorComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: true,
            shop: props.name
        }
    }
    
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            swipeToSlide: false,
            adaptiveHeight: false,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            afterChange: index => {
                this.setState({
                    currentGood: index
                })
            },
            beforeChange: () => {
                this.state.goodsPerSlide = 5
            },
            responsive: [
                {
                    breakpoint: 4500,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,

                    }
                },
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,

                    }
                },
                {
                    breakpoint: 1450,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,

                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,

                    }
                }
            ]
        };
        const shopCur = shopData.filter(item => item.data === this.props.name)
        const filteredGoods = shopCur[0].sponsorProds.filter(item => item.class === this.props.filter)
        return (
            <>
                <div className="navigation"></div>
                <Slider {...settings} ref={ref => this.slider = ref}>
                    {filteredGoods.map((item, index) => (
                        <div className='item class-1' key={index}>
                            <div className='item-img'>
                                <LazyLoadImage src={process.env.PUBLIC_URL + '/products' + item.img} alt="" />
                            </div>
                            <div className='itemFullName'>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </>
        )
    }
}