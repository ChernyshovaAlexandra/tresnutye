import React from 'react'
import Vk from '../images/вк.png'
import Fb from '../images/фб.png'
import Ok from '../images/однокл.png'
import Ytbe from '../images/youtube.png'
import Dzen from '../images/dzen.svg'
import Insta from '../images/инста.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { shopData } from '../constants/shopData'


export default class SocialLinks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shop: props.name
        }
    }

    render() {
        const shopD = shopData
        const filtredData = shopD.filter(item => item.data === this.props.name)
        return (
            <nav className="socialIcons">

                {filtredData.map((item, index) => (
                    <ul className="row justify-content-center" key={index} >
                        {item.links.vk && <li className="col-md-auto socialIcon-item" ><a href={item.links.vk}><LazyLoadImage src={Vk} alt="" /></a></li>}
                        {item.links.fb && <li className="col-md-auto socialIcon-item" ><a href={item.links.fb}><LazyLoadImage src={Fb} alt="" /></a></li>}
                        {item.links.ok && <li className="col-md-auto socialIcon-item" ><a href={item.links.ok}><LazyLoadImage src={Ok} alt="" /></a></li>}
                        {item.links.youtube && <li className="col-md-auto socialIcon-item" ><a href={item.links.youtube}><LazyLoadImage src={Ytbe} alt="" /></a></li>}
                        {item.links.insta && <li className="col-md-auto socialIcon-item" ><a href={item.links.vk}><LazyLoadImage src={Insta} alt="" /></a></li>}
                        {item.links.zen && <li className="col-md-auto socialIcon-item" ><a href={item.links.zen}><LazyLoadImage src={Dzen} alt="" /></a></li>}
                    </ul>
                ))}

            </nav>
        )
    }
}