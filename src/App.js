import React, { Component } from 'react';
import Template from './hoc/Template';
import Layout from './components/Layout/Layout';
import Builder from './containers/Builder/Builder';

class App extends Component {
	render() {
		return (
			<Template>
				<Layout>
					<Builder/>
				</Layout>

			</Template>
		);
	}
}

export default App;
