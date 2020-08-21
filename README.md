# 🚀 Welcome!

## Technology stack

- TypeScript
- Babel
- Webpack
- React
- PostCSS
- SCSS
- Styled Components
- ESLint
- Stylelint
- Prettier
- Jest
- Storybook

## Available Scripts

In the project directory, you can run:

- `yarn start` - runs the app in the development mode
- `yarn build` - builds the app for production
- `yarn build-info` - open bundle analyzer in browser
- `yarn qa` - run code quality tools
- `yarn fix` - fix linting errors
- `yarn storybook` - run storybook
- `yarn build-storybook` - build storybook
- `yarn lint` - run linters
- `yarn eslint` - run ESLint
- `yarn stylelint` - run Stylelint
- `yarn ts` - run TypeScrypt checks
- `yarn ts-files` - list TypeScrypt files
- `yarn ts-coverage` - show TypeScrypt coverage
- `yarn codestyle` - checks code style with prettier
- `yarn format` - format files with prettier
- `yarn test` - launches the test runner
- `yarn test-silent` - launches the test runner and show errors only
- `yarn test-coverage` - show test coverage

## Why we need a Starter Kit

The number of options that are available in the JavaScript space today is
overwhelming. There are a lot of decisions that we might consider when creating
a robust JavaScript development environment. Decision overload shouldn’t affect
the entire team on every new project. A team should make all of these decisions
just once.

Also, the tooling is one of the hardest part of JavaScript nowadays. There are
so many complex dependencies that it takes a long time to set up a new app. Yes,
it’s good to know how everything works, but that doesn't mean you need to learn
it all before getting started. It’s better to learn as you go. Getting off the
ground quickly allows you to focus more on the code and avoid getting
discouraged by a difficult setup.

Today many teams have their own development environment. You may have heard
terms like Boilerplate, Starter Kit, Skeleton App or Example Project. There are
many benefits to building your own development environment. You are free to
select the best and most relevant technologies for your needs. You can build it
in a way that fits your team best and put only those features that you care
about. This helps avoid unnecessary complexity, makes it easy to fix bugs and
tweak the setup as time passes. Any existing boilerplate projects are likely to
contain technologies that you don’t want or need, or it can be time-consuming
and error-prone removing features or tweaking how they work.

Is it worth building your own starter kit? Well first, it codifies a long list
of decisions, agreed tools, best practices, and lessons learned. It also
encourages consistency. It protects you from forgetting important details. It
increases quality because doing the right thing becomes automatic. And finally,
it avoids repeating work. You shouldn’t have to think about how to handle
minification, automation, transpiling, bundling, cache-busting and more every
time you start a new project. A starter kit encapsulates all these decisions for
you, it’s like a living, automated, and interactive checklist. It makes sure the
right things get done even when you’re in the heat of the moment. Doing the
right thing becomes an easy thing, that’s a big win.

There are so many steps involved in doing things right, that it’s easy to
overlook a step. The list of best practices in JavaScript has become too long
for most people to hold in their heads. When you find something new everyone
should start doing, you now have a place that you can codify the practice so
that it happens automatically from now on. A well-structured development
environment provides rapid feedback on your work, quickly reporting on any
linting, testing, or compilation errors the moment that you hit save. It assures
the developer doesn't overlook important concerns or make common mistakes along
the way. So, it can be a good idea to make your own starter kit.

## Stack description

### Babel

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a
backwards compatible version of JavaScript in current and older browsers or
environments. Babel can transform syntax, polyfill features that are missing in
your target environment, do source code transformations and more. It can convert
JSX syntax, strip out type annotations. Babel is built out of plugins. Compose
your own transformation pipeline using existing plugins or write your own. Babel
tries to stay true to the ECMAScript standard, as much as reasonably possible.

### ESLint

It checks source code for stylistic as well as programmatic errors. ESLint helps
to identify some mistakes that are made during coding. It is also used for
adhering best practices and improving code quality and readability.

### Airbnb style guide

It is a set of standards that outline how code should be written and organized
and it covers nearly every aspect of JavaScript. It used as a preset for ESLint.

### Stylelint

Stylelint is a linter that helps to avoid errors and enforce conventions in
styles. It understands the latest CSS syntax, parses SCSS, extracts embedded
styles from HTML, markdown and CSS-in-JS template literals.

### Prettier

Prettier is an opinionated code formatter with support for many filetypes.
Prettier enforces a consistent code style (i.e. code formatting) across your
entire codebase by parsing code and re-printing it with its own rules taking the
maximum line length into account.

### Jest

Jest is a JavaScript testing framework designed to ensure correctness of any
JavaScript codebase. It allows you to write tests with an approachable, familiar
and feature-rich API that gives you results quickly. Jest is well-documented,
requires little configuration and can be extended to match your requirements.

### Styled Components

Styled Components allows you to write traditional CSS to style your components
in JavaScript by utilising tagged template literals. It keeps track of which
components are rendered on a page and injects their styles fully automatically.
It generates unique class names for your styles, so you never have to worry
about duplication, overlap or misspellings. Styling is tied to a specific
component. You can style components based on their props or a global theme. It
handles vendor prefixing automatically.

### React

A JavaScript library for building user interfaces. It's simple and declarative,
it uses just plain JavaScript to build reusable components.

### Storybook

Storybook is a tool for UI development. It makes development faster and easier
by isolating components. This allows you to work on one component at a time. You
can develop entire UIs without needing to start up a complex dev stack, force
certain data into your database, or navigate around your application.

## Extra features

- hot reload
- bundle visualizer
- pre-commit formatting
- TypeScript module resolver
- filenames linting
- jest coverage
- typescript coverage
- root alias support
