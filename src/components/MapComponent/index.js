import React from 'react'
import './index.css'
import { data } from '../../data/shops'
import { cities } from '../../data/cities';
import pin from '../../images/pin.png'
import placemark from '../../images/placemark.png'
import { shopData } from '../../constants/shopData'

export default class MapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRegion: 'Москва',
            searchValue: '',
            shop: props.name
        }
    }
    componentDidMount = () => {
        window.ymaps.ready(this.setInit);
    }

    setInit = () => {
        setTimeout(this.init, 7000)
    }

    sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    init = async () => {
        const shopD = shopData
        const filtredData = shopD.filter(item => item.data === this.props.name)

        let zoomControl = new window.ymaps.control.ZoomControl({
            options: {
                position: {
                    right: 50,
                    top: 50
                },
                size: 'large'
            }
        });
        this.myMap = new window.ymaps.Map('map',
            {
                center: filtredData[0].center,
                zoom: 12.2,
                controls: [zoomControl]
            }
        );
        let objectManager = new window.ymaps.ObjectManager({
            clusterize: true,
            gridSize: 64,
            clusterDisableClickZoom: false
        });
        let MyIconContentLayout = window.ymaps.templateLayoutFactory.createClass(
            '<div style="color: #fff; font-weight:bold;width:46px;vertical-align:middle;line-height:46px;">$[properties.iconContent]</div>'
        );
        // Чтобы задать опции одиночным объектам и кластерам,
        // обратимся к дочерним коллекциям ObjectManager.
       
        objectManager.objects.options.set(
            {
                iconLayout: 'default#image',
                iconImageHref: filtredData[0].placemark,
                iconImageSize: [36, 36]
            });
        objectManager.clusters.options.set({
            clusterIconLayout: 'default#imageWithContent',
            clusterIconImageHref: filtredData[0].pin,
            clusterIconImageSize: [46, 46],
            clusterIconImageOffset: [-23, -23],
            clusterIconContentLayout: MyIconContentLayout,
            clusterHideIconOnBalloonOpen: false,
            clusterDisableClickZoom: false
        });

        this.myMap.geoObjects.add(objectManager);
        this.myMap.behaviors.disable('scrollZoom');
        this.myMap.behaviors.disable('Drag');

        let center;
        let getGeocode = new window.ymaps.geocode('Moscow', {
            results: 1
        }).then(function (res) {
            center = res.geoObjects.get(0).geometry.getCoordinates();

            this.myMap.setCenter(center);
        });

       
        let curMap = filtredData[0].map
        let resultingObjects = curMap.map(async (item, index) => {
            return {
                type: 'Feature',
                id: index,
                geometry: {
                    type: 'Point',
                    coordinates: [item[0], item[1]]
                }
            }
        })
        let resultingData
        Promise.all(resultingObjects).then((completed) => {
            resultingData = {
                "type": "FeatureCollection",
                "features": completed
            }
            objectManager.add(resultingData);
        });
    }

    onCityChange = (e) => {
        const { value } = e.target
        let currentCity = cities.filter(item => item.city === value)[0];
        this.setState({
            currentRegion: currentCity.region
        })
        this.myMap.setCenter(currentCity.coordinates);
    }
    handleSearch = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        window.ymaps.geocode(this.state.searchValue, {
            results: 1
        }).then((res) => {
            let firstGeoObject = res.geoObjects.get(0),
                coords = firstGeoObject.geometry.getCoordinates();
            this.myMap.setCenter(coords);
            this.myMap.setZoom(16)
        })
    }
    render() {
        
        return (
            <div className='mapWindow' id="mapComp">
                <div className="mapContainer">
                    <div id='map'></div>
                    <div className="searchingFormMap shadowVioletOther">
                        <div className="row">
                            <div className="col">
                                <h2 className="header yellow">адреса магазинов</h2>
                            </div>
                        </div>
                        <form className="formSearch">
                            <select name="city" onChange={(e) => { e.persist(); this.onCityChange(e) }}>
                                {cities.map(item => <option key={item.city}>{item.city}</option>)}
                            </select>
                            <input type="search" placeholder='Введите адрес' onChange={(e) => { this.handleSearch(e) }} />
                            <button className="button-s"onClick={this.handleSubmit}><small  className="header centred">Найти</small> </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}