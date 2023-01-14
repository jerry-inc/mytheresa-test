import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Detail } from './pages/detail/Detail';
import Header from './components/Header/Header';
import { WishProvider } from './context/wishContext';

const App = () => {
	return (
		<>
			<WishProvider>
				<Header />
				<div className="container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/detail/:theme/:id" element={<Detail />} />
					</Routes>
				</div>
			</WishProvider>
		</>
	);
};

export default App;
