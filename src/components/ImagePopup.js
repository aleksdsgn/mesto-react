function ImagePopup(props) {
  const {card, onClose} = props;

  return(
    <section className="popup popup_type_img">
      <figure className="popup__img-container" name="popup-img">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <img
          className="popup__image"
          src={card}
          alt={card}
        />
        <figcaption className="popup__caption">
          {/* {card.name} */}
        </figcaption>
      </figure>
    </section>
  )
}

export default ImagePopup;

// {`popup popup_type_${props.name} ${props.isOpen}`}
{/* <section className="popup popup_type_img"> */}
