---
layout: ../../layouts/BlogPost.astro
title: Fabric XMPP Chat
date: 2013-08-09
excerpt: Integrating XMPP chat messaging into Fabric deployment scripts.
---

This article demonstrates how to integrate XMPP chat messaging into Fabric deployment scripts for real-time notifications. I created a system to send deployment status updates through an XMPP server (ejabberd).

## Installation

The solution requires two packages:

```bash
pip install fabric xmpppy
```

## Core Functions

Two main functions were added to `fabfile.py`:

- `configure_xmpp()` - Reads credentials from a configuration file and stores them in environment variables
- `send_xmpp_message()` - Establishes an XMPP client connection and transmits messages

## Configuration File

The credentials file (defaulting to `/etc/xmpp_credentials.ini`) should contain username, password, hostname, and recipient details organized by project section.

```ini
[myproject]
username = deploy@example.com
password = secret
hostname = jabber.example.com
recipient = team@conference.example.com
```

## Code Structure

The implementation stores authentication details in `env.xmpp_auth` and maintains a persistent client connection in `env.xmpp_client`. Messages are created using the xmpppy library's Message class with chat-type attributes.

## Practical Applications

This system pairs well with continuous integration servers, enabling deployment progress notifications and bidirectional communication through chat interfaces—inspired by GitHub's HUBOT project.
