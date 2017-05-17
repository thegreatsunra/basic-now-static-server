# basic-now-static-server

> Serve a static site on Zeit's [now](https://zeit.co/now) using [Express](https://expressjs.com/) and [basic-auth](https://github.com/jshttp/basic-auth)

**Important Note:** This tool aims to provide a layer of obscurity for static sites beyond a randomly generated `now` URL. This tool _does not_ provide a layer of security.

Anyone (or anything) with sufficient time, motivation, or computational power could guess your `now` URL, brute-force your `basic-auth` username and password, or find another way into your hosted site.

Any static site you serve with this tool, while obscure, should still be considered publicly available on the internet.

## Prerequisites

1) install [node](https://nodejs.org/en/), [git](https://git-scm.com/downloads), and [yarn](https://yarnpkg.com/lang/en/docs/install/)

2) install [now](https://zeit.co/docs/getting-started/installing-now)

```bash

npm install -g now

```
3) run `now login` and provide it with your email address
```bash

now login

```

4) open the confirmation email, confirm the security code matches, and follow the link to verify yourself with `now`

## Getting started

1) clone this repo

```bash

git clone https://github.com/thegreatsunra/basic-now-static-server.git
cd basic-now-static-server

```

2) install dependencies

```bash

yarn

```

3) (optional) replace the contents of the `/public` folder with your static site

4) create your `now` [secrets](https://zeit.co/docs/features/env-and-secrets#securing-env-variables-using-secrets)

```bash

# MAKE SURE YOU REPLACE THE "my-secret-*-value" VALUE STRINGS WITH YOUR OWN UNIQUE VALUES
# if you change the "my-secret-*" key strings, make sure you update their
# corresponding values in package.json at now.env.USERNAME and/or now.env.PASSWORD

now secret add my-secret-username my-secret-username-value
now secret add my-secret-password my-secret-password-value

```

5) upload your static site to `now`

```bash

now

```

6) after the upload is complete, open the URL in your web browser, provide the username and password you set in your `now` secrets, and you should be able to view your static site

7) to make future updates, simply edit the files in your `/public` folder and run `now` at the command line to release them. Note that the URL will change every time unless you're using [aliases and/or custom domains](https://zeit.co/docs/features/aliases) with `now`

## License

The MIT License (MIT)

Copyright (c) 2017 Dane Petersen
