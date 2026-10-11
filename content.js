/* Conteúdo público. Fontes e pendências ficam em revisao/, fora deste diretório. */
window.EVENTO = {
  registrationUrl: null,
  schedule: [
    ['7h às 8h', 'Credenciamento', 'Recepção e registro de presença.'],
    ['8h às 8h30', 'Abertura + momento cultural', 'Acolhida oficial e apresentação cultural.'],
    ['8h30 às 9h30', 'Roda de conversa', 'Profissões do Futuro: como a tecnologia e a Inteligência Artificial estão transformando o mercado de trabalho.'],
    ['9h30 às 9h50', 'Intervalo / lanche', 'Pausa nas atividades.'],
    ['9h50 às 10h', 'Orientações', 'Retorno ao teatro para orientações sobre as oficinas.'],
    ['10h às 10h45', '1ª rodada de oficinas', 'Atividades nos laboratórios e no teatro.'],
    ['10h45 às 11h30', '2ª rodada de oficinas', 'Repetição das oficinas para novo público, conforme horário escolhido na Even3.'],
    ['11h30 às 12h10', 'Encerramento oficial', 'Agradecimentos, reconhecimento aos colaboradores e parceiros, brindes, foto oficial e fala final.']
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
