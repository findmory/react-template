var React = require('react');
var SomeComponent = require('../components/SomeComponent');
var styles = require('../styles/styles');

var SomeComponentContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    handleRouteToMain: function(){
        this.context.router.push({
            pathname: '/',
        })
    },
    render: function(){
        return (
            <SomeComponent onRouteToMain={this.handleRouteToMain} header="this is a header" someRandomProp="test"/>
        )
    }
    
});

module.exports = SomeComponentContainer;