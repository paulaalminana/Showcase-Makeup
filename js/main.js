
let precioTotal = document.getElementById("precioTotal");
let precioFinal = 0;
precioTotal.innerHTML =`${precioFinal}`;

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
        id:"cremaole",
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
    precioTotal.innerHTML =  `${precioFinal} `;

}