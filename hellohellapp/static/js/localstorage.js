// var check = false;
// function test() {
//     localStorage.setItem('test', "Пробная запись в хранилище успешно выполнена! \nЛокальное хранилище доступно!");
//     alert(localStorage.getItem('test'));
//     check = false;
// }

// if (check == true)
//     test();

//  alert( localStorage.getItem('test') );

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return false;
    }
}
if (storageAvailable('localStorage')) {
    alert("Локальное хранилище доступно!");
    // Код обращения к хранилищу
}
else {
    alert("Локальное хранилище не доступно!");
    // Код сообщения о том, что локальное хранилище не доступно
}



document.getElementById('btn').addEventListener('click', function () {
    // Сохраняем значения в виде массива.

    var data = [];
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var time = document.getElementById('time').value;
    var master = document.getElementById('master').value;
    // var date = document.getElementById('date').value;
    data.push(name);
    data.push(phone);
    data.push(time);
    data.push(master);
    localStorage.setItem('k', JSON.stringify(data));
}
);

window.addEventListener('load', function () {
    check = true;

    // Загружаем их, распаковывая сохранённый массив.
    var data = JSON.parse(localStorage.getItem('k'));
    document.getElementById('name').value = data[0];
    document.getElementById('phone').value = data[1];
    document.getElementById('time').value = data[2];
    document.getElementById('master').value = data[3];
    // document.getElementById('master').value = data[3];
    // if (localStorage.getItem('master')) {
    //     document.getElementById("master").options[localStorage.getItem('master')].selected = true;
    // }
    var dataRaz = document.querySelector('input[type="date"].date');

    if (localStorage.getItem('server') === null) {// если localStorage.getItem пустой
        dataRaz.value = new Date().toJSON().slice(0, 10); // сегодняшняя дата
    } else {
        dataRaz.value = localStorage.getItem('server'); // последняя дата, на которую изменил пользователь
    }
});

document.getElementById('btn2').addEventListener('click', function () {
    localStorage.clear();
    // localStorage.removeItem('name');
    // localStorage.removeItem('phone');
    // localStorage.removeItem('date');
    // localStorage.removeItem('time');
    // localStorage.removeItem('master');

    // delete localStorage.name;

    // for (let i = 0; i < data.length; i++) {
    //     localStorage.removeItem(data[i]);
    // }
});

pollNext.addEventListener('click', nextQuestion);
prevResultButton.addEventListener("click", showPrevResult(false));
function showPrevResult(yesno) {

    if (yesno) {
        document.querySelector(".poll_result").style.display = "block";
        let prevCounter = Number(localStorage.counter);

        trueAmount.innertext = `Вы ответили правильно на ${prevCounter} из 4`;
        falseAmount.innertext = `Вы ответили не правильно на 
         ${4 - prevCounter} из 4`;
        if (prevCounter < 3) {
            resultP.innertext = "Тест не пройден";
        } else {
            resultP.innertext = "Тест пройден";
        }
    }
}
let counter = 0;
function nextQuestion() {
    let answers = document.getElementsByName("q");

    for (let answer of answers) {
        if (answer.checked) {
            if (answer.value == "true") {
                counter++;
            }
        }
    }

    if (pollNext.value == "1") {
        pollQuestion.innertext = "Сколько будет 14 - 6";
        l1.innertext = "5";
        l2.innertext = "6";
        l3.innertext = "8";
        l4.innertext = "9";
        pollNext.value = "2";
        return;
    }
    if (pollNext.value == "2") {
        pollQuestion.innertext = "Выбери третью букву алфавита";
        l1.innertext = "А";
        l2.innertext = "Б";
        l3.innertext = "Г";
        l4.innertext = "В";
        question3.value = false;
        question4.value = true;
        pollNext.value = "3";
        return;
    }
    if (pollNext.value == "3") {
        pollQuestion.innertext = "У какой фигуры три угла";
        l1.innertext = "Треугольник";
        l2.innertext = "Ромб";
        l3.innertext = "Квадрат";
        l4.innertext = "Прямоугольник";
        question4.value = false;
        question1.value = true;
        pollNext.innertext = "Показать результаты";
        pollNext.value = "4";
        return;
    }
    if (pollNext.value == "4") {
        if (confirm("Согранить результаты теста в локальном хранилище?")) {
            localStorage.setItem("counter", counter);
        }
        pollQuestion.style.display = "none";
        pollForm.style.display = "none";
        pollNext.style.display = "none";
        prevResultButton.style.display = "none";
        document.querySelector(".poll_result").style.display = "block";
        trueAmount.innertext = `Вы ответили правильно на ${counter} из 4`;
        falseAmount.innertext = `Вы ответили не правильно 
                              на ${4 - counter} из 4`;
        if (counter < 3) {
            resultP.innertext = "Тест не пройден";
        } else {
            resultP.innertext = "Тест пройден";
        }
        return;
    }
}