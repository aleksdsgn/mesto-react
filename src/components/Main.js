import { useState, useEffect } from 'react';
import { api } from '../utils/api.js';
import avatar from '../images/avatar-base.jpg';

function Main(props) {
  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userDescription,setUserDescription] = useState("");

  useEffect(() => {
    Promise.all([
      api.getProfileInfo(),
      // api.getInitialCards(),
    ])
    .then(([userInfo, cards]) => {
      setUserAvatar(userInfo.avatar);
      setUserName(userInfo.name);
      setUserDescription(userInfo.about);
      // newUserInfo.setUserInfo(userInfo);
      // userId = userInfo._id;

      // cardsList.renderItems(cards);
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

      <section className="places">
        <ul className="places__container">
        {/* контейнер для шаблонов карточек */}
        </ul>
      </section>

    </main>
  )
}

export default Main;
