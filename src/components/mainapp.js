import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.4.1.1.min.css';
import './css/style.css';
{/*import { Router, Route,Link} from 'react-router';
import About from './components/About';
import Login from './components/Login';
import Products from './components/Products';
import Support from './components/Support';
import Writing from './components/Writing'; */}


class App extends React.Component{
	render(){
		return(
			<div>
				<Headerdiv/>
				<Main/>
				<Footer/>
			</div>
			);
		}
	}
	 class Headerdiv extends React.Component{

		render(){
			return(
				<div>
				<div className="banner text-white site-header">
					<div className="bg-dark-overlay layer"></div>
					<nav className="navbar navbar-expand-lg navbar-togglable navbar-dark pt-lg-4">
							 <div className="container">
								 {/* Brand*/}
								 <a className="navbar-brand" href="index.html"><img src={require('./images/logo.png')} alt="logo image" className="img-fluid"></img></a>
								 {/* Toggler*/}
								 <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
									 <span></span><
									 span></span><span></span>
								 </button>
								 {/* Collapse*/}
								 <div className="collapse navbar-collapse" id="navbarCollapse">
									 <ul className="navbar-nav ml-auto">
										 <li className="nav-item ">
										   <a href="#." className="nav-link active">Products</a>
										 </li>
										 <li className="nav-item ">
											 <a href="#." className="nav-link">About</a>
										 </li>
										 <li className="nav-item ">
											 <a href="#." className="nav-link">Writing</a>
										 </li>
										 <li className="nav-item ">
											 <a href="#." className="nav-link">Support</a>
										 </li>
										 <li className="nav-item">
											 <a href="#." className="nav-link login">Login</a>
										 </li>
										 <li className="ml-lg-3 sign-up py-lg-0 py-3">
											 <a href="#." className="btn dark-btn small-btn">Sign Up</a>
										 </li>
									 </ul>
								 </div> {/*.navbar-collapse */}
							 </div> {/* / .container */}
						 </nav>
					<div className="d-table w-100 h-100">
						<div className="d-table-cell align-middle">
							 <div className="container burger-responsive">
								 <div className="row">
									 <div className="col-lg-9 col-xl-6 col-sm-12 col-md-9">
										 <div className="banner-text position-relative d-flex flex-column justify-content-center">
											 <h1 className="text-white big-font">Learn the Natural way,  Speak like a Native.</h1>
											 <p className="mb-4">*Munsel is an online language learning platform that connects native language speakers with students. </p>
											 <form className="form form-newsletter input-group" method="post" action="index.html">
												 <input className="form-control mr-md-3 mr-1" placeholder="Enter@email.com" type="email"></input>
												 <button type="button" className="input-group-append btn dark-btn " name="button">Get Started</button>
											 </form>
											 <p className="mt-3 lead border-dashed">Increase your chance of learning a new language by  12%</p>
											 <a href="javascript:;" className="learn-more text-white lead font-weight-bold d-table">
											 <span className="">Learn More</span>
											 <i className="fa fa-angle-down d-table-cell align-bottom pl-2"></i></a>
										 </div> {/* }/banner text */}
									 </div>{/* }/col */}
								 </div> {/* /row */ }
							 </div> {/* }/container */}
						 </div>
					 </div>
				</div> {/* banner */}
				</div>
				);
			}
			}

			class Main extends React.Component{

				render(){
					return(
						<div>
						<main id="main-content">
							<section className="t-burger our-story">
								<div className="container">
									<div className="row align-items-stretch">
										<div className="col-lg-5 col-md-5 pr-md-0">
											<div className="text-box h-100 theme-bg p-lg-5 p-3 text-white d-flex flex-column justify-content-center b-radius">
													<h2 className="text-white big-font">Munsel</h2>
													<p className="font-big mb-4">adj ~ (mun sel)</p>
													<p className="font-italic lead">: open minded; commited; engaged</p>
												</div>
										</div> {/* /col */}
										<div className="col-lg-7 col-md-7">
											<div className="h-100 gray-bg p-lg-5 p-3 d-flex flex-column justify-content-center b-radius">
													<h2>Our Story</h2>
													<p>Munsel was founded in early 2017 by a Software Engineer and a Multi-Cultural Entrepreneur wishing to connect back to their roots. While the venture was initially built to ameliorate communication gaps between Tibetans, our mission to help all people to learn languages and all its nuances, to see the world differently in other languages.</p>
													<a href="#." className="font-weight-bold meet-team"><span>Meet our Team</span></a>
												</div>
										</div> {/* /col */}
									</div> {/* /row */}
								</div> {/* /container */}
							</section>
							<section className="why-us b-burger mt-3">
								<div className="container">
									<div className="row align-items-stretch">
										<div className="col-lg-4 col-md-4 pr-md-0">
											<div className="h-100 gray-bg pl-lg-5 pr-lg-2 p-3 py-6 d-flex flex-column l-radius">
													<h2>Why Munsel? </h2>
													<p>Cultural exchange and dialogues are the crux of our program. With us, you get to interact with natives, immerse in a real-life dialogues, revise at your convenience, a sophisticated self-grading system, and be part of a like-minded language learners. </p>
												</div>
										</div> {/* /col */}
										<div className="col-lg-4 col-md-4 px-md-0 mb-4 mb-md-0">
											<div className="h-100 gray-bg pr-lg-5 pl-lg-2 p-3 py-6 d-flex flex-column r-radius">
													<h2>“Little Wiser Everyday”</h2>
													<p>One of the best ways to grow is learn something everyday. The recipe to success is focus, dedication and determination. Combine the two, you will find yourself becoming a little wiser everyday in the crucible of continuous learning.</p>
												</div>
										</div> {/* /col */}
										<div className="col-lg-4 col-md-4">
												<img src={require('./images/Parchang-Picture@2x.png')} alt="image" className="img-fluid b-radius object-cover"></img>
										</div> {/* /col */}
									</div> {/* /row */}
								</div> {/* /container */}
							</section>
							<hr className="b-burger m-0"></hr>
							<section className="b-burger approach">
								<div className="container">
									<div className="row align-items-stretch">
										<div className="col-lg-6 col-md-6 mb-4">
												<img src={require('./images/people-new@2x.png')} alt="image" className="img-fluid b-radius object-cover"></img>
										</div> {/* /col */}
										<div className="col-lg-6 col-md-6">
											<div className="h-100 p-lg-5 p-3 d-flex flex-column justify-content-center b-radius">
													<h2 className="theme-color mb-md-5 big-font">Munsel Approach</h2>
													<h2>Natural Learning</h2>
													<p className="mb-md-5">Our Natural Learning approach ensures our students convenience, direct and personal learning experience with a native speaker; a chance to listen and speak and immerse in your target language.</p>
													<h2>Community</h2>
													<p className="mb-md-5">Our community of like mindedness is the heart of Munsel. We provide network and support to help you achieve your language goals and help you see the world differently in another language.</p>
													<h2>Immersion</h2>
													<p className="mb-md-5">Our immersion program values and imparts open mindedness, commitment and engagement.</p>
												</div>
										</div> {/* /col */}
									</div> {/* /row */}
								</div> {/* /container */}
							</section>
							<hr className="b-burger m-0"></hr>
							<section className="b-burger products">
								<div className="container">
									<div className="row mb-md-5">
										<div className="col-lg-12">
											<h2 className="theme-color big-font">Our Products</h2>
										</div>
									</div>
									<div className="row align-items-stretch">
										<div className="col-lg-4 col-md-4 mb-4 p-2">
											<div className="text-box h-100 d-flex flex-column b-radius card">
													<a href="#."><img className="card-img-top img-fluid p-3 object-cover custom-height" src={require('./images/Resources@2x.png')}  alt="image"></img></a>
													<div className="card-body">
														<h2 className="card-title">Resources & Tools</h2>
														<p className="card-text pb-5">All previous courses, articles, learning methods, free online learning tools and audios are available here.</p>
														<h3><a href="#" className="theme-color link">Explore Free Resources</a></h3>
													</div>
												</div>
										</div> {/* /col */}
										<div className="col-lg-4 col-md-4 mb-4 p-2">
											<div className="h-100 d-flex flex-column b-radius card">
												<a href="#."><img className="card-img-top img-fluid p-3 object-cover custom-height" src={require('./images/think@2x.png')}  alt="image"></img></a>
												<div className="card-body">
														<h2 className="card-title">Munsel Podcast</h2>
														<p className="card-text pb-5">Our podcast features discussions and interviews and lessons on honorifics, cultural etiquettes, how to’s, cultural history, food, and cultural lifestyles.</p>
														<h3><a href="#" className="theme-color link">Listen to our podcast</a></h3>
												</div>
												</div>
										</div> {/* /col */}
										<div className="col-lg-4 col-md-4 mb-4 p-2">
											<div className="h-100 d-flex flex-column b-radius card">
												<a href="#."><img className="card-img-top img-fluid p-3 object-cover custom-height" src={require('./images/Munsel-logomark@2x.jpg')}  alt="image"></img></a>
												<div className="card-body">
														<h2 className="card-title">Language Buddy App</h2>
														<p className="card-text pb-5">We are currently building a language buddy App. This App will provide one-on-one online and offline dialogue sessions.</p>
														<h3><a href="#" className="theme-color link">Connect with Native Speaker</a></h3>
												</div>
												</div>
										</div> {/* /col */}
									</div> {/* /row */}
								</div> {/* /container */}
							</section>
							<section className="join-us">
								<div className="dark-overlay"></div>
								<div className="container burger">
									<div className="row justify-content-center text-white">
										<div className="col-lg-10">
											<h2 className="text-white big-font">Join Munsel and Speak Like a Native </h2>
											<div className="row align-items-stretch mt-5">
												<div className="col-lg-5 col-md-5">
													<div className="text-box h-100 d-flex flex-column justify-content-center b-radius">
													<ul className="list-unstyled">
														<li><p>1. Speak like a native with Munsel’s easy and quick natural learning approach.</p></li>
														<li><p>2. Acquire Munsel’s yearning for learning and wider perspectives. </p></li>
														<li><p>3. With cultural nuances and languages, you are always home.</p></li>
														<li><p>4. Soft skills and foreign languages for competitive edge in career choices. </p></li>
														<li><p>5. Build long lasting friendships, enhance your empathy skills, and improve your thinking skills and memory ability with Munsel language programs. </p></li>
													</ul>
														</div>
												</div>
												<div className="col-lg-7 col-md-7">
													<div className="h-100 d-flex flex-column justify-content-center b-radius">
														<div className="join-form p-lg-5 p-3">
															<h3 className="text-white f-medium">Sign up with your email address:</h3>
															<form className="form form-newsletter" method="post" action="index.html">
																<div className="form-group py-3">
																	<input className="form-control" placeholder="Enter@email.com" type="email"/>
																</div>
																<button type="button" className="btn dark-btn btn-block" name="button">Get Started</button>
															</form>
														</div>
													</div>
												</div>
											</div> {/* -/row-inneer */}
										</div> {/* /col */}
									</div> {/* -/row */}
								</div> {/* /container */}
							</section>
						</main>
						</div>
						);
					}
					}

			class Footer extends React.Component{
						clicked(text) {
								console.log(text+' was clicked!');
						}

						render(){
							return(
								<div>
								<footer className="site-footer t-burger">
									 <div className="container">
										 <div className="row">
											 <div className="col-lg-7 col-md-7 col-sm-12 d-flex justify-content-between flex-column flex-sm-row">
												 <div className="footer-nav">
													 <h2>Navigation</h2>
													 <ul className="list-unstyled footer-nav muted-text">
														 <li><a href="#.">Home</a></li>
														 <li><a href="#.">About </a></li>
														 <li><a href="#.">Writing</a></li>
														 <li><a href="#.">Resources</a></li>
													 </ul>
												 </div>
												 <div className="footer-nav">
													 <h2>Products</h2>
													 <ul className="list-unstyled footer-nav muted-text">
														 <li><a href="#.">Resources</a></li>
														 <li><a href="#.">Podcast </a></li>
														 <li><a href="#.">Munsel App</a></li>
													 </ul>
												 </div>
												 <div className="footer-nav">
													 <h2>Support</h2>
													 <ul className="list-unstyled footer-nav muted-text">
														 <li><a href="#.">FAQ</a></li>
														 <li><a href="#.">Contact Us </a></li>
														 <li><a href="#.">Contributor</a></li>
													 </ul>
												 </div>
											 </div> {/* col */}
											 <div className="offset-lg-1 col-lg-4 col-md-5 col-sm-8 footer-form">
												 <h2>Stay Updated!</h2>
												 <form className="form form-newsletter input-group mb-4" method="post" action="index.html">
													<input className="form-control mr-md-1" placeholder="Enter@email.com" type="email"/>
													<button type="button" className="btn input-group-append dark-btn x-small-btn" name="button">Send</button>
												 </form>
												 <div className="footer-social d-flex justify-content-between">
												 <button className="btn btn-social btn-facebook" onClick={(e) => {this.clicked("https://www.facebook.com/TheMunsel");}}>{/*"location.href='https://www.facebook.com/TheMunsel'"}>*/}
														<i className="fab fa-facebook-f"></i> Facebook
													</button>
													<button className="btn btn-social btn-instagram" onClick={(e) => {this.clicked("instagram");}}>{/*"location.href='https://www.instagram.com/themunsel'"}>*/}
														<i className="fab fa-instagram"></i> Instagram
													</button>
													<button className="btn btn-social btn-youtube" onClick={(e) => {this.clicked("Youtube");}}>{/*"location.href='https://www.youtube.com/channel/UCoBQcPMruzmRdfE5sdAxk5w'"}>*/}
													<i className="fab fa-youtube"></i> Youtube
													</button>
												 </div>
											 </div> {/* /col */}
										 </div> {/* /row */}
										 <div className="t-burger">
											 <hr className="m-0"/>
											 <div className="row py-3 justify-content-between">
												 <div className="col-lg-4 col-sm-6">
													 <a href="#.">Privacy Policty</a> | <a href="#.">Terms & Condition</a>
												 </div>
												 <div className="col-lg-4 col-sm-6 text-sm-right">© 2018 Munsel, All rights reserved</div>
											 </div>
										 </div>
									 </div>{/* /container*/}
								</footer>
								</div>
								);
							}
							}



const comment = {
	fburl:'https://www.facebook.com/TheMunsel',
	instaurl:'https://www.instagram.com/themunsel',
	yturl: 'https://www.youtube.com/channel/UCoBQcPMruzmRdfE5sdAxk5w',
};
