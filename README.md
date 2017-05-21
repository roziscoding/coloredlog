# coloredlog
This is a simple utility to log stuff to console without having to manually color it.

## Why?
    Aren't there many log libraries already?
Sure! But I wasn't satisfied by any of them, since they either had too much or too little stuff, so I always ended up copying and pasting the same files over all my projects, untill I finally decided I wanted to be able to `yarn add coloredlog`, and here we are xD

## Usage
Just watch and repeat :P

```js
import {log, info, error, warn} from 'coloredlog';

log('This will be output to console.log with a blue color');

info('This will be output to console.info with a cyan color');

error('This will be output to console.error with a red color');

warn('This will be output to console.warn with a yellow color');
```

## NODE_ENV
If you set `NODE_ENV` environment variable to either `test` or `silent`, this module will shut it's mouth up. Useful for when you're running automated tests and don't want stuff getting in your way.

## Contributing
Com'on, you already know how to do this!
Just PR me, I'll be happy to reveal and merge :D

## TODO
 - Integrate [prettyjson](https://www.npmjs.com/package/prettyjson) to format objects, when wanted;
 - Support custom colors for each output stream