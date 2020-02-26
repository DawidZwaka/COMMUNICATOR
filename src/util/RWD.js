import React from 'react';
import { breakpoints } from './theme';

class RWD extends React.Component {
	state = {
		viewPort: {
			x: null
		}
	};

	updateXDimension = () => {
		const { innerWidth: x } = window;

		this.setState({ viewPort: { x } });
	};

	componentDidMount() {
		this.updateXDimension();
		window.addEventListener('resize', this.updateXDimension);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateXDimension);
	}

	getChildBasedOnViewport = () => {
		const { children } = this.props;

		for (const child of children) {
			const { up, children: render } = child.props;
			const { [up]: breakpoint } = breakpoints;
			const { x } = this.state.viewPort;

			if (up && x >= breakpoint) {
				return render;
			} else if (!up) return render;
		}
	};

	render() {
		const { x } = this.state.viewPort;
		return <>{x ? this.getChildBasedOnViewport() : null}</>;
	}
}

export default RWD;
