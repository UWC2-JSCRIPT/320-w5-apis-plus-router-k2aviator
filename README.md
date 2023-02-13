# Week 5 Assignment

## Getting Started

**Before setting up your repo, note that this assignment has a couple different options. Please read through each option before setting up your app, because it may affect what you name the app.**

1. Clone the repository to your machine.
2. Decide on a name for your application, **after reading the instructions below**
3. Setup your application with `create-react-app`
4. Ensure you can run your dev server

## Overview

For this assignment, you'll be creating an app to view a collection of fictional characters.

You may choose from one of the following APIs.

* [Star Wars API](https://swapi.dev/)
* [Pokemon API](https://pokeapi.co/)

Please note that these APIs will rate-limit you. Read the documentation and be aware of the rate-limiting enabled on each API. If you find yourself calling the API too many times, look into downloading an example response and use that while building out your app, or waiting.

> Up for an adventure? There are other APIs [here](https://github.com/toddmotto/public-apis) that you can choose from _at your own risk_, such as the [Dog API](https://dog.ceo/dog-api/documentation/). Note that if you decide to pick a different API, read up on rate-limiting or any other restrictions for that API. Also **pick an API with CORS enabled**. Otherwise, you will likely run into CORS issues that could block your completion of the assignment. Also, if you use an API requiring an auth token, it's recommended that you not commit these tokens to source code. Use [environment variables](https://create-react-app.dev/docs/adding-custom-environment-variables/) instead, and ensure you add the `.env` file to your `.gitignore` file.

### Requirements

For this UI, you'll want an app that has two views:

* The home page, for displaying a list of characters from your API
    * Each character component should contain a link to a character detail page
    * The name of the character is required. Anything else (character image, short description) is optional
* A character detail page, for displaying a specific character's information
    * Should display at least 3 facts about the character
    * Should display the character image if returned from the API. If not returned from the API, it is optional. If your API does not return a character image and you'd like to display one, you can optionally find images on Google and map the image links to each character manually.

Additional requirements:

* Uses React Router to switch between views. You'll want to have, at minimum, two routes.
  * One route for rendering the characters list component
    * Uses `fetch` to retrieve the character list after mount
  * One route for rendering the character details component
    * Uses route params to pass the character ID to the character detail page
    * Uses `fetch` to retrieve the character details after mount
* Uses React components that...
    * Use the appropriate loops/conditionals to map and display components.
    * Use propTypes to define props.
* Styled with CSS

Note that these are the only requirements. The APIs may have pagination for getting all the characters. You don't need to implement that (although you're free to if you wish).

### Inspiration

* [Star Wars databank](https://www.starwars.com/databank)
* [Giant Bomb original 150 Pokemon](https://www.giantbomb.com/profile/wakka/lists/the-150-original-pokemon/59579/)

## Submission

1. For a valid submission, your app should run and display a UI when running `npm start`.
2. Create a pull request to this repository. There will be no CI.
3. Create a zip file of this repository. 

## Bonus

* Enable paging for the character list (if supported by the API)
* Incorporate more pages using other features of your API
* Add a search box feature to the character home page to filter the character list
* Add the ability to "favorite" a character and store favorite characters using the browser's `localStorage` API
* Write tests for each page (note that you may need to learn/use Jest `mock`/`spyOn` APIs to mock the `fetch` call).
