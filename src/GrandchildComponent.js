import React from 'react';
import MyContext from './MyContext';

class GrandchildComponent extends React.Component {
	render() {
		return (
			// if you don't want to use static you can wrap the child component in MyContext.Consumer:
			<MyContext.Consumer>
				{context => (
					<div>
						<h2>GrandhildComponent</h2>
						<button onClick={context.count}>Count + 1</button> See Count in
						GrandchildComponent ({context.state.count})
					</div>
				)}
			</MyContext.Consumer>
		);
	}
}

export default GrandchildComponent;
