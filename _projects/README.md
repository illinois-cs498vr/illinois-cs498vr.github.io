# Managing projects

In the `_projects` folder, create a markdown file for the project. The frontmatter must contain the following fields:

- `layout: project`
- `custom-css: project`
- `title`
- `image` -- with a path to the project picture, which you should place in the `/img` folder.
- `desc` -- a couple of short lines to be rendered in the project card.
- `github` -- optional -- link to GitHub repo containing the project.
- `youtube` -- optional -- link to YouTube video for the project.

The content of the page will be rendered below `page.image` and `page.title`.