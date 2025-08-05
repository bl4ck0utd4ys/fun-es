const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você sobe no palco, o que te impulsiona?",
        alternativas: [
            {
                texto: "Eu sou o centro das atenções e adoro mostrar meu talento para o mundo!",
                diva: "Beyoncé" // Poder, presença e empoderamento.
            },
            {
                texto: "Eu sou única e exalo confiança, criando um show imersivo para todos.",
                diva: "Lady Gaga" // Inovação, estilo excêntrico e autenticidade.
            }
        ]
    },
    {
        enunciado: "Qual é o seu estilo de música preferido?",
        alternativas: [
            {
                texto: "Eu gosto de músicas dançantes com uma batida forte, algo que faz todo mundo dançar!",
                diva: "Rihanna" // Música pop e R&B com atitude e energia.
            },
            {
                texto: "Eu adoro músicas com letras profundas e vocais poderosos. A emoção é o que me move.",
                diva: "Adele" // Voz poderosa e emotiva, com uma conexão profunda com os fãs.
            }
        ]
    },
    {
        enunciado: "Qual dessas atitudes mais combina com você?",
        alternativas: [
            {
                texto: "A minha atitude é de autossuficiência. Não dependo de ninguém para brilhar.",
                diva: "Madonna" // Revolução, independência e quebras de tabus.
            },
            {
                texto: "Eu sou bem-humorada e adoro espalhar boas vibrações por onde passo.",
                diva: "Katy Perry" // Alegria, diversão e muita cor.
            }
        ]
    },
    {
        enunciado: "Você tem que escolher um visual para o seu grande show. Qual é o seu estilo?",
        alternativas: [
            {
                texto: "Roupas ousadas, cheias de brilho, glamour e que causam impacto!",
                diva: "Beyoncé" // Poder, força e presença de palco.
            },
            {
                texto: "Um estilo super fashion, misturando diferentes culturas e épocas para criar algo novo.",
                diva: "Lady Gaga" // Estilo excêntrico, único e artístico.
            }
        ]
    },
    {
        enunciado: "Como você lida com a fama?",
        alternativas: [
            {
                texto: "Eu sou uma lenda viva. A fama é minha, mas sempre com muito trabalho por trás.",
                diva: "Madonna" // Rainha do pop, sempre no controle da sua imagem.
            },
            {
                texto: "Eu não ligo para o que dizem. Eu sou eu mesma, e todos têm que aceitar isso.",
                diva: "Rihanna" // Rebeldia, atitude e liberdade para ser quem é.
            }
        ]
    },
    {
        enunciado: "Se você tivesse que fazer uma colaboração musical, qual seria sua escolha?",
        alternativas: [
            {
                texto: "Eu escolheria alguém com muita energia e que seja uma estrela como eu!",
                diva: "Beyoncé" // Poder em palco, colaboração com outras estrelas.
            },
            {
                texto: "Eu adoraria criar algo super criativo com um artista alternativo, algo fora da caixa.",
                diva: "Lady Gaga" // Colaborações artísticas e revolucionárias.
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let resultados = {
    "Beyoncé": 0,
    "Lady Gaga": 0,
    "Rihanna": 0,
    "Adele": 0,
    "Madonna": 0,
    "Katy Perry": 0
};

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    // Incrementa o contador da diva escolhida
    resultados[opcaoSelecionada.diva]++;
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    let divaPopEscolhida = Object.keys(resultados).reduce((a, b) => resultados[a] > resultados[b] ? a : b);

    caixaPerguntas.textContent = `Você é a ${divaPopEscolhida}!`;
    textoResultado.textContent = `Seu estilo e atitudes se alinham com a da diva ${divaPopEscolhida}, a verdadeira estrela pop!`;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
