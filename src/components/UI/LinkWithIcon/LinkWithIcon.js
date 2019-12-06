import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { up } from 'styled-breakpoints';

const StyledLink = Styled(Link)`
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    margin-left: 1rem;
    font-weight: 600;
    padding: .4rem;
    color: var(--header);
    &:hover {
        text-decoration: none
    }
    p {
        margin: 0 0 0 1rem;
        display: none;
    }
    ${up('sm')} {
        margin-bottom: 1rem;
        margin-left: 0;
    }
    ${up('lg')} {
        p {
            display: inline;
        }
    }
`

class LinkWithIcon extends React.Component {

    constructor(props) {
        super(props);

        this.ref = React.createRef();
    }

    componentDidMount() {
        if(this.props.current) this.props.setCurrentPosition(this.ref);
    }

    render() {
        const {to, children, linkText} = this.props;

        return (
            <StyledLink
                ref={this.ref} 
                to={to}>
                {children}
                <p>{linkText}</p>
            </StyledLink>
        );
    }
}

LinkWithIcon.defaultProps = {
    to: '/'
}

export default LinkWithIcon;