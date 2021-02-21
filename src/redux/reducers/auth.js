import actions from '../actions/auth';

const initState = {
	loggedIn: false
};

export default (state = initState, action) => {
	switch (action.type) {
		case actions.SET_LOGIN_STATUS: {
			return { ...state, loggedIn: action.isLogged };
		}
		default:
			return state;
	}
};
