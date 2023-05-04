import React from 'react';
import type { ReactNode } from 'react';

import type { ErrorBoundaryProps } from './interfaces';

interface ErrorState {
	error: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);

		this.state = {
			error: false,
		};
	}

	static getDerivedStateFromError(): ErrorState {
		return { error: true };
	}

	render(): ReactNode {
		if (this.state.error) {
			return <h1>Something went wrong, please try reload page or visit later</h1>;
		}

		return this.props.children;
	}
}
