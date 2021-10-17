function add(num) {
    let input = document.getElementById('input');
    input.value += num;
}
function calculate() {
    let input = document.getElementById('input');
    let result = eval(input.value);
    document.getElementById('result').value = result;
}
function reset() {
    document.getElementById('input').value = "";
    document.getElementById('result').value = "";
}