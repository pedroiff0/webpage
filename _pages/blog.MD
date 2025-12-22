---
layout: archive
title:
  en: "Blog"
  pt: "Blog"
permalink: /blog/
author_profile: true
---

{% include base_path %}

{% include card-gallery.html
  collection=site.posts
  show_date=true
  show_excerpt=true
  show_tags=true
  excerpt_words=30
  empty_message="No posts yet. Check back soon!"
%}