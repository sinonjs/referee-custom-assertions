# Custom assertions with [`@sinonjs/referee`][referee]

This repository contains runnable examples of custom assertions for
[`@sinonjs/referee`][referee].

The npm scripts in `package.json` show how to load custom assertions with

- [Mocha][mocha] (`npm run test:mocha`)
- [Mochify][mochify] (`npm run test:mochify`)
- [Jest][jest] (`npm run test:jest`)
- [Jasmine][jasmine] (`npm run test:jasmine`)
- [Tap][tap] (`npm run test:tap`)

The example sources can be found in [`./test/assertions/`][examples]. Use them
as a blueprint to build your own assertions, or refer to the documentation of
[`referee.add()`][docs] to learn more.

[mocha]: https://mochajs.org
[mochify]: https://github.com/mantoni/mochify
[jest]: https://jestjs.io
[jasmine]: https://jasmine.github.io
[tap]: https://www.node-tap.org
[referee]: https://github.com/sinonjs/referee
[examples]: https://github.com/sinonjs/referee-custom-assertions/tree/master/test/assertions
[docs]: https://sinonjs.github.io/referee/#refereeadd
