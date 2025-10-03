<h1 align="center">Capacitação Git e Github - PSE 25.2</h1>
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=git,github"/>
  </a>
</p>

### Introdução

Esta README contém um pequeno resumo feito com base no conteúdo abordado na capacitação de Git e Github por parte do Processo Seletivo 25.2 para o Ramo Estudantil IEEE CEFET/RJ.

### Desafio

O desafio dessa capacitação consiste na criação de um repositório no Github contendo um arquivo README.md com uma pequena mensagem de texto. Os trainees devem utilizar a ferramenta Git para criar uma cópia local do repositório remoto e enviar as alterações para ele.

### Terminologia

- **Repositório**: Local onde o código-fonte e arquivos relevantes de um projeto são armazenados. Pode ser remoto ou local.
- **Commit**: Alteração nos arquivos de um repositório.
- **Branch**: Ramificação dos arquivos de um repositório, útil para segmentar o desenvolvimento de um projeto e evitar conflitos.
- **Merge vs Rebase**: Tanto o merge quanto o rebase unem as alterações de duas branches, porém o merge mantém o histórico de contribuições de cada branch, enquanto o rebase altera o histórico para ter um aspecto mais linear.
- **Fork**: Cópia remota de um repositório remoto. Um fork feito por você pertencerá à sua conta e será visível na sua lista de repositórios.

### Comandos frequentes do Git

- **init**: Inicialização de um repositório local;
- **remote add origin [URL_REPO]**: Atribui um repositório remoto a um local, nomeando a referência como "origin";
- **clone**: Cria uma cópia local de um repositório remoto, automaticamente atribuindo sua referência;
- **status**: Exibe informações relevantes do estado de um repositório, como a branch atual, se o repositório local está na frente/atrás do remoto e em quantos commits;
- **add [NOME_ARQUIVO]**: Adiciona as mudanças realizadas que vão compor um commit. O comando **add .** adiciona todas as mudanças realizadas no diretório atual;
- **commit -m [MENSAGEM_COMMIT]**: Realiza um commit, atribuindo uma mensagem à ele;
- **push**: Envia commits locais para o repositório remoto. O comando **push -u origin [NOME_BRANCH]** envia os commits para uma determinada branch do remoto, criando-a se ela não existir;
- **pull**: Obtém todos os commits realizados no repositório remoto desde o último pull;
- **branch**: Exibe todas as branches locais de um repositório Git;
- **checkout [NOME_BRANCH]**: Muda a branch atual para uma nova. Com a flag -b, você cria uma nova branch e muda para ela;
- **fetch**: Obtém todas as branches do repositório remoto. OBS: Elas só vão aparecer na lista de branches locais depois de você dar um **checkout** para elas;
- **merge [NOME_BRANCH]**: Une duas branches, mesclando as alterações da branch especificada pelo comando na branch atual.

### Conventional Commits - Principais Tipos

- **feat**: Commit contém uma nova funcionalidade para o projeto;
- **fix**: Commit contém um conserto de um bug encontrado no projeto;
- **chore**: Commit contém alterações voltadas para manutenção de rotina, como instalação de dependências para projetos;
- **docs**: Commit contém alterações voltadas para documentação, como atualização da README do repositório.

### Git Flow - Branches

- **main/master**: Branch principal de um repositório contendo o código em produção. **Committar diretamente para essa branch é uma má prática e não deve ser feito**;
- **develop**: Branch contendo o código que está sendo ativamente desenvolvido. **Commitar diretamente para essa branch é uma má prática e não deve ser feito**;
- **feature**: Branches que começam com a palavra **feature** contém funcionalidades que estão sendo ativamente desenvolvidas para a **develop**;
- **hotfix**: Branches que começam com a palavra **hotfix** contém correções de bugs críticos que foram encontrados no código em produção na **main/master**.

### Ministrantes

[Erick Martins Silva](github.com/erickMartinsSilva), [Rafael do Amaral Costa](https://github.com/jake7038)

### Referências

Todo o conteúdo disponibilizado neste README e durante a capacitação foi confeccionado com base na [documentação oficial da ferramenta Git](https://git-scm.com/docs) e nos princípios de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) e [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).
