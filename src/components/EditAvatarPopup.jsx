import { useRef, useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();
  // текст в кнопке по умолчанию
  const [buttonText, setButtonText] = useState('Сохранить');

  const handleSubmit = (e) => {
    // после нажатия показываем в кнопке "индикатор" отправки
    setButtonText('Сохранение...');
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения инпута во внешний обработчик
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  };

  // Сбрасывать текст кнопки при открытии попапа
  useEffect(() => {
    setButtonText('Сохранить');
  }, [isOpen]);

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="avatar-input" className="popup__field">
        <input
          name="link"
          className="popup__input popup__input_type_avatar"
          type="url"
          placeholder="Ссылка на картинку"
          required=""
          id="avatar-input"
          ref={avatarRef}
        />
        <span className="popup__error popup__error_visible avatar-input-error" />
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
