import React from 'react';
import Sdata from './Sdata';
import Card from './Card';

const CompA = () => {
	return (
		<>
			<h1 className='heading'>Top Sitcoms Streamed the most on 2020</h1>
			<div className='container-fluid mb-5'>
				<div className='row'>
					<div className='col-10 mx-auto'>
						<div className='row gy-4'>
							{Sdata.map((val, ind) => {
								if (val.id < 7) {
									return (
										<Card
											key={val.id}
											imgsrc={val.imgsrc}
											title={val.title}
											sname={val.sname}
											link={val.link}
										/>
									);
								} else {
									return null;
								}
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CompA;
