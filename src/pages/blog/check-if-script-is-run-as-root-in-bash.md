---
layout: ../../layouts/BlogPost.astro
title: "Check if script is run as root/user in Bash"
date: 2010-11-08
description: "A simple Bash snippet to check whether a script is being run as root or a specific user."
---

Many scripts need to be run as root, such as ones installing software,
working with the root filesystem, etc. Instead of having your script run
and many commands fail, its best to check at the beginning whether the
script is being run as root or not. If not, it should exit immediately.

```bash
function is_root {
    if [ "(id -u)" !="0"; ]; then
        echo "Script must be run as root."
        exit 1
    fi
}

function is_user {
    if [ "$(whoami)" != "$1" ]; then
        echo "Script must be run as user: $1"
        exit 2
    fi
}
```

The `is_root` function uses the `id` command, which prints out all the id's of the current user (user id, group id, etc). The -u flag specifies user id.
Root is always user id 0. If the current users' id is not 0, they must
not be root, therefore, the script tells the user of the problem, then
gracefully exits with exit code 1 (a customary way to say "expected
error that requires exiting").

The `is_user` function uses `whoami`, which prints out the current user's name. This function takes one argument, the user name you want to check against. You would call it like this: `is_user josh`, and it will exit if the current user's name is not `josh`.
