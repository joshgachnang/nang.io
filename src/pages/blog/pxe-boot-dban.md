---
layout: ../../layouts/BlogPost.astro
title: PXE Boot DBAN
date: 2013-06-04
excerpt: Setting up PXE boot for DBAN disk wiping.
---

This article covers how to set up PXE (Preboot Execution Environment) booting for DBAN (Darik's Boot and Nuke), a tool for securely wiping hard drives.

## Overview

PXE booting allows you to boot computers over the network without needing physical media. Combined with DBAN, this creates a powerful solution for securely wiping multiple machines in a datacenter or lab environment.

## Requirements

- A DHCP server configured for PXE boot
- A TFTP server to serve boot files
- DBAN ISO or PXE-bootable files

## Setup Steps

1. Configure your DHCP server to point to the TFTP server
2. Extract DBAN boot files to the TFTP directory
3. Configure the PXE boot menu to include DBAN as an option
4. Boot target machines via network

## Use Cases

This setup is particularly useful for:

- Datacenter decommissioning
- Hardware recycling programs
- Compliance with data destruction requirements
- Lab environment resets
