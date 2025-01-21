const user = {
    firstName: "Whiskers",
    lastName:"McOtter",
    city:"Seattle",
    state:"Washington",
    favorites:["Frappuccinos", "fish"],
    profilePic:"./images/otter_profile.webp"
}

const destructureExercise = async() => {
    // This is where your destructuring should take place. destructure the user object provided and then use template literals to create the name and bio. If you destructure the user object completely you won't need to worry about the profilePic but it will show up on the page.

    // use template literals here with your destructured object
    const name = 'EDIT THIS'
    const bio  = 'EDIT THIS'

    // DO NOT EDIT BELOW THIS LINE!

    const card2 = document.querySelector('.userPop .userInfo')
    const pic2 = document.querySelector('.userPop .picFrame')
    const header = document.createElement('h2')
    const biography = document.createElement('p')
    const pic = document.createElement('img')
    pic.src = `${profilePic}`
    header.textContent = name
    biography.textContent = bio
    pic2.append(pic)
    card2.append(header, biography)

}

destructureExercise()

