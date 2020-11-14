# tomatoes-mobile

Mobile end tools

## Features
- Interactive operation of vConsole & edura
- Judge the operating environment
- ...

## Installing
```javascript
$ yarn add @tomatoes/mobile
```

## Usage
```javascript
import { addVconsole, addEruda, isIos } from "@tomatoes/mobile";

/**
 * options:
 * It can be called by five finger touch
 */
addVconsole(alwaysShow?: boolean): void;
/**
 * options:
 * - Get request parameter add [eruda = true] to call
 * - LocalStorage sets the key of [active-eruda] to call
 */
addEruda(alwaysShow?: boolean): void;
/**
 * Is itIOS
 */
isIos(): boolean;
```

## License
[The MIT License](./LICENSE)