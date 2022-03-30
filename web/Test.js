var currencyRatio = {
    USD: {
        KRW: 1220.66,
        USD: 1,
        VND: 22869.50,
        unit: "달러"
    },
    KRW: {
        KRW: 1,
        USD: 0.00082,
        VND: 18.74,
        unit: "원"
    },
    VND: {
        KRW: 0.053,
        USD: 0.000044,
        VND: 1,
        unit: "동"
    }
}
var fromCurrency = 'USD'; //초기값 USD
var toCurrency = 'USD';

document
    .querySelectorAll("#from-currency-list a")
    .forEach(menu => menu.addEventListener("click", function () {
        document.getElementById("from-button")
            .textContent = this.textContent;// 버튼을 가져 온다., 값을 바꾼다.
        fromCurrency = this.textContent; // 다른 버튼 선택 시 변수값 저장
        convert();
    }))

document
    .querySelectorAll("#to-currency-list a")
    .forEach(menu => menu.addEventListener("click", function () {
        document.getElementById("to-button")
            .textContent = this.textContent;// 버튼을 가져 온다., 값을 바꾼다.
        toCurrency = this.textContent; // 다른 버튼 선택 시 변수값 저장
        convert();
    }

function convert() {
    //1, 얼마를 환전, 가지고있는돈이 뭔지, 바꾸고자 하는 돈
    var amount= document.getElementById("from-input").value;
    var convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];

    document.getElementById("to-input").value = convertedAmount;
}