---
layout: default
---

<label for="searchbox">Search</label>
<!--<input type="search" oninput="setTimeout(function(){liveSearch();},500);" id="searchbox" >-->
<input type="search" id="searchbox" >

{% assign sortedProfiles = site.data.closecombat | sort: 'Name' %}
<div class="card">
    <table style="width:100%">
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
        {% for profile in sortedProfiles %}
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
