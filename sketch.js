// área das varáveis:
let display = document.getElementById("display"); // esse erá a área que o resultado aparecerá
let minutos = document.getElementById("minutos"); // aqui serão armazenados os minutos
let segundos = document.getElementById("segundos"); // aqui os segundos
let start = document.getElementById("start"); // aqui será o botão de começar
let stopButton = document.getElementById("stop");
let StopAlert = document.getElementById("parada");
let clockSeconds;
let AtualMinuto;
let AtualSegundo;
let IntervalVar;
let RunningCode = false; // var de controle

for (let i = 0; i <= 60; i++) {
  // os minutos começam do 0, pois para se inicar um time ele pode começar com menos de 1 minuto;
  minutos.innerHTML += '<option value="' + i + '"> ' + i + " </option>"; // ele pega a variável que pega o elemento do Html pelo id, e programa ela para poder chegar até 60
}

for (let i = 1; i <= 60; i++) {
  //
  segundos.innerHTML += '<option value="' + i + '"> ' + i + " </option>";
}

stopButton.addEventListener("click", function () {
  // usando do interval pra parar o código
  if (RunningCode) {
    // o codigo apenas será executado se o programa estiver em execução
    clearInterval(IntervalVar);
    RunningCode = false;
    let StopMessage = "relógio parado";
    StopAlert.textContent = StopMessage;
    return;
  }
});

start.addEventListener("click", function () {
  if (!RunningCode) {
    RunningCode = true; // variavel de controle

    // criamos um evento para que quando o botão for clicado, um evento aconteça
    AtualMinuto = minutos.value;
    AtualSegundo = segundos.value;

    display.childNodes[1].innerHTML = `${AtualMinuto} : ${AtualSegundo}`; // interpolação, o ChildNodes vai pegar todos os elementos filhos
    // nesse caso o h3 que está no html, fazendo isso, no caso a partir do segundo índice [1], o resultado será o valor de minutos : segundos

    // vamos usar o set interval para administrar os segundos
    IntervalVar = setInterval(function () {
      AtualSegundo--; // colocamos isso, pois se trata de um cronômetro
      // se o meu segundo atual for menor ou igual a zero, eu preciso de outra verificação
      if (AtualSegundo <= 0) {
        if (AtualMinuto > 0 || AtualSegundo < 0) {
          // se isso for falso, é porque acabou.
          // se o minuto for maior que 0
          AtualMinuto--; // resuzimos o minuto e aumentamos os segundos
          AtualSegundo = 59; // 59, e o ciclo repete
        } else {
          let Message = "Acabou!";
          let alerta = document.getElementById("alerta");
          alerta.textContent = Message;
          document.body.appendChild(alerta);

          // vamos colocar o sistema de som de alerta
          let audio = document.getElementById("sound");
          audio.play();
          clearInterval(IntervalVar);
        }
      }

      display.childNodes[1].innerHTML = `${AtualMinuto} : ${AtualSegundo}`;
    }, 1000);
  }
});

// teste
console.group();
console.info(window.innerHeight / 2);
console.info(window.innerWidth / 2);
