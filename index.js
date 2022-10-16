const content = document.getElementById('content');
const recomendadas = document.getElementById('recomendadas');
const trendingpics = document.getElementById('trendingpics');


    let stragerThings = {
        banner: `./bannerBackgrounds/ST4BANNER.jpg>`,
        poster: `<img src="./icons/poster/posterST4.jpg">`,
        tittle: "Stranger Things",
        rating: 5,
        trailer: `https://youtu.be/HhesaQXLuRY`,
        descripcion: `"When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl. Watch all you want. This nostalgic nod to '80s sci-fi and horror classics has earned dozens of Emmy nominations, including three for Outstanding Drama."`,
        saved: true,
        pg: 14
    };

    let BetterCallSaul = {
        banner: `./bannerBackgrounds/bannerBettercall.jpg`,
        poster: `<img src="./icons/poster/posterBetterCall.jpg">`,
        tittle: "Better Call Saul",
        rating: 5,
        trailer: `https://youtu.be/HN4oydykJFc`,
        descripcion: "Better Call Saul follows the transformation of Jimmy McGill (Bob Odenkirk), a former con artist who is trying to become a respectable lawyer, into the personality of the flamboyant criminal lawyer Saul Goodman",
        saved: true,
        pg: 16,
        id: `betterCall`
    };

    let lucifer = {
        banner: `./bannerBackgrounds/Rickymorty.jpg`,
        poster: `<img src="./icons/poster/rick-morty-portal-i40514.jpg">`,
        tittle: "Rick and Morty",
        rating: 4,
        trailer: `https://youtu.be/dQw4w9WgXcQ`,
        descripcion: "Rick and Morty is the Emmy award-winning half-hour animated hit comedy series on Adult Swim that follows a sociopathic genius scientist who drags his inherently timid grandson on insanely dangerous adventures across the universe.",
        saved: true,
        pg: 18
    };

    let BojackHorseman = {
        banner: `./bannerBackgrounds/Bojack-Horseman-Banner.jpg`,
        poster: `<img src="./icons/poster/posterBojack.jpg">`,
        tittle: "Bojack Horseman",
        rating: 5,
        trailer: `https://youtu.be/i1eJMig5Ik4`,
        descripcion: "A Netflix original about a former sitcom star attempting a comeback while also dealing with addiction and depression, BoJack Horseman followed an anthropomorphic horse who continually tried to dull the pain of his previous bad behavior with something worse.",
        saved: true,
        pg: 18
    };

    let TheWalkingDead = {
        banner: `./bannerBackgrounds/TWD.jpg`,
        poster: `<img src="./icons/poster/posterTWD.jpg">`,
        tittle: "The Walking Dead",
        rating: 4,
        trailer: `https://youtu.be/sfAc2U20uyg`,
        descripcion: "The Walking Dead tells the story of the months and years that follow after a zombie apocalypse. It follows a group of survivors, led by former police officer Rick Grimes, who travel in search of a safe and secure home.",
        saved: false,
        pg: 18
    };

    let QueensGambit = {
        banner: `./bannerBackgrounds/QueenGambit.jpg`,
        poster: `<img src="./icons/poster/posterQueenGambit.jpg">`,
        tittle: "Queen's Gambit",
        rating: 0,
        trailer:`https://youtu.be/oZn3qSgmLqI`,
        descripcion: "In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction. Watch all you want. Won 11 Emmy Awards, including Outstanding Limited Series, plus Golden Globes for Best Limited Series and Best Actress.",
        saved: false,
        pg: 12
    };

    let GameofThrones = {
        banner: `./bannerBackgrounds/GOT.jpg`,
        poster: `<img src="./icons/poster/posterGOT.jpg">`,
        tittle: "Game of Thrones",
        rating: 5,
        trailer:`https://youtu.be/KPLWWIOCOOQ`,
        descripcion: "In the Game of Thrones, you either win or you die. In the mythical continent of Westeros, nine families of higher nobility (Targaryen, Lannisters, Starks, Tyrell, Martell, Greyjoys, Baratheons and Boltons) scramble bitterly to gain power over the seven kingdoms and the Iron throne.",
        saved: true,
        pg: 18
    };

    let BigMouth = {
        banner: `./bannerBackgrounds/Bigmouth.jpg`,
        poster: `<img src="./icons/poster/posterBigMouth_.jpg">`,
        tittle: "Big Mouth",
        rating: 4,
        trailer:`https://youtu.be/LDM_n5dav1g`,
        descripcion: "Big Mouth is an American adult animated coming-of-age sitcom created by Andrew Goldberg, Nick Kroll, Mark Levin, and Jennifer Flackett provided by Netflix. The series centers on teens based on Kroll and Goldberg's upbringing in suburban New York, with Kroll voicing his fictional younger self.",
        saved: false,
        pg: 16
    };

    let HowtoTrainyourDragon = {
        banner: `./bannerBackgrounds/HTTYDr.jpg`,
        poster: `<img src="./icons/poster/posterHowtoTrain.jpg">`,
        tittle: "How to Train your Dragon",
        rating: 5,
        trailer:`https://youtu.be/oKiYuIsPxYk`,
        descripcion: "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed. Long ago up North on the Island of Berk, the young Viking, Hiccup, wants to join his town's fight against the dragons that continually raid their town.",
        saved: true,
        pg: 3
    };

    let Sherk = {
        banner: `./bannerBackgrounds/Sherkbanner.jpg`,
        poster: `<img src="./icons/poster/posterSherk.jpg">`,
        tittle: "Sherk",
        rating: 5,
        trailer:`https://youtu.be/W37DlG1i61s`,
        descripcion: "Shrek, animated cartoon character, a towering, green ogre whose fearsome appearance belies a kind heart. Shrek is the star of a highly successful series of animated films. At the beginning of the 2001 film Shrek, the title character lives as a recluse in a remote swamp in the fairy-tale land of Duloc.",
        saved: true,
        pg: 3
    };

    let PasiondeGavilanes = {
        banner: `./bannerBackgrounds/PasiondeGavilanes.jpg`,
        poster: `<img class="psg" src="./icons/poster/posterPasiondeGavilanes.jpg">`,
        tittle: "Pasion de Gavilanes",
        rating: 5,
        trailer:`https://youtu.be/c0vVUkTQbw8`,
        descripcion: "Quien es ese hombre...que me mira y me desnuda,Una fiera inquieta, que me da mil vueltas Y me hace temblar, pero me hace sentir mujer",
        saved: false,
        pg: 13
    };

    let PabloEscobar = {
        banner: `./bannerBackgrounds/elPatron.jpg`,
        poster: `<img class="psg" src="./icons/poster/posterPabloEscobar.jpg">`,
        tittle: "Pablo Escobar",
        rating: 4,
        trailer:`https://youtu.be/Fq5lrpOWy04`,
        descripcion: "based on a true story about the life of Pablo Escobar – the notorious druglord. It is available only in Spanish. There is a version available with English subtitles, as well as a version dubbed in Hindi on the ZEE5 app. It also aired in Arabic dub on Lana TV. It is also available in Turkish on Netflix.",
        saved: false,
        pg: 16
    };

    let ProjectoX = {
        banner: `./bannerBackgrounds/ProjectX.jpg`,
        poster: `<img class="psg" src="./icons/poster/posterProjectoX.jpg">`,
        tittle: "Proyecto X",
        rating: 5,
        trailer:`https://youtu.be/HmrhuboNMtg`,
        descripcion: "Three seemingly-anonymous high-school seniors attempt to finally make a name for themselves. Their idea is innocent enough: let's throw a party that no one will forget, and have a camera there to document history in the making. But nothing could prepare them for this party.",
        saved: true,
        pg: 12
    };

    let Arcane = {
        banner: `./bannerBackgrounds/ArcaneBanner.jpg`,
        poster: `<img class="psg" src="./icons/poster/posterArcane.jpg">`,
        tittle: "Arcane",
        rating: 5,
        trailer:`https://youtu.be/xPKN7MxS8TU`,
        descripcion: "Amidst the escalating unrest between the rich, utopian city of Piltover and its seedy, oppressed underbelly of Zaun, sisters Vi and Jinx find themselves on opposing sides of a brewing conflict over clashing convictions and arcane technologies.",
        saved: true,
        pg: 12
    };

    let Sandman = {
        banner: `./bannerBackgrounds/SANDMAN.jpg`,
        poster: `<img class="psg" src="./icons/poster/posterSandman.jpg">`,
        tittle: "Sandman",
        rating: 4,
        trailer:`https://youtu.be/03hK9bC-1dU`,
        descripcion: "After years of imprisonment, Morpheus — the King of Dreams — embarks on a journey across worlds to find what was stolen from him and restore his power. Watch all you want. Neil Gaiman co-developed and executive produced this adaptation of his iconic comic series starring Tom Sturridge as Dream.",
        saved: false,
        pg: 12
    };

    let BreakingBad = {
        banner: `./bannerBackgrounds/BreakingBad.jpg`,
        poster: `<img class="psg" src="./icons/poster/posterBreakingBad.jpg">`,
        tittle: "Breaking Bad",
        rating: 5,
        trailer:`https://youtu.be/HhesaQXLuRY`,
        descripcion: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future. Walter H. White is a chemistry genius, but works as a chemistry teacher in an Albequerque, New Mexico high school.",
        saved: true,
        pg: 16
    };

    let UncutGems = {
        banner: `./bannerBackgrounds/uncut-gems.png`,
        poster: `<img class="psg" src="./icons/poster/posterUncutGems.jpg">`,
        tittle: "Uncut Gems",
        rating: 4,
        trailer:`https://youtu.be/vTfJp2Ts9X8`,
        descripcion: "The film tells the story of Howard Ratner (Sandler), a Jewish-American jeweler and gambling addict in New York City's Diamond District, who must retrieve an expensive gem he purchased in order to pay off his debts. Filming took place from September to November 2018. The original score was composed by Daniel Lopatin.",
        saved: false,
        pg: 12
    };

    let BarbieAventuraSirenas = {
        banner: `./bannerBackgrounds/uncut-gems.png`,
        poster: `<img class="psg" src="./icons/poster/posterBarbieSirena.jpg">`,
        tittle: "Barbie en una aventura de Sirenas",
        rating: 5,
        trailer:`https://youtu.be/UQe15je3m24`,
        descripcion: "Barbie stars as Merliah, a surfing champion from Malibu. One minute she's a normal teenager and the next she learns a shocking family secret: she's a mermaid! Merliah and her dolphin friend Zuma set off on an undersea adventure to rescue her mother, the queen of Oceana.",
        saved: false,
        pg: 4
    };

    let Totoro = {
        banner: `./bannerBackgrounds/totoro.jpg`,
        poster: `<img class="psg" src="./icons/poster/posterTotoro.jpg">`,
        tittle: "Mi vecino Totoro",
        rating: 5,
        trailer:`https://youtu.be/92a7Hj0ijLs`,
        descripcion: "which stars the voice actors Noriko Hidaka, Chika Sakamoto, and Hitoshi Takagi—tells the story of a professor's two young daughters (Satsuki and Mei) and their interactions with friendly wood spirits in postwar rural Japan.",
        saved: true,
        pg: 3
    };

    let Megamente = {
        banner: `./bannerBackgrounds/MegamindBanner.jpg`,
        poster: `<img class="psg" src="./icons/poster/posterMegamente.jpg">`,
        tittle: "Megamente",
        rating: 5,
        trailer:`https://youtu.be/ead9HCX9fe4`,
        descripcion: "The film tells the story of Megamind, a highly intelligent alien supervillain; after defeating his long-time nemesis Metro Man, Megamind creates a new hero to fight, but must act to save the city when his `creation` becomes an even worse villain than he was.",
        saved: false,
        pg: 4
    };

    function showRecommendCard(movie){
        let html = movie.poster;
        return(html)
    }

    function rating(movie){
        fill = "";
        empty = "";
        for(var i = 0; i<movie.rating; i++){
            fill += `<img src="icons/yellowstar.png">`
        }
        for(var i = 0; i<(5-movie.rating); i++){
            empty += `<img src="icons/yellowstar2.png">`
        }
    rate = fill  + empty;
    return(rate)
    }
    function addFavorite(movie){
        if(movie.saved == true){
           html = 
            `<img src="./icons/favoritesAlready.png">`
        }else{
           html =
            `<img src="./icons/Favorites.png">`
        }
        return(html)
    }

    let Recomendados = [stragerThings, BetterCallSaul, lucifer, BojackHorseman, TheWalkingDead, QueensGambit,GameofThrones,BigMouth, HowtoTrainyourDragon, Sherk];

    for(var i = 0; i < Recomendados.length; i++){
        recomendadas.innerHTML += `<div class="post1"  onclick="movieRecommed(${i})">` + showRecommendCard(Recomendados[i]) + `<span class="st4">` + rating(Recomendados[i]) + addFavorite(Recomendados[i]) + `</span></div>`;
         
    }

    let Trending = [PasiondeGavilanes, PabloEscobar, ProjectoX, Arcane, Sandman, BreakingBad, UncutGems, BarbieAventuraSirenas, Totoro, Megamente];

    for(var i = 0; i < Trending.length; i++){
        trendingpics.innerHTML += `<div class="post1" onclick="movieTrend(${i})" >` + showRecommendCard(Trending[i]) + `</div>`;
    }

        function showBanner(movie){
            let html = 
            `<img id="bannerBack" src=${movie.banner}>
            
            <h1>${movie.tittle}</h1>    
            <h3 class="h33">(${movie.rating} Rating)</h3>
                <p>${movie.descripcion}</p>
                <br>
                <div class="playfav">
                    <div>
                        <a href="${movie.trailer}">
                            <button>
                            <img src="icons/Play.png">
                            <h3>Play</h3>
                            </button>
                        </a>
                    </div>
                    <div>
                        <button>
                            <img src="icons/Favorites.png">
                            <h3>Save</h3>
                        </button>
                    </div>
                    <p>+${movie.pg}</p>
                </div>`
            return html
        }

        content.innerHTML += showBanner(BetterCallSaul);


        //ejemplo A
        function movieRecommed(post){
            console.log(post)
            const movie = Recomendados[post] 
            content.innerHTML = showBanner(movie);
            window.scrollTo(0,0)
            
        }

        function movieTrend(post){
            console.log(post)
            const movie = Trending[post] 
            content.innerHTML = showBanner(movie);
            window.scrollTo(0,0)
            
        }


        