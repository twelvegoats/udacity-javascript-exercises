const handleClick = async(event) => {
    const productCard = event.target.closest('.product-card')
    const selectedCard = productCard.querySelector('.product-name').textContent
    alert(`You selected the ${selectedCard}. Good Choice!`)
}

const cardListener = async() => {
    const cardContainer = document.querySelector('.product-grid')
    console.log(cardContainer)
    cardContainer.addEventListener('pointerdown', handleClick)
}

cardListener();