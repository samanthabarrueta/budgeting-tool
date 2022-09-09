document.getElementById("saveCurrentMonthBtn").onclick = function () {saveCurrentMonth()};

function saveCurrentMonth() {
    document.getElementById("currentMonth").style.display = "none";
    document.getElementById("saveCurrentMonthBtn").style.display = "none";
    let monthForHeader = document.getElementById("currentMonth").value;
    document.getElementById("monthHeader").append(monthForHeader);
    $("#monthHeader").append(` <button type="button" class="btn btn-light" id="editCurrentMonthBtn">Edit</button>`);
};