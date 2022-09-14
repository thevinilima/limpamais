# Limpa Mais

*   Augusto Fuscaldi Cerezo
*   Daniel Estevam Pacheco de Souza  
*   Gabriel Augusto Souza Borges
*   Ivan Francisco de Oliveira Junior
*   Marcus Viniccius Souza de Freitas
*   Rafael Pierre Martins
*   Vinicius Assis Lima

---

Professores:

*   Hugo Bastos de Paula
*   Felipe Augusto Lima Reis
*   Cristiano Geraldo Teixeira Silva

---

_Curso de Engenharia de Software, Unidade Praça da Liberdade_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

**Resumo**. Muitas pessoas apresentam a dificuldade de encontrar diaristas de maneira formal. Com esse intuito, nossa equipe decidiu desenvolver uma plataforma que facilite o contato entre o contratante e o contratado.

---


## 1. Introdução

   1.1 Contextualização
    
   Uma plataforma onde o contratante solicita o serviço de limpeza de um empregado doméstico / empresarial . Uma Pessoa Física ou Jurídica cadastra a solicitação de serviço de limpeza na plataforma e empregados cadastrados na mesma, podem visualizar propostas na região , podendo aceitá-las ou recusá-las. A partir do momento em que o empregado aceita a proposta , ele consegue acesso ao número do contratante para alinhar a prestação do serviço.

   1.2 Problema

   Muitas pessoas que possuem a necessidade de contratar diaristas , passam dificuldades em encontra-las. Já diaristas encontram dificuldades em alcançar novos clientes , visto que, muitas vezes as diaristas são contratadas de maneira informal ou por indicação.

   1.3 Objetivo geral

   O objetivo do projeto Limpa + é integrar e simplificar a conexão entre diaristas e contratantes, proporcionando uma experiência rápida e acessível para facilitar a contratação de serviços de limpeza e promover o trabalho de diaristas que desejam ter um maior alcance na sua área de atuação.

      1.3.1 Objetivos específicos
        
    Facilitar a comunicação entre diarista e contratante.

   1.4 Justificativas

   O projeto se torna necessário pois, atualmente, econtra-se dificuldades na descoberta de profissionais de limpeza com rapidez e simplicidade, principalmente quando não há indicação.


## 2. Participantes do processo

Stakes Holders mais interessados no projeto seriam Diaristas, Contratantes Individuais e Organizações Contratantes. Os menos interessados são: O time de Desenvolvedores, Investidores e o Mercado de Produtos de Limpeza.

## 3. Modelagem do processo de negócio

### 3.1. Análise da situação atual

O serviço mais próximo e conhecido do processo que vamos oferecer é o GetNinjas, ele funciona como um site onde você encontra diversos serviços de atendimento doméstico, desde encanador a eletricista e pode solicitar o serviço desejado através do contato direto com o prestador do serviço.

A seguir histórias de pessoas que poderiam ser beneficiadas com o sistema do Limpa Mais.

Usuário Pessoa Jurídica: Best Bikes é uma empresa de aluguel de bicicletas localizada na região da Pampulha em Belo Horizonte. Com o grande fluxo de clientes que solicitam os serviços da empresa, o local fica extremamente sujo nos dias de segunda-feira em que a empresa não abre. E como nenhum funcionário trabalha neste dia, a limpeza estava ficando a cargo do dono. Por motivos de tempo, desorganização sanitária e exaustão, a Best Bikes decidiu contratar diaristas freelancers para atuar toda segunda-feira no estabelecimento. Para isso, a Limpa Mais foi a escolhida para tal por ser uma intermediadora fácil entre contratante e contratado para esse tipo específico de situação.

Usuário Pessoa Física: O usuário Eduardo se mudou recentemente para Belo Horizonte e está precisando de um diarista para realizar a limpeza de sua casa. Ele não possui network em sua cidade nova e está sem tempo para procurar por indicações. Por isso decidiu acessar o Site Limpa Mais, que facilita e agiliza o processo de encontrar prestadores de serviços de limpeza. Utilizando os sistema de filtros e pesquisa que são oferecidos pelo site, Eduardo encontrou o diarista que se encaixa  melhor com o seu perfil e localização. Após isso, foi feito o agendamento para conclusão da limpeza e Eduardo resolveu seu problema de encontrar diaristas.

