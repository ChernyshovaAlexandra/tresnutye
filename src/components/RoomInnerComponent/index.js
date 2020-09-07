import React from 'react'
import './index.css'


export default class RoomInner extends React.Component {
    render() {
        return (
            <div className='roomInner flexing'>
                <div className="leftBoard"></div>
                <div className="desk">

                    <h4 className="yellow header desk-header">Получи яйцо за чек на сумму от:</h4>
                    <table className="blue">
                        <tbody>
                            <tr>
                                <td><h4 className="header">Дикси</h4></td>
                                <td>600</td>
                            </tr>
                            <tr>
                                <td><h4 className="header">Виктория</h4></td>
                                <td>Москва 900</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Калининград 700</td>
                            </tr>
                            <tr>
                                <td><h4 className="header">Мегамарт</h4></td>
                                <td>1000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="rightBoard"></div>
            </div >
        )
    }
}