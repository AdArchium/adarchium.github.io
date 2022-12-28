---
layout: default
---

<label for="searchbox">Search</label>
<!--<input type="search" oninput="setTimeout(function(){liveSearch();},500);" id="searchbox" >-->
<input type="search" id="searchbox" >

{% assign sortedProfiles = site.data.closecombat | sort: 'Name' %}
{% assign groupedProfiles = sortedProfiles | group_by: 'Type' %}
{% for type_group in groupedProfiles %}
<div class="card">
    <h3>{{ type_group.name }}</h3>
    <table style="width:100%; margin: 0 auto;">
        <thead>
            <tr class="header">
                <th>Weapon Name</th>
                <th>Range</th>
                <th>Strength</th>
                <th>AP</th>
                <th>Special Rules</th>
            </tr>
        </thead>
        <tbody>
        {% for profile in type_group.items %}
            <tr>
                <td>{{ profile.Name }}</td>
                <td class="stat">{{ profile.Range }}</td>
                <td class="stat">{{ profile.Str }}</td>
                <td class= "stat">{{ profile.AP }}</td>
                <td>{{ profile.Rules }}</td>
            </tr>
        {% endfor %}
        </tbody>
    </table>
    <hr>
</div>
{% endfor %}