Usuário Diarista: A usuária Patrícia durante anos trabalhou como Diarista na casa de pessoas que a contratavam. Ao longo dos anos ela exerceu suas funções em diversas casas diferentes e por conta disso foi adquirindo muitos contatos, sempre uma pessoa a indicava para outras, por isso, ela sempre tinha serviço à sua disposição. Uma outra questão que lhe trazia muitas propostas era o fato dela residir em Belo Horizonte e na cidade sempre havia muita procura pelo serviço, para Patrícia nunca foi um problema ter trabalho.
Por conta da pandemia seu pai acabou falecendo e por isso ela voltou para o interior para estar junto de sua mãe, que acabou ficando sozinha e já em idade avançada precisava da companhia de alguém para seus cuidados. E por conta disso, Patrícia acabou indo para um local novo onde quase não tinha contatos para serviço e acabou ficando sem emprego por um tempo. Com o auxílio da aplicação Limpa Mais, Patrícia pode encontrar diversas pessoas precisando do seu serviço, e assim, mesmo em um local novo pode continuar trabalhando em sua área e encontrando contratantes que se adequam a sua rotina.


## 3.2. Descrição Geral da proposta

O Limpa Mais irá trabalhar apenas com o serviço de diarista, moldado todo para esse tipo específico de serviço.
E seu funcionamento se dará através de uma requisição criada pelo solicitante, onde ele informará os detalhes do serviço solicitado. Essa requisição será enviada para os prestadores de serviço mais próximos que vão optar por aceitar ou não a  solicitação, de acordo com seu interesse mútuo nela.

A seguir uma descrição geral de cada processo.


Processo Usuário Pessoa Jurídica:
*   Usuário Pessoa Jurídica faz cadastro na plataforma (Nome da empresa, CNPJ, Telefone, E-mail, Senha), faz o login (Telefone/E-mail e senha)
*   Realiza o login (Telefone/E-mail e senha)
*   Cria a solicitação do serviço
*   Informa o endereço onde o serviço será prestado, detalhamento do serviço (tamanho do ambiente), profissionais necessários, horário, forma de pagamento
*   Finaliza a solicitação
*   Usuário aguarda um aceite, para que o serviço seja atendido pelo prestador de serviço que aceitar a solicitação
*   Usuário avalia o trabalho realizado e emite a nota fiscal para ser entregue aos prestadores.


Processo Usuário Pessoa Física:
*   Usuário Pessoa Física, faz o seu cadastro na plataforma (Nome completo, CPF, Telefone, E-mail, Senha)
*   Realiza o login (Telefone/E-mail e senha)
*   Cria a solicitação do serviço
*   Informa o endereço de onde o serviço será prestado, detalhamento do serviço(Cômodos), horário(à combinar), forma de pagamento e finaliza a solicitação
*   Aguarda um aceite, para que o serviço seja atendido pelo prestador de serviço que aceitar a solicitação
*   Ao finalizar o serviço, o usuário avalia o trabalho realizado e encerra a solicitação


Processo Usuário Diarista:
*   O Usuário Diarista, faz o seu cadastro na plataforma (Nome completo, Regiões de atendimento, CPF, Telefone, Senha)
*   Realiza o login (Telefone e senha)
*   A partir do primeiro acesso ele recebe as solicitações de serviço próximas às regiões cadastradas
*   Aceita uma solicitação de seu interesse
*   Informa o valor que será cobrado pelo serviço e aguarda o aceite do solicitante
*   Após a realização do serviço, o Diarista recebe o pagamento pela plataforma e o feedback de avaliação


## 3.3. Modelagem dos Processos

### 3.3.1 Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN.

![Exemplo de um Modelo BPMN do PROCESSO 1](imagens/process.png "Modelo BPMN do Processo 1.")


### 3.3.2 Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Exemplo de um Modelo BPMN do PROCESSO 2](imagens/call_process.png "Modelo BPMN do Processo 2.")

## 4. Projeto da Solução

### 4.1. Detalhamento das atividades

