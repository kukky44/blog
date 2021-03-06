---
title: Markdown cheatsheet of this blog
date: 2020-09-25 17:35:40
description: Markdown cheatsheet of this blog
category: self
tags: ["markdown"]
thumbnail: thumbnail.png
---
This post is the markdown cheatsheet of this blog.
## Heading

```
## Heading
### heading3
#### heading4
##### heading5
```
### heading3
#### heading4
##### heading5

-----
## Lists
```
- Sample text
- Sample text
- Sample text
  - Sample text
  - Sample text
```
- Sample text
- Sample text
- Sample text
  - Sample text
  - Sample text

```
1. Sample text
2. Sample text
3. Sample text
4. Sample text
5. Sample text
```
1. Sample text
2. Sample text
3. Sample text
4. Sample text
5. Sample text

------
## Inline texts
```
*Italic*
**Bold text**
~~Strikethrough~~
inline`code`
This is [my twitter link](https://twitter.com/kukky_design)
```

*Italic*

**Bold text**

~~Strikethrough~~

inline`code`

This is [my twitter link](https://twitter.com/kukky_design)

------
## Table
```
| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |
```

| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |

-----
## Code

```css:title=style.css
body {
  color: red;
}
```

-----
## Box

```
[[simple | Hello ]]
| Some note here

[[info | Memo]]
| Some note here

[[notice | Note]]
| Some note here

[[alert | Danger! ]]
| - You can also use lists
| - like this

```

[[simple | Hello ]]
| Some note here

[[info | Memo]]
| Some note here

[[notice | Note]]
| Some note here

[[alert | Danger! ]]
| - You can also use lists
| - like this

-----
## Image

```
![sampleAlt](./image.png)
```

![sampleAlt](./image.png)

The image file is located in the same folder as index.md.
### Image sizes
```
[[imageMedium]]
| ![alt](./image.png)

[[imageSmall]]
| ![alt](./image.png)
```
[[imageMedium]]
| ![alt](./image.png)

[[imageSmall]]
| ![alt](./image.png)

-----
## Horizontal line

```
-----
```

-----