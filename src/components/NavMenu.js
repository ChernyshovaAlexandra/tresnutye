import React from 'react'



export default class NavMenu extends React.Component {
    render() {
        return (
            <nav className="container">
                <ul className="row justify-content-center footer-nav">
                    <li className="col-md-auto footer-nav-menu"><a href="#story"><small className="header little yellow-nav">История</small></a></li>
                    <li className="col-md-auto footer-nav-menu"><a href="#cracKed"><small className="header little yellow-nav">Треснутые</small></a></li>
                    <li className="col-md-auto footer-nav-menu"><a href="#newPersonaj"><small className="header little yellow-nav">Новый персонаж</small></a></li>
                    <li className="col-md-auto footer-nav-menu"><a href="#zolotoOnline"><small className="header little yellow-nav">Золото онлайн</small></a></li>
                    <li className="col-md-auto footer-nav-menu"><a href="#tovary-sp"><small className="header little yellow-nav">Товары-спонсоры</small></a></li>
                    <li className="col-md-auto footer-nav-menu"><a href="#mapComp"><small className="header little yellow-nav">Карта магазинов</small></a></li>
                </ul>
            </nav>
        )
    }
}