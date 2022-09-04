function ImagePopup() {
  return(
    <section className="popup popup_type_img">
      <figure className="popup__img-container" name="popup-img">
        <button className="popup__close-button" type="button" />
        <img className="popup__image" />
        <figcaption className="popup__caption" />
      </figure>
    </section>
  )
}
