import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.sass';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
