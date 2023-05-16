import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import { markersCoords } from './lib/constants/markersCoords';
import { initialCenterCoord } from './lib/constants/initialCenterCoords';
import { mapStyles } from './lib/constants/mapStyles';
import styles from './index.module.scss';

import type { WindowWithGoogle } from './types';

const GoogleMapContainer = () => {
	return (
		<section className={styles.wrapper}>
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
		</section>
	);
};

export const GoogleMap = GoogleApiWrapper({
	apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
})(GoogleMapContainer);
