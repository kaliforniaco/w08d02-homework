import React from 'react';

const NewsList = (props) => {

	const newsList = props.news.map((newz, i) => {
		return (
			<div key ={i}>

			
			<li >Story: {newz.title}</li>
			<li >By: {newz.author}</li>
			<li >Detail: {newz.description}</li>
			<li> ___________________________ </li>
			</div>
		)
	});

return (
	<div><h4>News List</h4>
		<ul>
		{newsList}
		</ul>

	</div>
		)
};

export default NewsList;