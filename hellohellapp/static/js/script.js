//Возвращает ссылку на элемент по его идентификатор
const firstname = document.getElementById("firstname"); 

//возникает при потере элемента фокуса
firstname.onblur = function validateForm() {
    //присваеваем переменной значение поля
    var x = firstname.value;
    //если поле пустое
    if (!x) {
        //добавляем класс инвалид, который вставляет нужный текст
        firstname.classList.add('invalid');
        error.innerHTML = "Поле не может быть пустым!"
        return false;
    }
    //если слово состоим меньше чем из 2 букв
    if (x.length < 2) {
        firstname.classList.add('invalid');
        error.innerHTML = "Введите больше 2 символов!"
        return false;
    }
    //указывает, соответствует ли значение поля
    // шаблону, указанному в атрибуте pattern
    if (firstname.validity.patternMismatch) {
        firstname.classList.add('invalid');
        error.innerHTML = "Используйте только буквы!"
        return false;
    }
};
//возникает при получении элементом фокуса
firstname.onfocus = function () {
    //если присутствует класс инвалид, то удаляем его, при этом 
    //удаляя вставляемый ранее текст
    if (this.classList.contains('invalid')) {
        // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
        this.classList.remove('invalid');
        error.innerHTML = "";
    }
};


let popup = document.getElementById("mypopup");
let pop = document.getElementById("btn");
let exit = document.querySelector(".close");

//создаем функцию, при клике на кнопку, 
//высвечивается модальное окно
function show() {
    pop.onclick = function() {
        popup.style.display = 'block';
    }
}

//при нажатии на крестик скрывается модальное окно
exit.onclick = function () {
    popup.style.display = 'none';
    form.reset();
    //после валидации и отправки формы
    //блокируем поля формы и скрываем кнопки
    document.getElementById("btn").style.display = 'none';
    document.getElementById("btn2").style.display = 'none';
    document.getElementById("lastname").disabled = true;
    document.getElementById("firstname").disabled = true;
    document.getElementById("middlename").disabled = true;
    document.getElementById("mail").disabled = true;
    document.getElementById("master").disabled = true;
    document.getElementById("t1").disabled = true;
    document.getElementById("comment").disabled = true;
    document.getElementById("confirm").disabled = true;
}








