import { useState, useEffect } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import PopupConfirmDelete from './PopupConfirmDelete';

import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);
  const [isPopupConfirmDeleteOpen, setIsPopupConfirmDeleteOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);

  // Запрос карточек и данных профиля через API
  useEffect(() => {
    Promise.all([
      api.getProfileInfo(),
      api.getInitialCards(),
    ])
      .then(([userInfo, cardsData]) => {
        setCurrentUser(userInfo);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsCardPopupOpen(false);
    setIsPopupConfirmDeleteOpen(false);
    setSelectedCard({});
  };

  // Запись обновленных пользовательских данных
  const handleUpdateUser = (updatedData) => {
    api.updateProfileInfo(updatedData.name, updatedData.about)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Запись обновленной ссылки на аватар
  const handleUpdateAvatar = (updatedData) => {
    api.editAvatar(updatedData.avatar)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Создание новой карточки
  const handleAddPlaceSubmit = (name, link) => {
    api.createCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Обработчик лайка карточки
  const handleCardLike = (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => ((c._id === card._id) ? newCard : c)));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Открытие попапа редактирования аватара
  const handleEditAvatar = () => {
    setIsEditAvatarPopupOpen(true);
  };

  // Открытие попапа редактирования информации о пользователе
  const handleEditProfile = () => {
    setIsEditProfilePopupOpen(true);
  };

  // Открытие попапа добавления новой карточки
  const handleAddPlace = () => {
    setIsAddPlacePopupOpen(true);
  };

  // Открытие попапа с увеличенной картинкой
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsCardPopupOpen(true);
  };

  // Открытие попапа с подтверждением удаления карточки
  const handleCardDelete = (card) => {
    setSelectedCard(card);
    setIsPopupConfirmDeleteOpen(true);
  };
  // Удаления карточки
  const handleConfirmDeleteSubmit = () => {
    api.deleteCardById(selectedCard._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== selectedCard._id));
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="page">

      <CurrentUserContext.Provider value={currentUser}>
        <Header />

        <Main
          onEditAvatar={handleEditAvatar}
          onEditProfile={handleEditProfile}
          onAddPlace={handleAddPlace}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />

        <Footer />

        {/* форма редактирования аватара */}
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        {/* форма редактирования профиля */}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        {/* форма добавления карточек */}
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        {/* попап удаления карточки */}
        <PopupConfirmDelete
          isOpen={isPopupConfirmDeleteOpen}
          onClose={closeAllPopups}
          onConfirm={handleConfirmDeleteSubmit}
        />

        {/* попап открытой карточки */}
        <ImagePopup
          card={selectedCard}
          isOpen={isCardPopupOpen ? 'popup_opened' : ''}
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
