/*
██╗███╗   ███╗██████╗  ██████╗ ██████╗ ████████╗███████╗
██║████╗ ████║██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝
██║██╔████╔██║██████╔╝██║   ██║██████╔╝   ██║   ███████╗
██║██║╚██╔╝██║██╔═══╝ ██║   ██║██╔══██╗   ██║   ╚════██║
██║██║ ╚═╝ ██║██║     ╚██████╔╝██║  ██║   ██║   ███████║
╚═╝╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝                                                                                                                            
*/

import React from 'react';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import theme from './util/theme';
import { Provider } from 'react-redux';
import store from './redux/store';

//containers
import Messenger from './containers/messenger';
import Signin from './containers/signin';
import Login from './containers/login';
import Room from './containers/room';
import ForgotPassword from './containers/forgotPassword';
import Friends from './containers/friends';

/* 
 ██████╗ ██████╗ ███╗   ██╗███████╗████████╗ █████╗ ███╗   ██╗███████╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██╔══██╗████╗  ██║██╔════╝
██║     ██║   ██║██╔██╗ ██║███████╗   ██║   ███████║██╔██╗ ██║███████╗
██║     ██║   ██║██║╚██╗██║╚════██║   ██║   ██╔══██║██║╚██╗██║╚════██║
╚██████╗╚██████╔╝██║ ╚████║███████║   ██║   ██║  ██║██║ ╚████║███████║
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝                                                                      
*/

const history = createBrowserHistory();

/*
 █████╗ ██████╗ ██████╗ 
██╔══██╗██╔══██╗██╔══██╗
███████║██████╔╝██████╔╝
██╔══██║██╔═══╝ ██╔═══╝ 
██║  ██║██║     ██║     
╚═╝  ╚═╝╚═╝     ╚═╝                                                                                                    
*/

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<Router history={history}>
						<Route exact path='/' component={Messenger} />
						<Route exact path='/room/:roomID' component={Room} />
						<Route exact path='/signin' component={Signin} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/friends' component={Friends} />
						<Route
							exact
							path='/forgot-password'
							component={ForgotPassword}
						/>
					</Router>
				</ThemeProvider>
			</Provider>
		);
	}
}

export default App;
