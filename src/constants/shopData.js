import LogoDixy from '../images/logo/LogoDixy.svg'
import LogoDeshevo from '../images/logo/deshevo.svg'
import LogoMegamart from '../images/logo/megamart.svg'
import LogoViktoria from '../images/logo/viktoria.svg'
import LogoViktoriaKv from '../images/logo/viktoria_kvartal.svg'
import { gooods } from './goods'
import { data } from '../data/shops'
import { deshevoShops } from '../data/deshevoShops'
import { megamartData } from '../data/megamartShops'
import { viktKvartalShops } from '../data/viktKvartalShops'
import { viktoriyaShops } from '../data/viktoriyaShops'
import Dixypin from '../images/pins/dixy.png'
import Viktpin from '../images/pins/viktoriya.png'
import ViktKpin from '../images/pins/viktoriya-k.png'
import Deshevopin from '../images/pins/deshevo.png'
import Megamartpin from '../images/pins/megamart.png'
import P1 from '../images/pins/p-1.png'
import P2 from '../images/pins/p-2.png'
import P3 from '../images/pins/p-3.png'
import P4 from '../images/pins/p-4.png'
import P5 from '../images/pins/p-5.png'




export const shopData = [
    {
        name: '«ДИКСИ»',
        data: 'Dixy',
        coast: '700',
        map: data,
        logo: LogoDixy,
        sponsorProds: gooods,
        links: 
            {
                vk: 'https://vk.com/dixyclub',
                fb: 'https://www.facebook.com/Dixyclub',
                ok: 'https://ok.ru/dixyclub',
                youtube: 'https://www.youtube.com/user/DixyChannel',
                insta: 'https://www.instagram.com/dixy.channel/'
            }
        ,
        rules: '',
        placemark: Dixypin,
        pin: P1,
        center: [55.76, 37.64],
    },
    {
        name: '«Виктория»',
        data: 'Viktoriya',
        coast: '700',
        map: viktoriyaShops,
        logo: LogoViktoria,
        sponsorProds: gooods,
        links: 
            {
                vk: 'https://vk.com/supermarket_victoria',
                fb: 'https://www.facebook.com/SupermarketVictoria',
                zen: 'https://zen.yandex.ru/victoria',
                youtube: 'https://www.youtube.com/channel/UCqzv3yamYlEcBoMFjj6u4tQ',
                insta: 'https://www.instagram.com/my_victoria24/'
            }
        ,
        rules: '',
        placemark: Viktpin,
        pin: P2,
        center:[55.70,37.65]
    },
    {
        name: '«Виктория квартал»',
        data: 'Viktoriya-kv',
        coast: '700',
        map: viktKvartalShops,
        logo: LogoViktoriaKv,
        sponsorProds: gooods,
        links: 
            {
                vk: 'https://vk.com/supermarket_victoria',
                fb: 'https://www.facebook.com/SupermarketVictoria',
                zen: 'https://zen.yandex.ru/victoria',
                youtube: 'https://www.youtube.com/channel/UCqzv3yamYlEcBoMFjj6u4tQ',
                insta: 'https://www.instagram.com/my_victoria24/'
            }
        ,
        rules: '',
        placemark: ViktKpin,
        pin: P3,
        center: ["54.64", "19.90"]
    },
    {
        name: '«Мегамарт»',
        data: 'Megamart',
        coast: '700',
        map: megamartData,
        logo: LogoMegamart,
        sponsorProds: gooods,
        links: 
            {
                vk: 'https://vk.com/megamart_ru',
                fb: 'https://www.facebook.com/megamart.ru/',
                insta: 'https://www.instagram.com/megamart.ru/'
            }
        ,
        rules: '',
        placemark: Megamartpin,
        pin: P4,
        center: [56.81, 60.54],
    },
    {
        name: '«Дешево»',
        data: 'Deshevo',
        coast: '700',
        map: deshevoShops,
        logo: LogoDeshevo,
        sponsorProds: gooods,
        links: 
            {
                vk: 'https://vk.com/supermarket_victoria',
                fb: 'https://www.facebook.com/SupermarketVictoria',
                zen: 'https://zen.yandex.ru/victoria',
                youtube: 'https://www.youtube.com/channel/UCqzv3yamYlEcBoMFjj6u4tQ',
                insta: 'https://www.instagram.com/my_victoria24/'
            }
        ,
        rules: '',
        placemark: Deshevopin,
        pin: P5,
        center: ["54.65", "19.91"]
    }
]