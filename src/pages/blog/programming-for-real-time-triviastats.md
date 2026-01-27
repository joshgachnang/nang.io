---
layout: ../../layouts/BlogPost.astro
title: "Programming for Real Time: TriviaStats.com"
date: 2016-03-16
excerpt: Lessons learned from building a real-time score tracking platform.
---

I developed TriviaStats.com for 90FM's annual trivia contest in Stevens Point, featuring real-time score tracking and notifications for participating teams. The platform served 376 teams with over 477 unique visitors and 15,000 page views during the event.

## Key Lessons Learned

### Logging & Monitoring

Implementing comprehensive logging through Sentry proved invaluable for diagnosing issues quickly. Even just shooting off an info logging message is reassuring, since error generation suggests problems remain manageable rather than catastrophic failures occurring silently.

### Realistic Testing

Testing should mirror actual event conditions across all stages rather than focusing solely on complete datasets. My testing concentrated on past years' full scores, missing scenarios like partial hour availability or missing data blocks.

### Handling Unexpected Changes

When 90FM switched from numbered result pages to a single updated `results.html` file, my assumptions about page naming broke. However, the fix proved quick because robust error handling was in place.

### Idempotency & Replay Capability

Building checkpoint systems enables recovery from failures. I created Django management commands allowing notification resends, preventing permanent score loss if processes failed mid-execution.

### Edge Cases Matter

Hour numbering changes created notification bugs affecting multiple rounds. Comprehensive edge case testing would have caught these issues before deployment.
