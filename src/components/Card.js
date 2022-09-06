function Card (props) {
  const {card, onCardClick} = props;

  function handleCardClick() {
    onCardClick(card);
  }

  return(
    <li className="places__element">
      <article className="card">
        <button className="card__button-delete" type="button" />
        <img
          className="card__image"
          src={card.link}
          alt={card.name}
          onClick={() => handleCardClick()}
        />
        <div className="card__info">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like-container">
            <button className="card__button-like" type="button" />
            <p className="card__likes-counter">{card.likes.length}</p>
          </div>
        </div>
      </article>
    </li>
  )
}

export default Card;
