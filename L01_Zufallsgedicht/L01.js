
var gedicht;
(function (gedicht) {
    let s = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let p = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let o = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    console.log(s, p, o);
    
    for (let index = 6; index >= 1; index--) {
        let letzterSatz = getVerse(s, p, o);
        console.log(letzterSatz);
    }
    function getVerse(_s, _p, _o) {
        let randoms = Math.floor(Math.random());
        let randomp = Math.floor(Math.random());
        let randomo = Math.floor(Math.random());
        let verse = _s[randoms] + " " + _p[randomp] + " " + _o[randomo] + " .";
        _s.splice(randoms, 1);
        _p.splice(randomp, 1);
        _o.splice(randomo, 1);
        return verse;
    }
})(gedicht || (gedicht = {}));
//# sourceMappingURL=L01.js.map