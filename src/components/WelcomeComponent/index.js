import React from 'react'
import Head from '../../images/header.svg'
import MainHead from '../../images/mainheader.png'
import Professor from '../../images/professor.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Egg from '../Egg'
import Egg2 from '../../images/egg.png'
import { shopData } from '../../constants/shopData'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './mobile.css'





export default class WelcomeComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shop: props.name,
            loading: true
        }
    }
    componentDidMount(){
        this.setState({
            isLoading:false
        })
    }
    render() {
        const shopD = shopData
        const filtredData = shopD.filter(item => item.data === this.props.name)
        return (
            this.state.isLoading ? 
            <div style={{'display':'none'}}>
                Loading
                {/* <img src={Egg} /> */}
                <img src={Head} />
                <img src={MainHead} />
                <img src={Professor} />
            </div> :
            <div className="welcome">
                {filtredData.map((item, index) => (

                    <div className="container"  key={index}>
                        <div className="data-header row">
                            <div className="col-md-1 logo">
                                <LazyLoadImage
                                    alt=''
                                    src={item.logo}
                                />
                            </div>
                            <div className="col-md-6 tresnutye-img">
                                <LazyLoadImage src={Head} alt="" />
                            </div>
                            <div className="col-md-3 naming">
                                <LazyLoadImage src={MainHead} alt="" />
                            </div>
                            <div className="col-md-3 professor-container">
                                <LazyLoadImage src={Professor} alt="" />
                            </div>
                        </div>
                        <Egg />
                    </div>
                ))}
            </div>
        )
    }
}