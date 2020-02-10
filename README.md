# Church Community Builder: Front-End Developer Test

## Overview

Your client has tasked you with making the Ultimate Moviegoers Guide using _The Movie Database API_. They are asking for an app that at least covers the following:

* Shows the user a list of movies where the user can sort by
  * Now Playing
  * Popular
  * Top Rated
* Allows the user to search for a movie
* Allows the user to select a movie and see more details. The more details, the better.

Best of all is the client has given you full creative control.
Make the Ultimate Moviegoers Guide the best looking app out there.
Feel free to use any front-end framework of your choice - React, React-Native, Vue, Vue Native, Angular, Ember etc.

### Keep in mind the following questions

* What design patterns did you use?
* How would you test your application?
* How do you manage/store application state?
* What ways could you structure the code to make it easy to understand and maintain?
* What other considerations and tradeoffs did you make when building the application?

## API

[Sign Up](https://www.themoviedb.org/account/signup) for an account with 'The Movie Database.'

Once you are logged in you can go to _settings_ -> [_api_](https://www.themoviedb.org/settings/api) and create an api application.
Make it a personal application. If you do not have a website url, we recommend [creating a free github page](https://pages.github.com/).

[The Movie Database API Documentation](https://developers.themoviedb.org/3/getting-started/introduction)

## Submitting Your App
When you have completed your app, please post it in a public repository and send us a link - GitHub, GitLab, BitBucket etc.

## My Notes:

First off, thank you so much for this opportunity to work on the movie app problem. I had never worked with React before and was able to learn so much! 

I wanted to make a note about this problem. Being new to react and front-end development period, I wanted to follow a tutorial on how to build a react website. I found a teacher, Thomas Weibenfalk, on Skillshare that built this same problem. I followed him as he built the website. I learned so much from him and appreciated his passion.

While he did give us some starter files, such as images and helper functions, it was his intention to focus on the ReactJS. A reason I chose this particular tutorial was because he also taught about hooks. I learned early on that I was combining two different APIs so I was getting errors. I then started over! I still feel like I have more learning to do with hooks, but overall creating the custom hooks (useHomeFetch and useMovieFetch) gave me a idea of why, how, and when one would use a hook.

Another aspect about this class that I liked was how the author structured his files. He broke everything down into smaller files that had a hierachy with App.js being the top. App.js->Home.js/Movie.js->spread down the tree from there. He had a styles file which supported the various elements, a culmination creating the compontents of the site.

We did do some work on styling with CSS by first doing inline and then extracting them into files that would be later imported in to the components.


* What design patterns did you use? 
- I liked how we used some extra packages like Font-Awesome.

* How would you test your application?
- I'm not sure. 

* How do you manage/store application state?
- I learned about useState to create a state variable. In the useHomeFetch hook, we used three state variables for different functions of the home page. One was called state that was there for when we loaded the data from the movie database. Then there was one called 'loading' which to me seemed in my understanding more like a flag that said "am I loading?" if yes then grab those movies, if not then lets setLoading to false because it means we're not loading anything. The other one was for errors. If we have a problem getting the movies from the database then we want to setError to true because it means we have a problem. 

* What ways could you structure the code to make it easy to understand and maintain?
- Like I said above breaking it down into small parts with similar names to matchup the imports. 

* What other considerations and tradeoffs did you make when building the application?
- I'm still new so I'm not sure I have the scope of everything yet to be fully educated on what the tradeoffs would be.
