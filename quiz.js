// points
var playerpoints = 0;

// quiz answers

var question1 = true;
var question2 = true;
var question3 = false;
var question4 = true;
var question5 = true;

// responses if true
var question1T = "De samenwerking met Simac betreft voorlopig alleen de computers en de daaraan gekoppelde touchscreens. Alle andere IT-systemen zoals het netwerk en de kassasystemen regelen de franchisenemers van Auping zelf.";
var question2T = "De offerteaanvraag is verstuurd naar een aantal IT-dienstverleners, die zelf één van de voorgestelde technologiepartners hebben ingeschakeld. De keuze van HEMA viel uiteindelijk op Simac met Cisco als technologiepartner. ";
var question3T = "Dit is een concept dat gerealiseerd was door ‘Oldebijvank’ voor Simac’s 50 jarige bestaan.";
var question4T = "Simac was bereid om mee te denken in het groeimodel.";
var question5T = "Ruim anderhalf jaar geleden hebben Jumbo en Simac samen de eerste stappen op het XLA-pad gezet.";

// responses if false
var question1F = "Simac verzorgt de installatie, het onderhoud en het beheer van deze schermen.";
var question2F = "Simac levert samen met Cisco het netwerk in de vorm van een dienst: Network-as-a-Service.";
var question3F = "Dit is een concept die gerealiseert is door ‘Oldebijvank’ en niet Simac, maar dit was wel voor Simac";
var question4F = "Het contact met Simac kwam tot stand via een investeerder in Wundermart. Het klikte goed tussen de scale-up en de IT-dienstverlener";
var question5F = "Dit was in samenwerking met Simac";


// ---- button responses

// question 1
$('#true1').click(function(){

    if (question1 == true) {
        alert("Correct! | "+ question1T)
        playerpoints ++;
    }
    else (
        alert("Helaas fout! | "+ question1F)
    )

    $('#quiz1').css("display","none");

    console.log(playerpoints);
});
$('#false1').click(function(){

    if (question1 == false) {
        alert("Correct! | "+ question1T)
        playerpoints ++;
    }
    else (
        alert("Helaas fout! | "+ question1F)
    )
    $('#quiz1').css("display","none");

    console.log(playerpoints);
});


// question 2
$('#true2').click(function(){

    if (question2 == true) {
        alert("Correct! | "+ question2T)
        playerpoints ++;
    }
    else (
        alert("Helaas fout! | "+ question2F)
    )

    $('#quiz2').css("display","none");

    console.log(playerpoints);
});
$('#false2').click(function(){

    if (question2 == false) {
        alert("Correct! | "+ question2T)
        playerpoints ++;
    }
    else (
        alert("Helaas fout! | "+ question2F)
    )
    $('#quiz2').css("display","none");

    console.log(playerpoints);
});


// question 3
$('#true3').click(function(){

    if (question3 == true) {
        alert("Correct! | "+ question3T)
        playerpoints ++;
    }
    else (
        alert("Helaas fout! | "+ question3F)
    )

    $('#quiz3').css("display","none");

    console.log(playerpoints);
});
$('#false3').click(function(){

    if (question3 == false) {
        alert("Correct! | "+ question3T)
        playerpoints ++;
    }
    else (
        alert("Helaas fout! | "+ question3F)
    )
    $('#quiz3').css("display","none");

    console.log(playerpoints);
});


// question 4
$('#true4').click(function(){

    if (question4 == true) {
        alert("Correct! | "+ question4T)
        playerpoints ++;
    }
    else (
        alert("Helaas fout! | "+ question4F)
    )

    $('#quiz4').css("display","none");

    console.log(playerpoints);
});
$('#false4').click(function(){

    if (question4 == false) {
        alert("Correct! | "+ question4T)
        playerpoints ++;
    }
    else (
        alert("Helaas fout! | "+ question4F)
    )
    $('#quiz4').css("display","none");

    console.log(playerpoints);
});


// Question 5
$('#true5').click(function(){

    if (question5 == true) {
        alert("Correct! | "+ question5T)
        playerpoints ++;
    }
    else (
        alert("Helaas fout! | "+ question5F)
    )

    console.log(playerpoints);
    alert("Je bent klaar. Je totale score is "+playerpoints);
    location.reload();
});
$('#false5').click(function(){

    if (question5 == false) {
        alert("Correct! | "+ question5T)
        playerpoints ++;
    }
    else (
        alert("Helaas fout! | "+ question5F)
    )

    console.log(playerpoints);
    alert("Je bent klaar. Je totale score is "+playerpoints);
    location.reload();
});