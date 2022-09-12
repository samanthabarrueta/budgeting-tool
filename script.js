const monthLabel = document.getElementById('monthLabel');
const monthInputValue = document.getElementById('monthInputValue');
const monthInputField = document.getElementById('monthInputField');
const saveMonthInputBtn = document.getElementById('saveMonthInputBtn');
const editMonthInputBtn = document.getElementById('editMonthInputBtn');


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

