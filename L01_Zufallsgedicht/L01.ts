
namespace gedicht {
    let s: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let p: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let o: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    console.log(s, p, o);


    for (let index: number = 6; index >= 1; index--) {
        let letzterSatz: string = getVerse(s, p, o);
        console.log(letzterSatz);

    }


    function getVerse(_s: string[], _p: string[], _o: string[]): string {
        let randoms: number = Math.floor(Math.random());
        let randomp: number = Math.floor(Math.random());
        let randomo: number = Math.floor(Math.random());

        let verse: string = _s[randoms] + " " + _p[randomp] + " " + _o[randomo] + " .";

        _s.splice(randoms, 1);
        _p.splice(randomp, 1);
        _o.splice(randomo, 1);

        return verse;
    }



}
