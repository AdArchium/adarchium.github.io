---
layout: default
---

<label for="searchbox">Search</label>
<!--<input type="search" oninput="setTimeout(function(){liveSearch();},500);" id="searchbox" >-->
<input type="search" id="searchbox" >

{% assign sortedGear = site.data.wargear | sort: 'Name' %}
{% for gear in sortedGear %}
<div class="card">
  <h3>{{ gear.Name}}</h3>
  <p>
    {{ gear.Description }}
    <!--<br />
    <span class="reference">
      {{ gear.reference }}
    </span>-->
  </p>
  <hr />
</div>
{% endfor %}
