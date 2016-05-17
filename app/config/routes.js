var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Home = require('../components/Home');
var Main = require('../components/Main');

var SomeComponentContainer = require('../containers/SomeComponentContainer');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='someRoute' header="SomeHeader" component={SomeComponentContainer} />
		</Route>
	</Router>
);

module.exports = routes;