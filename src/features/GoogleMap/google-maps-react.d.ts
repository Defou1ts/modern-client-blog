import type { ReactNode } from 'react';

import type { MapPosition } from './interfaces';

declare module 'google-maps-react' {
	export interface IMapProps {
		google: any;
		zoom: number;
		style: Record<string, string>;
		initialCenter: MapPosition;
		children?: ReactNode;
	}

	export interface IMarkerProps {
		position: MapPosition;
	}
}
