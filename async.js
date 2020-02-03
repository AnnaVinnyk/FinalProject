console.log("Привет, мир!");
alert('Карточки появляются...');
//массив ссылок к фотографиям
let Photos = ['clients/client-001.jpg', 'clients/client-002.jpg', 'clients/client-003.jpg', 'clients/client-004.jpg', 'clients/client-005.jpg', 'clients/client-006.jpg', 'clients/client-007.jpg', 'clients/client-008.jpg'],
    Logos = ['logos/logo-001.jpg', 'logos/logo-002.jpg', 'logos/logo-003.jpg', 'logos/logo-004.jpg', 'logos/logo-005.jpg', 'logos/logo-006.jpg', 'logos/logo-007.jpg', 'logos/logo-008.jpg'],
    Names = ['Брэд Питт', 'Леонардо Ди Каприо', 'Бенедикт Камбербэтч', 'Роберт Джон Дауни', 'Крис Хемсворт', 'Том Круз', 'Дэниел Роутон Крейг', 'Кристофер Майкл Прэтт'],
    Caption01 = ['FERREXPO', 'МЕТІНВЕСТ', 'ДТЭК', 'ЧАО "Запорожтрансформатор"', 'ПРАО "Донецксталь"', 'АО "МОТОР СИЧ"', 'ЮГОК', 'Лемтранс'],
    Caption02 = ['Recruitment Manager', 'Recruitment/HR Manager', 'HR Specialist', 'Региональный директор', 'HR Specialist', 'Recruitment Manager', 'Recruitment/HR Manager', 'Региональный директор'],
    Says = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, ad veniam officiisillum nostrum pariatur voluptatibus eveniet corrupti aperiam! Expedita nostrum earum quae voluptate temporibus distinctio totam unde neque soluta.';
for (let i = 0; i < 8; i++) {
    //создаёт пустой блок-карточку с отзывом клиента
    let div0 = document.createElement('div');
    div0.setAttribute('class', "blocks-item");
    document.getElementById('reviews').appendChild(div0);
    //голубая полоса с именем клиента
    let div = document.createElement('div');
    div.setAttribute('class', "sub1-blocks-item");
    div.textContent = Names[i];
    div0.appendChild(div);
    //создаёт пустое содержимое карточки
    let div1 = document.createElement('div');
    div1.setAttribute('class', "sub2-blocks-item");
    div0.appendChild(div1);
    //фото клиента
    let div2 = document.createElement('div');
    div2.setAttribute('class', "div-clients");
    div1.appendChild(div2);
    let img1 = document.createElement('img');
    img1.setAttribute('src', Photos[i]);
    img1.setAttribute('alt', Names[i]);
    img1.setAttribute('class', "clients");
    div2.appendChild(img1);
    //голубая надпись под фото
    let div3 = document.createElement('div');
    div3.setAttribute('class', "blue-on-white");
    div1.appendChild(div3);
    let div4 = document.createElement('div');
    div4.setAttribute('class', "organization");
    div4.textContent = Caption01[i];
    div3.appendChild(div4);
    let div5 = document.createElement('div');
    div5.setAttribute('class', "profession");
    div5.textContent = Caption02[i];
    div3.appendChild(div5);
    //отзыв клиента (здесь ещё надо доработать вставку нужного текста!!!)
    let div6 = document.createElement('div');
    div6.setAttribute('class', "review");
    div6.textContent = Says;
    div1.appendChild(div6);
    //логотип компании
    let div7 = document.createElement('div');
    div7.setAttribute('class', "div-logos");
    div1.appendChild(div7);
    let img2 = document.createElement('img');
    img2.setAttribute('src', Logos[i]);
    img2.setAttribute('alt', Caption01[i]);
    img2.setAttribute('class', "logos");
    div7.appendChild(img2);
}
alert('...карточки появляются...');
alert('...карточки появились!');
//alert('Есть карточки!');

//alert('...Появились фотографии!');

/*function changeDiv() {
        //alert('Сейчас блок HEADER поменяет цвет на синий, граница будет зелёной, а текст оранжевый')
        let divItem = document.getElementById("head");
        divItem.setAttribute(
            "style",
            "background-color: #0047a3; border: 1px solid #3abb01; color: #ff7c00;"
        );
    }
setTimeout(img(i), 5000);
setTimeout(changeDiv(), 5000);*/



