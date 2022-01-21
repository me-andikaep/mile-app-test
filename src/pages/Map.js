import React, { useState } from 'react';
import MapDisplay from '../components/maps/MapDisplay';

const Map = () => {
	const [check, setCheck] = useState(true);

	return (
		<div className='container-map'>
			<div className='card-map'>
				<div className='header mb-4'>
					<h5 className='title'>Map</h5>
					<div className='wrapper-action'>
						<div className='wrapper-checkbox'>
							<input
								type='checkbox'
								checked={check}
								value={check}
								onChange={() => setCheck(!check)}
							/>
							<span>Show Offline</span>
						</div>
						<div className='wrapper-input'>
							<input type='text' />
						</div>
					</div>
				</div>
				<div className='map-container'>
					<MapDisplay />
				</div>
			</div>
		</div>
	);
};

export default Map;
