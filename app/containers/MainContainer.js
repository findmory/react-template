var React = require('react');
var styles = require('../styles/styles');

function MainContainer(props){
    return (
        <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
            <div className="col-sm-12" style={styles.transparentBg}>
                {props.children}
            </div>
        </div>
    )
}

module.exports = MainContainer;