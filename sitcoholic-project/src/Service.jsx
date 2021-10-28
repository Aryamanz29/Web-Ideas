import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = () => {
	return (
		<>
			<section id='header' className='d-flex align-items-center'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
							<div class='p-md-5'>
								<h1>
									Watch Top Sitcoms on
									<strong className='brand-name'> Netflix</strong>
								</h1>
								<h2 className='my-3'>Netflix and Chill!</h2>
								<div className='mt-3'>
									<NavLink to='/netflix' className='btn-get-started'>
										Watch Now
									</NavLink>
								</div>
							</div>
						</div>
						<div class='col-lg-6 order-1 order-lg-2 d-flex justify-content-center flex-column'>
							<div class='p-5'>
								<h1>
									Watch Top Sitcoms on
									<strong className='brand-name'> Prime</strong>
								</h1>
								<h2 className='my-3'>Watch Sitcoms Online here!</h2>
								<div className='mt-3'>
									<NavLink to='/prime' className='btn-get-started'>
										Watch Now
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Service;
