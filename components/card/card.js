export default function createCharacterCard(newCard) {

   const card = document.createElement("li");
   card.classList.add('card');
   card.innerHTML =
    `<div class="card__image-container">
    <img
      class="card__image"
      src="${newCard.image}"
      alt="Rick Sanchez"
    />
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title">${newCard.title}</h2>
    <dl class="card__info">
      <dt class="card__info-title">Status</dt>
      <dd class="card__info-description">${newCard.status}</dd>
      <dt class="card__info-title">Type</dt>
      <dd class="card__info-description">${newCard.type}</dd>
      <dt class="card__info-title">Occurrences</dt>
      <dd class="card__info-description">${newCard.episode.lenght}</dd>
    </dl>
  </div>`
document.body.append(card)
return card; 

}
