import { useState } from 'react';

export const useSubmitFormState = () => {
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const setSuccesWithTimeout = (time: number) => {
		setIsLoading(false);
		setIsSuccess(true);
		setTimeout(() => {
			setIsSuccess(false);
		}, time);
	};

	const setErrorWithTimeout = (time: number) => {
		setIsLoading(false);
		setIsError(false);
		setTimeout(() => {
			setIsError(false);
		}, time);
	};

	const setLoading = () => {
		setIsLoading(true);
	};

	return { isSuccess, isLoading, isError, setSuccesWithTimeout, setErrorWithTimeout, setLoading };
};
