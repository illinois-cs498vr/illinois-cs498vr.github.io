# Managing projects

In the `_projects` folder, create a markdown file for the project. The frontmatter must contain the following fields:

- `layout: project`
- `title`
- `desc` -- a couple of short lines to be rendered in the project card.
- `image` -- optional -- a path to the project picture, which you should place in the `/img/projects/` folder. Optional, but highly recommended.
- `semester` -- the semester the project was created, used for separating projects
- `featured` -- indicates whether this project should be featured at the top of the gallery
- `github` -- optional -- link to GitHub repo containing the project.
- `youtube` -- optional -- Video ID for YouTube video about the project. Video ID is the `v=` query parameter in a YouTube URL. 
For example, for the video `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the video ID is `dQw4w9WgXcQ`.
- `link` -- optional -- Link to the project site.
- `dl` -- optional -- Link to project download. Preferably a `.zip` with the project executable and requisite files.

The content of the page will be rendered below `page.image` and `page.title`.