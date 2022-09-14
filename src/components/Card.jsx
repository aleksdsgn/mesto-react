import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick }) {
  // подписка на контекст
  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `${isOwn ? 'card__button-delete' : ''}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `card__button-like ${isLiked ? 'card__button-like_active' : ''}`
  );

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="places__element">
      <article className="card">
        <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить" />
        {/* eslint-disable */}
        <img
          className="card__image"
          src={card.link}
          alt={card.name}
          onClick={() => handleCardClick()}
          // onKeyDown={() => handleCardClick()}
        />
        {/* eslint-disable */}
        <div className="card__info">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like-container">
            <button className={cardLikeButtonClassName} type="button" aria-label="Нравится" />
            <p className="card__likes-counter">{card.likes.length}</p>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
