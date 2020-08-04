import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const apiUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env
		.REACT_APP_API_KEY}&sort_by=popularity.asc`;

	const [ search, setSearch ] = useState('');
	const [ data, setData ] = useState(null);
	const [ url, setUrl ] = useState(apiUrl);

	const imageUrl = `https://image.tmdb.org/t/p/w200`;

	useEffect(
		() => {
			fetch(url)
				.then((res) => res.json())
				.then((data) => setData(data.results))
				.catch((err) => console.log(err.message));
		},
		[ url ]
	);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const submit = (e) => {
		e.preventDefault();
		setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`);
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
			</form>
			<div className="container">
				{data === null ? (
					<div> Loading... </div>
				) : (
					data.map(
						(movie) =>
							movie.poster_path !== null ? (
								<div key={movie.id}>
									<img src={`${imageUrl}${movie.poster_path}`} alt="" />
									<div>{movie.original_title}</div>
								</div>
							) : (
								''
							)
					)
				)}
			</div>
		</div>
	);
}

export default App;
