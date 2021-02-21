import React from 'react';
import LinkWithIcon from '../LinkWithIcon/LinkWithIcon';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//svgs
import { ReactComponent as LoginIcon } from '../../../assets/loginIcon.svg';
import { ReactComponent as SigninIcon } from '../../../assets/signinIcon.svg';
import { ReactComponent as SettingsIcon } from '../../../assets/signinIcon.svg';
import { ReactComponent as GlobalRoomIcon } from '../../../assets/signinIcon.svg';
import { ReactComponent as FriendsIcon } from '../../../assets/signinIcon.svg';
import { ReactComponent as AddFriendIcon } from '../../../assets/signinIcon.svg';

const mapStateToProps = ({ auth: loggedIn }) => ({
	loggedIn
});

class MenuNav extends React.Component {
	state = {
		currentPosition: null
	};

	links = {
		loggedOut: [
			{
				target: '/login',
				linkText: 'Log In',
				icon: <LoginIcon />
			},
			{
				target: '/signin',
				linkText: 'Sign In',
				icon: <SigninIcon />
			}
		],
		loggedIn: [
			{
				target: '/settings',
				linkText: 'Settings',
				icon: <LoginIcon />
			},
			{
				target: '/',
				linkText: 'Global room',
				icon: <LoginIcon />
			},
			{
				target: '/friends',
				linkText: 'Friends',
				icon: <LoginIcon />
			},
			{
				target: '/add-friend',
				linkText: 'Add friend',
				icon: <LoginIcon />
			}
		]
	};

	setCurrentPosition = elem => {
		this.setState({ currentPosition: elem.offsetTop });
	};

	getNavLinks = type =>
		this.links[type].map(({ linkText, target, icon }) => {
			const { path: currentPath } = this.props.match;

			return (
				<LinkWithIcon
					key={target}
					to={target}
					current={currentPath === target}
					setCurrentPosition={this.setCurrentPosition}
				>
					{icon}
					<p>{linkText}</p>
				</LinkWithIcon>
			);
		});
	render() {
		return this.getNavLinks(this.props.loggedIn ? 'loggedIn' : 'loggedOut');
	}
}

export default connect(mapStateToProps)(withRouter(MenuNav));
