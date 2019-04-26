### Using Collapsible Sections

In a page or layout frontmatter, specify what classname(s) the collapsible sections should be applied to under `sections`. The classname can be specified as follows:
- string -- just the classname (**without** the preceding dot `.`)
- list of objects:
  - `name`: classname as above
  - `hidden`: boolean, whether the sections should be expanded or collapsed by default

`sections` can be either a classname string or a list of classname strings or objects defined as above. Note that it does not work if `sections` is an object.

`sections` can be defined in either the layout or the page frontmatter, but the page will override the layout if both are defined.

#### Usage examples: 

```yaml
sections: foo
```
```yaml
sections: 
  - foo
  - bar
  - baz
```
```yaml
sections: 
  - name: foo
    hidden: false
  - name: bar
    hidden: true
```

Styles are included automatically.
