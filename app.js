/* ================= INÍCIO ================= */
let fotosJararaca = [
  "jararaca.jpg",
  "jararaca2.jpg",
  "jararaca3.jpg",
  "jararaca4.jpg",
  "jararaca5.jpg",
  "jararaca6.jpg"
];

let fotosCascavel = [
  "cascavel1.jpg",
  "cascavel2.jpg",
  "cascavel3.jpg",
  "cascavel4.jpg"
];

let indexJ = 0;
let indexC = 0;
function inicio(){
document.getElementById("conteudo").innerHTML = `
<div class="card">
<h2>Exames sem Pressa</h2>
<p>Saúde baseada em evidência.</p>
<p>Nem todo exame é necessário.</p>
</div>
`;
}

/* ================= PREVENÇÃO ================= */

function prevencao(){
document.getElementById("conteudo").innerHTML = `
<div class="card">
<h2>Prevenção</h2>
<input type="number" id="idade" placeholder="Digite sua idade">
<button onclick="resultado()">Ver recomendações</button>
</div>
`;
}

function resultado(){
let idade = document.getElementById("idade").value;
let texto = "<div class='card'><h3>Rastreamento recomendado</h3>";

if(idade >= 18){
texto += "✔️ Pressão arterial<br>";
texto += "✔️ Depressão<br>";
texto += "✔️ Tabagismo e álcool<br>";
}

if(idade >= 35){
texto += "✔️ Diabetes (se risco)<br>";
}

if(idade >= 40){
texto += "✔️ Colesterol<br>";
}

if(idade >= 45 && idade <= 75){
texto += "✔️ Câncer colorretal<br>";
}

texto += "<hr><b>Mulheres</b><br>";

if(idade >= 25 && idade <= 64){
texto += "✔️ Preventivo colo do útero<br>";
}

if(idade >= 50 && idade <= 74){
texto += "✔️ Mamografia<br>";
}

texto += "<hr><b>Homens</b><br>";

if(idade >= 55 && idade <= 69){
texto += "⚠️ PSA (decisão compartilhada)<br>";
}

texto += "<hr>⚠️ Nem todo exame é necessário";

texto += "</div>";

document.getElementById("conteudo").innerHTML = texto;
}

/* ================= URGÊNCIAS ================= */

function emergencias(){
document.getElementById("conteudo").innerHTML = `
<div class="card">
<h2>Urgências</h2>

<button onclick="cobra()">🐍 Cobra</button>
<button onclick="agrotoxico()">☠️ Agrotóxicos</button>

</div>
`;
}

/* ================= COBRAS ================= */

let j = 1;
let c = 1;

function cobra(){
document.getElementById("conteudo").innerHTML = `
<div class="card">
<h2>🐍 Acidente com cobra</h2>

<h3>Jararaca</h3>
<img id="imgJararaca" src="jararaca.jpg">
<button onclick="trocarJararaca()">Mais fotos</button>

<h3>Cascavel</h3>
<img id="imgCascavel" src="cascavel1.jpg">
<button onclick="trocarCascavel()">Mais fotos</button>

<p><b>Sinais:</b> dor, inchaço, sangramento</p>

<p>✔️ Procurar atendimento imediato</p>

<p><b>UBS:</b> Guilherme Fernandes Pinhal - Aiuruoca</p>

<p><b>📞 SAMU: 192</b></p>

</div>
`;
}

function trocarJararaca(){
j++; if(j>6){j=1;}
document.getElementById("imgJararaca").src = "imagens/jararaca"+j+".jpg";
}

function trocarCascavel(){
c++; if(c>6){c=1;}
document.getElementById("imgCascavel").src = "imagens/cascavel"+c+".jpg";
}

/* ================= AGROTÓXICOS ================= */

