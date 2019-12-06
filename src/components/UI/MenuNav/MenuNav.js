import React from 'react';
import LinkWithIcon from '../LinkWithIcon/LinkWithIcon';
import { withRouter } from 'react-router-dom';

//svgs
import { ReactComponent as LoginIcon } from '../../../assets/loginIcon.svg';
import { ReactComponent as SigninIcon } from '../../../assets/signinIcon.svg';

class MenuNav extends React.Component {
    state = {
        currentPosition: null
    }

    links = {
        loggedOut: [
            {target: "/login", linkText: "Log In", icon: <LoginIcon/>},
            {target: "/signin", linkText:"Sign In", icon: <SigninIcon/>}
          ],
        loggedIn: [
          
        ]
      }

    setCurrentPosition = elem => {
        this.setState({currentPosition: elem.offsetTop});
    }
  
    getLoggedOutLinks = () => 
        this.links.loggedOut.map( 
            ({linkText, target, icon}) => {
              const { path: currentPath} = this.props.match;
  
              return (
                <LinkWithIcon 
                  key={target}
                  to={target}
                  current={currentPath === target}
                  setCurrentPosition={this.setCurrentPosition}
                >
                  {icon}
                  <p>
                    {linkText}
                  </p>
                </LinkWithIcon>
              )
            });
    render() {
        return (this.getLoggedOutLinks());
    }
}

export default withRouter(MenuNav);