**Object Destructuring and Tempalte Literals Exercise**

Let's get some quick practice with object destructuring and template literals.

This isn't too challenging. You'll have one user object that you need to destructure and then use that to create some strings. 

In the end you want the cards to look identical to each other. Like this...

<img src='./images/template literal demo.webp>' alt ='final demo image'>

You're going to be given some HTML of product cards for an online marketplace. Your goal, for now is to create an event listener that will open an alert that says "You selected the insert item here. Good choice!"

In case it's not clear, you'll need to insert the title of the item where I said "insert item here."

It should work like this example...

<iframe width="800" height="800" src="https://www.youtube.com/embed/sSqQczBOi3I" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

For this exercise you can only have..
- 1 event listener
- 1 event handler
  - remember to think about other devices and use an event that works with multiple devices well
  - use best practices when naming your handler

Making this work with only 1 listener is going to force you to think about how the event processor works. Remember that just because you click on what looks like the card doesn't mean that's where the event is actually fired. If the event is recorded on a child of the product card, how do you make that work?

You'll have to move up and down the DOM using the methods we've already learned about in order to get the alert to display properly. (HINT: Check lesson 2 on traversing the DOM)

**Requirements:**

For this exercise you have to have only one event listener.

You can only have one named (not anonymous) event handler.

Do not modify the provided HTML or CSS in any way.

The only file you should modify is the scripts.js file.