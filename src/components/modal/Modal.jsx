import React from 'react';
import './modal.sass';

const Modal = ({ onClose, title, children }) => {
	return (
		<>
			<div className={'darkBG'} onClick={() => onClose()} />
			<div className={'centered'}>
				<div className={'modal'}>
					<div className={'modalHeader'}>
						<h5 className={'heading'}>{title}</h5>
					</div>
					<button className={'closeBtn'} onClick={() => onClose()}>
						X
					</button>
					<div className={'modalContent'}>{children}</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
