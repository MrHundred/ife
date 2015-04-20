
window.onload = init;

function init() {
    var button = document.getElementById('getBtn');
    button.onclick = getBtnHandler;
}

function getBtnHandler() {
    var textInput = document.getElementById('interestInput');
    var interestString = textInput.value;

    // todo �����û��û��С��ո�ȫ��/��ǣ������ţ�ȫ��/��ǣ����ٺš��ֺ�����Ϊ��ͬ���õķָ�
    var re = /[\s,��]/;
    var interestsArr = interestString.split(re);

    var output = uniqueArray(interestsArr);
    updateDom(output);
}

function checkUserInput(array) {
    if (array.length > 10) {
        // todo: you cannot input too much
    } else if (array.length < 1) {
        // todo: you should input some of your interests
        // todo: add a red alert text in front of the button
    }
}

function updateDom(array) {
    var ul = document.getElementById('interestList');

    ul.innerHTML = ''; // init with a empty ul element

    for (var i=0; i<array.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = array[i];
        ul.appendChild(li);
    }
}