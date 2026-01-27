---
layout: ../../layouts/BlogPost.astro
title: How I Built TriviaStats.com
date: 2015-04-14
excerpt: A deep dive into the architecture and technology behind TriviaStats.com.
---

I created TriviaStats.com to solve a problem during the World's Largest Trivia Contest near Stevens Point, Wisconsin—a 54-hour annual event where teams answer radio-broadcast questions. The original issue: score updates posted at random intervals with no notification system, and no way to view historical scores.

## Initial Development

Four years prior, I built a basic Python and Django scraper that collected scores every minute and provided a simple search interface by team name or hour. I later added email and text notifications when new scores were posted.

## Modern Frontend Redesign

During a monthly Hack Day, I completely rewrote the frontend using contemporary tools:

- **AngularJS** with Angular Material for mobile-first design
- **Jade** templating (indentation-based HTML)
- **SCSS** for CSS preprocessing
- **Gulp** build tool with BrowserSync for cross-device testing
- **Amazon S3 and CloudFront** for frontend deployment

I achieved 10-second deployments separately from backend updates.

## Backend & Infrastructure

- Converted to REST API-only architecture with Django REST Framework
- Containerized with Docker for consistency
- Deployed using Ansible for configuration management
- Implemented AWS instances behind Elastic Load Balancer with CloudWatch monitoring
- Rewrote scraper using BeautifulSoup for parsing scores
- Added PEP8 compliance and unit tests

## Challenges

A key technical issue: Angular Django Resource automatically requested the next page after each response, which was problematic with tens of thousands of scores. I forked the project to remove pagination temporarily.

The unversioned `templateCache.js` file required 5-10 minute CloudFront invalidations per deployment.
