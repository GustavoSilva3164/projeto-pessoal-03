const basePersonagens = [
  { nome: "Future Princess", classe: "Tank", img: "src/img/Future_Princess.png" },
  { nome: "Oghma", classe: "Tank", img: "src/img/oghma.png" },
  { nome: "Marina", classe: "Tank", img: "src/img/Marina.png" },
  { nome: "Craig", classe: "Tank", img: "src/img/craig.png" },
  { nome: "Beth", classe: "Melee DPS", img: "src/img/Beth.png" },
  { nome: "Lilith", classe: "Melee DPS", img: "src/img/lilith.png" },
  { nome: "Bianca", classe: "Melee DPS", img: "src/img/Bianca.png" },
  { nome: "Plitvice", classe: "Melee DPS", img: "src/img/plitivice.png" },
  { nome: "Tinia", classe: "Ranged DPS", img: "src/img/Tinia.png" },
  { nome: "Nari", classe: "Ranged DPS", img: "src/img/Nari.png"  },
  { nome: "Garam", classe: "Ranged DPS", img: "src/img/garam.png" },
  { nome: "Arabelle", classe: "Ranged DPS", img: "src/img/Arabelle.png" },
  { nome: "Miya", classe: "Support", img: "src/img/Miya.png" },
  { nome: "Eleanor", classe: "Support", img: "src/img/eleanor.png" },
  { nome: "Gabriela", classe: "Support", img: "src/img/gabriela.png" },
  { nome: "Verónica", classe: "Support", img: "src/img/veronica.png" }
];

const tierData = {
  pve:     ["S", "A", "A", "A", "S", "A", "B", "B", "B", "B", "A", "B", "S", "B", "A", "C"],
  coliseu: ["S", "A", "A", "S", "B", "A", "B", "C", "C", "B", "B", "B", "A", "A", "A", "C"],
  arena:   ["S", "A", "B", "C", "S", "S", "A", "B", "S", "A", "A", "B", "C", "A", "B", "C"],
  raid:    ["B", "S", "B", "D", "S", "S", "A", "B", "S", "B", "S", "A", "B", "A", "A", "C"],
  kamazon: ["A", "A", "A", "A", "A", "B", "B", "C", "A", "B", "B", "B", "S", "A", "A", "B"]
};

const rankings = {};

for (let modo in tierData) {
  rankings[modo] = basePersonagens.map((personagem, index) => ({
    pos: index + 1,
    nome: personagem.nome,
    classe: personagem.classe,
    tier: tierData[modo][index],
    img: personagem.img
  }));
}

function showRanking(mode) {
  const tbody = document.getElementById("ranking-body");
  const title = document.getElementById("ranking-title");
  title.textContent = `Ranking - ${mode.charAt(0).toUpperCase() + mode.slice(1)}`;
  tbody.innerHTML = "";
  rankings[mode].forEach(guardiao => {
    const row = `
      <tr>
        <td>${guardiao.pos}</td>
        <td class="guardiao-cell">
          <img src="${guardiao.img}" alt="${guardiao.nome}" class="hero-img">
          <span>${guardiao.nome}</span>
        </td>
        <td>${guardiao.classe}</td>
        <td>${guardiao.tier}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

window.onload = () => showRanking("pve");

function showTab(tab) {
  const tabs = ['ranking-tab', 'builds-tab'];
  document.getElementById("ranking-title").textContent =
    tab === 'builds' ? 'Builds por Guardião' : `Ranking - ${tab.charAt(0).toUpperCase() + tab.slice(1)}`;

  document.getElementById('ranking-tab').style.display = tab === 'builds' ? 'none' : 'block';
  document.getElementById('builds-tab').style.display = tab === 'builds' ? 'block' : 'none';

  if (tab !== 'builds') showRanking(tab);
}
