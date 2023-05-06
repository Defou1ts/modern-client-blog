import { useState } from 'react';

export const useSubmitFormState = () => {
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [isLoading, setIsLodaing] = useState<boolean>(false);

	const setSuccesWithTimeout = (time: number) => {
		setIsLodaing(false);
		setIsSuccess(true);
		setTimeout(() => {
			setIsSuccess(false);
		}, time);
	};

	const setErrorWithTimeout = (time: number) => {
		setIsLodaing(false);
		setIsError(false);
		setTimeout(() => {
			setIsError(false);
		}, time);
	};

	const setLoading = () => {
		setIsLodaing(true);
	};

	return { isSuccess, isLoading, isError, setSuccesWithTimeout, setErrorWithTimeout, setLoading };
};
