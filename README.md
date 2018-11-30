# README

Course website for CS 498 Virtual Reality at the University of Illinois.

### Managing MPs

MPs are defined in the `_mps/` folder. The frontmatter must contain:

- `layout: mp`
- `title`: string, is used as the header.
- Either: `due` or `parts`:
  - `due`: string, literal due date for single-part MP. Bolded and inserted at top of doc as subheading.
  - `parts`: list of objects, each object containing:
    - `title`: string, name of part (e.g. "MP1.1"), listed under due dates.
    - `due`: string, bolded and inserted next to part title.
- `material`: list of links, each formatted markdown-style: `"[link text](URL)"`.
- `notes`: boolean, optional. Specifies whether to render the important notes section (see below). Default: true.
- `instructions`: boolean, optional. Specifies whether to render the submission instructions section (see below). Default: true.

On each page, above the `content`, the contents of `important_notes.md` and `submission_instructions.md` will be rendered *unless* `notes` and `instructions` are set to `false`, respectively.

See `_mps/mp1.md` for a half-baked example.