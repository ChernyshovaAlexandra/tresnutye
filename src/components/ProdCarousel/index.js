import React from 'react'
import './index.css'
import SponsorComponent from '../SponsorComponent'
import $ from 'jquery'


export default class GoodsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectValue: '1 товар=1 треснутый',
            shop: props.name
        }
    }
    componentDidMount() {
        $('select').on('focus', function () {
            $(this).addClass('arrowed');
            $(this).on('change', function () {
                $(this).removeClass('arrowed');
            })
        });
        $('select').on('blur', function () {
            $(this).removeClass('arrowed');
        });
    }

    onPrilipalaSelectChange = (e) => {
        this.setState({
            selectValue: e.target.value
        })
    }

    render() {
        return (
            <div className='section goods' id="tovary-sp">
                <div className="container">
                    <div className="goodsContainer">
                        <div className="spDescription row">
                            <div className="col">
                                <div className="spInfo row justify-content-between">
                                    <h2 className="header yellow col-lg-6">ТОВАРЫ-СПОНСОРЫ</h2>
                                    <div className="formSearch col-lg-6">
                                        <form>
                                            <p>
                                                <select id="region" name="region">
                                                    <option>Ваш регион:</option>
                                                    <option>ЦФО</option>
                                                    <option>СЗФО</option>
                                                    <option>УФО</option>
                                                </select>
                                                <select className="spClass" onChange={(e) => { e.persist(); this.onPrilipalaSelectChange(e) }}>
                                                    <option>1 товар=1 треснутый</option>
                                                    <option>2 товара=1 треснутый</option>
                                                    <option>1 товар=2 треснутых</option>
                                                    <option>4 товара=1 треснутый</option>
                                                </select>
                                            </p>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="spCarousel indent-2">
                            <SponsorComponent filter={this.state.selectValue} name={this.state.shop}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}