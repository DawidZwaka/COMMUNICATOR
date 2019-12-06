import React from 'react';
import MainMenu from '../components/UI/MainMenu/MainMenu';
import Styled from 'styled-components';
import { up } from 'styled-breakpoints';

const Main = Styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 100%;
    height: calc( 100% - 60px );
    ${up('sm')} {
        flex: 0 0 calc( 100% - 70px);
        height: 100%;
    }
    ${up('lg')} {
        flex: 0 0 calc( 100% - 200px);
    }
    ${({direction}) => direction === 'column'? 'flex-direction: column;' : null}
`

const MainLayout = ({children, direction}) => {

    return (
        <>
            <MainMenu/>
            <Main direction={direction}>
                {children}
            </Main>
        </>);
}

MainLayout.defaultProps = {
    direction: 'row'
}

export default MainLayout;