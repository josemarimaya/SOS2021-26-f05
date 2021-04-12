
var air_routes_info_html = `<!DOCTYPE html>
<html>
<head>
<style>
table, th, td {
border: 1px solid black;
}
</style>
</head>
<body>

<h3> <a href=" https://www.fomento.gob.es/BE/?nivel=2&orden=03000000"> Enlace de referencia </a>
</h3>

<table>
<colgroup>
<col style="background-color:#blue">
</colgroup>
<tr>
<th>district</th>
<th>year</th>
<th>flight</th>
<th>passenger</th>
<th>total_good(kg)</th>
</tr>
<tr>
<td>Madrid</td>
<td>2020</td>
<td>158405</td>
<td>17071089</td>
<td>401133380</td>
</tr>
<tr>
<td>Cataluña</td>
<td>2017</td>
<td>320456</td>
<td>47262688</td>
<td>156105304</td>
</tr>

<tr>
<td>Andalucía</td>
<td>2020</td>
<td>78777</td>
<td>7441585</td>
<td>10561907</td>
</tr>

<tr>
<td>Andalucía</td>
<td>2019</td>
<td>194370</td>
<td>27332163</td>
<td>12971632</td>
</tr>

<tr>
<td>Madrid</td>
<td>2019</td>
<td>417958</td>
<td>61703370</td>
<td>558566726</td>
</tr>
</table>

</body>
</html>`;

exports.info_air_routes = air_routes_info_html;