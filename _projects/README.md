# Managing projects

In the `_projects` folder, create a markdown file for the project. The frontmatter must contain the following fields:

- `layout: project`
- `custom-css: project`
- `title`
- `desc` -- a couple of short lines to be rendered in the project card.
- `github` -- optional -- link to GitHub repo containing the project.
- `image` -- with a path to the project picture, which you should place in the `/img` folder.
- `youtube` -- optional -- Video ID for YouTube video about the project. Video ID is the `v=` query parameter in a YouTube URL. 
For example, for the video `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the video ID is `dQw4w9WgXcQ`.

The content of the page will be rendered below `page.image` and `page.title`.