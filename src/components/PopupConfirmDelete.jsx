import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function PopupConfirmDelete({ isOpen, onClose, onConfirm }) {
  // текст в кнопке по умолчанию
  const [buttonText, setButtonText] = useState('Да');

  const handleSubmit = (e) => {
    // после нажатия показываем в кнопке "индикатор" отправки
    setButtonText('Удаление...');
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения инпута во внешний обработчик
    onConfirm();
  };

  return (
    <PopupWithForm
      name="delete-card"
      title="Вы уверены?"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default PopupConfirmDelete;
