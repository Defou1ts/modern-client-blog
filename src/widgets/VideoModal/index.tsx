import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';

import { videoOptions } from './lib/constants/videoOptions';
import { videoId } from './lib/constants/videoId';

import { Modal } from '@features/Modal';
import { selectIsOpenedVideoModal } from '@app/store/selectors/header.selectors';
import { closeVideoModal } from '@app/store/slices/header.slice';

export const VideoModal = () => {
	const dispatch = useDispatch();
	const isOpenedVideoModal = useSelector(selectIsOpenedVideoModal);

	const handleCloseModal = () => {
		dispatch(closeVideoModal());
	};

	return (
		<Modal isOpened={isOpenedVideoModal} onClose={handleCloseModal}>
			<YouTube videoId={videoId} opts={videoOptions} />
		</Modal>
	);
};
