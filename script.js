const monthHeader = document.getElementById('monthHeader');
const monthInputField = document.getElementById('monthInputField');
const saveMonthInputBtn = document.getElementById('saveMonthInputBtn');
const editMonthInputBtn = document.getElementById('editMonthInputBtn');

const saveCurrentMonth = () => {
    editMonthInputBtn.style.display = 'block';
    saveMonthInputBtn.style.display = 'none';
};

const editCurrentMonth = () => {
    saveMonthInputBtn.style.display = 'block';
    editMonthInputBtn.style.display = 'none';
};