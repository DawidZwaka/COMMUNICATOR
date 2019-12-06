import React from 'react';
import { Link } from 'react-router-dom';
import Styled, {css} from 'styled-components';

const styling = css`
    width: ${({btnsize}) => btnsize}px;
    height: ${({btnsize}) => btnsize}px;
    background-color: ${({bgcolor}) => bgcolor? bgcolor : `var(--loader)`};
    border-radius: 100%;
    position: relative;
    margin-bottom: .2em;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 0;
`
const Btn = Styled('button')`
    ${styling}
    `;
const BtnLink = Styled(Link)`
    ${styling}
    `;
const BtnLoader = Styled('div')`
    ${styling}
    `;


const CircleButton = (props, ref) => {

    const { children } = props;
    let render;

    switch(props.type) {
        case 'link': {
            render = (
                <BtnLink ref={ref} btnsize={props.size}>
                    {children}
                </BtnLink>
            );

            break;
        }
        case 'form': {
            render = (
                <form>
                    <Btn ref={ref} btnsize={props.size}>
                        {children}
                    </Btn>
                </form>
            );

            break;
        }
        case 'button': {
            render = (
                <Btn ref={ref} btnsize={props.size}>
                    {children}
                </Btn>
            );

            break;
        }
        default: {
            render = (
                <BtnLoader ref={ref} btnsize={props.size}>
                </BtnLoader>
            );
        }
    }

    return render;
}

CircleButton.defaultProps = {
    type: 'loading'
}

export default React.forwardRef(CircleButton);