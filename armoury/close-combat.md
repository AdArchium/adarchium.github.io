---
layout: default
---

<label for="searchbox">Search</label>
<!--<input type="search" oninput="setTimeout(function(){liveSearch();},500);" id="searchbox" >-->
<input type="search" id="searchbox" >

{% assign sortedProfiles = site.data.closecombat | sort: 'Type' %}
{% assign groupedProfiles = sortedProfiles | group_by: 'Type' %}
{% for type_group in groupedProfiles %}
<div class="card">
    <h3>{{ type_group.name }} Melee Weapons</h3>
    <table style="width:100%; margin: 0 auto;">
        <thead>
            <tr class="table_header">
                <th style="width:30%">Weapon Name</th>
                <!--<th>Range</th>-->
                <th style="width:10%">STR</th>
                <th style="width:10%">AP</th>
                <th>Special Rules</th>
            </tr>
        </thead>
        <tbody>
        {% assign sorted_rows = type_group.items | sort: 'Name' %}
        {% for profile in sorted_rows %}
            <tr class="searchable">
                <td>{{ profile.Name }}</td>
            <!--<td class="table_stat">{{ profile.Range }}</td>-->
                <td class="table_stat">{{ profile.Str }}</td>
                <td class= "table_stat">{{ profile.AP }}</td>
                <td>{{ profile.Rules }}</td>
            </tr>
        {% endfor %}
        </tbody>
    </table>
    <hr>
</div>
{% endfor %}
