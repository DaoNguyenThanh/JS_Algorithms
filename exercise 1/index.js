const prompt = require("prompt-sync")();
var a, b;
             
// Lấy giá trị từ ngươi dùng
a = prompt("Nhập số a = ");
b = prompt("Nhập số b = ");
 
// Đổi sang kiểu Number
a = parseInt(a);
b = parseInt(b);
 
// In kết quả ra trình duyệt
console.log("Tổng hai số " + a + " và " + b + " là " + (a + b));
console.log("Hiệu hai số " + a + " và " + b + " là " + (a - b));
console.log("Tích hai số " + a + " và " + b + " là " + (a * b));
console.log("Thương hai số " + a + " và " + b + " là " + (a / b));
console.log("Phần dư khi chia hai số " + a + " và " + b + " là " + (a % b));

