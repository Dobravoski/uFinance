import type { ptBR } from "./pt-BR";

export const enUS: typeof ptBR = {
  common: {
    cancel: "Cancel",
    confirm: "Confirm",
    delete: "Delete",
    edit: "Edit",
    save: "Save",
    saveChanges: "Save changes",
    nameLabel: "Name",
    emailLabel: "Email",
    emailPlaceholder: "Enter your email",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter your password",
    signIn: "Sign in",
    createAccount: "Create account",
    income: "Income",
    expense: "Expenses",
    other: "Other",
    profilePhotoLabel: "Profile photo",
    selectDatePlaceholder: "Select a date",
    errors: {
      unexpected: "An unexpected error occurred.",
    },
  },
  login: {
    title: "Welcome to uFinance",
    subtitle: "Sign in to keep managing your finances.",
    noAccountText: "Don't have an account yet?",
  },
  register: {
    title: "Create account",
    subtitle: "Create your account to start organizing your finances.",
    namePlaceholder: "Enter your name",
    confirmPasswordLabel: "Confirm password",
    confirmPasswordPlaceholder: "Confirm your password",
    hasAccountText: "Already have an account?",
  },
  validation: {
    email: {
      required: "Enter your email",
      invalid: "Enter a valid email",
    },
    password: {
      required: "Enter your password",
      minLength: "Password must be at least {{min}} characters",
    },
    confirmPassword: {
      required: "Confirm your password",
      mismatch: "Passwords do not match",
    },
    name: {
      required: "Enter your name",
    },
    transaction: {
      amountRequired: "Enter an amount.",
      amountInvalid: "Amount must be a number.",
      amountPositive: "Amount must be greater than zero.",
      descriptionMaxLength: "Description must be at most {{max}} characters.",
      dateInvalid: "Invalid date.",
      categoryRequired: "Select a category.",
      categoryInvalidIncome: "Invalid category for an income.",
      categoryInvalidExpense: "Invalid category for an expense.",
    },
  },
  home: {
    balanceCard: {
      label: "Current balance",
    },
    header: {
      greeting: "Hi! 👋",
      greetingWithName: "Hi, {{name}}! 👋",
      subtitle: "Check how your finances are doing today.",
    },
    recentTransactions: {
      title: "Recent transactions",
      viewAll: "View all",
      emptyTitle: "No transactions yet",
      emptyMessage: "Add your first transaction to get started.",
    },
  },
  profile: {
    loading: "Loading profile...",
    loadError: "Could not load your profile.",
    changePhotoLabel: "Change profile photo",
    editNameLabel: "Edit name",
    savingButton: "Saving...",
    toast: {
      updateSuccess: "Profile updated successfully.",
      updateError: "Could not update the profile.",
    },
  },
  settings: {
    appearance: { title: "Appearance", system: "System", light: "Light", dark: "Dark" },
    language: { title: "Language", system: "System", ptBR: "Português", enUS: "English" },
  },
  transactions: {
    addFab: {
      accessibilityLabel: "Add transaction",
    },
    list: {
      headerTitle: "Transactions",
      emptyFiltered: "No transactions found for the selected filters.",
      emptyAll: "You don't have any transactions yet.",
      toast: {
        deleteSuccess: "Transaction deleted successfully",
        deleteError: "Could not delete the transaction",
      },
      deleteModal: {
        title: "Delete transaction",
        message: "Are you sure you want to delete this transaction?",
      },
    },
    create: {
      headerTitle: "New transaction",
      submitButton: "Create transaction",
      toast: {
        success: "Transaction created successfully",
        error: "Could not create the transaction",
      },
    },
    edit: {
      headerTitle: "Edit transaction",
      toast: {
        success: "Transaction updated successfully",
        error: "Could not update the transaction",
      },
    },
    filters: {
      typeAll: "All",
      typeLabel: "Type",
      clear: "Clear",
      startDateLabel: "Start date",
      startDatePlaceholder: "Start date",
      endDateLabel: "End date",
      endDatePlaceholder: "End date",
    },
    form: {
      amountLabel: "Amount",
      categoryLabel: "Category",
      categoryPlaceholder: "Select a category",
      dateLabel: "Date",
      descriptionLabel: "Description",
      descriptionPlaceholder: "Enter a description",
    },
    types: {
      income: "Income",
      expense: "Expense",
    },
    categories: {
      income: {
        salary: "Salary",
        freelance: "Freelance",
        investment: "Investment",
        gift: "Gift",
      },
      expense: {
        food: "Food",
        transport: "Transport",
        housing: "Housing",
        health: "Health",
        education: "Education",
        leisure: "Leisure",
        shopping: "Shopping",
        bills: "Bills",
      },
    },
  },
  nav: {
    drawer: {
      home: "Home",
      profile: "Profile",
      settings: "Settings",
      signOut: "Sign out",
    },
  },
  auth: {
    errors: {
      invalidCredential: "Invalid email or password.",
      emailAlreadyInUse: "This email is already registered.",
      networkFailed: "Check your internet connection and try again.",
      tooManyRequests: "Too many attempts. Wait a moment and try again.",
      userDisabled: "This account has been disabled.",
      invalidEmail: "Enter a valid email.",
      weakPassword: "The password provided is too weak.",
      unexpected: "An unexpected error occurred. Please try again.",
    },
  },
};
