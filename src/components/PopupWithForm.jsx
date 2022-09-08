function PopupWithForm({
  isOpen,
  onClose,
  children,
  buttonText,
  name,
  title,
}) {
  return (
    <section className={`popup popup_type_${name} ${isOpen}`}>
      <form
        className="popup__form"
        name={name}
        noValidate=""
      >
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
        <h3 className="popup__title">{title}</h3>
        {children}
        <button
          className="popup__submit-button"
          type="submit"
          name="submit"
        >
          {buttonText}
        </button>
      </form>
    </section>
  );
}

export default PopupWithForm;
