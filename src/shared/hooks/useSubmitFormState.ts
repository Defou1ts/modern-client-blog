import { useState } from 'react';

export const useSubmitFormState = () => {
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	const setSuccesWithTimeout = (time: number) => {
		setIsSuccess(true);
		setTimeout(() => {
			setIsSuccess(false);
		}, time);
	};

	const setErrorWithTimeout = (time: number) => {
		setIsError(false);
		setTimeout(() => {
			setIsError(false);
		}, time);
	};

	return { isSuccess, isError, setSuccesWithTimeout, setErrorWithTimeout };
};
