const board = document.getElementById("puzzle");

const previewBtn = document.getElementById("previewBtn");
const previewModal = document.getElementById("previewModal");
const closeModal = document.getElementById("closeModal");

const skipBtn = document.getElementById("skipBtn");


const SIZE = 2;

let tiles = [0,1,2,3];

let empty = 3;

let tileElements = [];

let isAnimating = false;



/* ===========================
   Membuat Puzzle
=========================== */

function createPuzzle(){

    board.innerHTML="";

    tileElements=[];


    tiles.forEach((value,index)=>{


        const tile=document.createElement("div");


        tile.className="tile";


        tile.dataset.index=index;

        tile.dataset.value=value;



        setImage(tile,value);



        if(value===3){

            tile.classList.add("empty");

            tile.style.backgroundImage="none";

        }



        setPosition(tile,index);



        tile.addEventListener("click",moveTile);



        board.appendChild(tile);


        tileElements.push(tile);


    });


}



/* ===========================
   Set gambar
=========================== */

function setImage(tile,value){


    const row=Math.floor(value/SIZE);

    const col=value%SIZE;



    tile.style.backgroundImage=
    "url('assets/1.png')";


    tile.style.backgroundSize=
    "200% 200%";


    tile.style.backgroundPosition=
    `${col*100}% ${row*100}%`;



}



/* ===========================
   Posisi tile
=========================== */

function setPosition(tile,index){


    const row=Math.floor(index/SIZE);

    const col=index%SIZE;


    tile.style.transform=
    `translate(${col*100}%,${row*100}%)`;


}



/* ===========================
   Klik Tile
=========================== */

function moveTile(){


    if(isAnimating)return;


    const index=
    Number(this.dataset.index);



    const neighbours=
    getNeighbours(empty);



    if(neighbours.includes(index)){


        swap(index,empty);



        empty=index;



        updateTiles();



        checkWin();


    }


}



/* ===========================
   Update posisi
=========================== */

function updateTiles(){


    tiles.forEach((value,index)=>{


        const tile=tileElements[index];


        tile.dataset.value=value;



        if(value===3){


            tile.classList.add("empty");


            tile.style.backgroundImage="none";


        }
        else{


            tile.classList.remove("empty");


            setImage(tile,value);


        }



        setPosition(tile,index);



    });


}



/* ===========================
   Tukar
=========================== */

function swap(a,b){


    [
        tiles[a],
        tiles[b]

    ]=

    [
        tiles[b],
        tiles[a]

    ];


}



/* ===========================
   Tetangga
=========================== */

function getNeighbours(index){


    const row=
    Math.floor(index/SIZE);


    const col=
    index%SIZE;



    let arr=[];


    if(row>0)
        arr.push(index-SIZE);



    if(row<SIZE-1)
        arr.push(index+SIZE);



    if(col>0)
        arr.push(index-1);



    if(col<SIZE-1)
        arr.push(index+1);



    return arr;


}



/* ===========================
   Cek menang
=========================== */

function checkWin(){


    const win=
    tiles.every((v,i)=>v===i);



    if(win){

        finishPuzzle();

    }


}



/* ===========================
   Puzzle selesai
=========================== */

function finishPuzzle(){


    if(isAnimating)return;


    isAnimating=true;


    board.style.pointerEvents="none";



    setTimeout(()=>{


        tiles=[0,1,2,3];

        empty=3;



        updateTiles();



        /*
            tampilkan 4 potongan
            dengan fade masuk
        */


        tileElements.forEach(tile=>{


            tile.classList.remove("empty");


            setImage(
                tile,
                Number(tile.dataset.value)
            );



            tile.style.opacity="0";


        });



        tileElements.forEach((tile,index)=>{


            setTimeout(()=>{


                tile.style.transition=
                "opacity .8s ease";


                tile.style.opacity="1";



            },index*200);



        });



    },500);



    /*
       bloom tetap jalan
    */

    setTimeout(()=>{


        bloomAnimation();


    },4500);



}



/* ===========================
   Skip
=========================== */

skipBtn.onclick=()=>{


    finishPuzzle();


};




/* ===========================
   Bloom Animation
=========================== */

function bloomAnimation(){


    document.body.style.overflow="hidden";

    document.documentElement.style.overflow="hidden";



    const overlay=document.createElement("div");


    overlay.className="flower-overlay";


    document.body.appendChild(overlay);



    const flowers=[

        "assets/1.png",

        "assets/3.png",

        "assets/4.png",

        "assets/5.png"

    ];



    let cols;
    let rows;



    /* ===========================
       RESPONSIVE JUMLAH BUNGA
    =========================== */


    if(window.innerWidth <= 600){

        cols = 12;

        rows = 9;


    }else{

        cols = 7;

        rows = 5;

    }



    const cellW =
    window.innerWidth / cols;


    const cellH =
    window.innerHeight / rows;



    let delay = 0;



    for(let y=0;y<rows;y++){


        for(let x=0;x<cols;x++){


            const img =
            document.createElement("img");



            img.src =
            flowers[
                Math.floor(
                    Math.random()*flowers.length
                )
            ];



            img.className="flower";



            let posX =
            x * cellW + cellW/2;


            let posY =
            y * cellH + cellH/2;



            /*
                posisi random
                supaya natural
            */


            posX +=
            (Math.random()-.5)*90;


            posY +=
            (Math.random()-.5)*90;



            img.style.left =
            posX+"px";


            img.style.top =
            posY+"px";



            /*
                UKURAN BUNGA
            */


            if(window.innerWidth <= 600){


                img.style.width =

                (
                    cellW *
                    (
                        3 +
                        Math.random()*1.5
                    )

                )
                +"px";



            }else{


                img.style.width =

                (
                    cellW *
                    (
                        1.3 +
                        Math.random()*.6
                    )

                )
                +"px";


            }



            /*
                ROTASI RANDOM
            */


            img.style.setProperty(

                "--rotate",

                (-30 + Math.random()*60)

                +"deg"

            );



            /*
                DELAY MUNCUL
            */


            img.style.animationDelay =

            delay+"s";



            delay += 0.03;



            overlay.appendChild(img);


        }

    }



    setTimeout(()=>{


        window.location.href="rotasi.html";


    },5000);


}





/* ===========================
   Preview
=========================== */

previewBtn.onclick=()=>{


    previewModal.classList.add("active");


};



closeModal.onclick=()=>{


    previewModal.classList.remove("active");


};



previewModal.onclick=(e)=>{


    if(e.target===previewModal){


        previewModal.classList.remove("active");


    }


};




/* ===========================
   Shuffle
=========================== */

function shuffle(times=100){


    for(let i=0;i<times;i++){


        const neighbours=
        getNeighbours(empty);



        const random=
        neighbours[
            Math.floor(
                Math.random()*neighbours.length
            )
        ];



        swap(random,empty);


        empty=random;


    }


}




/* ===========================
   Start
=========================== */

shuffle();

createPuzzle();