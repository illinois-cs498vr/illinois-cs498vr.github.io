# Managing Styles

Each stylesheet must be scoped to a component or layout, by name. The content of a layout that extends `layout: page` is contained in a div with `class="{{ page.layout }}`, to make this easier. For example, if you are creating a new layout named `foo` that extends `page`, make sure `foo.scss` contains all its styles in a `.foo { ... }` block. For examples, see `assignment[s].scss`.

For colors, make sure to use the definitions in `minima.scss`. 