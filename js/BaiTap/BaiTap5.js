// ?Khối 1: Dữ liệu đang có sẵn (Input)
// SoDuocNhap, SoHangDV, SoHangChuc, Tong (số được nhập vào, số hàng đơn vị, số hàng chục)

// ?Khối 2:Các bước xử lý code
// B1: Tạo biến SoDuocNhap, SoHangDV, SoHangChuc
// B2: Gan giá trị cho biến
// B3: Lập công thức tính toán 
//     SoHangDV = SoDuocNhap%10;
//     SoHangChuc = Math.floor(SoDuocNhap/10)
//     Tong = SoHangChuc + SoHangDV

// ?B4: Thông báo kết quả ở console.log


// Khối 3:Kết quả (Output)
// SoHangChuc
// SoHangChuc
// Tong


//B1+ B2
var SoDuocNhap = 24;
var SoHangChuc = 0;
var SoHangDV = 0;
var Tong = 0;

 //B3: 
// Tính số hàng chục và hàng trăm ==> Tổng

SoHangChuc = Math.floor(SoDuocNhap/10);
SoHangDV = SoDuocNhap%10;
Tong = SoHangChuc + SoHangDV

// B4
console.log("Số Hàng đơn vị là: ", SoHangDV);
console.log("Số Hàng chục là: ", SoHangChuc)
console.log("Tổng cần tìm là: ", Tong)
