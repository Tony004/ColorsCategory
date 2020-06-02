//Категории
let colors = document.getElementsByClassName('colors');
for (let color of colors) {
    color.onclick = toggle;
}

//Главная категория
let main_cat = document.getElementById('main_cat');
    main_cat.onclick = toggle;

// Показать/Скрыть категорию
function toggle(){
//Берем предка элемента и смотрим на последний элемент, который и должен сворачиваться.
//Если он свернут, разворачиваем. И обратно.
    let parent = this.parentElement;
    let flag = parent.lastElementChild.hidden;

    if(flag)
        parent.lastElementChild.hidden = false;
    else
        parent.lastElementChild.hidden = true;
}

//Ajax удаление категорий
function remove(){

    //Проверка, есть ли цвета в выбранной для удаления категории.
    //Если есть, удаление запретить.
    let parent = this.parentElement;
    let ul = parent.lastElementChild;
    let lis = document.getElementsByTagName('li');

    //Проверка наличия цветов в категории
    let categoryIsEmpty = true;
    for(let li of lis){
        if(ul.contains(li))
            categoryIsEmpty = false;
    }


    if(!categoryIsEmpty)
        alert("Нельзя удалить категорию, пока в ней есть цвета!");
    else{
        let categoryName = this.previousElementSibling.innerHTML;

        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                document.getElementById("message").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "removeCategoryOrColor.php/?name="+categoryName, true);
        xhttp.send();
        this.parentElement.remove();
    }
}

//Удаление цветов
function removeTheColor(){

        let colorName = this.previousElementSibling.innerHTML;

        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                document.getElementById("message").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "removeCategoryOrColor.php/?colorName="+colorName, true);
        xhttp.send();
        this.previousElementSibling.remove();
        this.nextElementSibling.remove();
        this.remove();
}

//Добавление цветов
    function addTheColor(){
        let parent = this.parentElement;
        let lastElem = parent.lastElementChild.lastElementChild;
        let newElem = document.createElement('input');
        newElem.type = "text";
        newElem.name = "newColorName";
        newElem.id = "newColor";

        lastElem.after(newElem);

        newElem.focus();

        newElem.onblur = addingColor;
    }

//Создание цветов
    function addingColor(){
        let newElem = document.getElementById("newColor");
        let parent = newElem.parentElement.parentElement.firstElementChild;
        let catName = parent.innerHTML;
        let colorName = newElem.value;

        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                document.getElementById("message").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "addColor.php/?newColorName="+colorName+"&catName="+catName, true);
        xhttp.send();

        //Создание нового элемента, ведь этот новый элемент не создавался
        //динамически при загрузке страницы, т.к. его не было в БД
        let newLi = document.createElement('li');
        newLi.innerHTML = colorName;
        newLi.onclick = changeColor;
        let newBtn = document.createElement('button');
        newBtn.innerHTML = "-";
        newBtn.classList.add("removeColor");
        newBtn.onclick = removeTheColor;
        let newBr = document.createElement('br');
        newElem.after(newBr);
        newElem.after(newBtn);
        newElem.after(" ");
        newElem.after(newLi);

        newElem.remove();
    }

//Изменить цвета
    function changeColor(){
        //Прячем li, на которую кликнули и кнопку
        this.style.display = "none";
        this.nextElementSibling.hidden = true;

        let currentColorName = this.innerHTML;

        // Создаем Input для изменения цвета
        let newElem = document.createElement('input');
        newElem.type = "text";
        newElem.name = "newColorName";
        newElem.id = "newColor";
        newElem.value = currentColorName;

        this.after(newElem);

        newElem.focus();

        newElem.onblur = checkColor;
    }

//Провека на изменение цвета
    function checkColor(){
        let newElem = document.getElementById("newColor");
        let previousElem = newElem.previousElementSibling;
        let newColorName = newElem.value;
        let previousColorName = previousElem.innerHTML;

        //Если имя не поменялось, снова показываем li и кнопку
        if(newColorName == previousColorName){
            previousElem.style.display = "";
            newElem.nextElementSibling.hidden = false;
        }
        // Если имя поменялось, то меняем имя в БД и li
        else{
            previousElem.innerHTML = newColorName;
            previousElem.style.display = "";
            newElem.nextElementSibling.hidden = false;

            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    document.getElementById("message").innerHTML = this.responseText;
                }
            };
            xhttp.open("GET", "updateColor.php/?newColorName="+newColorName+"&previousColorName="+previousColorName, true);
            xhttp.send();
        }

        // Удаляем input
        newElem.remove();
    }

//Добавить категорию
    let addCat = document.getElementById('addCategory');
    addCat.onclick = moveTo;

    function moveTo(){
        window.location.href = "addCategory.php";
    }

//Удалить категорию
    let removeCats = document.getElementsByClassName('removeCategory');
    for(let removeCat of removeCats)
        removeCat.onclick = remove;

//Удалить цвет
    let removeColors = document.getElementsByClassName('removeColor');
    for(let removeColor of removeColors)
        removeColor.onclick = removeTheColor;

//Добавить цвет
    let addColors = document.getElementsByClassName('addColor');
    for(let addColor of addColors)
        addColor.onclick = addTheColor;

//Изменить цвет
    let changedColors = document.getElementsByTagName('li');
    for(let changedColor of changedColors)
        changedColor.onclick = changeColor;
