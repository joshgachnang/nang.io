---
layout: ../../layouts/BlogPost.astro
title: "FreeNAS to Ubuntu: Torrent Server (Transmission)"
date: 2012-12-02
excerpt: Setting up Transmission as a torrent server on Ubuntu.
---

This tutorial explains how to set up Transmission, a torrent server with a web interface, on Ubuntu as a replacement for FreeNAS's built-in torrent functionality.

## Installation

Run the following command to install Transmission:

```bash
sudo apt-get install -y transmission-daemon
```

## Configuration

Transmission stores settings in a JSON file located at `/var/lib/transmission-daemon/info/settings.json`. Modify the following parameters:

- Enable the remote interface by setting `"rpc-enabled": true`
- Change the default password to something custom
- Disable whitelist restrictions to allow connections from any computer
- Configure download and incomplete directories (e.g., `/mnt/storage/Torrents/`)

```json
{
  "rpc-enabled": true,
  "rpc-password": "your-password-here",
  "rpc-whitelist-enabled": false,
  "download-dir": "/mnt/storage/Torrents/Complete",
  "incomplete-dir": "/mnt/storage/Torrents/Incomplete",
  "incomplete-dir-enabled": true
}
```

## Directory Setup

Create the appropriate directories and assign ownership:

```bash
sudo mkdir -p /mnt/storage/Torrents/{Complete,Incomplete}
sudo chown -R debian-transmission:debian-transmission /mnt/storage/Torrents
sudo chmod -R 775 /mnt/storage/Torrents
```

## Access

Once configured and restarted, the web interface is accessible at `hostname:9091`. Port forwarding can be configured on a router for remote access.

## Use Case

This setup allows continuous seeding of files like OS distributions even when primary computers are offline.
