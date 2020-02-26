import React from 'react';
import PropTypes from 'prop-types';
import './MessageBallon.scss';

const MessageBallon = (
	{ position = 'left', messageType = 'loading', message = null },
	ref
) => {
	let ballon;
	const classes = [
		'messageBallon',
		'w-75',
		'rounded-lg',
		'mb-3',
		'position-relative'
	];

	switch (position) {
		case 'right': {
			classes.push('ml-auto');
			break;
		}
		default:
			break;
	}

	switch (messageType) {
		case 'loading': {
			classes.push('bg-gray');

			ballon = <div ref={ref} className={classes.join(' ')}></div>;
			break;
		}
		case 'inside': {
			ballon = (
				<div ref={ref} className={classes.join(' ')}>
					{message}
				</div>
			);
			break;
		}
		case 'outside': {
			ballon = (
				<div ref={ref} className={classes.join(' ')}>
					{message}
				</div>
			);
			break;
		}
		default: {
			ballon = <div>Invalid message type</div>;
			break;
		}
	}

	return ballon;
};

MessageBallon.PropTypes = {
	position: PropTypes.string,
	message: PropTypes.string,
	messageType: PropTypes.string
};

export default React.forwardRef(MessageBallon);
