import React from 'react';
import Styled from 'styled-components';
import { up } from 'styled-breakpoints';
import Logo from '../Logo/Logo';
import CircleButton from '../Buttons/CircleButton';
import MenuNav from '../MenuNav/MenuNav';

const MainMenu = Styled.nav`
  background-color: transparent;
  margin: 0rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 0 0 100%;
  padding: 0 2rem;
  height: 60px;
  ${up('sm')} {
    flex-direction: column;
    flex: 0 0 70px;
    width: 70px;
    height: 100%;
    padding: 2rem;
  }
  ${up('lg')} {
    width: 200px;
    flex: 0 0 200px;
  }
`
const Separator = Styled.hr`
  background-color: var(--third);
  border: 0;
  width: 2px;
  height: 70%;
  margin: 0 .7rem;
  ${up('sm')} {
    height: 2px;
    width: 100%;
    margin: 2rem .7rem;
  }
`
const Img = Styled.img`
  object-fit: cover;
  width: 100%;
`

const mainMenu = props => {

    return (
        <MainMenu>

          <Logo/>

          <CircleButton size="50" type="link">
            <Img src="http://unsplash.it/g/500?random&blur&gravity=center"/>
          </CircleButton>

          <Separator/>

          <MenuNav/>

        </MainMenu>
    );
}

export default mainMenu;