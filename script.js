const monthLabel = document.getElementById('monthLabel');
const monthInputValue = document.getElementById('monthInputValue');
const monthInputField = document.getElementById('monthInputField');
const saveMonthInputBtn = document.getElementById('saveMonthInputBtn');
const editMonthInputBtn = document.getElementById('editMonthInputBtn');

const incomeLabel = document.getElementById('incomeLabel');
const incomeInputValue = document.getElementById('incomeInputValue');
const incomeInputField = document.getElementById('incomeInputField');
const saveIncomeInputBtn = document.getElementById('saveIncomeInputBtn');
const editIncomeInputBtn = document.getElementById('editIncomeInputBtn');

const saveCurrentMonth = () => {
    editMonthInputBtn.style.display = 'block';
    saveMonthInputBtn.style.display = 'none';
    let monthInput = document.getElementById('monthInputField').value;
    monthInputValue.style.display = 'inline-block';
    monthInputValue.append(' ' + monthInput);
    monthInputField.style.display = 'none';
    monthInputValue.innerHTML = monthInput;
};

const editCurrentMonth = () => {
    saveMonthInputBtn.style.display = 'inline-block';
    editMonthInputBtn.style.display = 'none';
    monthInputField.style.display = 'inline-block';
    monthInputValue.style.display = 'none';
};

const saveCurrentIncome = () => {
    editIncomeInputBtn.style.display = 'block';
    saveIncomeInputBtn.style.display = 'none';
    let incomeInput = document.getElementById('incomeInputField').value;
    incomeInputValue.style.display = 'inline-block';
    incomeInputField.style.display = 'none';
    incomeInputValue.innerHTML = ' $' + incomeInput;
};

const editCurrentIncome = () => {
    saveIncomeInputBtn.style.display = 'inline-block';
    editIncomeInputBtn.style.display = 'none';
    incomeInputField.style.display = 'inline-block';
    incomeInputValue.style.display = 'none';
};