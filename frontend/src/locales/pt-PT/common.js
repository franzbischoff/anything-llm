const TRANSLATIONS = {
  common: {
    "workspaces-name": "Nome dos Workspaces",
    error: "erro",
    success: "sucesso",
    user: "Utilizador",
    selection: "Seleção do Modelo",
    saving: "A guardar...",
    save: "Guardar alterações",
    previous: "Página Anterior",
    next: "Próxima Página",
  },

  // Setting Sidebar menu items.
  settings: {
    title: "Definições da Instância",
    system: "Preferências do Sistema",
    invites: "Convite",
    users: "Utilizadores",
    workspaces: "Workspaces",
    "workspace-chats": "Chat do Workspace",
    appearance: "Aparência",
    "api-keys": "Chaves API",
    llm: "Preferência de LLM",
    transcription: "Modelo de Transcrição",
    embedder: "Preferências de Embedding",
    "text-splitting": "Divisão e Segmentação de Texto",
    "vector-database": "Base de Dados Vetorial",
    embeds: "Widgets de Embed de Chat",
    "embed-chats": "Histórico de Chats Embed",
    security: "Segurança",
    "event-logs": "Registos de Eventos",
    privacy: "Privacidade e Dados",
  },

  // Page Definitions
  login: {
    "multi-user": {
      welcome: "Bem-vindo a",
      "placeholder-username": "Nome de Utilizador",
      "placeholder-password": "Palavra-passe",
      login: "Iniciar sessão",
      validating: "A validar...",
      "forgot-pass": "Esqueceu-se da palavra-passe",
      reset: "Redefinir",
    },
    "sign-in": {
      start: "Inicie sessão na sua",
      end: "conta.",
    },
  },

  // Workspace Settings menu items
  "workspaces—settings": {
    general: "Definições Gerais",
    chat: "Definições de Chat",
    vector: "Base de Dados Vetorial",
    members: "Membros",
    agent: "Configuração do Agente",
  },

  // General Appearance
  general: {
    vector: {
      title: "Contagem de Vetores",
      description: "Número total de vetores na sua base de dados vetorial.",
    },
    names: {
      description: "Isto só mudará o nome de exibição do seu workspace.",
    },
    message: {
      title: "Mensagens de Chat Sugeridas",
      description:
        "Personalize as mensagens que serão sugeridas aos utilizadores do seu workspace.",
      add: "Adicionar nova mensagem",
      save: "Guardar Mensagens",
      heading: "Explique-me",
      body: "os benefícios do AnythingLLM",
    },
    pfp: {
      title: "Imagem de Perfil do Assistente",
      description:
        "Personalize a imagem de perfil do assistente para este workspace.",
      image: "Imagem do Workspace",
      remove: "Remover Imagem do Workspace",
    },
    delete: {
      delete: "Eliminar Workspace",
      deleting: "A eliminar Workspace...",
      "confirm-start": "Está prestes a eliminar todo o seu",
      "confirm-end":
        "workspace. Isto removerá todas as embeddings vetoriais na sua base de dados vetorial.\n\nOs ficheiros de origem originais permanecerão intocados. Esta ação é irreversível.",
    },
  },

  // Chat Settings
  chat: {
    llm: {
      title: "Fornecedor de LLM do Workspace",
      description:
        "O fornecedor e modelo LLM específico que será usado para este workspace. Por defeito, usa o fornecedor e configurações LLM do sistema.",
      search: "Pesquisar todos os fornecedores de LLM",
    },
    model: {
      title: "Modelo de Chat do Workspace",
      description:
        "O modelo de chat específico que será usado para este workspace. Se estiver vazio, usará a preferência LLM do sistema.",
      wait: "-- à espera de modelos --",
    },
    mode: {
      title: "Modo de Chat",
      chat: {
        title: "Chat",
        "desc-start": "fornecerá respostas com o conhecimento geral do LLM",
        and: "e",
        "desc-end": "o contexto do documento encontrado.",
      },
      query: {
        title: "Consulta",
        "desc-start": "fornecerá respostas",
        only: "apenas",
        "desc-end": "se for encontrado contexto do documento.",
      },
    },
    history: {
      title: "Histórico de Chat",
      "desc-start":
        "O número de chats anteriores que serão incluídos na memória de curto prazo da resposta.",
      recommend: "Recomendado 20. ",
      "desc-end":
        "Qualquer coisa acima de 45 provavelmente levará a falhas contínuas de chat dependendo do tamanho da mensagem.",
    },
    prompt: {
      title: "Prompt",
      description:
        "O prompt que será usado neste workspace. Defina o contexto e instruções para a IA gerar uma resposta. Deve fornecer um prompt cuidadosamente elaborado para que a IA possa gerar uma resposta relevante e precisa.",
    },
    refusal: {
      title: "Resposta de recusa em modo de consulta",
      "desc-start": "Quando em modo",
      query: "consulta",
      "desc-end":
        ", poderá querer devolver uma resposta de recusa personalizada quando não for encontrado contexto.",
    },
    temperature: {
      title: "Temperatura do LLM",
      "desc-start":
        "Esta configuração controla o quão 'criativas' serão as respostas do seu LLM.",
      "desc-end":
        "Quanto maior o número, mais criativa será a resposta. Para alguns modelos, isto pode levar a respostas incoerentes se definido muito alto.",
      hint: "A maioria dos LLMs tem vários intervalos aceitáveis de valores válidos. Consulte o seu fornecedor de LLM para essa informação.",
    },
  },

  // Vector Database
  "vector-workspace": {
    identifier: "Identificador da base de dados vetorial",
    snippets: {
      title: "Máximo de Trechos de Contexto",
      description:
        "Esta configuração controla a quantidade máxima de trechos de contexto que serão enviados para o LLM por chat ou consulta.",
      recommend: "Recomendado: 4",
    },
    doc: {
      title: "Limite de similaridade do documento",
      description:
        "A pontuação mínima de similaridade necessária para que uma fonte seja considerada relacionada ao chat. Quanto maior o número, mais semelhante a fonte deve ser ao chat.",
      zero: "Sem restrição",
      low: "Baixa (pontuação de similaridade ≥ .25)",
      medium: "Média (pontuação de similaridade ≥ .50)",
      high: "Alta (pontuação de similaridade ≥ .75)",
    },
    reset: {
      reset: "Redefinir Base de Dados Vetorial",
      resetting: "A limpar vetores...",
      confirm:
        "Está prestes a redefinir a base de dados vetorial deste workspace. Isto removerá todas as embeddings vetoriais atualmente embebidas.\n\nOs ficheiros de origem originais permanecerão intocados. Esta ação é irreversível.",
      error: "A base de dados vetorial do workspace não pôde ser redefinida!",
      success: "A base de dados vetorial do workspace foi redefinida!",
    },
  },

  // Agent Configuration
  agent: {
    "performance-warning":
      "O desempenho dos LLMs que não suportam explicitamente a chamada de ferramentas depende muito das capacidades e precisão do modelo. Algumas habilidades podem ser limitadas ou não funcionais.",
    provider: {
      title: "Fornecedor de LLM do Agente do Workspace",
      description:
        "O fornecedor e modelo LLM específico que será usado para o agente @agent deste workspace.",
    },
    mode: {
      chat: {
        title: "Modelo de Chat do Agente do Workspace",
        description:
          "O modelo de chat específico que será usado para o agente @agent deste workspace.",
      },
      title: "Modelo do Agente do Workspace",
      description:
        "O modelo LLM específico que será usado para o agente @agent deste workspace.",
      wait: "-- à espera de modelos --",
    },

    skill: {
      title: "Habilidades padrão do agente",
      description:
        "Melhore as habilidades naturais do agente padrão com estas habilidades pré-construídas. Esta configuração aplica-se a todos os workspaces.",
      rag: {
        title: "RAG e memória a longo prazo",
        description:
          'Permita que o agente aproveite os seus documentos locais para responder a uma consulta ou peça ao agente para "lembrar" peças de conteúdo para recuperação de memória a longo prazo.',
      },
      view: {
        title: "Ver e resumir documentos",
        description:
          "Permita que o agente liste e resuma o conteúdo dos ficheiros do workspace atualmente embebidos.",
      },
      scrape: {
        title: "Raspar websites",
        description:
          "Permita que o agente visite e raspe o conteúdo dos websites.",
      },
      generate: {
        title: "Gerar gráficos",
        description:
          "Permita que o agente padrão gere vários tipos de gráficos a partir de dados fornecidos ou dados em chat.",
      },
      save: {
        title: "Gerar e guardar ficheiros no navegador",
        description:
          "Permita que o agente padrão gere e escreva em ficheiros que podem ser guardados e descarregados no seu navegador.",
      },
      web: {
        title: "Pesquisa na web e navegação ao vivo",
        "desc-start":
          "Permita que o seu agente pesquise na web para responder às suas perguntas conectando-se a um fornecedor de pesquisa na web (SERP).",
        "desc-end":
          "A pesquisa na web durante as sessões do agente não funcionará até que isto seja configurado.",
      },
    },
  },

  // Workspace Chats
  recorded: {
    title: "Chats do Workspace",
    description:
      "Estes são todos os chats e mensagens gravadas que foram enviadas pelos utilizadores ordenadas por data de criação.",
    export: "Exportar",
    table: {
      id: "Id",
      by: "Enviado por",
      workspace: "Workspace",
      prompt: "Prompt",
      response: "Resposta",
      at: "Enviado em",
    },
  },

  // Appearance
  appearance: {
    title: "Aparência",
    description: "Personalize as definições de aparência da sua plataforma.",
    logo: {
      title: "Personalizar Logotipo",
      description: "Carregue o seu logotipo personalizado para tornar o seu chatbot seu.",
      add: "Adicionar um logotipo personalizado",
      recommended: "Tamanho recomendado: 800 x 200",
      remove: "Remover",
      replace: "Substituir",
    },
    message: {
      title: "Personalizar Mensagens",
      description: "Personalize as mensagens automáticas exibidas aos seus utilizadores.",
      new: "Nova",
      system: "sistema",
      user: "utilizador",
      message: "mensagem",
      assistant: "Assistente de Chat AnythingLLM",
      "double-click": "Duplo clique para editar...",
      save: "Guardar Mensagens",
    },
    icons: {
      title: "Ícones Personalizados do Rodapé",
      description:
        "Personalize os ícones do rodapé exibidos na parte inferior da barra lateral.",
      icon: "Ícone",
      link: "Link",
    },
  },

  // API Keys
  api: {
    title: "Chaves API",
    description:
      "As chaves API permitem ao portador aceder e gerir programaticamente esta instância AnythingLLM.",
    link: "Ler a documentação da API",
    generate: "Gerar Nova Chave API",
    table: {
      key: "Chave API",
      by: "Criado por",
      created: "Criado em",
    },
  },

  llm: {
    title: "Preferência de LLM",
    description:
      "Estas são as credenciais e definições para o seu fornecedor preferido de chat e embedding LLM. É importante que estas chaves estejam atuais e corretas, caso contrário o AnythingLLM não funcionará corretamente.",
    provider: "Fornecedor de LLM",
  },

  transcription: {
    title: "Preferência do Modelo de Transcrição",
    description:
      "Estas são as credenciais e definições para o seu fornecedor preferido de modelo de transcrição. É importante que estas chaves estejam atuais e corretas, caso contrário, os ficheiros de mídia e áudio não serão transcritos.",
    provider: "Fornecedor de Transcrição",
    "warn-start":
      "Usar o modelo whisper local em máquinas com RAM ou CPU limitadas pode bloquear o AnythingLLM ao processar ficheiros de mídia.",
    "warn-recommend":
      "Recomendamos pelo menos 2GB de RAM e carregar ficheiros com menos de 10Mb.",
    "warn-end":
      "O modelo embutido será automaticamente descarregado na primeira utilização.",
  },

  embedding: {
    title: "Preferência de Embedding",
    "desc-start":
      "Ao usar um LLM que não suporta nativamente um motor de embedding, poderá ser necessário especificar adicionalmente as credenciais para embedding de texto.",
    "desc-end":
      "O embedding é o processo de transformar texto em vetores. Estas credenciais são necessárias para transformar os seus ficheiros e prompts em um formato que o AnythingLLM possa usar para processar.",
    provider: {
      title: "Fornecedor de Embedding",
      description:
        "Não é necessária nenhuma configuração ao usar o motor de embedding nativo do AnythingLLM.",
    },
  },

  text: {
    title: "Preferências de Divisão e Segmentação de Texto",
    "desc-start":
      "Às vezes, poderá querer alterar a forma padrão como novos documentos são divididos e segmentados antes de serem inseridos na sua base de dados vetorial.",
    "desc-end":
      "Deve alterar esta definição apenas se compreender como a divisão de texto funciona e os seus efeitos colaterais.",
    "warn-start": "As alterações aqui aplicar-se-ão apenas a",
    "warn-center": "documentos embebidos recentemente",
    "warn-end": ", não aos documentos existentes.",
    size: {
      title: "Tamanho do Segmento de Texto",
      description:
        "Este é o comprimento máximo de caracteres que podem estar presentes num único vetor.",
      recommend: "Comprimento máximo do modelo de embedding é",
    },

    overlap: {
      title: "Sobreposição de Segmentos de Texto",
      description:
        "Esta é a sobreposição máxima de caracteres que ocorre durante a segmentação entre dois segmentos de texto adjacentes.",
    },
  },

  // Vector Database
  vector: {
    title: "Base de Dados Vetorial",
    description:
      "Estas são as credenciais e definições para o funcionamento da sua instância AnythingLLM. É importante que estas chaves estejam atuais e corretas.",
    provider: {
      title: "Fornecedor de Base de Dados Vetorial",
      description: "Não é necessária nenhuma configuração para LanceDB.",
    },
  },

  // Embeddable Chat Widgets
  embeddable: {
    title: "Widgets de Chat Incorporáveis",
    description:
      "Widgets de chat incorporáveis são interfaces de chat públicas que estão ligadas a um único workspace. Estes permitem construir workspaces que pode publicar para o mundo.",
    create: "Criar embed",
    table: {
      workspace: "Workspace",
      chats: "Chats Enviados",
      Active: "Domínios Ativos",
    },
  },

  "embed-chats": {
    title: "Incorporar Chats",
    description:
      "Estes são todos os chats e mensagens gravadas de qualquer embed que tenha publicado.",
    table: {
      embed: "Embed",
      sender: "Remetente",
      message: "Mensagem",
      response: "Resposta",
      at: "Enviado em",
    },
  },

  multi: {
    title: "Modo Multi-Utilizador",
    description:
      "Configure a sua instância para suportar a sua equipa ativando o Modo Multi-Utilizador.",
    enable: {
      "is-enable": "Modo Multi-Utilizador está Ativado",
      enable: "Ativar Modo Multi-Utilizador",
      description:
        "Por defeito, será o único administrador. Como administrador, terá de criar contas para todos os novos utilizadores ou administradores. Não perca a sua palavra-passe, pois apenas um utilizador administrador pode redefinir palavras-passe.",
      username: "Nome de utilizador da conta de administrador",
      password: "Palavra-passe da conta de administrador",
    },
    password: {
      title: "Proteção por Palavra-Passe",
      description:
        "Proteja a sua instância AnythingLLM com uma palavra-passe. Se esquecer esta palavra-passe, não há método de recuperação, por isso, assegure-se de que a guarda.",
    },
    instance: {
      title: "Proteger Instância por Palavra-Passe",
      description:
        "Por defeito, será o único administrador. Como administrador, terá de criar contas para todos os novos utilizadores ou administradores. Não perca a sua palavra-passe, pois apenas um utilizador administrador pode redefinir palavras-passe.",
      password: "Palavra-passe da instância",
    },
  },

  // Event Logs
  event: {
    title: "Registos de Eventos",
    description:
      "Veja todas as ações e eventos que ocorrem nesta instância para monitorização.",
    clear: "Limpar Registos de Eventos",
    table: {
      type: "Tipo de Evento",
      user: "Utilizador",
      occurred: "Ocorreu em",
    },
  },

  // Privacy & Data-Handling
  privacy: {
    title: "Privacidade e Gestão de Dados",
    description:
      "Esta é a sua configuração para como os fornecedores terceiros conectados e o AnythingLLM gerem os seus dados.",
    llm: "Seleção de LLM",
    embedding: "Preferência de Embedding",
    vector: "Base de Dados Vetorial",
    anonymous: "Telemetria Anónima Ativada",
  },
};

export default TRANSLATIONS;
