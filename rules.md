---
layout: default
---

<label for="searchbox">Search</label>
<!--<input type="search" oninput="setTimeout(function(){liveSearch();},500);" id="searchbox" >-->
<input type="search" id="searchbox" >

{% assign sortedRules = site.data.rules | sort: 'Name' %}
{% for rule in sortedRules %}
<div class="card">
  <h3>{{ rule.Name}}</h3>
  <p>
    {{ rule.Description }}
    <!--<br />
    <span class="reference">
      {{ rule.reference }}
    </span>-->
  </p>
  <hr />
</div>
{% endfor %}
