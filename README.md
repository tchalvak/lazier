# lazier
A simple npm package for providing the bare minimum boilerplate functionality of components via js

# Wait, doesn't js already provide this?

Exactly, it does, just use js template strings + html + templates vars ${someVar} + js destructuring + in-browser module import and you don't need lazier...

So this repo is just a boilerplate to make it easier to learn and formalize the structure of using a component-based approach.  Once you have the process down, you have all the tools in place and you can ditch your one minor dependency and have a powerful approach to browser development that requires no framework, yet has high reusability.

## Goals

- Only 1 dependency, a bundler
- Show how to create a component-based approach *without* React/Angular/Next/Svelte
- Show how to get in-template-string syntax highlighting, which is crucial
- Suggest how to pull in "visual UI components" that someone else has created, with tailwind
- Show how imports work in modern browsers
