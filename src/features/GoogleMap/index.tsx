import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import { markersCoords } from './consts/markersCoords';
import { initialCenterCoord } from './consts/initialCenterCoords';
import { mapStyles } from './consts/mapStyles';
import styles from './index.module.scss';

import type { WindowWithGoogle } from './types';

const GoogleMapContainer = () => {
	return (
		<div className={styles.wrapper}>
			<Map
				google={(window as WindowWithGoogle).google}
				zoom={4}
				style={mapStyles}
				initialCenter={initialCenterCoord}
			>
				{markersCoords.map((position) => (
					<Marker key={position.lat} position={position} />
				))}
			</Map>
		</div>
	);
};

export const GoogleMap = GoogleApiWrapper({
	apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
})(GoogleMapContainer);
