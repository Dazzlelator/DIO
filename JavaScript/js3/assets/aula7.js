//assincronicidade e apis
const URL_BASE = 'https://thatcopy.pw/catapi/rest/';


let btn = document.getElementById('btn-gato');



const getCats = async () => {
    try{
        let data = await fetch(URL_BASE);
        let json = await data.json();
        console.log(json.webpurl)
        return json.webpurl;
    }
    catch(e){
        console.log(e.messege);
    }
};

const loadImg = async () => {
    let img = document.getElementById('gato');
    img.src = await getCats();
}

btn.addEventListener('click', loadImg());

loadImg();