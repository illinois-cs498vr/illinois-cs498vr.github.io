# README

Course website for CS 498 Virtual Reality at the University of Illinois.

### Managing projects

In the `_projects` folder, create a markdown file for the project. The frontmatter must contain the following fields:

- `title`
- `image` -- with a path to the project picture, which you should place in the `/img` folder.
- `desc` -- optional -- a couple of short lines to be rendered in the project card.
- content -- full content of page, rendered below `project.title` and `project.image`.
	- If `desc` is unspecified, the beginning of the content will be rendered on the project card in the gallery instead, so if `desc` is not specified, make sure that the first couple of lines are good to show in `/gallery`.
- `github` -- optional -- link to GitHub repo containing the project.