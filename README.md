# Data Representation for Nested Data

## gh-pages link: https://kanishkkalyani.github.io/Dropdown-Menu-React/

We come across hierarchical data representation many a times while using different products, whether it's file-folder navigation in our text editor or product navigation in myntra.com. Today, we will be creating our own.

## Criteria:

- When a parent element in closed, no descendants are shown.

- When a parent element is opened, its immediate descendants are shown (default case)

- When we open an element that's a parent and also its child, eg: Local Disk (C:) and Program Files, and close the parent, "Local Disk (C:)" in this case, without closing Program Files first, its current state should be maintained when that ancestor is reopened again. So when Local Disk (C:) is opened again, Program Files should stay open.

- Container size should be fixed and scrollbar should show up in case of overflow
