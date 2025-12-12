---
layout: archive
title:
  en: "Publications"
  pt: "Publicações"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">
    <span class="lang-en">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</span>
    <span class="lang-pt">Você também pode encontrar meus artigos em <a href="{{site.author.googlescholar}}">meu perfil Google Scholar</a>.</span>
  </div>
{% endif %}

{% include base_path %}

<!-- Render publications by category -->
{% if site.publication_category %}
  {% for category in site.publication_category %}
    {% assign cat_key = category[0] %}
    {% assign cat_title = category[1].title %}
    
    <!-- Check if there are posts for this category -->
    {% capture posts_in_category %}
      {% for post in site.publications %}
        {% if post.category == cat_key %}x{% endif %}
      {% endfor %}
    {% endcapture %}
    
    {% if posts_in_category | strip | size > 0 %}
      <h2>{{ cat_title }}</h2>
      <hr />
      
      {% for post in site.publications reversed %}
        {% if post.category == cat_key %}
          {% include archive-single.html %}
        {% endif %}
      {% endfor %}
    {% endif %}
  {% endfor %}
{% else %}
  {% for post in site.publications reversed %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}



