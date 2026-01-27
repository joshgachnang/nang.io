---
layout: ../../layouts/BlogPost.astro
title: Simplest Backup With S3
date: 2018-01-03
excerpt: A minimal-configuration approach to backing up data using Amazon S3 storage.
---

This article presents a minimal-configuration approach to backing up data using Amazon S3 storage. AWS's free tier provides 5GB of data and 15GB of transfer for free.

## Key Steps

### 1. AWS Setup

- Create an S3 bucket in AWS and remember its name
- Configure AWS credentials locally (via `~/.aws/credentials` file)

### 2. Generate Upload URL

Install the AWS SDK and create an `s3url.js` script that generates a pre-signed URL valid for 10 years, allowing uploads without repeated authentication.

```javascript
// s3url.js
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const bucket = process.argv[2];
const filename = process.argv[3];

const params = {
  Bucket: bucket,
  Key: filename,
  Expires: 60 * 60 * 24 * 365 * 10 // 10 years
};

const url = s3.getSignedUrl('putObject', params);
console.log(`curl -X PUT -T backup.tar.gz "${url}"`);
```

### 3. Backup Script

Create `backup.sh` on your server containing:

```bash
#!/bin/bash
tar -czf backup.tar.gz /path/to/backup
curl -X PUT -T backup.tar.gz "YOUR_PRESIGNED_URL"
```

### 4. Automation

Schedule the backup via crontab. The example runs daily at 9 UTC (3 AM Central Time):

```bash
0 9 * * * /path/to/backup.sh
```

## Advantages

- Minimal setup required
- Highly affordable pricing structure
- Data stored off-server for safety
- No retained backup management overhead
