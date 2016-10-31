import * as React from 'react';

class Home extends React.Component<any, void> {

	constructor(props) {
		super(props);
	}

	static contextTypes = {
		slides: React.PropTypes.array
	};

	public render() {
		const { slides } = this.props;

		return (
			<div>
				<div id="mu-search">
					<div className="mu-search-area">
						<button className="mu-search-close"><span className="fa fa-close"></span></button>
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<form className="mu-search-form">
										<input type="search" placeholder="Type Your Keyword(s) & Hit Enter" />
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

				<section id="mu-slider">

					<div className="mu-slider-single">
						<div className="mu-slider-img">
							<figure>
								<img src="assets/img/slider/1.jpg" alt="img" />
							</figure>
						</div>
						<div className="mu-slider-content">
							<h4>Welcome To Varsity</h4>
							<span></span>
							<h2>We Will Help You To Learn</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet error eius reiciendis eum sint unde eveniet deserunt est debitis corporis temporibus recusandae accusamus.</p>
							<a href="#" className="mu-read-more-btn">Read More</a>
						</div>
					</div>

					<div className="mu-slider-single">
						<div className="mu-slider-img">
							<figure>
								<img src="assets/img/slider/2.jpg" alt="img" />
							</figure>
						</div>
						<div className="mu-slider-content">
							<h4>Premiumu Quality Free Template</h4>
							<span></span>
							<h2>Best Education Template Ever</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet error eius reiciendis eum sint unde eveniet deserunt est debitis corporis temporibus recusandae accusamus.</p>
							<a href="#" className="mu-read-more-btn">Read More</a>
						</div>
					</div>

					<div className="mu-slider-single">
						<div className="mu-slider-img">
							<figure>
								<img src="assets/img/slider/3.jpg" alt="img" />
							</figure>
						</div>
						<div className="mu-slider-content">
							<h4>Exclusivly For Education</h4>
							<span></span>
							<h2>Education For Everyone</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet error eius reiciendis eum sint unde eveniet deserunt est debitis corporis temporibus recusandae accusamus.</p>
							<a href="#" className="mu-read-more-btn">Read More</a>
						</div>
					</div>

				</section>

				<section id="mu-service">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<div className="mu-service-area">

									<div className="mu-service-single">
										<span className="fa fa-book"></span>
										<h3>Learn Online</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima officiis, deleniti dolorem exercitationem praesentium, est!</p>
									</div>

									<div className="mu-service-single">
										<span className="fa fa-users"></span>
										<h3>Expert Teachers</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima officiis, deleniti dolorem exercitationem praesentium, est!</p>
									</div>

									<div className="mu-service-single">
										<span className="fa fa-table"></span>
										<h3>Best ClassNamerooms</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima officiis, deleniti dolorem exercitationem praesentium, est!</p>
									</div>

								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="mu-about-us">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="mu-about-us-area">
									<div className="row">
										<div className="col-lg-6 col-md-6">
											<div className="mu-about-us-left">

												<div className="mu-title">
													<h2>About Us</h2>
												</div>

												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum pariatur fuga eveniet soluta aspernatur rem, nam voluptatibus voluptate voluptates sapiente, inventore. Voluptatem, maiores esse molestiae.</p>
												<ul>
													<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
													<li>Saepe a minima quod iste libero rerum dicta!</li>
													<li>Voluptas obcaecati, iste porro fugit soluta consequuntur. Veritatis?</li>
													<li>Ipsam deserunt numquam ad error rem unde, omnis.</li>
													<li>Repellat assumenda adipisci pariatur ipsam eos similique, explicabo.</li>
												</ul>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quaerat harum facilis excepturi et? Mollitia!</p>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="mu-about-us-right">
												<a id="mu-abtus-video" href="https://www.youtube.com/embed/HN3pm9qYAUs" target="mutube-video">
													<img src="assets/img/about-us.jpg" alt="img" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="mu-abtus-counter">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="mu-abtus-counter-area">
									<div className="row">

										<div className="col-lg-3 col-md-3 col-sm-3">
											<div className="mu-abtus-counter-single">
												<span className="fa fa-book"></span>
												<h4 className="counter">568</h4>
												<p>Subjects</p>
											</div>
										</div>

										<div className="col-lg-3 col-md-3 col-sm-3">
											<div className="mu-abtus-counter-single">
												<span className="fa fa-users"></span>
												<h4 className="counter">3500</h4>
												<p>Students</p>
											</div>
										</div>

										<div className="col-lg-3 col-md-3 col-sm-3">
											<div className="mu-abtus-counter-single">
												<span className="fa fa-flask"></span>
												<h4 className="counter">65</h4>
												<p>Modern Lab</p>
											</div>
										</div>

										<div className="col-lg-3 col-md-3 col-sm-3">
											<div className="mu-abtus-counter-single no-border">
												<span className="fa fa-user-secret"></span>
												<h4 className="counter">250</h4>
												<p>Teachers</p>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="mu-features">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<div className="mu-features-area">

									<div className="mu-title">
										<h2>Our Features</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ipsa ea maxime mollitia, vitae voluptates, quod at, saepe reprehenderit totam aliquam architecto fugiat sunt animi!</p>
									</div>

									<div className="mu-features-content">
										<div className="row">
											<div className="col-lg-4 col-md-4  col-sm-6">
												<div className="mu-single-feature">
													<span className="fa fa-book"></span>
													<h4>Professional Courses</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
													<a href="#">Read More</a>
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-6">
												<div className="mu-single-feature">
													<span className="fa fa-users"></span>
													<h4>Expert Teachers</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
													<a href="#">Read More</a>
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-6">
												<div className="mu-single-feature">
													<span className="fa fa-laptop"></span>
													<h4>Online Learning</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
													<a href="#">Read More</a>
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-6">
												<div className="mu-single-feature">
													<span className="fa fa-microphone"></span>
													<h4>Audio Lessons</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
													<a href="#">Read More</a>
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-6">
												<div className="mu-single-feature">
													<span className="fa fa-film"></span>
													<h4>Video Lessons</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
													<a href="#">Read More</a>
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-6">
												<div className="mu-single-feature">
													<span className="fa fa-certificate"></span>
													<h4>Professional Certificate</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
													<a href="#">Read More</a>
												</div>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</section>

			</div>
		);
	}
}

export default Home;