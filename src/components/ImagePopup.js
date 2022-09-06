function ImagePopup(props) {
  const {card, isOpen, onClose} = props;

  return(
    <section className={`popup popup_type_img ${isOpen}`}>
      <figure className="popup__img-container" name="popup-img">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <img
          className="popup__image"
          src={card.link}
          alt={card.name}
        />
        <figcaption className="popup__caption">
          {card.name}
        </figcaption>
      </figure>
    </section>
  )
}

export default ImagePopup;
