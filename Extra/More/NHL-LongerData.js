var nhl_names = ['Louis','Kovalchuk','Sakic','Naslund','Hossa'];
var nhl_teams = ['Tampa Bay','Atlanta','Colorado','Van Couver','Ottawa'];
var nhl_goals = [38,41,33,35,36];
var nhl_assists = [56,46,54,49,46];

function calculateTotals(thegoals, theassists) {
   return thegoals + theassists;
}

function writeTable() {
   for (var i = nhl_names.length-1; i > -1; i--) {
      document.write("<tr><td>" + nhl_names[i] + "</td>");
      document.write("<td>" + nhl_teams[i] + "</td>");
      document.write("<td>" + nhl_goals[i] + "</td>");
      document.write("<td>" + nhl_assists[i] + "</td>");
      var theTotal = calculateTotals(nhl_goals[i], nhl_assists[i]);
      document.write("<td>" + theTotal.toFixed(2) + "</td>");
      document.write("</tr>\r\n");
   }
}