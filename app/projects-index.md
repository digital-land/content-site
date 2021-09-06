---
layout: section-index
title: "Projects"
permalink: "project/index.html"
description: "We're collecting and publishing land and housing data to build a national picture of planning."
pagination:
  data: collections.projects
  reverse: true
  size: 50
eleventyNavigation:
  key: "project-index"
  parent: "home"
eleventyComputed:
  eleventyNavigation:
    title: "{{ title }}"
---
