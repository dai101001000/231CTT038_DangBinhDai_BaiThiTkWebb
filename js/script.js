// Lấy MSSV từ nội dung HTML để dùng cho yêu cầu tùy biến giao diện.
var mssv = document.getElementById("studentId").innerText;

// CHỨC NĂNG 1: Khi bấm nút "Xem", hiển thị tên môn học và tiến độ vào khung bên phải.
var viewButtons = document.querySelectorAll(".view-btn");
var selectedName = document.getElementById("selectedName");
var selectedProgress = document.getElementById("selectedProgress");

for (var i = 0; i < viewButtons.length; i++) {
    viewButtons[i].onclick = function () {
        var courseName = this.getAttribute("data-name");
        var courseProgress = this.getAttribute("data-progress");

        selectedName.innerText = courseName;
        selectedProgress.innerText = courseProgress;
    };
}

// CHỨC NĂNG 2: Khi bấm menu sidebar, đổi màu mục đang được chọn.
var menuItems = document.querySelectorAll(".menu-item");

for (var j = 0; j < menuItems.length; j++) {
    menuItems[j].onclick = function () {
        for (var k = 0; k < menuItems.length; k++) {
            menuItems[k].classList.remove("active");
        }

        this.classList.add("active");
    };
}

// CHỨC NĂNG 3: Lấy số cuối MSSV để quyết định số cột của danh sách môn học.
// MSSV 22123456 có số cuối là 6, là số chẵn, nên hiển thị Grid 3 cột.
var lastNumber = Number(mssv.charAt(mssv.length - 1));
var courseGrid = document.getElementById("courseGrid");

if (lastNumber % 2 === 0) {
    courseGrid.classList.add("three-columns");
} else {
    courseGrid.classList.add("two-columns");
}
