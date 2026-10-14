/* Conteúdo público. Fontes e pendências ficam em revisao/, fora deste diretório. */
window.EVENTO = {
  registrationUrl: null,
  schedule: [
    ['07h00 – 07h30', 'Credenciamento e recepção dos participantes', ''],
    ['07h30 – 08h00', 'Abertura oficial e momento cultural', ''],
    ['08h00 – 08h30', 'Tecnologia na Indústria', 'Inovação e transformação digital na Corcovado Mineração.'],
    ['08h30 – 09h30', 'Roda de conversa', 'Profissões do Futuro — Tecnologia, Inteligência Artificial e Mercado de Trabalho.'],
    ['09h30 – 09h50', 'Intervalo para lanche', ''],
    ['09h50 – 10h00', 'Orientações e direcionamento para as oficinas', ''],
    ['10h00 – 11h30', 'Oficinas práticas', ''],
    ['11h30 – 12h10', 'Encerramento', '']
  ],
  afternoonSchedule: [
    ['13h00 – 13h30', 'Credenciamento e recepção dos participantes', ''],
    ['13h30 – 14h00', 'Abertura oficial e momento cultural', ''],
    ['14h00 – 14h30', 'Tecnologia no Setor Sucroenergético', 'Inovação e transformação digital na Usina Santa Maria.'],
    ['14h30 – 15h30', 'Roda de conversa', 'Profissões do Futuro — Tecnologia, Inteligência Artificial e Mercado de Trabalho.'],
    ['15h30 – 15h50', 'Intervalo para lanche', ''],
    ['15h50 – 16h00', 'Orientações e direcionamento para as oficinas', ''],
    ['16h00 – 16h40', 'Oficina 1', ''],
    ['16h40 – 17h25', 'Oficina 2', ''],
    ['17h25 – 17h35', 'Organização para o encerramento', ''],
    ['17h35 – 18h10', 'Encerramento', '']
  ],
  workshops: [
    {number:'01',title:'IA na Prática',subtitle:'criando, produzindo e resolvendo problemas',description:'Explore prompts, criação de textos e ideias e o uso da Inteligência Artificial no estudo e no trabalho, com atenção às informações falsas e às respostas inventadas.',person:'Iure Ramalho',photo:'iure',shift:'Manhã e tarde',place:'Laboratório de Informática',color:'lime',symbol:'✳'},
    {number:'02',title:'Cibersegurança',subtitle:'você está realmente seguro na internet?',description:'Reconheça phishing, golpes digitais, QR Codes falsos e riscos de exposição de dados. Discuta senhas, autenticação em dois fatores e hábitos mais seguros.',person:'Daniel Queiroz',photo:'daniel',shift:'Manhã e tarde',place:'Laboratório de Gestão e Negócios',color:'aqua',symbol:'↗'},
    {number:'03',title:'Design que Conecta',subtitle:'Canva, Marketing e Atendimento Digital',description:'Conheça princípios de comunicação visual, cores, tipografia e hierarquia. Explore o Canva, a criação de posts e o atendimento e a comunicação com clientes.',person:'Agamo Alves · manhã / Mateus Orange · tarde',shift:'Manhã e tarde',place:'Laboratório de Humanas',color:'gold',symbol:'◒'},
    {number:'04',title:'Conexão Tech',subtitle:'oportunidades, escolhas e futuro profissional',description:'Converse sobre profissões em tecnologia, caminhos de formação, empreendedorismo digital e formas de construir experiência ainda no ensino médio.',person:'Hermano Andrade',photo:'hermano',shift:'Manhã e tarde',place:'Teatro do CETEP',color:'orange',symbol:'↗'}
  ],
  guests:[
    {name:'Jordia Pinheiro',image:'jordia',role:'Roda de conversa',shift:'Manhã'},
    {name:'Julian Rigo',image:'julian',role:'Roda de conversa',shift:'Manhã'},
    {name:'Hermano Andrade',image:'hermano',role:'Roda de conversa',shift:'Manhã e tarde'},
    {name:'Cris Machado',image:'cris',role:'Mediação',shift:'Manhã'},
    {name:'Hevelyn Bravin',image:'hevelyn',role:'Aluna do Curso Técnico em Informática',shift:''},
    {name:'Kamyla Beatriz',image:'kamyla',role:'Ex-aluna do Curso Técnico em Informática',shift:''}
  ],
  partners: [
    {name:'ADEX',image:'assets/patrocinador-adex.webp',category:'Patrocinador'},
    {name:'Corcovado Granito',image:'assets/patrocinador-corcovado.webp',category:'Patrocinador'},
    {name:'Maderi Informática',image:'assets/patrocinador-maderi.webp',category:'Patrocinador'},
    {name:'Prefeitura Municipal de Medeiros Neto',image:'assets/patrocinador-prefeitura.webp',category:'Patrocinador'},
    {name:'Secretaria de Cultura',image:'assets/patrocinador-cultura.webp',category:'Patrocinador'},
    {name:'Secretaria Municipal de Educação',image:'assets/patrocinador-educacao.webp',category:'Patrocinador'},
    {name:'TI Connecting',image:'assets/patrocinador-ti-connecting.webp',category:'Patrocinador'},
    {name:'Usina Santa Maria',image:'assets/patrocinador-usina.webp',category:'Patrocinador'},
    {name:'Vereador Déo',image:'assets/patrocinador-deo.webp',category:'Patrocinador'}
  ]
};
