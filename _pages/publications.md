---
layout: archive
title:
  en: "Publications"
  pt: "Publicações"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap" style="margin-bottom: 0.2rem; white-space: normal;">
    <span class="lang-en">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</span>
    <span class="lang-pt">Você também pode encontrar meus artigos em <a href="{{site.author.googlescholar}}">meu perfil Google Scholar</a>.</span>
  </div>
{% endif %}

{% if site.author.arxiv %}
  <div class="wordwrap" style="margin-bottom: 0.2rem; white-space: normal;">
    <span class="lang-en">Or browse my papers on <a href="{{ site.author.arxiv }}">arXiv</a>.</span>
    <span class="lang-pt">Ou veja meus artigos no <a href="{{ site.author.arxiv }}">arXiv</a>.</span>
  </div>
{% endif %}
<div class="wordwrap" style="margin-bottom: 0.2rem; white-space: normal;">
  <span class="lang-en">Browse my NASA ADS library <a href="https://ui.adsabs.harvard.edu/user/libraries/lIX355U5T0-y1Y-ic8QO5Q">here</a>.</span>
  <span class="lang-pt">Veja minha biblioteca na NASA ADS <a href="https://ui.adsabs.harvard.edu/user/libraries/lIX355U5T0-y1Y-ic8QO5Q">aqui</a>.</span>
</div>

{% include base_path %}

{% if site.publication_category %}
  {% for category in site.publication_category %}
    {% assign cat_key = category[0] %}
    {% assign cat_title = category[1].title %}
    
    {% capture posts_in_category %}
      {% for post in site.publications %}
        {% if post.category == cat_key %}x{% endif %}
      {% endfor %}
    {% endcapture %}
    
    {% assign has_posts = posts_in_category | strip | size %}
    
    {% if cat_title.en %}
      {% assign has_title_en = cat_title.en | strip | size %}
      {% assign has_title_pt = cat_title.pt | strip | size %}
      {% assign has_title = has_title_en %}
    {% else %}
      {% assign has_title = cat_title | strip | size %}
    {% endif %}
    
    {% if has_posts > 0 and has_title > 0 %}

## <span class="lang-en">{{ cat_title.en }}</span><span class="lang-pt">{{ cat_title.pt }}</span>

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



