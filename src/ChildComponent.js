import React from 'react';
import MyContext from './MyContext';

import GrandchildComponent from './GrandchildComponent';

class ChildComponent extends React.Component {
	// using static
	static contextType = MyContext;

	// QUESTION WHY is this.context.count NOT the value in context??? instead it is ALWAYS 0 inside this component (same for Grandchild)
	render() {
		let childCount = this.context.count;
		console.log('Child this.context.count = ', childCount);

		return (
			<div>
				<h2>ChildComponent</h2>
				<button onClick={() => this.context.setCount(this.context.count + 1)}>
					Count + 1
				</button>{' '}
				See Count in ChildComponent ({this.context.count})
				<br />
				<GrandchildComponent />
			</div>
		);
	}
}

export default ChildComponent;
