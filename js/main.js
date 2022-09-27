
let precioTotal = document.getElementById("precioTotal");
let precioFinal = 0;
precioTotal.innerHTML = `${precioFinal}€`;

let makeup = [
    {
        id: "basedior",
        precio: 43
    },
    {
        id: "basemac",
        precio: 39
    },
    {
        id: "prebasecharlot",
        precio: 45
    },
    {
        id: "estelauder",
        precio: 49
    },
    {
        id: "huda",
        precio: 42
    },
    {
        id: "hudalabial",
        precio: 27
    },
    {
        id: "glossierbase",
        precio: 26
    },
    {
        id: "giorgio",
        precio: 52
    },
    {
        id: "terryserum",
        precio: 89
    },
    {
        id: "serumdunk",
        precio: 70
    },
    {
        id: "serumordinary",
        precio: 11
    },
    {
        id: "biooil",
        precio: 6
    },
    {
        id: "cerave",
        precio: 12
    },
    {
        id: "laneig",
        precio: 25
    },
    {
        id: "contornokiels",
        precio: 31
    },
    {
        id: "laura",
        precio: 43
    },
    {
        id: "ordinary2",
        precio: 7
    },
    {
        id: "creamvichy",
        precio: 38
    },
    {
        id: "cremaole",
        precio: 38
    },
    {
        id: "fenty",
        precio: 31
    },
    {
        id: "rare",
        precio: 23
    },
    {
        id: "lauramercie",
        precio: 41
    },
    {
        id: "narscolorete",
        precio: 35
    },
    {

        id: "correctortarte",
        precio: 30
    },
    {
        id: "itcosmetic",
        precio: 40
    },
    {
        id: "chanel",
        precio: 46
    },
    {
        id: "nars",
        precio: 35
    },
    {
        id: "benefit",
        precio: 37
    },
    {
        id: "touch",
        precio: 39
    },
    {
        id: "ctil",
        precio: 37
    },
    {
        id: "glosiercolorete",
        precio: 20
    },
    {
        id: "diorlabial",
        precio: 40
    },
    {
        id: "hourglass",
        precio: 40
    },
    {
        id: "labialmac",
        precio: 23
    },
    {
        id: "glosierbalm",
        precio: 37
    },
    {
        id: "ctlabial",
        precio: 36
    },
    {
        id: "tooface",
        precio: 30
    },
    {
        id: "buxon",
        precio: 19
    },
    {
        id: "clarins",
        precio: 21
    },
    {
        id: "fresh",
        precio: 22
    },
    {
        id: "dyson",
        precio: 500
    },
    {
        id: "dysonrizador",
        precio: 500
    },
    {
        id: "dysonsecador",
        precio: 400
    },
    {
        id: "hairvitamins",
        precio: 31
    },
    {
        id: "rizador",
        precio: 25
    },
    {
        id: "brocha",
        precio: 51
    },
    {
        id: "uñasdior",
        precio: 30
    },
    {
        id: "spray",
        precio: 25
    },
    {
        id: "urban",
        precio: 34
    },
    {
        id: "maskcaudalie",
        precio: 23
    }
]


const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);

};

const allowDrop = (ev) => {
    ev.preventDefault();

};

const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");


    let makeupNuevo = makeup.find(make => {
        return make.id == data

    });


    precioFinal += makeupNuevo.precio;
    precioTotal.innerHTML = `${precioFinal}€`;

}

function agregartxt1() {
    let text = document.createTextNode("Serum Dunk Elephant 70€");
    document.getElementById("cont1").appendChild(text);
}

