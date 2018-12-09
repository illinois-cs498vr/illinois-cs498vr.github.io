# README

Course website for CS 498 Virtual Reality at the University of Illinois.

## Getting Started

You need to have jekyll installed. Instructions [here](https://jekyllrb.com/docs/installation/).

From there, cd to the cloned repo, then run `bundle install`.

After that, you can start the website with `bundle exec jekyll run`, and visit [`http://localhost:4000`](http://localhost:4000).

### Managing projects

In the `_projects` folder, create a markdown file for the project. The frontmatter must contain the following fields:

- `layout: project`
- `custom-css: project`
- `title`
- `image` -- with a path to the project picture, which you should place in the `/img` folder.
- `desc` -- a couple of short lines to be rendered in the project card.
- content -- full content of page, rendered below `project.title` and `project.image`.
- `github` -- optional -- link to GitHub repo containing the project.