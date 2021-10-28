import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	var icon = (
		<span class='logo'>
			<a href='/'>
				<img src='sitelogo.png' alt='...' />
			</a>
		</span>
	);
	return (
		<>
			<div className='container-fluid nav_bg'>
				<div className='row'>
					<div className='col-10 mx-auto'>
						<nav className='navbar navbar-expand-lg navbar-light navbar-static-top'>
							<div className='container-fluid'>
								<NavLink
									className='navbar-brand'
									style={{ color: 'white' }}
									brand={icon}
									toggleNavKey={0}
									to='/'>
									Sitcoholic
								</NavLink>
								<button
									className='navbar-toggler'
									type='button'
									data-toggle='collapse'
									data-target='#navbarSupportedContent'
									aria-controls='navbarSupportedContent'
									aria-expanded='false'
									aria-label='Toggle navigation'>
									<span className='navbar-toggler-icon'></span>
								</button>
								<div
									className='collapse navbar-collapse'
									id='navbarSupportedContent'>
									<ul className='navbar-nav main-nav ml-auto mb-2 mb-lg-0'>
										<li className='nav-item'>
											<NavLink
												exact
												activeClassName='menu_active'
												className='nav-link active'
												style={{ color: 'white' }}
												aria-current='page'
												to='/'>
												Home
											</NavLink>
										</li>

										<li className='nav-item'>
											<NavLink
												activeClassName='menu_active'
												className='nav-link active'
												style={{ color: 'white' }}
												aria-current='page'
												to='/about'>
												About
											</NavLink>
										</li>

										<li className='nav-item'>
											<NavLink
												activeClassName='menu_active'
												className='nav-link active'
												style={{ color: 'white' }}
												aria-current='page'
												to='/service'>
												Watch
											</NavLink>
										</li>

										<li className='nav-item'>
											<NavLink
												activeClassName='menu_active'
												className='nav-link active'
												style={{ color: 'white' }}
												aria-current='page'
												to='/contact'>
												Contact
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
