---
layout: archive
title:
    en: "Media"
    pt: "Mídia"
permalink: /media/
author_profile: true
---

{% include base_path %}

<div class="lang-en" markdown="1">

## Media & Events

A visual log of conferences, fairs, and exhibitions. Each card links to a dedicated page with photos and notes.

</div>

<div class="lang-pt" markdown="1">

## Mídia e Eventos

Um registro visual de conferências, feiras e mostras. Cada card abre uma página com fotos e anotações.

</div>

{% include card-gallery.html
  collection=site.media
  show_date=true
  show_excerpt=true
  show_tags=true
  excerpt_words=26
  empty_message="Nenhum evento cadastrado ainda. Volte em breve!"
%}