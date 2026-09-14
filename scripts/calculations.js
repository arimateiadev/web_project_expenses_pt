// Passo 2
let budgetValue = 0;
let totalExpensesValue = 0;

// Passo 3
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

// Passo 4
for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
}

// Passo 5
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

// Passo 6
function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

// Passo 7
let balanceColor = "green";

function updateBalanceColor() {
  let balance = calculateBalance();

  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

//  Passo 8 — coloque aqui, no final do arquivo (por enquanto)
function calculateCategoryExpenses(category) {
  let categoryTotal = 0;

  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      categoryTotal += expenseEntries[i][1];
    }
  }

  return categoryTotal;
}

// Passo 9
function calculateLargestCategory() {
  // 1. Lista das 5 categorias fixas do projeto
  const categories = ["groceries", "restaurants", "transport", "home", "subscriptions"];

  // 2. Array que vai guardar [nome, total]
  const categoriesTotals = [];

  // 3. Calcula o total de cada categoria usando a função que você já tem
  for (const category of categories) {
    const total = calculateCategoryExpenses(category);
    categoriesTotals.push([category, total]);
  }

  // 4. Algoritmo pra achar o maior - igual do sprint
  let largestCategory = categoriesTotals[0][0];
  let largestTotal = categoriesTotals[0][1];

  for (const item of categoriesTotals) {
    const categoryName = item[0];
    const categoryTotal = item[1];

    if (categoryTotal > largestTotal) {
      largestTotal = categoryTotal;
      largestCategory = categoryName;
    }
  }

  // 5. Retorna só o nome da categoria
  return largestCategory;
}

// Passo 10
function addExpenseEntry(entry) {
  // 1. Adiciona a nova despesa na lista
  expenseEntries.push(entry);

  // 2. entry[0] é a categoria, entry[1] é o valor
  // Então soma o valor no total
  totalExpensesValue += entry[1];
}