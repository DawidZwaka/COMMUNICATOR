import React, { forwardRef } from 'react';
import Styled, { css } from 'styled-components';

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
    border: 2px solid var(--secondary);
    transition: border-color .3s;
    ${({ isValid }) =>
		!isValid
			? css`
					border-color: var(--danger);
			  `
			: null}
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

const FormInput = ({ type, children, validation, ...props }) => {
	let input;

	switch (type) {
		case 'email':
		case 'text':
		case 'password': {
			input = <Input type={type} {...props} />;
			break;
		}
		case 'textarea': {
			input = <textarea>{children}</textarea>;
			break;
		}
		default: {
			input = <Input type='text' {...props} />;
		}
	}

	return (
		<Label isValid={validation.isValid}>
			{children}
			<span>{input}</span>
		</Label>
	);
};

export default FormInput;
