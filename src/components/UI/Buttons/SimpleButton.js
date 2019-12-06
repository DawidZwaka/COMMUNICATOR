import React from 'react';
import Styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';

const styling = css`
    border: 0;
    font-size: 1.6rem;
    border-radius: 2px;
    padding: .8rem 2.5rem;
    ${({design}) => {
        switch(design) {
            case 'primary':
            default: {
                return css`
                    background: var(--gradient);
                    color: var(--light);
                    &:hover {

                    }
                `
            }
        }
    }}
`

const LinkButton = Styled(Link)`${styling}`;
const Button = Styled.button`${styling}`;

const SimpleButton = props => {
    const { type, children, design, click } = props;
    let btn;

    switch(type) {
        case 'link': {
            btn = <LinkButton 
                    desing={design}
                    onClick={click}
                    >
                {children}
                </LinkButton>;

            break;
        }
        case 'submit': {
            btn = <Button 
                    desing={design}
                    onClick={click} 
                    type='submit'>
                {children}
                </Button>;

            break;
        } 
        default: {
            btn = <Button 
                    desing={design}
                    onClick={click}>
                {children}
                </Button>;
        }
    }
    
    return btn;
}

SimpleButton.defaultProps = {
    type: 'button',
    design: 'primary'
}

export default SimpleButton;