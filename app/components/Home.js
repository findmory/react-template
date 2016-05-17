var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('../containers/MainContainer');

var Home = React.createClass({
	render: function() {
		return (
			<MainContainer>
				<h1>A header</h1>
				<p className='lead'>A motto</p>
				<Link to='/someRoute'>
					<button type='button' className='btn btn-lg btn-success'>Route</button>
				</Link>
			</MainContainer>
		)
	}
})

module.exports = Home;