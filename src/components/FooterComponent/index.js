import React from 'react'
import './index.css'
import NavMenu from '../NavMenu'
import SocialLinks from '../SocialLinks'

export default class FooterComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shop: props.name
        }
    }
    render() {
        return (
            <div className="footer section">
                <NavMenu />
                <div className="container for-txt">
                    <p className="white centred txtFooter">
                        За каждые 500 рублей в чеке (без учета табачной продукции (табак, табачные изделия и курительные принадлежности, в том числе трубок,
                        кальянов, сигаретной бумаги, зажигалок) и алкогольной продукции) покупатель получает возможность приобрести игрушку за 1 копейку.
                        Акция проводится с 11.04.20 по 1.05.20 включительно. Информацию об акции, ее организаторе и правилах проведения, товарах-спонсорах,
                        сроках, адресах и порядке получения игрушек можно узнать на нашем сайте:
                        <a className="white link" href="https://dixy.ru/tresnutye/">dixy.ru/tresnutye</a>.
                        Акция может быть прекращена досрочно в случаях, предусмотренных правилами.
                        В период проведения акции не гарантируется наличие акционного товара в каждом магазине.
                     </p>
                    <p className="centred txtFooter"><a className="white link" href="#">Читать полные правила акции</a></p>
                    <SocialLinks name={this.state.shop} />
                </div>
            </div>
        )
    }
}