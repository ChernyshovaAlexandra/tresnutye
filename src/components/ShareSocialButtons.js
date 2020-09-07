import React from 'react'
import Vk from '../images/вк.png'
import Fb from '../images/фб.png'
import Ok from '../images/однокл.png'
import YandexShare from 'react-yandex-share';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default class SocialLinks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photo: 'https://dixy.ru/tresnutye/eggs/super-zum.png',
            name: 'Супер-зум',
            title: '',
        }
    }

    componentWillReceiveProps(newProps) {
        if (this.state.photo !== newProps.photo) {
            this.setState({ photo: newProps.photo });
        }
        if (this.state.name !== newProps.name) {
            this.setState({ name: newProps.name });
        }
    }

    render() {
        const { photo, name } = this.state;

        return (
            <nav className="socialIcons">
                <ul className="row justify-content-center">
                    <li className="share_li centred mr-3">
                        <LazyLoadImage src={Vk} alt="" />
                        <div className="share_yandex" key={this.props.photo}>
                            <YandexShare
                                onClick={() => this.convertToImage()}
                                theme={{ lang: 'ru', services: 'vkontakte', size: 'm' }}
                                content={
                                    {
                                        title: `Мой треснутый — ${name.toUpperCase()}. А кто получится у тебя?`,
                                        description: 'df',
                                        url: 'https://chernyshovaalexandra.github.io/tresnutye/#',
                                        image: photo,
                                    }
                                }
                            />
                        </div>
                    </li>
                    <li className="share_li centred mr-3">
                        <LazyLoadImage src={Fb} alt="" />
                        <div className="share_yandex" key={this.props.photo}>
                            <YandexShare
                                theme={{ lang: 'ru', services: 'facebook', size: 'm' }}
                                content={
                                    {
                                        title: `Мой треснутый — ${name.toUpperCase()}. А кто получится у тебя?`,
                                        description: '123123',
                                        url: 'https://chernyshovaalexandra.github.io/tresnutye/#',
                                        image: photo
                                    }
                                }
                                contentByService={{
                                    facebook: {
                                        url: 'https://chernyshovaalexandra.github.io/tresnutye/#',
                                        image: photo,
                                        accessToken: 'EAAlZCvCVdYYBAJKuDJRXDyKfVV2M8cpXuO6HM1pSMLAbNqAMD8XGWz4Mnh16dKf5Mn5FQpoyVJNMG2RYZCeRM9Px9hSFr3pPOxQlqoCFZCg5m8YuWi8ZCKueaHLZCWfwZAVXXsBWnqlF73PZBjpsCIqiSYEzp9461wyUDYrTfyAc1Am7epT4QaapktwQ3xmKHyF6QZB12bnOXLsviWErPRrBNz32S9w1E2YjfJqfMVTIAZDZD'
                                    }
                                }}
                            />
                        </div>
                    </li>
                    <li className="share_li centred">
                        <LazyLoadImage src={Ok} alt="" />
                        <div className="share_yandex" key={this.props.photo}>
                            <YandexShare
                                theme={{ lang: 'ru', services: 'odnoklassniki', size: 'm' }}
                                content={
                                    {
                                        title: `Мой треснутый — ${name.toUpperCase()}. А кто получится у тебя?`,
                                        description: '123123',
                                        url: 'https://chernyshovaalexandra.github.io/tresnutye/#',
                                        image: photo
                                    }
                                }
                            />
                        </div>
                    </li>
                </ul>
            </nav>
        )
    }
}