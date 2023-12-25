import { ReactComponent as HomeMobile } from '@assets/icon/HomeMobile.svg';
import { ReactComponent as AddMobile } from '@assets/icon/AddMobile.svg';
import { ReactComponent as ProfileMobile } from '@assets/icon/ProfileMobile.svg';

import * as Styled from './footer.styled';


export const Footer = () => (
  <Styled.Footer>
    <div>
      <a href="/#">
        <HomeMobile />
      </a>
    </div>
    <div>
      <a href="/#">
        <AddMobile />
      </a>
    </div>
    <div>
      <a href="/#">
        <ProfileMobile />
      </a>
    </div>
  </Styled.Footer>
);
