import React from 'react';

// FUNCTIONAL COMPONENT
// STATELESS, DUMB COMPONENT/PRESENTATIONAL COMPONENT

// so porops is passed when the PARENT's render function is called
const NewsList = (props) => {

	const newsList = props.news.map((newz, i) => {
		return (
			<div key ={i}>

			<li >Source: {newz.name}</li>
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