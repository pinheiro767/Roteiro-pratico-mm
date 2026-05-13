const DADOS = {"superior": [["Deltoide", "Abdução do ombro e estabilidade glenoumeral", "Paciente com dor ao elevar o braço lateralmente após treino de ombro. Qual músculo deve ser avaliado e por quê?", "Avaliar deltoide, especialmente fibras médias, pois participa da abdução do ombro; correlacionar com manguito rotador para estabilização."], ["Supraespinal", "Início da abdução e estabilização do ombro", "Dor entre 0° e 30° de abdução sugere comprometimento de qual músculo?", "Supraespinal, importante no início da abdução e frequentemente relacionado a tendinopatias do manguito rotador."], ["Infraespinal", "Rotação lateral do braço", "Atleta sente dificuldade para realizar rotação externa do ombro. Qual músculo pode estar comprometido?", "Infraespinal, principal rotador lateral do braço, junto ao redondo menor."], ["Redondo menor", "Rotação lateral e estabilização posterior", "Na instabilidade posterior do ombro, qual músculo pequeno do manguito deve ser lembrado?", "Redondo menor, por atuar na rotação lateral e estabilização posterior da articulação glenoumeral."], ["Subescapular", "Rotação medial do braço", "Dificuldade de rotação interna do ombro pode envolver qual músculo anterior da escápula?", "Subescapular, músculo do manguito rotador responsável pela rotação medial."], ["Peitoral maior", "Adução, flexão e rotação medial do braço", "No supino, qual músculo é fortemente solicitado e qual seu papel funcional?", "Peitoral maior, atuando na adução, flexão e rotação medial do braço."], ["Peitoral menor", "Estabilização e depressão da escápula", "Postura com ombros projetados à frente pode estar relacionada ao encurtamento de qual músculo?", "Peitoral menor, que pode tracionar a escápula anteriormente e inferiormente."], ["Serrátil anterior", "Protração e rotação superior da escápula", "Escápula alada após flexão de braço sugere fraqueza de qual músculo?", "Serrátil anterior, importante para fixar a escápula contra a parede torácica."], ["Trapézio", "Elevação, retração e rotação da escápula", "Dificuldade de elevar o ombro contra resistência envolve qual músculo superficial?", "Trapézio, especialmente fibras superiores."], ["Latíssimo do dorso", "Extensão, adução e rotação medial do braço", "Na puxada alta, qual músculo amplo do dorso é dominante?", "Latíssimo do dorso, atuando na extensão, adução e rotação medial do braço."], ["Bíceps braquial", "Flexão do cotovelo e supinação", "Dor anterior no braço ao supinar contra resistência envolve qual músculo?", "Bíceps braquial, por realizar flexão do cotovelo e supinação do antebraço."], ["Braquial", "Principal flexor do cotovelo", "Mesmo com antebraço pronado, a flexão do cotovelo permanece forte por ação de qual músculo?", "Braquial, considerado flexor primário do cotovelo."], ["Coracobraquial", "Flexão e adução do braço", "Qual músculo perfurado pelo nervo musculocutâneo ajuda na flexão e adução do braço?", "Coracobraquial."], ["Tríceps braquial", "Extensão do cotovelo", "Dificuldade de estender o cotovelo contra resistência indica avaliação de qual músculo?", "Tríceps braquial."], ["Ancôneo", "Auxilia extensão e estabilização do cotovelo", "Qual músculo pequeno auxilia o tríceps na extensão final do cotovelo?", "Ancôneo."], ["Pronador redondo", "Pronação do antebraço", "Dor no antebraço proximal ao pronar contra resistência sugere avaliação de qual músculo?", "Pronador redondo."], ["Flexor radial do carpo", "Flexão e abdução radial do punho", "Na flexão do punho com desvio radial, qual músculo é solicitado?", "Flexor radial do carpo."], ["Palmar longo", "Tensão da aponeurose palmar", "Músculo ausente em algumas pessoas, usado como referência tendínea no punho?", "Palmar longo."], ["Flexor ulnar do carpo", "Flexão e adução ulnar do punho", "Flexão do punho com desvio ulnar solicita qual músculo?", "Flexor ulnar do carpo."], ["Flexor superficial dos dedos", "Flexão das interfalângicas proximais", "Para testar flexão da IFP dos dedos, qual músculo é mais relacionado?", "Flexor superficial dos dedos."], ["Flexor profundo dos dedos", "Flexão das interfalângicas distais", "Para flexionar a falange distal dos dedos, qual músculo é essencial?", "Flexor profundo dos dedos."], ["Extensor dos dedos", "Extensão dos dedos", "Dificuldade de abrir os dedos contra resistência envolve qual músculo?", "Extensor dos dedos."], ["Extensor radial longo do carpo", "Extensão e abdução do punho", "Dor lateral no cotovelo em movimentos de extensão do punho pode envolver qual músculo?", "Extensor radial longo do carpo."], ["Extensor ulnar do carpo", "Extensão e adução do punho", "Extensão do punho com desvio ulnar solicita qual músculo?", "Extensor ulnar do carpo."], ["Músculos tenares", "Movimentos do polegar", "Dificuldade de oposição do polegar em síndrome do túnel do carpo envolve qual grupo muscular?", "Músculos tenares, especialmente oponente do polegar, abdutor curto e flexor curto do polegar."]], "inferior": [["Glúteo máximo", "Extensão e rotação lateral do quadril", "Dificuldade para subir escadas ou levantar da cadeira indica fraqueza de qual músculo?", "Glúteo máximo, principal extensor potente do quadril."], ["Glúteo médio", "Abdução do quadril e estabilidade pélvica", "Queda da pelve ao apoiar em uma perna sugere fraqueza de qual músculo?", "Glúteo médio, importante estabilizador pélvico na marcha."], ["Glúteo mínimo", "Abdução e rotação medial do quadril", "Na estabilização lateral do quadril, qual músculo profundo auxilia o glúteo médio?", "Glúteo mínimo."], ["Tensor da fáscia lata", "Tensiona trato iliotibial", "Dor lateral no joelho em corredores pode envolver tensão em qual estrutura muscular/fascial?", "Tensor da fáscia lata e trato iliotibial."], ["Iliopsoas", "Flexão potente do quadril", "Dificuldade de elevar a coxa contra resistência indica avaliação de qual músculo?", "Iliopsoas."], ["Sartório", "Flexão, abdução e rotação lateral do quadril", "Músculo usado na posição de cruzar a perna em quatro?", "Sartório."], ["Reto femoral", "Flexão do quadril e extensão do joelho", "Qual músculo do quadríceps cruza quadril e joelho?", "Reto femoral."], ["Vasto lateral", "Extensão do joelho", "Qual porção lateral do quadríceps participa da extensão do joelho?", "Vasto lateral."], ["Vasto medial", "Extensão do joelho e estabilização patelar", "Dor patelofemoral pode envolver fraqueza de qual porção medial do quadríceps?", "Vasto medial, especialmente sua função estabilizadora da patela."], ["Vasto intermédio", "Extensão do joelho", "Qual músculo profundo ao reto femoral participa da extensão do joelho?", "Vasto intermédio."], ["Adutor longo", "Adução do quadril", "Dor na virilha ao aproximar as coxas contra resistência sugere qual grupo?", "Adutores, especialmente adutor longo."], ["Adutor magno", "Adução e extensão do quadril", "Qual grande músculo medial da coxa ajuda na adução e também na extensão do quadril?", "Adutor magno."], ["Grácil", "Adução do quadril e flexão do joelho", "Qual músculo medial cruza quadril e joelho e participa da pata de ganso?", "Grácil."], ["Pectíneo", "Adução e flexão do quadril", "Músculo anterior-medial da coxa relacionado à flexão e adução do quadril?", "Pectíneo."], ["Bíceps femoral", "Flexão do joelho e extensão do quadril", "Dor posterior-lateral da coxa em sprint envolve qual isquiotibial?", "Bíceps femoral."], ["Semitendíneo", "Flexão do joelho e extensão do quadril", "Músculo isquiotibial medial com tendão longo e participação na pata de ganso?", "Semitendíneo."], ["Semimembranáceo", "Flexão do joelho e extensão do quadril", "Qual isquiotibial medial profundo participa da flexão do joelho?", "Semimembranáceo."], ["Tibial anterior", "Dorsiflexão e inversão do pé", "Dificuldade de levantar a ponta do pé durante a marcha indica fraqueza de qual músculo?", "Tibial anterior."], ["Extensor longo dos dedos", "Extensão dos dedos e dorsiflexão", "Dificuldade de estender os dedos do pé contra resistência envolve qual músculo?", "Extensor longo dos dedos."], ["Fibular longo", "Eversão do pé e suporte do arco", "Entorse lateral recorrente pode exigir fortalecimento de qual grupo lateral da perna?", "Fibulares, especialmente fibular longo e curto."], ["Fibular curto", "Eversão do pé", "Qual músculo lateral auxilia a eversão e estabilização do tornozelo?", "Fibular curto."], ["Gastrocnêmio", "Flexão plantar e flexão do joelho", "Na elevação na ponta dos pés, qual músculo superficial da panturrilha é ativado?", "Gastrocnêmio."], ["Sóleo", "Flexão plantar postural", "Qual músculo profundo da panturrilha é muito importante para postura e retorno venoso?", "Sóleo."], ["Tibial posterior", "Inversão e suporte do arco medial", "Pé plano adquirido pode envolver disfunção de qual músculo profundo?", "Tibial posterior."], ["Flexor longo do hálux", "Flexão do hálux e impulso da marcha", "Na fase de propulsão da marcha, qual músculo flexiona o hálux?", "Flexor longo do hálux."]]};

