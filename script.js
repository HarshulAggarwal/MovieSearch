let input = document.querySelector(".input");
let searchData = document.querySelector(".search-data");
let wrapper = document.querySelector(".wrapper");
let form = document.querySelector(".search-bar");
let inputValue;

form.addEventListener("submit" ,(ev)=>{

    ev.preventDefault();
    console.log(input.value);
    inputValue = input.value;
    search();
    input.value="";
} )

async function search(){

    let url = `http://www.omdbapi.com/?s=${inputValue}&apikey=bc7de276`;
    let data = await fetch(url);
    let result= await data.json();
    console.log(result);
    show(result.Search);
}

function show(data){

    data.forEach(ele=>{
        let div = document.createElement("div");
        div.innerHTML=`<div class="col">
                <div class="card">
                <a class="card-media" href="./img-01.jpeg">
                    <img src="${ele.Poster}" alt="PUBG Mobile" width="100%" />
                </a>
                <div class="card-content">
                    <div class="card-cont-header">
                        <div class="cont-left">
                            <h3 style="font-weight: 600">${ele.Title}</h3>
                            <span style="color: #12efec">${ele.Year}</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>`;

        searchData.append(div);
    })

    
}
