# lazier
A simple boilerplate to show how to get the bare minimum of components via js

# Wait, doesn't js already provide this?

Exactly, it does, just use js template strings + html + templates vars ${someVar} + js destructuring + in-browser module import and you don't need lazier...  ...but it's a little hard to pull all the pieces together without initial starting boilerplate to show how.

So this repo is just a bit of starter boilerplate to make it easier to learn and formalize the structure of using a component-based approach in pure js (+tailwind).  Once you have the process down, you have all the tools in place and you can ditch your one minor dependency and have a powerful approach to browser development that requires no framework, yet has high reusability.

## Goals

- Only 1 dependency, a bundler
- Show how to create a component-based approach *without* React/Angular/Next/Svelte
- Show how to get in-template-string syntax highlighting, which is crucial
- Suggest how to pull in "visual UI components" that someone else has created, with tailwind
- Show how `import` keyword works out in modern browsers
- Never learn React again just to use a webpage
