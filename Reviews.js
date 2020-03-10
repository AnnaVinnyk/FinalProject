console.log("Привет, мир!");
console.log("Отзывы клиентов добавляются при загрузке с применением JSON!");
console.log("Ниже - строка JSON с данными.");
console.log(DATA);

function ClientsSay(begin, end, flag) {
    let iBegin = begin;
    let iEnd = end;
    for (let i = iBegin; i < iEnd; i++) {
        //создаёт пустой блок-карточку с отзывом клиента
        let div0 = document.createElement('div');
        div0.setAttribute('class', "blocks-item");
        document.getElementById('ClientReviews').appendChild(div0);
        let div00 = document.createElement('div');
        div0.appendChild(div00);
        //голубая полоса с именем клиента
        let div = document.createElement('div');
        div.setAttribute('class', "sub1-blocks-item");
        div.textContent = DATA[i].name;
        div00.appendChild(div);
        //создаёт пустое содержимое карточки
        let div1 = document.createElement('div');
        div1.setAttribute('class', "sub2-blocks-item");
        div00.appendChild(div1);
        //фото клиента
        let div2 = document.createElement('div');
        div2.setAttribute('class', "div-clients");
        div1.appendChild(div2);
        let img1 = document.createElement('img');
        img1.setAttribute('src', DATA[i].photos);
        img1.setAttribute('alt', DATA[i].name);
        img1.setAttribute('class', "clients");
        div2.appendChild(img1);
        //голубая надпись под фото
        let div3 = document.createElement('div');
        div3.setAttribute('class', "blue-on-white");
        div1.appendChild(div3);
        let div4 = document.createElement('div');
        div4.setAttribute('class', "organization");
        div4.textContent = DATA[i].company;
        div3.appendChild(div4);
        let div5 = document.createElement('div');
        div5.setAttribute('class', "profession");
        div5.textContent = DATA[i].position;
        div3.appendChild(div5);
        //отзыв клиента (здесь ещё надо доработать вставку нужного текста!!!)
        let div6 = document.createElement('div');
        div6.setAttribute('class', "review");
        div6.textContent = DATA[i].review;
        div1.appendChild(div6);
        //логотип компании
        let div7 = document.createElement('div');
        div7.setAttribute('class', "div-logos");
        div0.appendChild(div7);
        let img2 = document.createElement('img');
        img2.setAttribute('src', DATA[i].logos);
        img2.setAttribute('alt', DATA[i].company);
        img2.setAttribute('class', "logos");
        div7.appendChild(img2);
    }
    if (flag == 1) {
        document.getElementById('say').className = "unvisible";
    }
}
ClientsSay(0, 4, 0);


