# PWA-Ynov

## Another gallery app

A sandbox repository during "Web Mobile" class given in Ynov Toulouse Campus

## Team

- [Jason Liebault](https://github.com/JasLieb)
- [Mathieu Pages](https://github.com/mathieupages)
- [Quentin Puel](https://github.com/Nummytincan)
- [Nicolas Chataigneau](https://github.com/Chataigneau)
- [Guillaume Navarro](https://github.com/Adrameleck)

## Some words from the team

This following project is our production for asked advanced PWA gallery app as final exercise of "Web Mobile" class. Before to go further in the reading of this repository, we wish to bring remarks from us about the current production delivered.

First remark is about our organization during the project development. There is two reasons why every collaborator except the teacher have a fork of this [repository](http://github.com/jaslieb/pwa-ynov) :

- Go deeper with Git and Github, discover how to handle with forked project, make PR to the main project, follow a code of conduct described by maintainers. In other word, it is a simple initiation about process and behaviors in a open source development world.

- Allows to every collaborator, to have their own project and integrate a hook for a personal [Netlify](https://www.netlify.com/) deploy. In this way, every collaborator can test own developments with the app host from localhost or [Netlify](https://www.netlify.com/) deploy.

Second remark is about the current state of the app (at the 29th January 2021). The main project Netlify deployment is broken and no investigations have not been made yet in relation to the allotted time. Maybe the writing of this README would help to reset the deploy of the main project. Moreover during the last day of development, some new deployment problems appears as a result of the merge with new features developed in the forked projects. Same as previously, no more time to push a new and completed investigation. Theses issues doesn't concern local development and test.

Finally, you will find here a list of the different features developed :

- A gallery app which will display some images stored in the assets folder

- A [Node Js](https://nodejs.org/) [Express](https://expressjs.com/) server which is able to serve the gallery app and handle future http requests
  
- A [Service Worker](https://developer.mozilla.org/fr/docs/Web/API/Service_Worker_API) is also provided with needed files to initialize the galley app

- Every needed assets and requests send (and their responses) are stored in a cache available through the [Cache API](https://developer.mozilla.org/fr/docs/Web/API/Cache). When the cache main key is updated, caches with different main key will be removed

- A install button is provided to allow user to install PWA app on this device. At click's event, a pop-up is displayed to grant installation.
  
- When the app is starting, the initialization process will :
  
  - Ask to grant send notifications authorization. If is granted through the pop-up, then some notifications will appears to say "thank you" about the granted authorization. Same when the app is reload, a notification will be sent to say "welcome back". [Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API) is used to accomplish it.

  - Ask the server for known image paths for the gallery which is under construction. The app initialization will also send a subscription to the server and observe the stream for new inputs.
  
- The user can fall in love about of one image and can click on the heart button. At this moment, a request in send to the server to log the event on this console. More, a new input it given in the stream of the previously registered subscription. They can be found in the server as a private array, thank to origin request ip. The gallery will react to this new input with a notification.
  
- [Not merged yet ! Only available in [Mathieu Pages Git](https://github.com/mathieupages/pwa-ynov) !] The app can handle [navigator onLine](https://developer.mozilla.org/en-us/docs/Web/API/NavigatorOnLine/onLine) state changes. When offline and if permission granted, a background synchronization is registered. The request will concern a gallery images update when the connection will be back.

## Setup

- `npm install`
- `npx webpack`
- `node server/server.js` Used PORT : 3000
- [Visit your localhost](http://localhost:3000). Chrome is recommended

## Code of contribution 

- Have a Netlify account https://www.netlify.com/
- Fork this project
- Link a Netlify deployement with your forked git
- write something new and push it
- show deploy from your netlify address (also available from your main pageof the forker git repo)
- Ask a PR to the [main branch of the main project](https://github.com/JasLieb/pwa-ynov) to push your contribution

## Team forked projects and deployments links  

- Jason Liebault :

    [git](https://github.com/jaslieb/pwa-ynov) | [deploy](https://mystifying-pare-646d2d.netlify.app/)

- Mathieu Pages :  

    [git](https://github.com/mathieupages/pwa-ynov) | [deploy](https://elated-curran-5dab22.netlify.app/)

- Quentin Puel :  

    [git](https://github.com/Nummytincan/pwa-ynov) | [deploy](https://mystifying-colden-13071a.netlify.app/)

- Nicolas Chataigneau :

	[git](https://github.com/Chataigneau/pwa-ynov) | [deploy](https://gifted-neumann-297a8b.netlify.app/)
	
- Guillaume Navarro :

	[git](https://github.com/Adrameleck/pwa-ynov) | [deploy](https://boring-leakey-e31ca2.netlify.app/)
