var React = require('react');
var PropTypes = React.PropTypes;


function puke (object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function SomeComponent(props){
    return (
        <div className='col-sm-6'>
            <p className='lead'>{props.header}</p>
                {props.children}
                {puke(props)}
            <button type="button" className='btn btn-lg btn-success' onClick={props.onRouteToMain}> Return</button> 
        </div>
    )
}


module.exports = SomeComponent;