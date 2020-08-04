import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [ search, setSearch ] = useState('');
	const [ submitSearch, setSubmitSearch ] = useState('');
	const [ data, setData ] = useState([]);
	const url = `http://www.omdbapi.com/?&apikey=${process.env.REACT_APP_API_KEY.substring(
		1,
		process.env.REACT_APP_API_KEY.length - 1
	)}&s=${submitSearch}`;

	useEffect(
		() => {
			fetch(url)
				.then((res) => res.json())
				.then((data) => setData(data.Search))
				.catch((err) => console.log(err.message));
		},
		[ url ]
	);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const submit = (e) => {
		e.preventDefault();
		setSubmitSearch(search);
	};

	return (
		<div className="App">
			<h1>Hello world</h1>
			<form onSubmit={submit}>
				<label htmlFor="searchBox"> Search </label>
				<input
					type="text"
					name="searchBox"
					placeholder="Search"
					value={search}
					onChange={(e) => handleChange(e)}
				/>
				{data ? (
					data.map(
						(movie) =>
							movie.Poster !== 'N/A' ? (
								<div key={movie.imdbID}>
									<img src={movie.Poster} alt="" />
									<div>{movie.Title}</div>
								</div>
							) : (
								''
							)
					)
				) : (
					''
				)}
			</form>
		</div>
	);
}

export default App;
