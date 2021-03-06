import * as React from 'react';
import { Link } from 'react-router';

interface IMenu {
	to: string;
	name: string;
	click?: Function;
}

interface INavMenuState {
	title: string;				// Titulo de la pagina						
	busqueda: string;			// Placeholder de la barra de busqueda
	menu: IMenu[];				// Menu a mostrar
}

export class NavMenu extends React.Component<any, INavMenuState> {

	constructor(props) {
		super(props);

		this.state = {
			title: 'Visibilidad',
			busqueda: '¿Qué desee buscar?',
			menu: [{
				to: '/',
				name: 'Principal',
				click: () => {
					console.log('Recargando vista principal...');
					window.location.reload();
				}
			}, {
				to: '/noticias',
				name: 'Noticias'
			}, {
				to: '/eventos',
				name: 'Eventos'
			}, {
				to: '/login',
				name: 'Iniciar sesión'
			}]
		}
	}

	public render() {
		const { menu, title } = this.state;

		return (
			<div>
				<section id="mu-menu">
					<nav className="navbar navbar-default" role="navigation">
						<div className="container">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>

								<a className="navbar-brand" href="index.html">
									<i className="fa fa-university"></i>
									<span>
										{
											title
										}
									</span>
								</a>
							</div>
							<div id="navbar" className="navbar-collapse collapse">
								<ul id="top-menu" className="nav navbar-nav navbar-right main-nav">
									{
										menu ? menu.map((item, i) => {
											if (item.click) {
												return (
													<li key={i}>
														<Link to={item.to} onClick={() => item.click()} activeClassName="active">{item.name}</Link>
													</li>
												)
											} else {
												return (
													<li key={i}>
														<Link to={item.to} activeClassName="active">{item.name}</Link>
													</li>
												)
											}
										}) : ''
									}
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Blog
                      <span className="fa fa-angle-down"></span>
										</a>
										<ul className="dropdown-menu" role="menu">
											<li>
												<a href="blog-archive.html">Blog Archive</a>
											</li>
											<li>
												<a href="blog-single.html">Blog Single</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="#" id="mu-search-icon">
											<i className="fa fa-search"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</section>

				<div id="mu-search">
					<div className="mu-search-area">
						<button className="mu-search-close">
							<span className="fa fa-close"></span>
						</button>
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<form className="mu-search-form">
										<input type="search" placeholder={
											this.state.busqueda
										} />
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
