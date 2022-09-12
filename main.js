// pegando o botão e select
const button = document.getElementById('btn')
const select = document.getElementById('select-currency')

// valor do dolar, euro e bitcoin
const dolar = 5.1
const euro = 5.16
const bitcoin = 114.297

// evento do botão
const convertValue = () => {
    //! tudo de real para dolar
    // pegando a input do valor
    const inputReais = document.getElementById('input-real').value
    // valor em reais
    const realValueText = document.getElementById('real-value-text')
    // valor em doláres
    const currencyValueText = document.getElementById('currency-value-text')

    // tirando da input e colocando no texto
    realValueText.innerHTML = inputReais
    // convertendo do real
    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReais)
    

    if (select.value === 'US$ Dólar Americano') {
        // convertendo para dolar
        currencyValueText.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD"
        }).format(inputReais / dolar)
    }

    if (select.value === '€ Euro') {
        // convertendo para euro
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputReais / euro)
    }

    if (select.value === 'Bitcoin') {
        // convertendo para bitcoin
        currencyValueText.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC"
        }).format(inputReais / bitcoin)
    }
}

// trocando bandeiras e nomes
const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    // trocando para dolar
    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = './assets/eua.png'
    }

    // trocando para euro
    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/euro.png'
    }

    // trocando para bitcoin
    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/bitcoin.png'
    }

    convertValue()
}

// pegando quando clica no botão / pegando options
button.addEventListener('click', convertValue)
select.addEventListener('change', changeCurrency)

