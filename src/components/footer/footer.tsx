import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@hook/';
import { getStateAuth, setIsOpenedNewAdv } from '@redux/';
import { ReactComponent as HomeMobile } from '@assets/icon/HomeMobile.svg';
import { ReactComponent as AddMobile } from '@assets/icon/AddMobile.svg';
import { ReactComponent as ProfileMobile } from '@assets/icon/ProfileMobile.svg';

import * as Styled from './footer.styled';


export const Footer = () => {
  const dispatch = useAppDispatch();

  const { isAuth } = useAppSelector(getStateAuth);

  return (
    <Styled.Footer>
      <div>
        <Link to="/">
          <HomeMobile />
        </Link>
      </div>
      <div>
        <a
          href="/#"
          onClick={ (e) => {
            e.preventDefault();

            if (!isAuth) {
              // eslint-disable-next-line no-alert
              alert('Только авторизованные пользователи могут создать объявление');
              return;
            }

            dispatch(setIsOpenedNewAdv({ isOpenedNewAdv: true }));
          } }
        >
          <AddMobile />
        </a>
      </div>
      <div>
        <Link to="/profile">
          <ProfileMobile />
        </Link>
      </div>
    </Styled.Footer>
  );
};
