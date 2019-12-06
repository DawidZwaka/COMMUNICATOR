import React from 'react';
import Styled from 'styled-components';

const Label = Styled.label`
    width: 100%;
    padding: 0 1rem;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    background: var(--secondary);
    color: var(--header);
    height: 4rem;
    svg {
        width: 30px;
    }
    span {
        position: relative;
    }
`;
const Input = Styled.input`
    width: calc( 100% - 30px);
    height: 4rem;
    border: 0;
    padding: 0 .5rem;
    background-color: transparent;
    line-height: 4rem;
    color: var(--header);
    &:focus {
        outline: none;
    }
    &::placeholder {
        font-weight: 600;
    }
`;

const FormInput = ({type, placeholder, children}) => {
    let input;

    switch(type) {
        case 'email': {
            input = <Input type="email" placeholder={placeholder}/>
            break;
        }
        case 'password': {
            input = <Input type="password" placeholder={placeholder}/>
            break;
        }
        case 'text':
        default: {
            input = <Input type="text" placeholder={placeholder} />
        }
    }

    return (
        <Label>
            {children}
            <span>
                {input}
            </span>
        </Label>    
    );
}

FormInput.defaultProps = {
    type: 'text'
}

export default FormInput;