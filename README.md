[![Build Status](https://travis-ci.org/telemark/skoleskyss-behandling-api.svg?branch=master)](https://travis-ci.org/telemark/skoleskyss-behandling-api)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# skoleskyss-behandling-api
...

## Docker

Build the image

```sh
$ docker build -t skoleskyss-behandling-api .
```

Run the image

```sh
docker run --restart=always -d -p 80:3000 --name skoleskyss-behandling-api skoleskyss-behandling-api
```
