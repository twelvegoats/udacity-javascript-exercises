const restyleOtter = async () => {
  const title = document.querySelector('body').firstElementChild;
  title.classList.add('title');

  const cardContainer = document.querySelector('.title').nextElementSibling;
  cardContainer.id = 'card-container';

  const profileCard = cardContainer.firstElementChild;
  profileCard.classList.remove('oldProfileCard');
  profileCard.classList.add('profileCard');
  profileCard.style.removeProperty('background-color');
  profileCard.style.removeProperty('color');

  const picFrame = profileCard.firstElementChild;
  picFrame.classList.add('picFrame');
};

restyleOtter();
