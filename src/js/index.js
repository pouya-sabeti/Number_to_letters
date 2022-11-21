
var text_save = '';
const conversion = () => {
    var text = document.querySelector('.input_box input').value;

    document.querySelector('.output_box p span').innerHTML = Num2persian(text);
    text_save = Num2persian(text);
}
const copy = () => {
    navigator.clipboard.writeText(text_save)
    document.querySelector('.ok_copy_title').classList.add('show')
}