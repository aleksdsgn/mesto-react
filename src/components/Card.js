function Card({card: { name, link, likes }}) {
  return(
    <li className="places__element">
      <article className="card">
        <button className="card__button-delete" type="button" />
        <img
          className="card__image"
          src={link}
          alt={name}
        />
        <div className="card__info">
          <h2 className="card__title">{name}</h2>
          <div className="card__like-container">
            <button className="card__button-like" type="button" />
            <p className="card__likes-counter">{likes.length}</p>
          </div>
        </div>
      </article>
    </li>
  )
}

export default Card;
