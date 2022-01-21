import React from 'react';
import {
	GoogleMap,
	// DirectionsRenderer,
	Marker,
	InfoWindow,
	LoadScript,
} from '@react-google-maps/api';

const MapDisplay = () => {
	const center = {
		lat: -6.3973822,
		lng: 106.8144251,
	};

	const mapContainerStyle = {
		height: '100%',
		width: '100%',
	};

	const data = [
		{
			loc: { lat: -6.394386129829999, lng: 106.82253614870389 },
			desc: 'Walikota Depok',
			dilihat: '12 desember 2013',
		},
		{
			loc: { lat: -6.390014654242988, lng: 106.80631414919652 },
			desc: 'Koni Depok',
			dilihat: '11 desember 2014',
		},
		{
			loc: { lat: -6.404813547459114, lng: 106.8171931885487 },
			desc: 'Stasiun Depok',
			dilihat: '14 desember 2015',
		},
		{
			loc: { lat: -6.3993546396235645, lng: 106.82528273063107 },
			desc: 'RS Hermina Depok',
			dilihat: '15 desember 2015',
		},
		{
			loc: { lat: -6.392125761752645, lng: 106.82343737089876 },
			desc: 'ITC Depok',
			dilihat: '17 desember 2017',
		},
	];

	const key = '';
	return (
		<div className='frame-map'>
			{/* <LoadScript googleMapsApiKey={process.env.REACT_APP_GMAP_API_KEY}> */}

			{!key ? (
				<span>masukkan keynya</span>
			) : (
				<LoadScript googleMapsApiKey={key}>
					<GoogleMap
						mapContainerStyle={mapContainerStyle}
						zoom={15}
						center={center}
					>
						{data &&
							data.map((dt, i) => (
								<Marker key={i} position={dt.loc} title='location'>
									<InfoWindow>
										<div>
											<div>{dt.desc}</div>
											<div>{dt.dilihat}</div>
										</div>
									</InfoWindow>
								</Marker>
							))}
					</GoogleMap>
				</LoadScript>
			)}
		</div>
	);
};

export default MapDisplay;
