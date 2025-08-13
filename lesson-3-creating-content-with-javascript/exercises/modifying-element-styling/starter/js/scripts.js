const restyleOtter = async () => {
  const profileCard = document.querySelector('.oldProfileCard');
  const body = document.querySelector('body');
  const h1 = document.querySelector('h1');

  profileCard.classList.remove('oldProfileCard');
  profileCard.classList.add('profileCard');
  body.style.backgroundColor = '#97382A';
  h1.style.color = 'white';
};

restyleOtter();
