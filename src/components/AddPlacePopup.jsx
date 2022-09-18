import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
    >
      <>
        <label htmlFor="title-input" className="popup__field">
          <input
            name="name"
            className="popup__input popup__input_type_title"
            type="text"
            placeholder="Название"
            required=""
            minLength={2}
            maxLength={30}
            id="title-input"
          />
          <span className="popup__error popup__error_visible title-input-error" />
        </label>
        <label htmlFor="title-input" className="popup__field">
          <input
            name="link"
            className="popup__input popup__input_type_link"
            type="url"
            placeholder="Ссылка на картинку"
            required=""
            id="link-input"
          />
          <span className="popup__error popup__error_visible link-input-error" />
        </label>
      </>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
