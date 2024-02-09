// const API_KEY = "499d03534f224e8890dcd1f95376001c"
// const url = "https://newsapi.org/v2/everything?q="
const url = "https://newsdata.io/api/1/news?country=vi&category=business&apikey=pub_3789355224b269b89813a1dfbef3158a2e003"


async function fetchData(query){
    const res = await fetch(url)
    const data = await res.json()
    console.log("data :>>>",data);
    return data
}
fetchData("all").then(data => renderMain(data.results))

//menu btn
let mobilemenu = document.querySelector(".mobile")
let menuBtn = document.querySelector(".menuBtn")
let menuBtnDisplay = true;

menuBtn.addEventListener("click",()=>{
    mobilemenu.classList.toggle("hidden")
})


//render news 
function renderMain(arr){
    let mainHTML = ''
    for(let i = 0 ; i < arr.length ;i++){
        if(arr[i].image_url){
        mainHTML += ` <div class="card">
                        <a href=${arr[i].link}>
                        <img src=${arr[i].image_url} lazy="loading" />
                        <h4>${arr[i].title}</h4>
                       <!--- <div class="publishDate">
                            <p>${arr[i].sentiment_status}</p>
                            <span>•</span>
                            <p>${new Date(arr[i].publishedAt).toLocaleDateString()}</p>
                        </div>
                        <div class="desc">
                           ${arr[i].description}
                        </div>-->
                        
                        </a>
                     </div>
        `
        }
    }

    document.querySelector("main").innerHTML = mainHTML
}


const searchBtn = document.getElementById("searchForm")
const searchBtnMobile = document.getElementById("searchFormMobile")
const searchInputMobile = document.getElementById("searchInputMobile") 
const searchInput = document.getElementById("searchInput")

searchBtn.addEventListener("submit",async(e)=>{
    e.preventDefault()
    console.log(searchInput.value)

    const data = await fetchData(searchInput.value)
    renderMain(data.articles)

})
searchBtnMobile.addEventListener("submit",async(e)=>{
    e.preventDefault()
    const data = await fetchData(searchInputMobile.value)
    renderMain(data.articles)
})


async function Search(query){
    const data = await fetchData(query)
    renderMain(data.articles)
}



