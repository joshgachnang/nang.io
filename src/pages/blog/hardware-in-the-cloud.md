---
layout: ../../layouts/BlogPost.astro
title: "Hardware in the Cloud: Cleaning up after Bare Metal Ironic Tenants"
date: 2014-11-05
excerpt: Developing tooling for multi-tenant bare metal cloud environments.
---

This piece describes a presentation I delivered at the OpenStack Paris summit with my colleague Jay. We were operating OpenStack Ironic in production for the Rackspace OnMetal initiative, which enabled users to provision bare metal servers through cloud-based interfaces similar to virtual machine deployment.

## The Challenge

The core challenge involved developing tooling to ensure hardware safety for multi-tenant cloud environments. When a tenant finishes using bare metal hardware, you need to ensure:

- All data is securely wiped
- The hardware is returned to a clean state
- The next tenant gets a fresh environment

## Our Contribution

We worked on solutions that would eventually be integrated into the Ironic project as open-source contributions. I led the upstream integration effort and subsequently presented related findings at the OpenStack Vancouver Summit regarding operational practices for running the young Ironic platform in production environments.
