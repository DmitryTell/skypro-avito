import { HeaderButton } from './ui';
import * as Styled from './header.styled';


export const Header = () => {
  // This's mock data so far
  const mockUser = false;

  return (
    <Styled.Header>
      <Styled.HeaderContainer>
        <Styled.HeaderButtons>
          { !mockUser ? (
            <Styled.HeaderButtonBox>
              <HeaderButton text="Вход в личный кабинет" type="button" onClick={ () => console.log('Click') } />
            </Styled.HeaderButtonBox>
          ) : (
            <>
              <Styled.HeaderButtonBoxNewAdv>
                <HeaderButton text="Разместить объявление" type="button" onClick={ () => console.log('Click') } />
              </Styled.HeaderButtonBoxNewAdv>
              <Styled.HeaderButtonBoxToProfile>
                <HeaderButton text="Личный кабинет" type="button" onClick={ () => console.log('Click') } />
              </Styled.HeaderButtonBoxToProfile>
            </>
          ) }
        </Styled.HeaderButtons>
      </Styled.HeaderContainer>
    </Styled.Header>
  );
};
