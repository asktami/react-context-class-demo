import React from 'react';
import MyContext from './MyContext';

import GrandchildComponent from './GrandchildComponent';

class ChildComponent extends React.Component {
	// using static, allows you to do this.context... further down
	// ex. this.context.count
	static contextType = MyContext;

	render() {
		return (
			<div>
				<h2>ChildComponent</h2>
				<button onClick={() => this.context.updateCount(1)}>
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
