import { useEffect, useState, memo } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Modal } from './components/Modal';
import { ACTIONS } from './redux/constants';

export const UserList = memo(() => {
  const history = useHistory();
  const dispath = useDispatch();
  const photos = useSelector(
    (state) => state.photosReducer.photos,
  );
  console.log({ photos });

  const [isModalOpened, setIsModalOpened] =
    useState(false);

  const [selectedUrl, setSelectedUrl] =
    useState('');

  useEffect(async () => {
    dispath({ type: ACTIONS.GET_PHOTOS_REQUEST });
  }, []);

  const onClickImage = (url) => {
    setSelectedUrl(url);
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const onClickGoToTodoList = () => {
    history.push('/todolist/jack');
  };

  return (
    <>
      {isModalOpened ? (
        <Modal closeModal={closeModal}>
          <Img urlec={selectedUrl} />
          <Img urlec={selectedUrl} />
          <Img urlec={selectedUrl} />
        </Modal>
      ) : null}
      <button onClick={onClickGoToTodoList}>
        Open todo list
      </button>
      <ol>
        {photos.map((item, index) => (
          <Img
            key={index}
            urlec={item.url}
            onClick={onClickImage}
          />
        ))}
      </ol>
    </>
  );
});

const Img = ({ urlec, onClick }) => {
  const onClickImage = () => {
    onClick(urlec);
  };

  return (
    <img
      onClick={onClickImage}
      style={{
        width: '100px',
        height: '100px',
        transition: 'all 0.3s linear',
      }}
      src={urlec}
    />
  );
};
