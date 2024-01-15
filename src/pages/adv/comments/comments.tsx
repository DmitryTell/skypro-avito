import { FC, useState } from 'react';

import { INewCommentRequest } from '@interface/';
import {
  HeaderMobile, FormModal, Footer
} from '@components/';
import { Button, LoadingButton } from '@shared/';
import { formatDate } from '@utils/';
import { useAppSelector, useAppDispatch } from '@hook/';
import {
  getStateAuth,
  getStateAds,
  useAddNewCommentMutation,
  setComments,
} from '@redux/';

import * as Styled from './comments.styled';


interface IComments {
  id: number;
}

export const Comments: FC<IComments> = ({ id }) => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(getStateAuth);
  const { comments } = useAppSelector(getStateAds);

  const [addComment] = useAddNewCommentMutation();

  const [text, setText] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isWaiting, setIsWaiting] = useState<boolean>(false);

  const handleAddComment = () => {
    if (!isAuth) {
      setError('Только авторизованные пользователи могут оставлять комментарии');
      setText('');
      return;
    }

    setIsWaiting(true);

    const args: INewCommentRequest = {
      body: { text },
      id,
    };

    addComment(args)
      .then((newComment) => {
        const commentData = Object.values(newComment)[0];

        setText('');
        setIsWaiting(false);

        dispatch(setComments({ comments: [commentData, ...comments] }));
      });
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <HeaderMobile currentLocation="comments-modal" />
        <FormModal title="Отзывы о товаре">
          <Styled.Content>
            <Styled.ContentForm>
              <Styled.ContentFormTitle>Добавить отзыв</Styled.ContentFormTitle>
              <Styled.ContentFormArea
                placeholder="Введите отзыв"
                value={ text }
                onChange={ (e) => setText(e.target.value) }
              />
              { error && (
                <Styled.ErrorBox>
                  <Styled.ErrorText>{ error }</Styled.ErrorText>
                </Styled.ErrorBox>
              ) }
              <Styled.ContentFormButtonBox>
                { isWaiting
                  ? <LoadingButton />
                  : <Button disabled={ !text } text="Опубликовать" type="button" onClick={ handleAddComment } /> }
              </Styled.ContentFormButtonBox>
            </Styled.ContentForm>
            <Styled.ContentComments>
              { comments?.length ? comments.map((comment) => (
                <Styled.ContentComment key={ String(comment.id) }>
                  <Styled.ContentCommentTopBox>
                    <Styled.ContentCommentAva>
                      { Boolean(comment?.author?.avatar)
                        && <img alt="User avatar" src={ `${process.env.REACT_APP_API_URL}${comment.author.avatar}` } /> }
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
