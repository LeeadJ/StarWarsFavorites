# Star Wars Favorites

This React application fetches movies from the Star Wars API (SWAPI) and lets users mark their favorite movies.

## Table of Contents

- [Star Wars Favorites](#star-wars-favorites)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installing](#installing)
  - [SWAPI Documentation](#swapi-documentation)
  - [Tasks](#tasks)



## Getting Started

These instructions will help you set up the project locally on your machine.


### Installing

1. Unzip the project.

2. Navigate to the project directory:
   ```bash
   cd star-wars-favorites
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application should now be running on [http://localhost:3000/](http://localhost:3000/).

## SWAPI Documentation

- **Base URL:** `https://swapi.dev/api/`
- **Relevant Endpoints:**
  - **Films:** `/films/`
    - **Method:** `GET`
    - **Description:** Fetches all the Star Wars films.

For a more in-depth look at the API, please refer to the [official SWAPI documentation](https://swapi.dev/documentation).

Please notice the the SWAPI API might take some time to respond


## Tasks

1. **Debugging:** 
    - Start the application and identify the 2 errors introduced.
    - Dive into the codebase and pinpoint the source of each error.
    - Rectify each error ensuring the application displays and functions correctly.
    - Offer a concise explanation of the root causes and detail your solutions.

2. **Styling:** 
    - Refactor the application's styling to match the provided [mockup](page_mockup.png)
    - Ensure the design is responsive and maintains consistency across various screen sizes and browsers.

3. **Improvements:** (Optional)
    - After implementation of the basic design, you can go ahead and implement any other enhancements or features you feel would optimize the application.

4. **Upload to github:**
    - Once finished, upload the project to github.
    - Try to clone your code and run it - make sure all works after cloning
    - Make sure the site works as expected

---
# Solutions:

**Debugging:**
1. **Problem** - In the MovieDetails component, the app is trying to call the `onFavoriteToggle` when the Like/Dislike button is clicked. The  problem is that the `onFavoriteToggle` prop is not passed to the MovieDetails component, which is why nothing is rendering.  
**Solution** - we need to pass down the `onFavoriteToggle` prop to the MovieDetails component in the App component.
<br>
2. **Problem** - In the MovieItem component, when we click the button `onMovieSelect`, the `onMovieSelect` function is called without passing it the `movie` object as an argument. This function expects in argument. 
**Solution** - We pass the movie object to the function when calling it onClick.

---
# Result:
![image](https://github.com/LeeadJ/StarWarsFavorites/assets/77110578/b68f3d9a-72f8-4d32-9da7-f51c53677c1d)
