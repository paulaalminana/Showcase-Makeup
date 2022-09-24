
let precioTotal = document.getElementById("precioTotal");
let precioFinal = 0;
precioTotal.innerHTML =`${precioFinal}€`;

let makeup = [
    {
        id:"basedior",
        precio: 40
    },
    {
        id:"basemac",
        precio: 35
    },
    {
        id:"prebasecharlot",
        precio: 45
    },
    {
        id:"estelauder",
        precio: 25
    },
    {
        id:"huda",
        precio: 27
    },
    {
        id:"giorgio",
        precio: 47
    },
    {
        id:"terryserum",
        precio: 37
    },
    {
        id:"base",
        precio: 37
    },

    {
        id:"serumdunk",
        precio: 37
    },
    {
        id:"serumordinary",
        precio: 37
    },
    {
        id:"biooil",
        precio: 37
    },
    {
        id:"cerave",
        precio: 37
    },
    {
        id:"laneig",
        precio: 37
    },
    {
        id:"contornokiels",
        precio: 37
    },
    {
        id:"laura",
        precio: 37
    },
    {
        id:"ordinary2",
        precio: 37
    },
    {
        id:"creamvichy",
        precio: 37
    },
    {
        id:"cremaole",
        precio: 37
    },
    {
        id:"fenty",
        precio: 37
    },
    {
        id:"rare",
        precio: 37
    },
    {
        id:"lauramercie",
        precio: 37
    },
    {
        id:"narscolorete",
        precio: 37
    },
    {
   
        id:"correctortarte",
        precio: 37
    },
    {
        id:"itcosmetic",
        precio: 37
    },
    {
        id:"lauramercie",
        precio: 37
    },
    {
        id:"rare",
        precio: 37
    },
    {
        id:"chanel",
        precio: 37
    },
    {
        id:"nars",
        precio: 37
    },
    {
        id:"benefit",
        precio: 37
    },
    {
        id:"touch",
        precio: 37
    },
    {
        id:"ctil",
        precio: 37
    },
    {
        id:"glosiercolorete",
        precio: 37
    },
    {
        id:"diorlabial",
        precio: 37
    },
    {
        id:"hourglass",
        precio: 37
    },
    {
        id:"glosierbalm",
        precio: 37
    },
    {
        id:"ctlabial",
        precio: 37
    },
    {
        id:"tooface",
        precio: 37
    },
    {
        id:"buxon",
        precio: 37
    },
    {
        id:"clarins",
        precio: 37
    },
    {
        id:"fresh",
        precio: 37
    },
    {
        id:"dyson",
        precio: 37
    },
    {
        id:"dysonrizador",
        precio: 37
    },
    {
        id:"hairvitamins",
        precio: 37
    },
    {
        id:"dysonsecador",
        precio: 37
    },
    {
        id:"hairvitamins",
        precio: 37
    },
    {
        id:"rizador",
        precio: 37
    },
    {
        id:"brocha",
        precio: 37
    },
    {
        id:"uñasdior",
        precio: 37
    },
    {
        id:"spray",
        precio: 37
    },
    {
        id:"urban",
        precio: 37
    },
    {
        id:"maskcaudalie",
        precio: 37
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