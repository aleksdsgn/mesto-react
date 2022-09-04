import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">

    <Header />

    <Main
      handleEditAvatarClick={() => {
        console.log("Нажал на редактирование аватара");
        document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened')
      }}
      handleEditProfileClick={() => {
        console.log("Нажал на редактирование профиля");
        document.querySelector('.popup_type_edit-profile').classList.add('popup_opened')
      }}
      handleAddPlaceClick={() => {
        console.log("Нажал Добавить карточку");
        document.querySelector('.popup_type_add-card').classList.add('popup_opened')
      }}
    />

    <Footer />

    {/* <!-- форма редактирования профиля --> */}
    <section className="popup popup_type_edit-profile">
      <form className="popup__form" name="profile" noValidate="">
        <button className="popup__close-button" type="button" />
        <h3 className="popup__title">Редактировать профиль</h3>
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
        <button className="popup__submit-button" type="submit" name="submit">
          Сохранить
        </button>
      </form>
    </section>

    {/* форма редактирования аватара */}
    <section className="popup popup_type_edit-avatar">
      <form className="popup__form" name="avatar" noValidate="">
        <button className="popup__close-button" type="button" />
        <h3 className="popup__title">Обновить аватар</h3>
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
        <button className="popup__submit-button" type="submit" name="submit">
          Сохранить
        </button>
      </form>
    </section>

    {/* <!-- форма добавления карточек --> */}
    <section className="popup popup_type_add-card">
      <form className="popup__form" name="place" noValidate="">
        <button className="popup__close-button" type="button" />
        <h3 className="popup__title">Новое место</h3>
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
        <button className="popup__submit-button" type="submit" name="submit">
          Создать
        </button>
      </form>
    </section>

    {/* <!-- попап удаления карточки --> */}
    <section className="popup popup_type_delete-card">
      <form className="popup__form" name="delete" noValidate="">
        <button className="popup__close-button" type="button" />
        <h3 className="popup__title">Вы уверены?</h3>
        <button className="popup__submit-button" type="submit" name="submit">
          Да
        </button>
      </form>
    </section>

    {/* <!-- форма отображения картинок в крупном виде --> */}
    <section className="popup popup_type_img">
      <figure className="popup__img-container" name="popup-img">
        <button className="popup__close-button" type="button" />
        <img className="popup__image" />
        <figcaption className="popup__caption" />
      </figure>
    </section>

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
