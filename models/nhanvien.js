class NhanVien {
    txtTaiKhoan = "";
    txtHoTen = "";
    txtEmail = "";
    txtMatKhau = "";
    txtNgayLam = "";
    txtLuongCB = "";
    txtChucVu = "";
    txtGioLam = "";

    tinhTongLuong = function() {
        return (this.txtChucVu * this.txtLuongCB);
    };

    xepLoaiNV = function() {
        var xepLoai = "Trung Bình";
        if (this.txtGioLam >= 192) xepLoai = "Xuất sắc";
        else if (this.txtGioLam >= 175) xepLoai = "Giỏi";
        else if (this.txtGioLam >= 160) xepLoai = "Khá";
        return xepLoai;
    }

    showChucVu = function() {
        var chucVu = "Nhân Viên";
        if (this.txtChucVu == 3) chucVu = "Sếp";
        if (this.txtChucVu == 2) chucVu = "Trưởng Phòng";
        return chucVu;
    }
}