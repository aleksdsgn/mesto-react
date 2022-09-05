import { useState, useEffect } from 'react';
import { api } from '../utils/api.js';
import Card from './Card';

function Main(props) {
  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userDescription,setUserDescription] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([
      api.getProfileInfo(),
      api.getInitialCards(),
    ])
    .then(([userInfo, cardsData]) => {
      setUserAvatar(userInfo.avatar);
      setUserName(userInfo.name);
      setUserDescription(userInfo.about);
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
          onClick={props.onEditAvatar}
          className="profile__button profile__button_type_edit-profile-avatar"
          type="button"
        >
          <img
            src={userAvatar}
            alt="Аватар профиля"
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
        </button>
        <div className="profile__info">
          <div className="profile__title-with-button">
            <h1 className="profile__title">{userName}</h1>
            <button
              onClick={props.onEditProfile}
              className="profile__button profile__button_type_edit-profile-info"
              type="button"
            />
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__button profile__button_type_add-card"
          type="button"
        />
      </section>

        {/* контейнер для шаблонов карточек */}
      <section className="places">
        <ul className="places__container">
          {cards.map((card) => (
            <Card
              key={(card._id)}
              card={card}
            />
          ))}
        </ul>
      </section>

    </main>
  )
}

export default Main;
