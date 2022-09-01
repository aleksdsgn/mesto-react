import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
<header class="header">
      <img
        src="<%=require('./images/logo.svg')%>"
        alt="Логотип Mesto Russia"
        class="header__logo"
      />
    </header>

    <main class="content">
      <section class="profile">
        <button class="profile__button profile__button_type_edit-profile-avatar" type="button">
          <img
          src="<%=require('./images/profile__avatar.svg')%>"
          alt="Аватар профиля"
          class="profile__avatar"
        />
        </button>

        <div class="profile__info">
          <div class="profile__title-with-button">
            <h1 class="profile__title">Имя</h1>
            <button
              class="profile__button profile__button_type_edit-profile-info"
              type="button"
            ></button>
          </div>
          <p class="profile__subtitle">О себе</p>
        </div>
        <button
          class="profile__button profile__button_type_add-card"
          type="button"
        ></button>
      </section>

      <section class="places">
        <ul class="places__container">
          {/* <!-- контейнер для шаблонов карточек --> */}
        </ul>
      </section>
    </main>

    <footer class="footer">
      <p class="footer__copyright">© 2022 Mesto Russia</p>
    </footer>

    {/* <!-- форма редактирования профиля --> */}
    <section class="popup popup_type_edit-profile">
      <form class="popup__form" name="profile" novalidate>
        <button class="popup__close-button" type="button"></button>
        <h3 class="popup__title">Редактировать профиль</h3>
        <label for="name-input" class="popup__field">
          <input
            name="name"
            class="popup__input popup__input_type_name"
            type="text"
            placeholder="Имя"
            required
            minlength="2"
            maxlength="40"
            id="name-input"
          />
          <span
            class="popup__error popup__error_visible name-input-error"
          ></span>
        </label>
        <label for="about-input" class="popup__field">
          <input
            name="about"
            class="popup__input popup__input_type_about"
            type="text"
            placeholder="О себе"
            required
            minlength="2"
            maxlength="200"
            id="about-input"
          />
          <span
            class="popup__error popup__error_visible about-input-error"
          ></span>
        </label>
        <button class="popup__submit-button" type="submit" name="submit">
          Сохранить
        </button>
      </form>
    </section>

    {/* <!-- форма редактирования аватара --> */}
    <section class="popup popup_type_edit-avatar">
      <form class="popup__form" name="avatar" novalidate>
        <button class="popup__close-button" type="button"></button>
        <h3 class="popup__title">Обновить аватар</h3>
        <label for="avatar-input" class="popup__field">
          <input
            name="link"
            class="popup__input popup__input_type_avatar"
            type="url"
            placeholder="Ссылка на картинку"
            required
            id="avatar-input"
          />
          <span
            class="popup__error popup__error_visible avatar-input-error"
          ></span>
        </label>
        <button class="popup__submit-button" type="submit" name="submit">
          Сохранить
        </button>
      </form>
    </section>

    {/* <!-- форма добавления карточек --> */}
    <section class="popup popup_type_add-card">
      <form class="popup__form" name="place" novalidate>
        <button class="popup__close-button" type="button"></button>
        <h3 class="popup__title">Новое место</h3>
        <label for="title-input" class="popup__field">
          <input
            name="name"
            class="popup__input popup__input_type_title"
            type="text"
            placeholder="Название"
            required
            minlength="2"
            maxlength="30"
            id="title-input"
          />
          <span
            class="popup__error popup__error_visible title-input-error"
          ></span>
        </label>
        <label for="title-input" class="popup__field">
          <input
            name="link"
            class="popup__input popup__input_type_link"
            type="url"
            placeholder="Ссылка на картинку"
            required
            id="link-input"
          />
          <span
            class="popup__error popup__error_visible link-input-error"
          ></span>
        </label>
        <button class="popup__submit-button" type="submit" name="submit">
          Создать
        </button>
      </form>
    </section>

    {/* <!-- попап удаления карточки --> */}
    <section class="popup popup_type_delete-card">
      <form class="popup__form" name="delete" novalidate>
        <button class="popup__close-button" type="button"></button>
        <h3 class="popup__title">Вы уверены?</h3>
        <button class="popup__submit-button" type="submit" name="submit">
          Да
        </button>
      </form>
    </section>

    {/* <!-- форма отображения картинок в крупном виде --> */}
    <section class="popup popup_type_img">
      <figure class="popup__img-container" name="popup-img">
        <button class="popup__close-button" type="button"></button>
        <img class="popup__image" />
        <figcaption class="popup__caption"></figcaption>
      </figure>
    </section>

    </div>
  );
}

export default App;
