/**
 * BANCO DE DADOS COMPARTILHADO DE CARROS CLÁSSICOS BRASILEIROS E IMPORTADOS
 * 
 * Contém a ficha técnica completa, descrições e caminhos das imagens
 * de todos os 34 veículos cadastrados no sistema.
 * 
 * Cada carro possui:
 * - nome: Nome completo do modelo
 * - ano: Período de fabricação ou ano do modelo
 * - fabricante: Marca fabricante do veículo
 * - descCurta: Breve resumo comercial para os cards do catálogo
 * - desc: Histórico completo e detalhado do modelo
 * - fotos: Array com os caminhos das imagens (galeria de fotos)
 * - tecnicos: Ficha técnica (Motor, Potência, Câmbio)
 */

const carrosDados = {
    fusca: {
        nome: 'Volkswagen Fusca',
        ano: '1959-1986',
        fabricante: 'Volkswagen',
        descCurta: 'O ícone absoluto da indústria automobilística brasileira, lembrado por sua durabilidade mecânica e simplicidade.',
        desc: 'O Fusca começou a ser montado no Brasil em 1953, com peças importadas, mas em 1959 passou a ser fabricado nacionalmente. Tornou-se o carro mais vendido do país por décadas, sendo um símbolo de resistência, simplicidade e praticidade que moldou o trânsito nacional.',
        fotos: ['./imagens/fusca.webp'],
        tecnicos: { motor: 'Boxer 1300/1500/1600 (Ar)', potencia: '46 a 65 cv', cambio: 'Manual de 4 marchas' }
    },
    opala: {
        nome: 'Chevrolet Opala',
        ano: '1968-1992',
        fabricante: 'Chevrolet',
        descCurta: 'O Opala marcou gerações no Brasil. Com design incrivelmente elegante, tornou-se o maior ícone esportivo da GM.',
        desc: 'Apresentado no Salão do Automóvel de 1968, o Opala mesclava a carroceria do Opel Rekord europeu com a mecânica consagrada do Chevrolet Nova americano. Foi o sedã e cupê de luxo mais desejado, respeitado e bem-sucedido de sua época.',
        fotos: ['./imagens/opala_1978.webp'],
        tecnicos: { motor: '4 cilindros (2.5) ou 6 cilindros (4.1)', potencia: 'Até 171 cv (SS)', cambio: 'Manual de 3/4 marchas ou Automático' }
    },
    opala_1962: {
        nome: 'Chevrolet Opala 1962',
        ano: '1962',
        fabricante: 'Chevrolet',
        descCurta: 'Uma conceitualização artística e customizada que homenageia as origens do clássico mais amado do Brasil.',
        desc: 'O Chevrolet Opala 1962 é uma belíssima customização conceitual que une a carroceria clássica de traços sessentistas ao espírito indomável que viria a definir o Opala a partir de 1968. Com acabamento cromado reluzente, pintura em tom pastel vintage e calotas clássicas, este modelo representa a era dourada do design automotivo.',
        fotos: ['./imagens/opala/opala_1962.png'],
        tecnicos: { motor: '4 cilindros (2.5) de alta confiabilidade', potencia: '90 cv', cambio: 'Manual de 3 marchas na coluna' }
    },
    corcel: {
        nome: 'Ford Corcel',
        ano: '1968-1986',
        fabricante: 'Ford',
        descCurta: 'Hatchback compacto da Ford de imenso sucesso, muito aclamado por seu consumo econômico de combustível.',
        desc: 'Herdado da aquisição da Willys Overland do Brasil pela Ford, o projeto originalmente era da Renault. Lançado em 1968, o Corcel inovou trazendo tração dianteira, segurança exemplar e um rodar silencioso e confortável que cativou as famílias brasileiras.',
        fotos: ['./imagens/corcel.jpg.webp'],
        tecnicos: { motor: '1.3, 1.4 e 1.6 (CHT)', potencia: '68 a 90 cv', cambio: 'Manual de 4 ou 5 marchas' }
    },
    fiat147: {
        nome: 'Fiat 147',
        ano: '1976-1986',
        fabricante: 'Fiat',
        descCurta: 'O pioneiro Fiat 147, primeiro hatchback fabricado no país, foi um marco na história da Fiat.',
        desc: 'O modelo que inaugurou a fábrica da Fiat em Betim, MG. Revolucionou o mercado brasileiro com seu excelente aproveitamento de espaço interno, estepe posicionado no cofre do motor e foi o primeiro carro nacional de produção movido a etanol.',
        fotos: ['./imagens/fiat_147.webp'],
        tecnicos: { motor: '1050 ou 1300', potencia: '55 a 62 cv', cambio: 'Manual de 4 marchas' }
    },
    landau: {
        nome: 'Ford Landau',
        ano: '1973-1979',
        fabricante: 'Ford',
        descCurta: 'Definiu o segmento de super luxo no Brasil, oferecendo conforto digno de limusines e imponência.',
        desc: 'Derivado do Galaxie, o Landau era o suprassumo do luxo brasileiro nos anos 70 e 80. Transportou presidentes da república e era reverenciado por sua rodagem macia incomparável que parecia "flutuar" sobre o asfalto nacional.',
        fotos: ['./imagens/ford_landau1980.webp'],
        tecnicos: { motor: 'V8 302 (5.0L)', potencia: '199 cv', cambio: 'Manual de 3 marchas ou Automático' }
    },
    maverick: {
        nome: 'Ford Maverick',
        ano: '1973-1979',
        fabricante: 'Ford',
        descCurta: 'O verdadeiro "Muscle Car" da Ford no país. Com um ronco inconfundível, tornou-se o sonho de velocidade.',
        desc: 'Lançado para competir diretamente com o Opala, o Maverick fez sucesso imediato nas pistas and nas ruas. A versão GT equipada com o estrondoso motor V8 é, até hoje, um dos esportivos clássicos mais cobiçados e valiosos do Brasil.',
        fotos: ['./imagens/ford_maverick_1973.jpg'],
        tecnicos: { motor: '4 cilindros (2.3) ou V8 (302)', potencia: 'Até 199 cv', cambio: 'Manual de 4 marchas' }
    },
    alfa_romeo_164: {
        nome: 'Alfa Romeo 164 Super',
        ano: '1995',
        fabricante: 'Alfa Romeo',
        descCurta: 'Sedan executivo italiano com design Pininfarina, lembrado pelo motor Busso V6 glorioso e alto luxo.',
        desc: 'Importado ao Brasil nos anos 90 com a abertura das importações, o 164 redefiniu o segmento de sedãs de luxo no país com seu comportamento dinâmico afiado, eletrônica avançada e o incomparável ronco de seu V6 italiano.',
        fotos: ['./imagens/alfa_romeo_164_super_1995.webp'],
        tecnicos: { motor: 'Busso V6 3.0 24V', potencia: '210 cv', cambio: 'Manual de 5 marchas' }
    },
    chrysler_300c: {
        nome: 'Chrysler 300C V6',
        ano: '2009',
        fabricante: 'Chrysler',
        descCurta: 'Sedã de porte grande americano com design musculoso de cintura alta e extremo luxo.',
        desc: 'Um dos sedãs de luxo mais imponentes dos anos 2000, conquistou o mercado internacional trazendo visual agressivo que lembra clássicos de gângsteres, aliado a um acabamento refinado de alto padrão e muito espaço interno.',
        fotos: ['./imagens/chrysler_300_c_3.5_v6_2009.webp'],
        tecnicos: { motor: 'V6 3.5 High Output', potencia: '249 cv', cambio: 'Automático de 5 marchas' }
    },
    dodge_charger_1969: {
        nome: 'Dodge Charger R/T (EUA)',
        ano: '1969',
        fabricante: 'Dodge',
        descCurta: 'O lendário muscle car americano de visual agressivo com grade oculta e motor V8 gigante.',
        desc: 'Famoso no cinema e nas pistas de arrancada mundiais, o Charger R/T de 1969 representa o ápice absoluto da era dourada dos muscle cars americanos, esbanjando visual intimidador de cintura larga e suspensão reforçada.',
        fotos: ['./imagens/dodge_charger_r_t_1969.webp'],
        tecnicos: { motor: 'V8 440 Magnum (7.2L)', potencia: '375 cv', cambio: 'Manual de 4 marchas' }
    },
    dodge_charger_1975: {
        nome: 'Dodge Charger R/T',
        ano: '1975',
        fabricante: 'Dodge',
        descCurta: 'O mais potente e cobiçado esportivo de luxo nacional dos anos 70, com o ronco do V8 318.',
        desc: 'Fabricado nacionalmente pela Chrysler do Brasil em São Bernardo do Campo, trazia teto de vinil, interior luxuoso e era o maior símbolo de status e velocidade das estradas brasileiras nos anos 70.',
        fotos: ['./imagens/dodge_charger_r_t_1975.webp'],
        tecnicos: { motor: 'V8 318 (5.2L)', potencia: '215 cv', cambio: 'Manual de 4 marchas' }
    },
    ferrari_348: {
        nome: 'Ferrari 348 TB',
        ano: '1992',
        fabricante: 'Ferrari',
        descCurta: 'Superesportivo italiano de motor V8 central e design agressivo inspirado na lendária Testarossa.',
        desc: 'Sucessora direta da 328, a 348 TB combinava alto desempenho de pista com entradas de ar laterais aletadas marcantes da estética italiana dos anos 90, sendo equipada com chassi monocoque inovador para a Ferrari.',
        fotos: ['./imagens/ferrari_348_tb_1992.webp'],
        tecnicos: { motor: 'V8 3.4L 32V', potencia: '300 cv', cambio: 'Manual de 5 marchas' }
    },
    fiat_500: {
        nome: 'Fiat 500 (Cinquecento)',
        ano: '1975',
        fabricante: 'Fiat',
        descCurta: 'O carismático microcarro italiano amado mundialmente por suas dimensões e charme urbano.',
        desc: 'Um dos designs mais amigáveis e eficientes da história automotiva, o Cinquecento motorizou a Itália no pós-guerra e tornou-se um ícone pop atemporal da praticidade urbana em todo o mundo.',
        fotos: ['./imagens/fiat_500_1975_cinquecento.webp'],
        tecnicos: { motor: '2 cilindros 594cc', potencia: '18 cv', cambio: 'Manual de 4 marchas' }
    },
    fiat_tipo: {
        nome: 'Fiat Tipo SLX 2.0',
        ano: '1995',
        fabricante: 'Fiat',
        descCurta: 'Hatchback médio italiano que oferecia teto solar, muito espaço e redefiniu o mercado nos anos 90.',
        desc: 'Importado pela Fiat do Brasil, o Tipo foi um campeão de vendas absoluto, surpreendendo a concorrência pelo seu altíssimo nível de equipamentos, porta-malas generoso e modernidade que chocou o mercado nacional.',
        fotos: ['./imagens/fiat_tipo_slx_2.0_1995.webp'],
        tecnicos: { motor: '2.0 8V', potencia: '109 cv', cambio: 'Manual de 5 marchas' }
    },
    fiat_uno_16r: {
        nome: 'Fiat Uno 1.6 R',
        ano: '1992',
        fabricante: 'Fiat',
        descCurta: 'O icônico esportivo nacional da Fiat com faixas decorativas e cintos vermelhos esportivos.',
        desc: 'Conhecido pela agilidade incrível e peso extremamente reduzido, o Uno 1.6 R era um esportivo altamente divertido para a cidade com excelente acerto de suspensão traseira independente.',
        fotos: ['./imagens/fiat_uno_1.6_r_1992.webp'],
        tecnicos: { motor: '1.6 Sevel', potencia: '88 cv', cambio: 'Manual de 5 marchas' }
    },
    fiat_uno_mille: {
        nome: 'Fiat Uno Mille EP',
        ano: '1996',
        fabricante: 'Fiat',
        descCurta: 'O carro popular definitivo do Brasil nos anos 90, recordista de economia e robustez.',
        desc: 'A versão EP ("Extra Performance") trouxe a moderna tecnologia de injeção eletrônica monoponto ao motor popular Fiasa 1.0, dominando as garagens e as ruas do país por décadas graças à sua manutenção barata.',
        fotos: ['./imagens/fiat_uno_mille_ep_1996.webp'],
        tecnicos: { motor: 'Fiasa 1.0 SPI', potencia: '57 cv', cambio: 'Manual de 5 marchas' }
    },
    ford_escort_xr3: {
        nome: 'Ford Escort XR3 Conversível',
        ano: '1991',
        fabricante: 'Ford',
        descCurta: 'O cobiçado conversível esportivo com capota montada pela lendária Karmann-Ghia.',
        desc: 'O maior símbolo de status jovem do mercado nacional nos anos 80 e 90, combinando a capota de tecido de acionamento manual eletro-hidráulico alemã com o conceituado motor AP de alta confiabilidade.',
        fotos: ['./imagens/ford_escort_xr3_conversivel_1991.webp'],
        tecnicos: { motor: '1.8 AP (Autolatina)', potencia: '99 cv', cambio: 'Manual de 5 marchas' }
    },
    ford_explorer: {
        nome: 'Ford Explorer Sport 4x4',
        ano: '1998',
        fabricante: 'Ford',
        descCurta: 'SUV americana robusta de duas portas com excelente capacidade fora de estrada.',
        desc: 'Líder de vendas da febre americana de SUVs nos anos 90, a versão Sport de duas portas trazia visual aventureiro compacto combinado com motor V6 potente e tração integral com acionamento por botão.',
        fotos: ['./imagens/ford_explorer_sport_v6_4x4_1998.webp'],
        tecnicos: { motor: 'V6 4.0L Cologne', potencia: '162 cv', cambio: 'Automático de 4 marchas' }
    },
    ford_f150: {
        nome: 'Ford F-150 Flareside',
        ano: '1992',
        fabricante: 'Ford',
        descCurta: 'Rara picape de caçamba esportiva estreita com para-lamas alargados e visual retrô impecável.',
        desc: 'Uma das configurações mais cobiçadas da F-150 norte-americana nos anos 90, unindo a força do motor V8 com acabamento elegante XLT Lariat e caçamba Flareside esportiva diferenciada.',
        fotos: ['./imagens/ford_f_150_xlt_lariat_flare_side_1992.webp'],
        tecnicos: { motor: 'V8 302 (5.0L)', potencia: '185 cv', cambio: 'Automático de 4 marchas' }
    },
    ford_f250_diesel: {
        nome: 'Ford F-250 Max Power Diesel',
        ano: '2009',
        fabricante: 'Ford',
        descCurta: 'A colossal picape pesada nacional movida pelo torque brutal do motor Cummins Turbo Diesel.',
        desc: 'Amplamente venerada pela força bruta no campo e presença imponente nas estradas brasileiras, consagrando-se como a picape mais pesada e desejada do país nos anos 2000.',
        fotos: ['./imagens/ford_f_250_3.9_xlt_max_power_4x4_cs_diesel_2009.webp'],
        tecnicos: { motor: 'Cummins 3.9 Turbo Diesel', potencia: '203 cv', cambio: 'Manual de 5 marchas' }
    },
    ford_f250_xlt: {
        nome: 'Ford F-250 XLT',
        ano: '2001',
        fabricante: 'Ford',
        descCurta: 'Picape de grande porte nacional com motor MWM de seis cilindros e rodar macio incomparável.',
        desc: 'Introduzida para suceder a F-1000, a F-250 conquistou o público pela cabine extremamente confortável, imponência, mecânica indestrutível e robustez nas fazendas nacionais.',
        fotos: ['./imagens/ford_f_250_xlt_2001.webp'],
        tecnicos: { motor: 'MWM Sprint 6 cil. Turbo Diesel', potencia: '180 cv', cambio: 'Manual de 5 marchas' }
    },
    ford_f75: {
        nome: 'Ford F-75 Pick-Up',
        ano: '1979',
        fabricante: 'Ford',
        descCurta: 'A picape utilitária herdeira da Rural Willys, pilar do trabalho rural no interior brasileiro.',
        desc: 'Originalmente desenvolvida pela Willys Overland e posteriormente fabricada pela Ford, a F-75 era adorada pela robustez e mecânica simples ideal para lama, sendo o principal esteio da agricultura familiar.',
        fotos: ['./imagens/ford_f_75_2.3_4x4_pick_up_1979.webp'],
        tecnicos: { motor: '4 cilindros OHC 2.3', potencia: '90 cv', cambio: 'Manual de 4 marchas' }
    },
    ford_galaxie_1968: {
        nome: 'Ford Galaxie 500',
        ano: '1968',
        fabricante: 'Ford',
        descCurta: 'O máximo luxo automotivo nacional dos anos 60, famoso pelo rodar incrivelmente silencioso.',
        desc: 'Um dos maiores clássicos brasileiros de todos os tempos, oferecendo cabine gigante digna de limousine e direção hidráulica super macia incomparável na época de seu lançamento.',
        fotos: ['./imagens/ford_galaxie_500_1968.webp'],
        tecnicos: { motor: 'V8 272 (4.5L)', potencia: '164 cv', cambio: 'Manual de 3 marchas na coluna' }
    },
    ford_galaxie_ltd: {
        nome: 'Ford Galaxie LTD (EUA)',
        ano: '1965',
        fabricante: 'Ford',
        descCurta: 'Sedã americano luxuoso de linhas sóbrias que serviu de base para a vinda do Galaxie nacional.',
        desc: 'O LTD representava o pináculo do luxo da Ford nos EUA, trazendo acabamento requintado com painel imitando jacarandá que inspirou as gerações de Galaxie montadas em São Bernardo.',
        fotos: ['./imagens/ford_galaxie_500_ltd_1965.webp'],
        tecnicos: { motor: 'V8 289 (4.7L)', potencia: '200 cv', cambio: 'Automático Cruis-O-Matic' }
    },
    ford_jeep: {
        nome: 'Ford Jeep CJ-5',
        ano: '1972',
        fabricante: 'Ford',
        descCurta: 'O lendário jipe com tração 4x4 e caixa de redução capaz de enfrentar qualquer trilha.',
        desc: 'Desenvolvido sob herança militar da Willys e depois adotado pela Ford, o CJ-5 tornou-se o principal veículo off-road nacional para terrenos extremos de estradas de terra.',
        fotos: ['./imagens/ford_jeep_cj_5_1972.webp'],
        tecnicos: { motor: '6 cilindros Willys BF-161', potencia: '90 cv', cambio: 'Manual de 3 marchas' }
    },
    ford_mustang_1969_conv: {
        nome: 'Ford Mustang GT Conversível',
        ano: '1969',
        fabricante: 'Ford',
        descCurta: 'Lendário pony car americano conversível com a agressiva e cobiçada frente de 1969.',
        desc: 'Combinando motor V8 potente e teto conversível automático, o Mustang 1969 representava o sonho de liberdade e velocidade sob o sol da Califórnia, com as novas quatro lanternas frontais.',
        fotos: ['./imagens/ford_mustang_conversivel_gt_v8_1969.webp'],
        tecnicos: { motor: 'V8 351 Windsor (5.8L)', potencia: '290 cv', cambio: 'Automático de 3 marchas' }
    },
    ford_mustang_1968_hard: {
        nome: 'Ford Mustang Hardtop GT',
        ano: '1968',
        fabricante: 'Ford',
        descCurta: 'O clássico cupê de linhas equilibradas que se tornou um dos maiores mitos do cinema mundial.',
        desc: 'Redesenhado sutilmente in 1968 com novas lanternas e frisos, este Mustang consolidou a dinastia esportiva da Ford globalmente, sendo admirado pela cabine cockpit.',
        fotos: ['./imagens/ford_mustang_hard_top_gt_1968.webp'],
        tecnicos: { motor: 'V8 302 (5.0L)', potencia: '230 cv', cambio: 'Manual de 4 marchas' }
    },
    ford_mustang_1969_mach1: {
        nome: 'Ford Mustang Mach 1',
        ano: '1969',
        fabricante: 'Ford',
        descCurta: 'Esportivo lendário Fastback com suspensão de competição e capô preto fosco intimidador.',
        desc: 'Projetado como pacote esportivo oficial de alta performance, o Mach 1 trazia faixas refletivas laterais e visual agressivo digno das pistas de arrancada norte-americanas.',
        fotos: ['./imagens/ford_mustang_mach_1_1969.webp'],
        tecnicos: { motor: 'V8 351 Windsor 4V', potencia: '290 cv', cambio: 'Manual de 4 marchas' }
    },
    ford_ranger_splash: {
        nome: 'Ford Ranger Splash',
        ano: '1995',
        fabricante: 'Ford',
        descCurta: 'Picape esportiva com caçamba de para-lamas alargados que ditou a moda jovem dos anos 90.',
        desc: 'Raríssima e importada dos EUA, a Ranger Splash trazia cores vibrantes e visual personalizado de fábrica extremamente cobiçado no litoral brasileiro pela juventude dos anos 90.',
        fotos: ['./imagens/ford_ranger_splash_1995.webp'],
        tecnicos: { motor: 'V6 4.0L OHV', potencia: '162 cv', cambio: 'Automático de 4 marchas' }
    },
    ford_1932_coupe: {
        nome: 'Ford Sport Coupe V8 (1932)',
        ano: '1932',
        fabricante: 'Ford',
        descCurta: 'O revolucionário "Model 18", primeiro carro popular a trazer o motor V8 Flathead em massa.',
        desc: 'Lançado no início da década de 1932, o icônico Ford V8 tornou-se a base favorita para a cultura Hot Rod mundial devido à facilidade de preparação e mecânica simples.',
        fotos: ['./imagens/ford_sport_coupe_v8_1932.webp'],
        tecnicos: { motor: 'V8 Flathead (3.6L)', potencia: '65 cv', cambio: 'Manual de 3 marchas' }
    },
    ford_thunderbird_1991: {
        nome: 'Ford Thunderbird Coupe',
        ano: '1991',
        fabricante: 'Ford',
        descCurta: 'Sofisticado cupê de luxo aerodinâmico americano com visual futurista dos anos 90.',
        desc: 'A décima geração do Thunderbird destacou-se pela suspensão traseira independente de alta performance, excelente coeficiente aerodinâmico e muito conforto a bordo em longas rodovias.',
        fotos: ['./imagens/thunderbirdcoupev61991_3.jpg.webp'],
        tecnicos: { motor: 'V6 3.8L Essex', potencia: '142 cv', cambio: 'Automático de 4 marchas' }
    },
    gurgel_motomachine: {
        nome: 'Gurgel Motomachine',
        ano: '1992',
        fabricante: 'Gurgel',
        descCurta: 'Microcarro urbano brasileiro futurista com portas de acrílico transparentes e cabine aberta.',
        desc: 'Uma das criações mais geniais de João Gurgel, projetada para ser um veículo pessoal leve, altamente econômico, com chassi rígido e de fácil estacionamento urbano.',
        fotos: ['./imagens/gurgel_motomachine_1992.webp'],
        tecnicos: { motor: 'Enertron 800cc (boxer)', potencia: '36 cv', cambio: 'Manual de 4 marchas' }
    },
    gurgel_x12: {
        nome: 'Gurgel X12',
        ano: '1989',
        fabricante: 'Gurgel',
        descCurta: 'Jipe leve nacional de fibra de vidro plasteel, altamente capaz em terrenos off-road.',
        desc: 'Construído sob patentes exclusivas do pioneiro João Gurgel, trazia chassi Plasteel e freio Selectraction inovador que permitia travar rodas traseiras individualmente para sair de atoleiros.',
        fotos: ['./imagens/gurgel_x12_1989.webp'],
        tecnicos: { motor: 'Boxer 1600 (ar)', potencia: '60 cv', cambio: 'Manual de 4 marchas' }
    },
    land_rover_defender_130: {
        nome: 'Land Rover Defender 130',
        ano: '2004',
        fabricante: 'Land Rover',
        descCurta: 'A versão picape cabine dupla militar extrema feita para expedições globais difíceis.',
        desc: 'Construída sobre chassi de 130 polegadas de entre-eixos, esta Land Rover Defender de cabine dupla é a força pesada favorita de equipes de apoio e expedições científicas em florestas e desertos.',
        fotos: ['./imagens/land_rover_defender_130_2004.webp'],
        tecnicos: { motor: '2.5 Turbo Diesel Td5', potencia: '122 cv', cambio: 'Manual de 5 marchas' }
    },
    land_rover_defender_110: {
        nome: 'Land Rover Defender 110',
        ano: '2007',
        fabricante: 'Land Rover',
        descCurta: 'O jipe britânico utilitário puro e quadrado de visual lendário e indestrutível.',
        desc: 'Ícone universal de exploração geográfica e travessias no barro, construído com painéis de alumínio rebitados que resistem à ferrugem e intempéries do tempo.',
        fotos: ['./imagens/land_rover_defender_2.4_110_2007.webp'],
        tecnicos: { motor: '2.4 Turbo Diesel Duratorq', potencia: '122 cv', cambio: 'Manual de 6 marchas' }
    },
    opala_ss_1980: {
        nome: 'Chevrolet Opala SS',
        ano: '1980',
        fabricante: 'Chevrolet',
        descCurta: 'O clássico esportivo nacional em sua versão SS, com o lendário motor 250-S.',
        desc: 'O Chevrolet Opala SS de 1980 representa a esportividade clássica brasileira. Equipado com o consagrado motor de 6 cilindros em linha 4.1 (250-S), trazia acabamento exclusivo, faixas esportivas e o visual marcante que consolidou o Opala como o maior ícone de desempenho de sua época.',
        fotos: ['./imagens/CHEVROLET OPALA SS - 1980.webp'],
        tecnicos: {
            motor: '6 cilindros em linha (4.1 250-S)',
            potencia: '171 cv',
            cambio: 'Manual de 4 marchas'
        }
    },
    silverado_1995: {
        nome: 'Chevrolet Silverado 2500 V8',
        ano: '1995',
        fabricante: 'Chevrolet',
        descCurta: 'Picape de grande porte americana com motor V8, sinônimo de força e robustez.',
        desc: 'A Chevrolet Silverado 2500 V8 de 1995 é uma das picapes de grande porte mais respeitadas de sua era. Equipada com o poderoso motor V8 454 (7.4L), tornou-se uma referência de torque, durabilidade e capacidade de carga, conquistando admiradores no campo e na cidade pelo seu porte robusto e rodar confortável.',
        fotos: ['./imagens/CHEVROLET SILVERADO 2500 V8 - 454 - 1995.webp'],
        tecnicos: {
            motor: 'V8 454 (7.4L)',
            potencia: '230 cv',
            cambio: 'Automático de 4 marchas'
        }
    }
};

// Vincula a variável globalmente para máxima compatibilidade entre contextos
window.carros = carrosDados;
const carros = carrosDados;
