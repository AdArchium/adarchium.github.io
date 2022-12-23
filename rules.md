---
layout: default
---

<label for="searchbox">Search</label>
<!--<input type="search" oninput="setTimeout(function(){liveSearch();},500);" id="searchbox" >-->
<input type="search" id="searchbox" >

{% for rule in site.data.rules %}
<div class="card">
  <h3>{{ rule.name}}</h3>
  <p>
    {{ rule.description }}
    <br />
    <span class="reference">
      {{ rule.reference }}
    </span>
  </p>
</div>
{% endfor %}