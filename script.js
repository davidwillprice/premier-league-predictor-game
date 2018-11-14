//Started 10am 30/9/2018

var mcfc = {fName : 'Manchester City', short : 'mcfc'};
var liv = {fName : 'Liverpool', short : 'liv'};
var che = {fName : 'Chelsea', short : 'che'};
var tot = {fName : 'Tottenham Hotspur', short : 'tot'};
var ars = {fName : 'Arsenal', short : 'ars'};
var wat = {fName : 'Watford', short : 'wat'};
var lei = {fName : 'Leicester', short : 'lei'};
var wol = {fName : 'Wolverhampton', short : 'wol'};
var bou = {fName : 'Bournemouth', short : 'bou'};
var mufc = {fName : 'Manchester United', short : 'mufc'};
var eve = {fName : 'Everton', short : 'eve'};
var cry = {fName : 'Crystal Palace', short : 'cry'};
var whu = {fName : 'West Ham United', short : 'whu'};
var bri = {fName : 'Brighton', short : 'bri'};
var sou = {fName : 'Southampton', short : 'sou'};
var ful = {fName : 'Fulham', short : 'ful'};
var bur = {fName : 'Burnley', short : 'bur'};
var nufc = {fName : 'Newcastle', short : 'nufc'};
var car = {fName : 'Cardiff', short : 'car'};
var hud = {fName : 'Huddersfield', short : 'hud'};

var current = {
    name : 'current',
    table: [mcfc, liv, che, tot, ars, bou, wat, mufc, eve, lei, wol, bri, whu, nufc, bur, cry, sou, car, hud, ful]
};

var david = {
    name : 'david',
    table: [mcfc, liv, mufc, tot, che, ars, eve, lei, bur, whu, wol, cry, bou, bri, ful, nufc, sou, wat, hud, car]
};

var jack = {
    name : 'jack',
    table: [mcfc, mufc, liv, tot, che, ars, eve, lei, bur, nufc, sou, wol, bou, ful, cry, wat, whu, bri, hud, car]
};

function createTablehtml(name, table){ 
    var endNewHTML, endHtml;
    var totalDiff = 0;
    for (var i = 0; i < table.length; i++) {
        var html, newHTML, actualPos, posDiff, diffCol, conHTML, newConHTML;
        
        //Create container div for each team
        conHTML = '<div id="%name%%order%" class="team-container"></div>';
        newConHTML = conHTML.replace(/%name%/g, name);
        newConHTML = newConHTML.replace(/%order%/gi, (i + 1));
        document.getElementById(name + '-container').insertAdjacentHTML('beforeend', newConHTML);
        
        //Calculating position difference between predicted and current table
        actualPos = current.table.indexOf(table[i]);
        posDiff = Math.abs(i - actualPos);
        totalDiff = posDiff + totalDiff;
        
        //Assigning CSS to points based on size
        if (posDiff > 0 && posDiff <= 3) {
            diffCol = 'score03';
        } else if (posDiff == 0) {
            diffCol = 'score0';
        } else if (posDiff > 3 && posDiff <= 6) {
            diffCol = 'score36';
        } else if (posDiff > 6 && posDiff <= 9) {
            diffCol = 'score69';
        } else {
            diffCol = 'score912';
        }
        
        //HTML for each team block
        html = '<div class="team-block %teamname%"><div class="position">%order%</div><div class="divider"></div><div class="team-name"><span class="full-team">%teamfname%</span><span class="hide short-team">%teamsname%</span></div></div><div class="team-score %diffcol%">%posdiff%</div>';
        newHTML = html.replace(/%order%/gi, (i + 1));
        newHTML = newHTML.replace('%teamname%', table[i].short);
        newHTML = newHTML.replace('%teamfname%', table[i].fName);
        newHTML = newHTML.replace('%posdiff%', posDiff);
        newHTML = newHTML.replace('%teamsname%', table[i].short);
        newHTML = newHTML.replace('%diffcol%', diffCol);
        document.getElementById(name + (i + 1)).insertAdjacentHTML('beforeend', newHTML);
    }
    
    //Total score section
    endHtml = '<p class="totalscore" id="%name%-score"><span class="cap">%name%\'s</span> score is %totaldiff%</p>';
    endNewHTML = endHtml.replace(/%name%/g, name);
    endNewHTML = endNewHTML.replace('%totaldiff%', totalDiff);
    document.getElementById(name + '-container').insertAdjacentHTML('beforeend', endNewHTML);
}

createTablehtml(current.name, current.table);
createTablehtml(david.name, david.table);
createTablehtml(jack.name, jack.table);
