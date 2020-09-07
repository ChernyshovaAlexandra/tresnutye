import React from 'react';
//import LinearProgress from '@material-ui/core/LinearProgress';
import WelcomeComponent from './components/WelcomeComponent'
import MapComponent from './components/MapComponent'
import FooterComponent from './components/FooterComponent'
import StoryComponent from './components/StoryComponent'
import CarouselComponent from './components/CarouselComponent'
import GameComponent from './components/GameComponent'
import ProdCarousel from './components/ProdCarousel'
import MechanicsComponent from './components/MechanicsComponent'
import ModalComponent from './components/ModalComponent';
import StreamComponent from './components/StreamComponent'
import PlayingComponent from './components/PlayingComponent'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import './css/main.css'
import $ from 'jquery'



class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			shop: 'Dixy',
			shopRu: 'Дикси',
			shopChecked: false,
			progress: false
		}
	}
	componentDidMount() {
		let th = this
		$('.grid__col').click(function () {
			let shopName = $(this).data('name')
			let shopNameRu = $(this).data('nameRu')
			th.setState({
				shop: shopName,
				shopRu: shopNameRu,
				shopChecked: true,
			})
		})

	}

	render() {
		const { shop, shopRu } = this.state
		return (
			<>
				{!this.state.shopChecked && <div className="container startingC">
					<div className="row indent-2">
						<div className="col">
							<h2 className="header yellow centred">Выберите магазин</h2>
						</div>
					</div>
					<div className="row">
						<div className='col'>
							<div className="sponsor dashed centred startElem">
								<div className="selectionTable">
									<div className="grid__row grid-r-3">
										<div className="grid-col-3 grid__col dix" data-name='Dixy' data-name-ru="Дикси">
										</div>
										<div className="grid-col-3 grid__col vikt" data-name='Viktoriya' data-name-ru="Виктория"></div>
										<div className="grid-col-3 grid__col vikt-k" data-name='Viktoriya-kv' data-name-ru="Виктория Квартал"></div>
									</div>
									<div className="grid__row grid-r-2">
										<div className="grid-col-2 grid__col megam" data-name='Megamart' data-name-ru="Мегамарт"></div>
										<div className="grid-col-2 grid__col deshev" data-name='Deshevo' data-name-ru="Дёшево"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>}
				{this.state.shopChecked &&
					<div className="content">
						<WelcomeComponent name={shop} />
						<ModalComponent name={shopRu} />
						<ScrollAnimation animateIn="fadeIn" delay={100}> <MechanicsComponent /></ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn" delay={100}> <StoryComponent /></ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn" delay={100}> <CarouselComponent /></ScrollAnimation>
						<GameComponent />
						<PlayingComponent />
						<StreamComponent />
						<ProdCarousel name={shop} />
						<MapComponent name={shop} />
						<FooterComponent name={shop} />
					</div>
				}
			</>
		);
	}
}

export default App;
