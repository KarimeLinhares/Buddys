import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Photo from './Components/Photo/Photo';
import User from './Components/User/User';
import { UserStorage } from './UserContext';

function App() {
	return (
		<div>
			<BrowserRouter>
				<UserStorage>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='login/*' element={<Login />} />
						<Route
							path='account/*'
							element={
								<ProtectedRoute>
									<User />
								</ProtectedRoute>
							}
						/>
						<Route path='foto/:id' element={<Photo />} />
					</Routes>
					<Footer />
				</UserStorage>
			</BrowserRouter>
		</div>
	);
}

export default App;
