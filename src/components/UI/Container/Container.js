import Styled, {css} from 'styled-components';
import { up } from 'styled-breakpoints';
import { breakpoints } from '../../../util/theme'; 

const getStylingByBreakpoint = (props, breakpoint) => {
    const { cntWidth: width, direction } = props;
    let percWidth = 100;

    if(breakpoint)  {
        const { [breakpoint]: brk } = width;
        if(!brk) return null;

        percWidth = 100*brk/12;
    }

    return direction === 'row'? `flex: 0 0 ${percWidth}%`: `width: ${percWidth}%`;
}

const Container = Styled.div`
    background-color: var(--fourth);
    position: relative;
    padding: 2rem;
    box-shadow: 2px 2px 4px rgba(30, 31, 36, 0.4);
    ${props => {
        breakpoints.xs = undefined;

        return Object.keys(breakpoints).map( breakpoint => {
            let styling;
            if(breakpoint === 'xs') 
                styling = css`${getStylingByBreakpoint(props, breakpoint)}`;
            else {
                styling = css`${up(breakpoint)} {${getStylingByBreakpoint(props, breakpoint)}}`;
            }

            return styling;
            }
        ).concat();
        
    }};

    ${({padding}) => padding? `padding: ${padding.join('rem ')}rem`: null}
    
    ${({margin}) => margin? `margin: ${margin.join('rem ')}rem`: null}

    ${({maxWidth}) => maxWidth? `max-width: ${maxWidth}px`: null}
`;

Container.defaultProps = {
    cntWidth: 12,
    direction: 'row'
}

export default Container;
