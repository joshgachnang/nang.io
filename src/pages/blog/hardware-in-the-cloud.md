---
layout: ../../layouts/BlogPost.astro
title: "Hardware in the Cloud: Cleaning up after Bare Metal Ironic Tenants"
date: 2014-11-05
---

This is a talk I gave at the OpenStack Paris summit with my coworker Jay. We were running OpenStack Ironic in production for the Rackspace OnMetal project. OnMetal was a way to spin up a bare metal server in the Rackspace cloud using the same tools you would use to start a virtual machine. We needed to add some tools to make the hardware safe for multitenancy in a cloud (no small order!), so we discussed what we were adding. The tools would eventually be open sourced and included in Ironic. I led the upstreaming effort for those tools, and gave a second talk at the [OpenStack Vancouver Summit](https://www.servercobra.com/openstack-vancouver-talk-operating-ironic/) about those tools and efforts.

[Watch on YouTube](https://www.youtube.com/watch?v=2Oi2T2pSGDU)
