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

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => ((c._id === card._id) ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCardById(card._id).then(() => {
      setCards((state) => state.filter((_id) => _id !== card._id));
    });

    // api.deleteCardById(card._id).then(() => {
    // const updatedCards = cards.filter((_id) => _id !== card._id);
    // setCards(updatedCards);
  }

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
      {/* eslint-disable */}
      {/* контейнер для шаблонов карточек */}
      <section className="places">
        <ul className="places__container">
          {cards.map((card) => (
            <Card
              key={(card._id)}
              card={card}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
      {/* eslint-disable */}
    </main>
  );
}

export default Main;
