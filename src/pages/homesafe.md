---
layout: ../layouts/PageLayout.astro
title: HomeSafe
---

[Website](https://homesafe.nang.io)

[Download for iOS](https://itunes.apple.com/US/app/id1412405669?mt=8)

[Download for Android](https://play.google.com/store/apps/details?id=app.homesafe.locationtracking)

HomeSafe is an app I built to demo the library of tools that I use to build client projects. I'm always forgetting to text my mom when I get home from driving long distance, so I decided to make a simple app to make both our lives easier. The app allows you to set up a location you're heading to and a list of contacts to text when you arrive safely. It tracks your location in the background and then uses Twilio to send a message when you get close to the location.

The app is built using React Native. The backend is built using NodeJS and Firebase. The NodeJS talks to Twilio to send text messages. The app is meant to demo some of the features that are in my React Native starter project that I use to get client apps off the ground more quickly. Each of these features would take hours to days to implement from scratch in a new app, but with this library, basic setup only takes minutes. Some of the included features are:

- Social Signup - sign up with Twitter, Facebook, or Google accounts. Users are more likely to sign up for your app if they don't need to provide an email address and password.
- Email Signup - the classis way to create an account. Also has built in forgot password screen and lets you update your email.
- Onboarding - guide your users through the sign up flow, giving them your value proposition and getting them excited to sign up for your app.
- Firebase - a service that acts as your database and backend for your app. It is much quicker and easier to set up than a custom backend, saving you time and money.
- Profile - let your users update their name or any other part of their profile with ease.
- User Interface - a whole set of user interface components, from buttons to text boxes to bring your app to life.
- Icons - a huge library of icons to make your app pop!
- Push notifications - engage your users with push notifications when actions happen in your app or when you want to send targeted messages to groups of users.
- Metrics tracking - see which features are used most by users, where people are falling off in your sign up flow, and many other insights. Currently supports Mixpanel, Firebase, and Fabric Answers.
- Permissions - handle permission prompts with helpful messages and soft prompting to increase the chances your users accept the prompt and allows you to re-prompt them at a later date (which you can't do without a soft prompt).
- Location Tracking - track when your users get to pre-defined locations.
- Contacts - let your users easily select contacts and use selected data in your app.
