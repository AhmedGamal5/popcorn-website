# 🎬 Popcorn-website

## Overview
Popcorn -Website is a React-based movie watchlist application that allows users to search for movies, view detailed information about them, and manage a personal list of movies they have watched. The application integrates with the OMDb API to fetch movie data and provides a seamless user experience with various interactive components. It leverages custom hooks for fetching data and storing user preferences locally, ensuring a smooth and dynamic user interface.

## Features
🌟 Search and Browse Movies
Search Functionality: Users can search for movies by typing in keywords in the search bar.
The app fetches movie data from the OMDb API based on the user's query and displays the results.
Movie List: 
The app displays a list of movies matching the search query. 
Users can click on any movie to view more details.

## 🎥 Movie Details
Detailed Information: Upon selecting a movie, users can view detailed information, including the title, release year, runtime, genre, director, cast, and IMDb rating.
Add to Watchlist: Users can add movies to their watchlist to store the movie's information locally on their device.

## 🎦 Watched Movies Management
Watched List: The app maintains a list of movies that the user has marked as watched. This list is stored in the browser's local storage, so it persists across sessions.
User Ratings: Users can rate the movies they have watched. The app records these ratings and displays them alongside the IMDb ratings.
Summary Statistics: The app provides summary statistics about the watched movies, including the average IMDb rating, user rating, and total runtime.

## 🛠 Custom Hooks
useMovies Hook: A custom hook for fetching movie data from the OMDb API based on the user's search query.
useLocalStorage Hook: A custom hook for persisting data in the browser's local storage. This is used to store the user's watched movies list.
## Technologies Used
React: The core framework for building the user interface.
OMDb API: For fetching movie data based on search queries and movie selections.
Custom Hooks: useMovies for data fetching and useLocalStorage for local storage management.
CSS: For styling the application, ensuring a clean and modern user interface.

## How to Run the Project
1- Clone the Repository:
git clone https://github.com/your-username/project-name
cd project-name


2- Install Dependencies:
npm install

3- Run the Application:
npm start

## Future Improvements
User Authentication: Implement user authentication to allow users to save their watchlist across different devices.
Enhanced Search Filters: Add filters for genre, year, and ratings to refine search results.
Movie Recommendations: Integrate a recommendation system based on watched movies and user ratings.

## Conclusion
Popcorn -Website is a feature-rich movie watchlist application that demonstrates the power of React and custom hooks for creating interactive and responsive web applications. Whether you're a movie enthusiast or just looking for a project to manage your favorite films, usePopcorn provides a comprehensive solution.
