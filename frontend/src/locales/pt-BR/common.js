const TRANSLATIONS = {
  common: {
    "workspaces-name": "Nome dos Workspaces",
    error: "erro",
    success: "sucesso",
    user: "Usuário",
    selection: "Seleção de Modelo",
    saving: "Salvando...",
    save: "Salvar alterações",
    previous: "Página Anterior",
    next: "Próxima Página",
  },

  // Setting Sidebar menu items.
  settings: {
    title: "Configurações da Instância",
    system: "Preferências do Sistema",
    invites: "Convite",
    users: "Usuários",
    workspaces: "Workspaces",
    "workspace-chats": "Chat do Workspace",
    appearance: "Aparência",
    "api-keys": "Chaves API",
    llm: "Preferência de LLM",
    transcription: "Modelo de Transcrição",
    embedder: "Preferências de Embedding",
    "text-splitting": "Divisão e Segmentação de Texto",
    "vector-database": "Banco de Dados Vetorial",
    embeds: "Widgets de Embed de Chat",
    "embed-chats": "Histórico de Chats Embed",
    security: "Segurança",
    "event-logs": "Logs de Eventos",
    privacy: "Privacidade e Dados",
  },

  // Page Definitions
  login: {
    "multi-user": {
      welcome: "Bem-vindo ao",
      "placeholder-username": "Nome de Usuário",
      "placeholder-password": "Senha",
      login: "Entrar",
      validating: "Validando...",
      "forgot-pass": "Esqueceu a senha",
      reset: "Redefinir",
    },
    "sign-in": {
      start: "Faça login na sua",
      end: "conta.",
    },
  },

  // Workspace Settings menu items
  "workspaces—settings": {
    general: "Configurações Gerais",
    chat: "Configurações de Chat",
    vector: "Banco de Dados Vetorial",
    members: "Membros",
    agent: "Configuração do Agente",
  },

  // General Appearance
  general: {
    vector: {
      title: "Contagem de Vetores",
      description: "Número total de vetores no seu banco de dados vetorial.",
    },
    names: {
      description: "Isso só mudará o nome de exibição do seu workspace.",
    },
    message: {
      title: "Mensagens de Chat Sugeridas",
      description:
        "Personalize as mensagens que serão sugeridas aos usuários do seu workspace.",
      add: "Adicionar nova mensagem",
      save: "Salvar Mensagens",
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
      delete: "Excluir Workspace",
      deleting: "Excluindo Workspace...",
      "confirm-start": "Você está prestes a excluir todo o seu",
      "confirm-end":
        "workspace. Isso removerá todas as embeddings vetoriais no seu banco de dados vetorial.\n\nOs arquivos de origem originais permanecerão intactos. Esta ação é irreversível.",
    },
  },

  // Chat Settings
  chat: {
    llm: {
      title: "Fornecedor de LLM do Workspace",
      description:
        "O fornecedor e modelo LLM específico que será usado para este workspace. Por padrão, usa o fornecedor e configurações LLM do sistema.",
      search: "Pesquisar todos os fornecedores de LLM",
    },
    model: {
      title: "Modelo de Chat do Workspace",
      description:
        "O modelo de chat específico que será usado para este workspace. Se estiver vazio, usará a preferência LLM do sistema.",
      wait: "-- aguardando modelos --",
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
        ", você pode querer devolver uma resposta de recusa personalizada quando não for encontrado contexto.",
    },
    temperature: {
      title: "Temperatura do LLM",
      "desc-start":
        "Esta configuração controla o quão 'criativas' serão as respostas do seu LLM.",
      "desc-end":
        "Quanto maior o número, mais criativa será a resposta. Para alguns modelos, isso pode levar a respostas incoerentes se definido muito alto.",
      hint: "A maioria dos LLMs tem vários intervalos aceitáveis de valores válidos. Consulte o seu fornecedor de LLM para essa informação.",
    },
  },

  // Vector Database
  "vector-workspace": {
    identifier: "Identificador do banco de dados vetorial",
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
      reset: "Redefinir Banco de Dados Vetorial",
      resetting: "Limpando vetores...",
      confirm:
        "Você está prestes a redefinir o banco de dados vetorial deste workspace. Isso removerá todas as embeddings vetoriais atualmente embebidas.\n\nOs arquivos de origem originais permanecerão intactos. Esta ação é irreversível.",
      error: "O banco de dados vetorial do workspace não pôde ser redefinido!",
      success: "O banco de dados vetorial do workspace foi redefinido!",
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
      wait: "-- aguardando modelos --",
    },

    skill: {
      title: "Habilidades padrão do agente",
      description:
        "Melhore as habilidades naturais do agente padrão com estas habilidades pré-construídas. Esta configuração aplica-se a todos os workspaces.",
      rag: {
        title: "RAG e memória a longo prazo",
        description:
          'Permita que o agente aproveite seus documentos locais para responder a uma consulta ou peça ao agente para "lembrar" partes de conteúdo para recuperação de memória a longo prazo.',
      },
      view: {
        title: "Ver e resumir documentos",
        description:
          "Permita que o agente liste e resuma o conteúdo dos arquivos do workspace atualmente embebidos.",
      },
      scrape: {
        title: "Raspar websites",
        description:
          "Permita que o agente visite e raspe o conteúdo dos websites.",
      },
      generate: {
        title: "Gerar gráficos",
        description:
          "Permita que o agente padrão gere vários tipos de gráficos a partir de dados fornecidos ou dados no chat.",
      },
      save: {
        title: "Gerar e salvar arquivos no navegador",
        description:
          "Permita que o agente padrão gere e escreva em arquivos que podem ser salvos e baixados no seu navegador.",
      },
      web: {
        title: "Pesquisa na web e navegação ao vivo",
        "desc-start":
          "Permita que seu agente pesquise na web para responder às suas perguntas conectando-se a um fornecedor de pesquisa na web (SERP).",
        "desc-end":
          "A pesquisa na web durante as sessões do agente não funcionará até que isso seja configurado.",
      },
    },
  },

  // Workspace Chats
  recorded: {
    title: "Chats do Workspace",
    description:
      "Estes são todos os chats e mensagens gravadas que foram enviadas pelos usuários ordenadas por data de criação.",
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
    description: "Personalize as configurações de aparência da sua plataforma.",
    logo: {
      title: "Personalizar Logotipo",
      description: "Carregue seu logotipo personalizado para tornar seu chatbot seu.",
      add: "Adicionar um logotipo personalizado",
      recommended: "Tamanho recomendado: 800 x 200",
      remove: "Remover",
      replace: "Substituir",
    },
    message: {
      title: "Personalizar Mensagens",
      description: "Personalize as mensagens automáticas exibidas aos seus usuários.",
      new: "Nova",
      system: "sistema",
      user: "usuário",
      message: "mensagem",
      assistant: "Assistente de Chat AnythingLLM",
      "double-click": "Clique duplo para editar...",
      save: "Salvar Mensagens",
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
      "As chaves API permitem ao portador acessar e gerenciar programaticamente esta instância AnythingLLM.",
    link: "Leia a documentação da API",
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
      "Estas são as credenciais e configurações para seu fornecedor preferido de chat e embedding LLM. É importante que estas chaves estejam atuais e corretas, caso contrário o AnythingLLM não funcionará corretamente.",
    provider: "Fornecedor de LLM",
  },

  transcription: {
    title: "Preferência do Modelo de Transcrição",
    description:
      "Estas são as credenciais e configurações para seu fornecedor preferido de modelo de transcrição. É importante que estas chaves estejam atuais e corretas, caso contrário, os arquivos de mídia e áudio não serão transcritos.",
    provider: "Fornecedor de Transcrição",
    "warn-start":
      "Usar o modelo whisper local em máquinas com RAM ou CPU limitadas pode travar o AnythingLLM ao processar arquivos de mídia.",
    "warn-recommend":
      "Recomendamos pelo menos 2GB de RAM e carregar arquivos com menos de 10Mb.",
    "warn-end":
      "O modelo embutido será automaticamente baixado na primeira utilização.",
  },

  embedding: {
    title: "Preferência de Embedding",
    "desc-start":
      "Ao usar um LLM que não suporta nativamente um motor de embedding, pode ser necessário especificar adicionalmente as credenciais para embedding de texto.",
    "desc-end":
      "O embedding é o processo de transformar texto em vetores. Estas credenciais são necessárias para transformar seus arquivos e prompts em um formato que o AnythingLLM possa usar para processar.",
    provider: {
      title: "Fornecedor de Embedding",
      description:
        "Não é necessária nenhuma configuração ao usar o motor de embedding nativo do AnythingLLM.",
    },
  },

  text: {
    title: "Preferências de Divisão e Segmentação de Texto",
    "desc-start":
      "Às vezes, você pode querer alterar a forma padrão como novos documentos são divididos e segmentados antes de serem inseridos no seu banco de dados vetorial.",
    "desc-end":
      "Você deve alterar esta configuração apenas se compreender como a divisão de texto funciona e seus efeitos colaterais.",
    "warn-start": "As alterações aqui aplicar-se-ão apenas a",
    "warn-center": "documentos embebidos recentemente",
    "warn-end": ", não aos documentos existentes.",
    size: {
      title: "Tamanho do Segmento de Texto",
      description:
        "Este é o comprimento máximo de caracteres que podem estar presentes em um único vetor.",
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
    title: "Banco de Dados Vetorial",
    description:
      "Estas são as credenciais e configurações para o funcionamento da sua instância AnythingLLM. É importante que estas chaves estejam atuais e corretas.",
    provider: {
      title: "Fornecedor de Banco de Dados Vetorial",
      description: "Não é necessária nenhuma configuração para LanceDB.",
    },
  },

  // Embeddable Chat Widgets
  embeddable: {
    title: "Widgets de Chat Incorporáveis",
    description:
      "Widgets de chat incorporáveis são interfaces de chat públicas que estão ligadas a um único workspace. Estes permitem construir workspaces que você pode publicar para o mundo.",
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
      "Estes são todos os chats e mensagens gravadas de qualquer embed que você tenha publicado.",
    table: {
      embed: "Embed",
      sender: "Remetente",
      message: "Mensagem",
      response: "Resposta",
      at: "Enviado em",
    },
  },

  multi: {
    title: "Modo Multiusuário",
    description:
      "Configure sua instância para suportar sua equipe ativando o Modo Multiusuário.",
    enable: {
      "is-enable": "Modo Multiusuário está Ativado",
      enable: "Ativar Modo Multiusuário",
      description:
        "Por padrão, você será o único administrador. Como administrador, você precisará criar contas para todos os novos usuários ou administradores. Não perca sua senha, pois apenas um usuário administrador pode redefinir senhas.",
      username: "Nome de usuário da conta de administrador",
      password: "Senha da conta de administrador",
    },
    password: {
      title: "Proteção por Senha",
      description:
        "Proteja sua instância AnythingLLM com uma senha. Se esquecer esta senha, não há método de recuperação, por isso, assegure-se de que a guarda.",
    },
    instance: {
      title: "Proteger Instância por Senha",
      description:
        "Por padrão, você será o único administrador. Como administrador, você precisará criar contas para todos os novos usuários ou administradores. Não perca sua senha, pois apenas um usuário administrador pode redefinir senhas.",
      password: "Senha da instância",
    },
  },

  // Event Logs
  event: {
    title: "Logs de Eventos",
    description:
      "Veja todas as ações e eventos que ocorrem nesta instância para monitoramento.",
    clear: "Limpar Logs de Eventos",
    table: {
      type: "Tipo de Evento",
      user: "Usuário",
      occurred: "Ocorreu em",
    },
  },

  // Privacy & Data-Handling
  privacy: {
    title: "Privacidade e Gestão de Dados",
    description:
      "Esta é a sua configuração para como os fornecedores terceiros conectados e o AnythingLLM gerenciam seus dados.",
    llm: "Seleção de LLM",
    embedding: "Preferência de Embedding",
    vector: "Banco de Dados Vetorial",
    anonymous: "Telemetria Anônima Ativada",
  },
};

export default TRANSLATIONS;
