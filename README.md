# basic-now-static-server

> Serve a static site on Zeit's [now](https://zeit.co/now) using [Express](https://expressjs.com/) and [basic-auth](https://github.com/jshttp/basic-auth)

**Important Note:** This app aims to provide a layer of obscurity for static sites beyond a randomly generated `now` URL. This app _does not_ provide a layer of security.

Anyone (or anything) with sufficient time, motivation, or computational power could guess your `now` URL, brute-force your `basic-auth` username and password, or find another way into your hosted site.

Any static site you serve with this app, while obscure, should still be considered publicly available on the internet.

## Prerequisites

1) install [node](https://nodejs.org/en/), [git](https://git-scm.com/downloads), and [yarn](https://yarnpkg.com/lang/en/docs/install/)

2) install [now](https://zeit.co/docs/getting-started/installing-now)

```bash

npm install -g now

```
3) run `now` and provide it with your email address
```bash

now

```

4) open the confirmation email and follow the link to identify yourself with `now`

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

# MAKE SURE YOU REPLACE THE "my-secret-*-value" STRINGS WITH YOUR OWN UNIQUE VALUES
# if you change the "my-secret-*-key" strings, make sure you update their
# corresponding values in package.json at now.env.USERNAME and/or now.env.PASSWORD

now secret add my-secret-password-key my-secret-password-value
now secret add my-secret-username-key my-secret-username-value

```

5) upload your static site to `now`

```bash

now

```

6) after the upload is complete, open the URL in your web browser, provide the username and password you set in your `now` secrets, and you should be able to view your static site

7) To make future updates, simply edit the files in your `/public` folder and run `now` at the command line to release them. Note that the URL will change every time unless you're using [aliases and/or custom domains](https://zeit.co/docs/features/aliases) with `now`

## License

The MIT License (MIT)

Copyright (c) 2017 Dane Petersen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
