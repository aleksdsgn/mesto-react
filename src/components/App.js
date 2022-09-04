import React, { useState, useEffect } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  return (
    <div className="page">

    <Header />

    <Main
      onEditAvatar={() => {
        setIsEditAvatarPopupOpen(true);
      }}
      onEditProfile={() => {
        setIsEditProfilePopupOpen(true);
      }}
      onAddPlace={() => {
        setIsAddPlacePopupOpen(true);
      }}
    />

    <Footer />

    {/* форма редактирования аватара */}
    <PopupWithForm
      name={'edit-avatar'}
      title={'Обновить аватар'}
      buttonText={'Сохранить'}
      isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''}
      children={
        <>
          <label htmlFor="avatar-input" className="popup__field">
            <input
              name="link"
              className="popup__input popup__input_type_avatar"
              type="url"
              placeholder="Ссылка на картинку"
              required=""
              id="avatar-input"
            />
            <span className="popup__error popup__error_visible avatar-input-error" />
          </label>
        </>
      }
    />

    {/* <!-- форма редактирования профиля --> */}
    <PopupWithForm
      name={'edit-profile'}
      title={'Редактировать профиль'}
      buttonText={'Сохранить'}
      isOpen={isEditProfilePopupOpen ? 'popup_opened' : ''}
      children={
        <>
          <label htmlFor="name-input" className="popup__field">
            <input
              name="name"
              className="popup__input popup__input_type_name"
              type="text"
              placeholder="Имя"
              required=""
              minLength={2}
              maxLength={40}
              id="name-input"
            />
            <span className="popup__error popup__error_visible name-input-error" />
          </label>
          <label htmlFor="about-input" className="popup__field">
            <input
              name="about"
              className="popup__input popup__input_type_about"
              type="text"
              placeholder="О себе"
              required=""
              minLength={2}
              maxLength={200}
              id="about-input"
            />
            <span className="popup__error popup__error_visible about-input-error" />
          </label>
        </>
      }
    />

    {/* <!-- форма добавления карточек --> */}
    <PopupWithForm
      name={'add-card'}
      title={'Новое место'}
      buttonText={'Создать'}
      isOpen={isAddPlacePopupOpen ? 'popup_opened' : ''}
      children={
        <>
          <label htmlFor="title-input" className="popup__field">
            <input
              name="name"
              className="popup__input popup__input_type_title"
              type="text"
              placeholder="Название"
              required=""
              minLength={2}
              maxLength={30}
              id="title-input"
            />
            <span className="popup__error popup__error_visible title-input-error" />
          </label>
          <label htmlFor="title-input" className="popup__field">
            <input
              name="link"
              className="popup__input popup__input_type_link"
              type="url"
              placeholder="Ссылка на картинку"
              required=""
              id="link-input"
            />
            <span className="popup__error popup__error_visible link-input-error" />
          </label>
        </>
      }
    />

    {/* <!-- попап удаления карточки --> */}
    <PopupWithForm
      name={'delete-card'}
      title={'Вы уверены?'}
      buttonText={'Да'}
    />

    <template className="card-template">
    <li className="places__element">
      <article className="card">
        <button className="card__button-delete" type="button" />
        <img className="card__image" />
        <div className="card__info">
          <h2 className="card__title" />
          <div className="card__like-container">
            <button className="card__button-like" type="button" />
            <p className="card__likes-counter" />
          </div>
        </div>
      </article>
    </li>
    </template>

    </div>
  );
}

export default App;
