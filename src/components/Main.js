import avatar from '../images/avatar-base.jpg';

function Main() {
  return (
    <main className="content">

      <section className="profile">
        <button
          className="profile__button profile__button_type_edit-profile-avatar"
          type="button"
        >
          <img
            src={avatar}
            alt="Аватар профиля"
            className="profile__avatar"
          />
        </button>
        <div className="profile__info">
          <div className="profile__title-with-button">
            <h1 className="profile__title">Имя</h1>
            <button
              className="profile__button profile__button_type_edit-profile-info"
              type="button"
            />
          </div>
          <p className="profile__subtitle">О себе</p>
        </div>
        <button
          className="profile__button profile__button_type_add-card"
          type="button"
        />
      </section>

      <section className="places">
        <ul className="places__container">
        {/* контейнер для шаблонов карточек */}
        </ul>
      </section>

    </main>
  )
}

export default Main;
