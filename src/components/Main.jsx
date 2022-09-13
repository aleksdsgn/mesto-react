import { useState, useEffect, useContext } from 'react';
import { api } from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
}) {
  const [cards, setCards] = useState([]);

  const currentUser = useContext(CurrentUserContext);

/* eslint-disable */
  useEffect(() => {
    Promise.all([
      api.getInitialCards(),
    ])
      .then(([cardsData]) => {
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
/* eslint-disable */

  return (
    <main className="content">

      <section className="profile">
        <button
          onClick={onEditAvatar}
          className="profile__button profile__button_type_edit-profile-avatar"
          type="button"
          aria-label="Редактировать аватар"
        >
          <img
            src={currentUser.avatar}
            alt="Аватар профиля"
            className="profile__avatar"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          />
        </button>
        <div className="profile__info">
          <div className="profile__title-with-button">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              onClick={onEditProfile}
              className="profile__button profile__button_type_edit-profile-info"
              type="button"
              aria-label="Редактировать профиль"
            />
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__button profile__button_type_add-card"
          type="button"
          aria-label="Добавить новое место"
        />
      </section>

      {/* контейнер для шаблонов карточек */}
      <section className="places">
        <ul className="places__container">
          {cards.map((card) => (
            <Card
              key={(card._id)}
              card={card}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>

    </main>
  );
}

export default Main;
