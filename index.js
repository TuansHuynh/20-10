function saveData() {
    // Lấy giá trị từ input
    const inputText = document.getElementById('inputText').value;

    // Lưu giá trị vào localStorage
    localStorage.setItem('sharedData', inputText);

    // Chuyển hướng đến trang 2
    window.location.href = 'trang2.html';
}
// Lấy dữ liệu từ localStorage
const receivedData = localStorage.getItem('sharedData');

// Hiển thị dữ liệu trong span
document.getElementById('outputSpan').textContent = receivedData;