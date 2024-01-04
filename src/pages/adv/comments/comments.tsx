import { FC, useState } from 'react';

import { IComment } from '@interface/';
import {
  HeaderMobile, FormModal, Footer
} from '@components/';
import { Button } from '@shared/';
import { formatDate } from '@utils/';

import * as Styled from './comments.styled';


interface IComments {
  comments: IComment[];
  currentUserId: number | null;
}

export const Comments: FC<IComments> = ({ comments, currentUserId }) => {
  const [commentText, setCommentText] = useState<string>('');

  const handleAddComment = () => {
    if (!currentUserId) {
      // eslint-disable-next-line no-alert
      alert('Только авторизованные пользователи могут оставлять комментарии');

      setCommentText('');
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <HeaderMobile currentLocation="comments-modal" />
        <FormModal title="Отзывы о товаре">
          <Styled.Content>
            <Styled.ContentForm>
              <Styled.ContentFormTitle>Добавить отзыв</Styled.ContentFormTitle>
              <Styled.ContentFormArea placeholder="Введите отзыв" value={ commentText } onChange={ (e) => setCommentText(e.target.value) } />
              <Styled.ContentFormButtonBox>
                <Button disabled={ !commentText } text="Опубликовать" type="button" onClick={ handleAddComment } />
              </Styled.ContentFormButtonBox>
            </Styled.ContentForm>
            <Styled.ContentComments>
              { comments?.length ? comments.map((comment) => (
                <Styled.ContentComment key={ String(comment.id) }>
                  <Styled.ContentCommentTopBox>
                    <Styled.ContentCommentAva>
                      { Boolean(comment?.author?.avatar) && <img alt="User avatar" src={ `${process.env.REACT_APP_API_URL}${comment.author.avatar}` } /> }
                    </Styled.ContentCommentAva>
                    <Styled.ContentCommentAuthor>
                      { comment?.author?.name } <span>{ formatDate(comment?.created_on) }</span>
                    </Styled.ContentCommentAuthor>
                  </Styled.ContentCommentTopBox>
                  <Styled.ContentCommentText>{ comment?.text }</Styled.ContentCommentText>
                </Styled.ContentComment>
              )) : (
                <Styled.ContentComment>
                  <Styled.ContentCommentEmptyText>Нет комментариев</Styled.ContentCommentEmptyText>
                </Styled.ContentComment>
              ) }
            </Styled.ContentComments>
          </Styled.Content>
        </FormModal>
        <Footer />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