function agrotoxico(){
  document.getElementById("conteudo").innerHTML = `
  <div class="card">

  <h2>☠️ Intoxicação por Agrotóxicos</h2>

  <h3>📌 Principais grupos</h3>
  <p><b>Organofosforados e carbamatos:</b> inibem acetilcolinesterase</p>
  <p><b>Piretroides:</b> neurotóxicos, geralmente mais leves</p>
  <p><b>Herbicidas (ex: glifosato):</b> irritativos e sistêmicos</p>

  <hr>

  <h3>🧠 Sinais e sintomas</h3>

  <p><b>Síndrome colinérgica (organofosforados):</b></p>
  <ul>
    <li>Salivação intensa</li>
    <li>Lacrimejamento</li>
    <li>Sudorese</li>
    <li>Miose</li>
    <li>Broncorreia / broncoespasmo</li>
    <li>Bradicardia</li>
    <li>Vômitos e diarreia</li>
  </ul>

  <p><b>Grave:</b></p>
  <ul>
    <li>Confusão / coma</li>
    <li>Convulsões</li>
    <li>Insuficiência respiratória</li>
  </ul>

  <p><b>Glifosato:</b></p>
  <ul>
    <li>Náuseas e vômitos</li>
    <li>Dor abdominal</li>
    <li>Irritação de pele e olhos</li>
    <li>Em casos graves: choque, insuficiência renal</li>
  </ul>

  <hr>

  <h3>🚑 Conduta inicial</h3>

  <ul>
    <li>Retirar da exposição imediatamente</li>
    <li>Remover roupas contaminadas</li>
    <li>Lavar pele com água e sabão</li>
    <li>Oxigênio se necessário</li>
    <li>Monitorização</li>
  </ul>

  <p><b>Se ingestão recente:</b></p>
  <ul>
    <li>Não provocar vômito</li>
    <li>Carvão ativado (se indicado)</li>
  </ul>

  <hr>

  <h3>💉 Tratamento específico</h3>

  <p><b>Organofosforados:</b></p>
  <ul>
    <li>Atropina IV (até secar secreções)</li>
    <li>Pralidoxima (se disponível)</li>
  </ul>

  <p><b>Convulsões:</b> Diazepam</p>

  <hr>

  <h3>⚠️ Quando encaminhar urgente</h3>

  <ul>
    <li>Dispneia</li>
    <li>Rebaixamento de consciência</li>
    <li>Convulsão</li>
    <li>Instabilidade hemodinâmica</li>
  </ul>

  <hr>

  <h3>📞 Disque intoxicação</h3>
  <p><b>0800 722 6001 (ANVISA)</b></p>

  </div>
  `;
}

/* ================= REFERÊNCIAS ================= */

function referencias(){
document.getElementById("conteudo").innerHTML = `
<div class="card">
<h2>Referências</h2>

<p><b>Rastreamento:</b></p>
<p>- USPSTF (US Preventive Services Task Force)</p>
<p>- Organização Mundial da Saúde (WHO)</p>
<p>- Sociedade Brasileira de Medicina de Família e Comunidade (SBMFC)</p>
<p>- Ministério da Saúde – Cadernos de Atenção Básica</p>

<p><b>Animais peçonhentos:</b></p>
<p>- Ministério da Saúde – Manual de acidentes por animais peçonhentos</p>

<p><b>Agrotóxicos:</b></p>
<p>- ANVISA – Disque intoxicação</p>
<p>- WHO – Toxicologia básica</p>

<p><b>Imagens:</b></p>
<p>- Wikimedia Commons (uso livre)</p>

</div>
`;
}
function trocarJararaca() {
  indexJ++;
  if (indexJ >= fotosJararaca.length) {
    indexJ = 0;
  }
  document.getElementById("imgJararaca").src = fotosJararaca[indexJ];
}

function trocarCascavel() {
  indexC++;
  if (indexC >= fotosCascavel.length) {
    indexC = 0;
  }
  document.getElementById("imgCascavel").src = fotosCascavel[indexC];
}
