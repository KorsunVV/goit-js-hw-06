// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input)
//  подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>



const a = {
    input: document.querySelector("#name-input"),
    span: document.querySelector("#name-output"),
};

a.input.addEventListener("input", (e) => {
    if (a.input.value !== "") {
        a.span.textContent = a.input.value;
    } else {
        a.span.textContent = "Anonymous";
    }
});