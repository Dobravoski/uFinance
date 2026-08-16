export const ptBR = {
  common: {
    cancel: "Cancelar",
    confirm: "Confirmar",
    delete: "Excluir",
    edit: "Editar",
    saveChanges: "Salvar alterações",
    nameLabel: "Nome",
    emailLabel: "E-mail",
    emailPlaceholder: "Digite seu e-mail",
    passwordLabel: "Senha",
    passwordPlaceholder: "Digite sua senha",
    signIn: "Entrar",
    createAccount: "Criar conta",
    income: "Receitas",
    expense: "Despesas",
    other: "Outros",
    profilePhotoLabel: "Foto de perfil",
    selectDatePlaceholder: "Selecione uma data",
    errors: {
      unexpected: "Ocorreu um erro inesperado.",
    },
  },
  login: {
    title: "Bem-vindo ao uFinance",
    subtitle: "Faça login para continuar gerenciando suas finanças.",
    noAccountText: "Ainda não possui uma conta?",
  },
  register: {
    title: "Criar conta",
    subtitle: "Crie sua conta para começar a organizar suas finanças.",
    namePlaceholder: "Digite seu nome",
    confirmPasswordLabel: "Confirmar senha",
    confirmPasswordPlaceholder: "Confirme sua senha",
    hasAccountText: "Já possui uma conta?",
  },
  validation: {
    email: {
      required: "Informe seu e-mail",
      invalid: "Informe um e-mail válido",
    },
    password: {
      required: "Informe sua senha",
      minLength: "A senha deve ter pelo menos {{min}} caracteres",
    },
    confirmPassword: {
      required: "Confirme sua senha",
      mismatch: "As senhas não coincidem",
    },
    name: {
      required: "Informe seu nome",
    },
    transaction: {
      amountRequired: "Informe um valor.",
      amountInvalid: "O valor deve ser um número.",
      amountPositive: "O valor deve ser maior que zero.",
      descriptionMaxLength: "A descrição deve ter no máximo {{max}} caracteres.",
      dateInvalid: "Data inválida.",
      categoryRequired: "Selecione uma categoria.",
      categoryInvalidIncome: "Categoria inválida para uma receita.",
      categoryInvalidExpense: "Categoria inválida para uma despesa.",
    },
  },
  home: {
    balanceCard: {
      label: "Saldo atual",
    },
    header: {
      greeting: "Olá! 👋",
      greetingWithName: "Olá, {{name}}! 👋",
      subtitle: "Confira como estão suas finanças hoje.",
    },
    recentTransactions: {
      title: "Transações recentes",
      viewAll: "Ver todas",
      emptyTitle: "Nenhuma transação ainda",
      emptyMessage: "Adicione sua primeira transação para começar.",
    },
  },
  profile: {
    loading: "Carregando perfil...",
    loadError: "Não foi possível carregar seu perfil.",
    changePhotoLabel: "Alterar foto de perfil",
    editNameLabel: "Editar nome",
    savingButton: "Salvando...",
    toast: {
      updateSuccess: "Perfil atualizado com sucesso.",
      updateError: "Não foi possível atualizar o perfil.",
    },
  },
  settings: {
    appearance: { title: "Aparência", system: "Sistema", light: "Claro", dark: "Escuro" },
    language: { title: "Idioma", system: "Sistema", ptBR: "Português", enUS: "English" },
  },
  transactions: {
    addFab: {
      accessibilityLabel: "Adicionar transação",
    },
    list: {
      headerTitle: "Transações",
      emptyFiltered: "Nenhuma transação encontrada para os filtros selecionados.",
      emptyAll: "Você ainda não possui transações.",
      toast: {
        deleteSuccess: "Transação excluída com sucesso",
        deleteError: "Não foi possível excluir a transação",
      },
      deleteModal: {
        title: "Excluir transação",
        message: "Tem certeza que deseja excluir esta transação?",
      },
    },
    create: {
      headerTitle: "Nova transação",
      submitButton: "Criar transação",
      toast: {
        success: "Transação criada com sucesso",
        error: "Não foi possível criar a transação",
      },
    },
    edit: {
      headerTitle: "Editar transação",
      toast: {
        success: "Transação atualizada com sucesso",
        error: "Não foi possível atualizar a transação",
      },
    },
    filters: {
      typeAll: "Todas",
      typeLabel: "Tipo",
      clear: "Limpar",
      startDateLabel: "Data inicial",
      startDatePlaceholder: "Data inicial",
      endDateLabel: "Data final",
      endDatePlaceholder: "Data final",
    },
    form: {
      amountLabel: "Valor",
      categoryLabel: "Categoria",
      categoryPlaceholder: "Selecione uma categoria",
      dateLabel: "Data",
      descriptionLabel: "Descrição",
      descriptionPlaceholder: "Digite uma descrição",
    },
    types: {
      income: "Receita",
      expense: "Despesa",
    },
    categories: {
      income: {
        salary: "Salário",
        freelance: "Freelance",
        investment: "Investimento",
        gift: "Presente",
      },
      expense: {
        food: "Alimentação",
        transport: "Transporte",
        housing: "Moradia",
        health: "Saúde",
        education: "Educação",
        leisure: "Lazer",
        shopping: "Compras",
        bills: "Contas",
      },
    },
  },
  nav: {
    drawer: {
      home: "Home",
      profile: "Perfil",
      settings: "Configurações",
      signOut: "Sair",
    },
  },
  auth: {
    errors: {
      invalidCredential: "E-mail ou senha inválidos.",
      emailAlreadyInUse: "Este e-mail já está cadastrado.",
      networkFailed: "Verifique sua conexão com a internet e tente novamente.",
      tooManyRequests: "Muitas tentativas. Aguarde alguns instantes e tente novamente.",
      userDisabled: "Esta conta foi desativada.",
      invalidEmail: "Informe um e-mail válido.",
      weakPassword: "A senha informada é muito fraca.",
    },
  },
};