function agregartxt2() {
     text = document.createTextNode("Serum Ordinary 11€");
    document.getElementById("cont2").appendChild(text);
}
function agregartxt3() {
     text = document.createTextNode("Crema bio-oil 6€");
    document.getElementById("cont3").appendChild(text);
}
function agregartxt4() {
     text = document.createTextNode("Gel limpiador cerave 12€");
    document.getElementById("cont4").appendChild(text);
}
function agregartxt5() {
     text = document.createTextNode("Mascarilla labial Laneig 25€");
    document.getElementById("cont5").appendChild(text);
}
function agregartxt6() {
     text = document.createTextNode("Contorno Kiehl's 31€");
    document.getElementById("cont6").appendChild(text);
}
function agregartxt7() {
     text = document.createTextNode("Laura Mercier 43€");
    document.getElementById("cont7").appendChild(text);
}
function agregartxt8() {
     text = document.createTextNode("Crema Ordinary 7€");
    document.getElementById("cont8").appendChild(text);
}
function agregartxt9() {
     text = document.createTextNode("Crema VICHY 38€");
    document.getElementById("cont9").appendChild(text);
}
function agregartxt10() {
     text = document.createTextNode("Crema Olehenriksen 38€");
    document.getElementById("cont10").appendChild(text);
}
function agregartxt12() {
     text = document.createTextNode("Base Mac 39€");
    document.getElementById("cont12").appendChild(text);
}
function agregartxt11() {
     text = document.createTextNode("Base Dior 43€");
    document.getElementById("cont11").appendChild(text);
}
function agregartxt13() {
     text = document.createTextNode("Prebase Charlotte Tilbury 45€");
    document.getElementById("cont13").appendChild(text);
}
function agregartxt14() {
     text = document.createTextNode("Base Este Lauder 49€");
    document.getElementById("cont14").appendChild(text);
}
function agregartxt15() {
     text = document.createTextNode("Base Gloseir 26€");
    document.getElementById("cont15").appendChild(text);
}
function agregartxt16() {
     text = document.createTextNode("Base Huda 42€");
    document.getElementById("cont16").appendChild(text);
}
function agregartxt17() {
     text = document.createTextNode("Base Giorgio 52€");
    document.getElementById("cont17").appendChild(text);
}
function agregartxt18() {
     text = document.createTextNode("Base Terry 89€");
    document.getElementById("cont18").appendChild(text);
}
function agregartxt19() {
     text = document.createTextNode("Corrector tarte 30€");
    document.getElementById("cont19").appendChild(text);
}
function agregartxt20() {
     text = document.createTextNode("CC Cream It Cosmetics 40€");
    document.getElementById("cont20").appendChild(text);
}
function agregartxt21() {
     text = document.createTextNode("Bronceador Fenty 31€");
    document.getElementById("cont21").appendChild(text);
}
function agregartxt22() {
     text = document.createTextNode("Colorete liquido Nars 35€");
    document.getElementById("cont22").appendChild(text);
}
function agregartxt23() {
     text = document.createTextNode("Polvos Translucidos Laura Mercie 41€");
    document.getElementById("cont23").appendChild(text);
}  
function agregartxt24() {
     text = document.createTextNode("Colorete liquido Rare Beauty 23€");
    document.getElementById("cont24").appendChild(text);
}  
function agregartxt25() {
     text = document.createTextNode("Bronceador Chanel Soleil Tan 43€");
    document.getElementById("cont25").appendChild(text);
}  
function agregartxt26() {
     text = document.createTextNode("Colorete Nars Orgasm 35€");
    document.getElementById("cont26").appendChild(text);
}  
function agregartxt27() {
     text = document.createTextNode("Colorete Glossier 20€");
    document.getElementById("cont27").appendChild(text);
}  
function agregartxt28() {
    text = document.createTextNode("Bronceador Hoola de Benefit  37€");
    document.getElementById("cont28").appendChild(text);
}
function agregartxt29() {
     text = document.createTextNode("Iluminador Touche éclat YSL 39€");
    document.getElementById("cont29").appendChild(text);
}  
function agregartxt30() {
     text = document.createTextNode("Iluminador Charlotte Tilbury 37€");
    document.getElementById("cont30").appendChild(text);
}  
function agregartxt31() {
    text = document.createTextNode("Dior Lip Glow 40€");
   document.getElementById("cont31").appendChild(text);
} 
function agregartxt32() {
    text = document.createTextNode("Barra de labios mate MAC 23€");
   document.getElementById("cont32").appendChild(text);
} 
function agregartxt33() {
    text = document.createTextNode("Barra de labios mate Huda Beauty 27€");
   document.getElementById("cont33").appendChild(text);
} 
function agregartxt34() {
    text = document.createTextNode("Barra De Labios Recargable Hourglass 40€");
   document.getElementById("cont34").appendChild(text);
} 
function agregartxt35() {
    text = document.createTextNode("Exfoliante Facial Whishful 37€");
   document.getElementById("cont35").appendChild(text);
} 
function agregartxt36() {
    text = document.createTextNode("Barra De Labios Mate Charlotte Tilbury 36€");
   document.getElementById("cont36").appendChild(text);
} 
function agregartxt37() {
    text = document.createTextNode("Gloss Labial Lip Injection Too Faced 30€");
   document.getElementById("cont37").appendChild(text);
} 
function agregartxt38() {
    text = document.createTextNode("Gloss labial Full-On Plumping Buxom 19€");
   document.getElementById("cont38").appendChild(text);
} 
function agregartxt39() {
    text = document.createTextNode("Embellecedor Labios Clarins 21€");
   document.getElementById("cont39").appendChild(text);
} 
function agregartxt40() {
    text = document.createTextNode("Bálsamo Labial Reparador Fresh 22€");
   document.getElementById("cont40").appendChild(text);
} 
function agregartxt41() {
    text = document.createTextNode("Plancha Dyson Corrale 500€");
   document.getElementById("cont41").appendChild(text);
} 
function agregartxt42() {
    text = document.createTextNode("Dyson Airwrap 500€");
   document.getElementById("cont42").appendChild(text);
} 
function agregartxt43() {
    text = document.createTextNode("Secador Dyson Supersonic 400€");
   document.getElementById("cont43").appendChild(text);
} 
function agregartxt44() {
    text = document.createTextNode("Vitaminas para el pelo 31€");
   document.getElementById("cont44").appendChild(text);
} 
function agregartxt45() {
    text = document.createTextNode("Rizador de pestañas 25€");
   document.getElementById("cont45").appendChild(text);
} 
function agregartxt46() {
    text = document.createTextNode("Brocha para fondo de maquillaje Hourglass 51€");
   document.getElementById("cont46").appendChild(text);
} 
function agregartxt47() {
    text = document.createTextNode("Dior Nail Glow 30€");
   document.getElementById("cont47").appendChild(text);
} 
function agregartxt48() {
    text = document.createTextNode("Champú Hidratante Moroccanoil 25€");
   document.getElementById("cont48").appendChild(text);
} 
function agregartxt49() {
    text = document.createTextNode("All Nighter espray fijador Urban Decay 34€");
   document.getElementById("cont49").appendChild(text);
} 
function agregartxt50() {
    text = document.createTextNode("Mascarilla Purificante Caudalíe 23€");
   document.getElementById("cont50").appendChild(text);
}           


    const ventana = () => {
        let flotante = document.createElement("div");
        flotante.style.cssText='position: absolute;top:20em;left:30em;border:8px solid #ff0000;padding:12px;width:160px;margin:12px 0 12px 0;float:left;width:160px;background-color: white;text-align:center;';                 
        let t = document.createTextNode("NO ESTÁ DISPONIBLE LA COMPRA EN ESTE MOMENTO");       
        flotante.appendChild(t);                                         
        document.getElementById("pagar").appendChild(flotante); 
        }

precios = document.getElementById("precioTotal");
    const vaciarCarro = () => {
        precioTotal = 0;
        precios.innerHTML = `${precioTotal}`;
    }

