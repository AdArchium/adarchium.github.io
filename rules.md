---
layout: default
---

<label for="searchbox">Search</label>
<!--<input type="search" oninput="setTimeout(function(){liveSearch();},500);" id="searchbox" >-->
<input type="search" id="searchbox" >

{% assign sortedRules = site.data.rules | sort: 'Name' %}
{% for rule in sortedRules %}
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
