import React from 'react';
import './wishButton.sass';

const WishButton = ({ children, onClick, count = 0 }) => {
	return (
		<button className="wish-button" type="button" onClick={onClick}>
			<svg
				className="svg-icon"
				viewBox="0 0 32 32"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M31.426 8.364c-0.864-3.129-3.279-5.544-6.344-6.393l-0.064-0.015c-0.692-0.172-1.486-0.271-2.304-0.271-2.596 0-4.96 0.998-6.727 2.631l0.007-0.006c-1.606-1.408-3.724-2.268-6.043-2.268-0.807 0-1.589 0.104-2.335 0.299l0.064-0.014c-3.276 0.931-5.804 3.458-6.718 6.666l-0.017 0.068c-0.175 0.678-0.276 1.457-0.276 2.259 0 2.724 1.161 5.178 3.015 6.892l0.006 0.006 11.381 12.619c0.23 0.254 0.561 0.412 0.929 0.412s0.699-0.159 0.928-0.411l0.001-0.001 11.358-12.596c2.088-1.877 3.396-4.587 3.396-7.602 0-0.807-0.094-1.592-0.271-2.345l0.014 0.069zM26.498 16.497c-0.016 0.015-0.031 0.030-0.044 0.046l-0.001 0.001-10.453 11.589-10.497-11.636c-1.434-1.271-2.334-3.118-2.334-5.174 0-0.573 0.070-1.129 0.201-1.661l-0.010 0.047c0.686-2.416 2.551-4.281 4.916-4.956l0.050-0.012c0.489-0.137 1.051-0.216 1.631-0.217h0c2.044 0.065 3.867 0.958 5.154 2.354l0.005 0.005c0.23 0.218 0.541 0.352 0.884 0.352s0.654-0.134 0.884-0.352l-0.001 0.001c1.419-1.651 3.51-2.69 5.843-2.69 0.582 0 1.15 0.065 1.695 0.187l-0.051-0.010c2.266 0.625 4.014 2.374 4.628 4.594l0.011 0.046c0.113 0.493 0.177 1.060 0.177 1.642 0 2.333-1.039 4.424-2.679 5.835l-0.010 0.009z"></path>
			</svg>

			<div className="count">{count}</div>
			{children}
		</button>
	);
};

export default WishButton;
