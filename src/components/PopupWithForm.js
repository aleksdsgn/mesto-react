function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name}`}>
      <form
        className="popup__form" name={props.name} noValidate="">
        <button className="popup__close-button" type="button" />
        <h3 className="popup__title">{props.title}</h3>
        {props.children}
        <button className="popup__submit-button" type="submit" name="submit">
          {props.buttonText}
        </button>
      </form>
    </section>
  )
}

export default PopupWithForm;
