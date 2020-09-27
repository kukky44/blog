---
title: deve with gatsby
date: 2020-09-22 12:31:42
description: gatssssssss
category: develop
tags: ["react", "netlify"]
thumbnail: gatsby_netlify.png
---

I created this blog to feel free to write anything.

## I will write anything I want

I wanted the place where I can write anything about my thoughts, things I'm impressed. I will write anything which is even information that I don't know who will be useful.

## Resister

### addeventlintener

#### h4title

##### h5title

マークダウンで技術的な話をさくっと書き残すとき、ローカルのエディター（VSCode）上で書きたかった。 その方がいくつものタブを開かなくても良くて気軽だし、**サービスの UI に慣れられる**し、自分の書きやすいように気軽にカスタマイズできる。 この辺りについては[ブログ執筆を効率化するための工夫](https://github.com)に少し詳しく書いた。

インライン`code`ブロックを作れます。

イタリックは*こんな*感じですよ。

```js:title=config.js
const post = data.markdownRemark;
const post = data.markdownRemark;
const { relatedPosts } = pageContext;
const { title, description, date, category, thumbnail } = post.frontmatter;
```

1. ひとつ
2. ふたつ
3. みっつ

終わり

- ひとつ
- ふたつ
- みっつ

## Custome-Blocks Sections

```
タイトル
タイトル
```

> 引用
> ですよん

[[simple | simple]]
| simple content

[[info | Information]]
| info content

[[notice | notice]]
| notice content

[[alert | alert]]
| alert content