const DB_NAME = "SistemaMuscularFotosDB";
const DB_VERSION = 1;
const STORE = "fotos";

function abrirDB(){
  return new Promise((resolve, reject) => {
    if(!("indexedDB" in window)){
      reject(new Error("IndexedDB não disponível neste navegador."));
      return;
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if(!db.objectStoreNames.contains(STORE)){
        const store = db.createObjectStore(STORE, {keyPath:"id", autoIncrement:true});
        store.createIndex("estruturaId", "estruturaId", {unique:false});
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function salvarFotoDB(estruturaId, arquivo){
  const db = await abrirDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).add({
      estruturaId,
      nome: arquivo.name || "foto",
      tipo: arquivo.type || "image/jpeg",
      blob: arquivo,
      dataHora: new Date().toLocaleString("pt-BR")
    });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function listarFotosDB(estruturaId){
  const db = await abrirDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const index = tx.objectStore(STORE).index("estruturaId");
    const req = index.getAll(estruturaId);
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

async function removerFotoDB(id){
  const db = await abrirDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function idSeguro(txt){
  return txt.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9]/g,"_").toLowerCase();
}

function criarCard(item, regiao, idx){
  const [nome, funcao, pergunta, resposta] = item;
  const id = idSeguro(regiao + "_" + nome);
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <span class="badge">${regiao === "superior" ? "Membro Superior" : "Membro Inferior"} — Estrutura ${idx+1}</span>
    <h3>${idx+1}. ${nome}</h3>
    <p><strong>Função anatômica:</strong> ${funcao}</p>
    <div class="pergunta">
      <strong>🩺 Pergunta clínica:</strong>
      <p>${pergunta}</p>
    </div>
    <label><strong>Resposta do aluno:</strong></label>
    <textarea data-id="${id}" placeholder="Digite aqui a resposta do aluno..."></textarea>
    <div class="foto-row">
      <label>
        <strong>📷 Fotos da estrutura:</strong><br>
        <input type="file" accept="image/*" capture="environment" multiple data-foto="${id}">
      </label>
    </div>
    <div class="preview" id="preview_${id}"></div>
  `;

  const textarea = card.querySelector("textarea");
  textarea.value = localStorage.getItem("resp_" + id) || "";
  textarea.addEventListener("input", () => localStorage.setItem("resp_" + id, textarea.value));

  const input = card.querySelector("input[type=file]");
  input.addEventListener("change", async (e) => await salvarFotos(e, id));

  setTimeout(() => renderFotos(id), 0);
  return card;
}

async function salvarFotos(event, id){
  const files = Array.from(event.target.files || []);
  if(files.length === 0) return;

  try{
    for(const file of files){
      await salvarFotoDB(id, file);
    }
    await renderFotos(id);
    alert("Foto(s) salva(s) com sucesso neste aparelho.");
  }catch(err){
    console.error(err);
    alert("Não foi possível salvar a foto. Tente atualizar a página, usar o Chrome/Safari ou escolher imagem menor.");
  }
  event.target.value = "";
}

async function renderFotos(id){
  const box = document.getElementById("preview_" + id);
  if(!box) return;
  try{
    const fotos = await listarFotosDB(id);
    box.innerHTML = "";
    fotos.forEach((foto, i) => {
      const url = URL.createObjectURL(foto.blob);
      const fig = document.createElement("figure");
      fig.innerHTML = `
        <img src="${url}" alt="Foto ${i+1}">
        <figcaption>Foto ${i+1}<br>${foto.dataHora || ""}</figcaption>
        <button type="button" onclick="removerFoto('${id}',${foto.id})">Remover</button>
      `;
      box.appendChild(fig);
    });
  }catch(err){
    console.error(err);
  }
}

async function removerFoto(estruturaId, fotoId){
  await removerFotoDB(fotoId);
  await renderFotos(estruturaId);
}

function montarListas(){
  Object.entries(DADOS).forEach(([regiao, lista]) => {
    const alvo = document.getElementById(regiao);
    lista.forEach((item, idx) => alvo.appendChild(criarCard(item, regiao, idx)));
  });
}

function montarGabarito(){
  const box = document.getElementById("gabaritoConteudo");
  box.innerHTML = "";
  Object.entries(DADOS).forEach(([regiao, lista]) => {
    const h = document.createElement("h3");
    h.textContent = regiao === "superior" ? "Gabarito — Membro Superior" : "Gabarito — Membro Inferior";
    box.appendChild(h);
    lista.forEach((item, idx) => {
      const div = document.createElement("div");
      div.className = "gabarito-item";
      div.innerHTML = `
        <strong>${idx+1}. ${item[0]}</strong>
        <p><strong>Pergunta:</strong> ${item[2]}</p>
        <p><strong>Resposta esperada:</strong> ${item[3]}</p>
      `;
      box.appendChild(div);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  montarListas();

  document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(b => b.classList.remove("ativo"));
      document.querySelectorAll(".lista").forEach(s => s.classList.remove("ativo"));
      btn.classList.add("ativo");
      document.getElementById(btn.dataset.alvo).classList.add("ativo");
    });
  });

  document.getElementById("btnPrint").addEventListener("click", () => window.print());

  const modal = document.getElementById("modalGabarito");
  document.getElementById("btnGabarito").addEventListener("click", () => modal.classList.remove("oculto"));
  document.getElementById("fecharModal").addEventListener("click", () => modal.classList.add("oculto"));

  document.getElementById("liberar").addEventListener("click", () => {
    const senha = document.getElementById("senha").value.trim();
    if(senha === "2026"){
      montarGabarito();
      document.getElementById("gabaritoConteudo").classList.remove("oculto");
    } else {
      alert("Senha incorreta.");
    }
  });

  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js");
  }
});
