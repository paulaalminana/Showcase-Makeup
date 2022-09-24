
let precioTotal = document.getElementById("precioTotal");
let precioFinal = 0;
precioTotal.innerHTML =`${precioFinal}€`;

let makeup = [
    {
        id:"basedior",
        precio: 43
    },
    {
        id:"basemac",
        precio: 39
    },
    {
        id:"prebasecharlot",
        precio: 45
    },
    {
        id:"estelauder",
        precio: 49
    },
    {
        id:"huda",
        precio: 42
    },
    {
        id:"glossierbase",
        precio: 26
    },
    {
        id:"giorgio",
        precio: 52
    },
    {
        id:"terryserum",
        precio: 89
    },
    {
        id:"serumdunk",
        precio: 70
    },
    {
        id:"serumordinary",
        precio: 11
    },
    {
        id:"biooil",
        precio: 6
    },
    {
        id:"cerave",
        precio: 12
    },
    {
        id:"laneig",
        precio: 25
    },
    {
        id:"contornokiels",
        precio: 31
    },
    {
        id:"laura",
        precio: 43
    },
    {
        id:"ordinary2",
        precio: 7
    },
    {
        id:"creamvichy",
        precio: 38
    },
    {
        id:"cremaole",
        precio: 38
    },
    {
        id:"fenty",
        precio: 31
    },
    {
        id:"rare",
        precio: 23
    },
    {
        id:"lauramercie",
        precio: 41
    },
    {
        id:"narscolorete",
        precio: 35
    },
    {
   
        id:"correctortarte",
        precio: 30
    },
    {
        id:"itcosmetic",
        precio: 40
    },
    {
        id:"chanel",
        precio: 46
    },
    {
        id:"nars",
        precio: 35
    },
    {
        id:"benefit",
        precio: 37
    },
    {
        id:"touch",
        precio: 39
    },
    {
        id:"ctil",
        precio: 37
    },
    {
        id:"glosiercolorete",
        precio: 20
    },
    {
        id:"diorlabial",
        precio: 40
    },
    {
        id:"hourglass",
        precio: 40
    },
    {
        id:"labialmac",
        precio: 23
    },
    {
        id:"glosierbalm",
        precio: 37
    },
    {
        id:"ctlabial",
        precio: 22
    },
    {
        id:"tooface",
        precio: 30
    },
    {
        id:"buxon",
        precio: 19
    },
    {
        id:"clarins",
        precio: 21
    },
    {
        id:"fresh",
        precio: 22
    },
    {
        id:"dyson",
        precio: 500
    },
    {
        id:"dysonrizador",
        precio: 500
    },
    {
        id:"hairvitamins",
        precio: 37
    },
    {
        id:"dysonsecador",
        precio: 400
    },
    {
        id:"hairvitamins",
        precio: 31
    },
    {
        id:"rizador",
        precio: 25
    },
    {
        id:"brocha",
        precio: 51
    },
    {
        id:"uñasdior",
        precio: 30
    },
    {
        id:"spray",
        precio: 25
    },
    {
        id:"urban",
        precio: 34
    },
    {
        id:"maskcaudalie",
        precio: 23
    }
]


const drag = (ev) => {
    ev.dataTransfer.setData("text",ev.target.id);

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
    precioTotal.innerHTML =  `${precioFinal}€`;

}