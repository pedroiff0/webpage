---
layout: archive
title:
  en: "Blog"
  pt: "Blog"
permalink: /blog/
author_profile: true
---

{% include base_path %}

<div class="lang-en" markdown="1">

## Recent Posts

Browse through my latest blog posts and updates.

</div>

<div class="lang-pt" markdown="1">

## Posts Recentes

Navegue pelos meus posts e atualizações mais recentes.

</div>

{% include card-gallery.html
  collection=site.posts
  show_date=true
  show_excerpt=true
  show_tags=true
  excerpt_words=30
  empty_message="No posts yet. Check back soon!"
%}