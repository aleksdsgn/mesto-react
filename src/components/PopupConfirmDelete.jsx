import PopupWithForm from './PopupWithForm';

function PopupConfirmDelete({ isOpen, onClose, onConfirm }) {
  const handleSubmit = (e) => {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения инпута во внешний обработчик
    onConfirm();
  };

  return (
    <PopupWithForm
      name="delete-card"
      title="Вы уверены?"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default PopupConfirmDelete;
