# sails-generate-police

[![Tips](https://img.shields.io/gratipay/lykmapipo.svg)](https://gratipay.com/lykmapipo/)

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.svg)](https://gratipay.com/lykmapipo/)

A generator which quick start your development with [sails-police](https://github.com/lykmapipo/sails-police)

*Note: This requires Sails v0.11.0+.  If v0.11.0+ isn't published to NPM yet, you'll need to install it via Github.*

*Warning!: Use this generator on fresh sails project, othewise consider the use of [Quick Setup](https://github.com/lykmapipo/sails-police#quick-setup)*

## Installation
```sh
$ npm install --save-dev sails-generate-police
```

## Usage
- Add `sails-police-generator` into your `.sailsrc`
```js
{
  "generators": {
    "modules": {
        "police": "sails-generate-police"
    }
  }
}
```
- Generate police
```sh
$ sails generate police
```
- Then run the printed message
```sh
$ npm install --save sails-police sails-hook-email
```

## Contribute
Fork this repo and push in your ideas. 


## Licence
The MIT License (MIT)

Copyright (c) 2014 lykmapipo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 