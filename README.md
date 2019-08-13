# Entity Interaction Viewer

`npm install`

### `npm start`

Starts webpack's dev server at [http://localhost:3000](http://localhost:3000) with live reload and error overlays.

### `npm run build`

Builds to `./build` with minification and versioned filename.

# Features for Discussion

**embed options**
- [ ] container target (selector string or element)
- [ ] custom breakpoints as name: width (`{sm: 480, lg: 786, whoa: 1500}`) for better host page responsive styling
- [ ] className prefix, used throughout app (default to `wfs-`?)
- [ ] replace [react-select](https://github.com/JedWatson/react-select) with custom component (lighter weight, better styling control)