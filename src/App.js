import React from 'react';
import './App.css';

import MyContext from './MyContext';

import ChildComponent from './ChildComponent';

class App extends React.Component {
	// in this example, App = my Provider - where I define state
	// Provider = holds and provides state

	state = {
		count: 0 // default state 'count' variable value
	};

	/*
	From the React documentation: Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

	Meaning: updates to the DOM don’t happen immediately when this.setState is called.

	So, since  we shouldn’t rely on this.state to calculate the next value, instead of passing in an object to this.setState, pass in a function

	Do NOT do:
	this.setState({
		count: this.state.count + num };
	});


	Instead, use the component's current state (prevState), existing before user invoked this function + 'num' value passed to this function in Child and Grandchild components

	Note: props = current component props, NOT function arguments
	*/

	updateCount = num => {
		this.setState((prevState, props) => {
			return { count: prevState.count + num };
		});
	};

	/*
	from https://reactjs.org/docs/context.html:

		Context.Provider

		 Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes

		 Accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.

		 All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes. The propagation from Provider to its descendant consumers is not subject to the shouldComponentUpdate method, so the consumer is updated even when an ancestor component bails out of the update.
		*/

	// create a component state object to update the values stored in MyContext
	// pass in any variables and functions you want access to in child components (aka Consumers)
	// pass in both the state variables AND the functions which change them

	render() {
		// QUESTION: outside the render() this.state = initial values??? 1st console.log in render = intial state, after every state update render gets re-executed

		// render is called every time the state changes & causes the ui to refresh/update

		// this will NOT work if componentStateObj is defined outside the render()

		// variable is outside the return (just like in functional component, but inside the RENDER to render stuff to the ui and because of the rules of javascript classes), also b/c render re-runs when state changes
		// if outside render it wouldn't see the state change b/c RENDER is what executes when the state changes
		const componentStateObj = {
			...this.state, // pass in all state variables
			updateCount: this.updateCount
		};

		return (
			// use Provider to pass this component state as a context value down to the entire component tree
			<MyContext.Provider value={componentStateObj}>
				<main className="App">
					<h1>
						React Context Demo
						<br />
						with Class Components
					</h1>
					<p>To use context you need:</p>
					<ul>
						<li>a state object (in a provider)</li>
						<li>a way to change your state object from your consumer(s)</li>
						<li>a way to communicate state changes to your provider</li>
					</ul>

					<div>The count (in state) is {this.state.count}</div>
					<ChildComponent />
				</main>
			</MyContext.Provider>
		);
	}
}

export default App;
