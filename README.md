# README

Course website for CS 498 Virtual Reality at the University of Illinois.

## Getting Started

* [Install Jekyll](https://jekyllrb.com/docs/installation/)
* `cd` to the location of the cloned repo
* Run `bundle install` for dependencies
* Run `bundle exec jekyll run` to start the website, then visit [`http://localhost:4000`](http://localhost:4000).

### Managing projects

In the `_projects` folder, create a markdown file for the project. The frontmatter must contain the following fields:

- `layout: project`
- `custom-css: project`
- `title`
- `image` -- with a path to the project picture, which you should place in the `/img` folder.
- `desc` -- a couple of short lines to be rendered in the project card.
- `content` -- full content of page, rendered below `project.title` and `project.image`.
- `github` -- optional -- link to GitHub repo containing the project.
