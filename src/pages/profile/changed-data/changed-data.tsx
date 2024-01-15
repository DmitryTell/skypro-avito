import { HeaderMobile, FormAlert, Footer } from '@components/';
import { Button } from '@shared/';
import { useAppDispatch, useAppSelector } from '@hook/';
import { setIsOpnenedChangedData, getStateAds } from '@redux/';

import * as Styled from './changed-data.styled';


export const ChangedData = () => {
  const dispatch = useAppDispatch();

  const { isSuccess } = useAppSelector(getStateAds);

  const handleConfirm = () => {
    dispatch(setIsOpnenedChangedData({ isOpenedChangedData: false }));
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <HeaderMobile currentLocation="alert-modal" />
        <FormAlert text={ isSuccess ? 'Данные обновлены' : 'Что-то пошло не так' }>
          <Button text="OK" type="button" onClick={ handleConfirm } />
        </FormAlert>
        <Footer />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