Descrever aqui cada uma das propriedades das atividades de cada um dos processos. Devem estar relacionadas com o modelo de processo apresentado anteriormente.

#### Processo 1 – NOME DO PROCESSO

**Nome da atividade 1**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
| ***Exemplo:***  |    |     |
| login | Caixa de Texto | formato de e-mail |  |
| senha | Caixa de Texto | mínimo de 8 caracteres |   |

**Nome da atividade 2**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |

#### Processo 2 – NOME DO PROCESSO

**Nome da atividade 1**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |

**Nome da atividade 2**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |

### 4.2. Tecnologias

Descreva qual(is) tecnologias você vai usar para resolver o seu problema, ou seja implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas. Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## 5. Modelo de dados

Apresente o modelo de dados por meio de um modelo relacional ou Diagrama de Entidade-Relacionamento (DER) que contemple todos conceitos e atributos apresentados item anterior. 

![Diagrama de Entidade Relacionamento de Exemplo](imagens/er_diagram.png "Diagrama de Entidade Relacionamento de Exemplo")

## 6. Indicadores de desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores.

Usar o seguinte modelo:

| **Indicador** | **Objetivos** | **Descrição** | **Cálculo** | **Fonte dados** | **Perspectiva** |
| --- | --- | --- | --- | --- | --- |
| Percentual reclamações | Avaliar quantitativamente as reclamações | Percentual de reclamações em relação ao total atendimento |   | Tabela reclamações | Aprendizado e Crescimento |
| Taxa de Requisições abertas | Melhorar a prestação de serviços medindo a porcentagem de requisições | Mede % de requisições atendidas na semana | ![\frac{\sum{atendidas}}{\sum{requisicoes}}100](https://latex.codecogs.com/svg.latex?\frac{\sum{atendidas}}{\sum{requisicoes}}100) | Tabela solicitações | Processos internos |
| Taxa de entrega de material | Manter controle sobre os materiais que estão sendo entregues | Mede % de material entregue dentro do mês |   | Tabela Pedidos | Clientes |

Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe **a ser proposto**

## 7.Sistema desenvolvido

Faça aqui uma breve descrição do software e coloque as principais telas com uma explicação de como usar cada uma.

## 8. Conclusão

Apresente aqui a conclusão do seu trabalho. Discussão dos resultados obtidos no trabalho, onde se verifica as observações pessoais de cada aluno. Poderá também apresentar sugestões de novas linhas de estudo.

# REFERÊNCIAS

Como um projeto de software não requer revisão bibliográfica, a inclusão das referências não é obrigatória. No entanto, caso você deseje incluir referências relacionadas às tecnologias, padrões, ou metodologias que serão usadas no seu trabalho, relacione-as de acordo com a ABNT.

Verifique no link abaixo como devem ser as referências no padrão ABNT:

http://www.pucminas.br/imagedb/documento/DOC\_DSC\_NOME\_ARQUI20160217102425.pdf


**[1.1]** - _ELMASRI, Ramez; NAVATHE, Sham. **Sistemas de banco de dados**. 7. ed. São Paulo: Pearson, c2019. E-book. ISBN 9788543025001._

**[1.2]** - _COPPIN, Ben. **Inteligência artificial**. Rio de Janeiro, RJ: LTC, c2010. E-book. ISBN 978-85-216-2936-8._

**[1.3]** - _CORMEN, Thomas H. et al. **Algoritmos: teoria e prática**. Rio de Janeiro, RJ: Elsevier, Campus, c2012. xvi, 926 p. ISBN 9788535236996._

**[1.4]** - _SUTHERLAND, Jeffrey Victor. **Scrum: a arte de fazer o dobro do trabalho na metade do tempo**. 2. ed. rev. São Paulo, SP: Leya, 2016. 236, [4] p. ISBN 9788544104514._

**[1.5]** - _RUSSELL, Stuart J.; NORVIG, Peter. **Inteligência artificial**. Rio de Janeiro: Elsevier, c2013. xxi, 988 p. ISBN 9788535237016._



# APÊNDICES

**Colocar link:**

Do código (armazenado no repositório);

Dos artefatos (armazenado do repositório);

Da apresentação final (armazenado no repositório);

Do vídeo de apresentação (armazenado no repositório).




