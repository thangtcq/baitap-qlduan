/** Các chức năng có trong dự án quản lí nhân viên
 * In danh sách nhân viên
 * Thêm nhân viên mới từ form
 * Validate thông tin nhân viên
 * Tính tổng lương cho nhân viên
 * Xếp loại nhân viên
 * Xóa nhân viên
 * Cập nhật thông tin nhân viên
 * Tìm nhân viên theo xếp loại
 */

const arrNhanVien = new Array();

var nhanVien1 = new NhanVien();
nhanVien1.txtTaiKhoan = "thang1";
nhanVien1.txtHoTen = "Trương Công Quốc Thắng";
nhanVien1.txtEmail = "thang1@gmail.com";
nhanVien1.txtMatKhau = "Cyb@rS0ft";
nhanVien1.txtNgayLam = "06/22/2024";
nhanVien1.txtLuongCB = 3250000;
nhanVien1.txtChucVu = 1;
nhanVien1.txtGioLam = 160;
arrNhanVien.push(nhanVien1);

var nhanVien2 = new NhanVien();
nhanVien2.txtTaiKhoan = "phong1";
nhanVien2.txtHoTen = "Trần Huỳnh Phong";
nhanVien2.txtEmail = "phong1@gmail.com";
nhanVien2.txtMatKhau = "Cyb@rS0ft";
nhanVien2.txtNgayLam = "03/24/2024";
nhanVien2.txtLuongCB = 3640000;
nhanVien2.txtChucVu = 2;
nhanVien2.txtGioLam = 200;
arrNhanVien.push(nhanVien2);

var nhanVien3 = new NhanVien();
nhanVien3.txtTaiKhoan = "phong2";
nhanVien3.txtHoTen = "Lưu Đức Phong";
nhanVien3.txtEmail = "phong2@gmail.com";
nhanVien3.txtMatKhau = "Cyb@rS0ft";
nhanVien3.txtNgayLam = "06/23/2024";
nhanVien3.txtLuongCB = 3250000;
nhanVien3.txtChucVu = 1;
nhanVien3.txtGioLam = 198;
arrNhanVien.push(nhanVien3);

var nhanVienTam = new NhanVien();

renderArrNhanVien();

function renderArrNhanVien(arr = arrNhanVien) {
    let content = "";
    for (let nhanVien of arr) {
        let newNhanVien = new NhanVien();
        Object.assign(newNhanVien, nhanVien);
        let { txtTaiKhoan, txtHoTen, txtEmail, txtNgayLam, txtChucVu } = newNhanVien;
        let txtTongLuong = newNhanVien.tinhTongLuong();
        let txtXepLoai = newNhanVien.xepLoaiNV();
        let chucVu = newNhanVien.showChucVu();
        content += `
    <tr>
      <td>${txtTaiKhoan}</td>
      <td>${txtHoTen}</td>
      <td>${txtEmail}</td>
      <td>${txtNgayLam}</td>
      <td>${chucVu}</td>
      <td>${txtTongLuong}</td>
      <td>${txtXepLoai}</td>
      <td>
        <button onclick="deleteNV('${txtTaiKhoan}')" class="btn btn-danger">Xoá</button>
        <button onclick="getInfoNV('${txtTaiKhoan}')" class="btn btn-warning" data-toggle="modal" data-target="#myModal">Sửa</button>
      </td>
    </tr>
    `;
    }
    document.getElementById("tableDanhSach").innerHTML = content;
}

function createNV() {
    var nhanVien = new NhanVien();
    nhanVien.txtTaiKhoan = document.getElementById("txtTaiKhoan").value;
    nhanVien.txtHoTen = document.getElementById("txtHoTen").value;
    nhanVien.txtEmail = document.getElementById("txtEmail").value;
    nhanVien.txtMatKhau = document.getElementById("txtMatKhau").value;
    nhanVien.txtNgayLam = document.getElementById("txtNgayLam").value;
    nhanVien.txtLuongCB = parseFloat(document.getElementById("txtLuongCB").value);
    nhanVien.txtChucVu = parseInt(document.getElementById("txtChucVu").value);
    nhanVien.txtGioLam = parseInt(document.getElementById("txtGioLam").value);

    isTaiKhoanValid = validateTK(nhanVien.txtTaiKhoan);
    if (isTaiKhoanValid == false) return false;

    isHoTenValid = validateHT(nhanVien.txtHoTen);
    if (isHoTenValid == false) return false;

    isEmailValid = validateEmail(nhanVien.txtEmail);
    if (isEmailValid == false) return false;

    isPasswordValid = validatePassword(nhanVien.txtMatKhau);
    if (isPasswordValid == false) return false;

    isLuongCBValid = validateLuongCB(nhanVien.txtLuongCB);
    if (isLuongCBValid == false) return false;

    isNgayLamValid = validateNgayLam(nhanVien.txtNgayLam);
    if (isNgayLamValid == false) return false;

    arrNhanVien.push(nhanVien);
    renderArrNhanVien();
    alert("Thêm mới nhân viên thành công");
}

function deleteNV(taiKhoan) {
    let index = arrNhanVien.findIndex((item, index) => {
        return item.txtTaiKhoan == taiKhoan;
    });

    if (index != -1) {
        arrNhanVien.splice(index, 1);
        renderArrNhanVien();
        alert("Xóa nhân viên thành công");
    }
}

function getInfoNV(taiKhoan) {
    nhanVienTam.txtTaiKhoan = taiKhoan;

    let index = arrNhanVien.findIndex((item, index) => {
        return item.txtTaiKhoan == taiKhoan;
    });

    if (index != -1) {
        nhanVienTam.txtHoTen = arrNhanVien[index].txtHoTen;
        nhanVienTam.txtEmail = arrNhanVien[index].txtEmail;
        nhanVienTam.txtMatKhau = arrNhanVien[index].txtMatKhau;
        nhanVienTam.txtNgayLam = arrNhanVien[index].txtNgayLam;
        nhanVienTam.txtLuongCB = arrNhanVien[index].txtLuongCB;
        nhanVienTam.txtChucVu = arrNhanVien[index].txtChucVu;
        nhanVienTam.txtGioLam = arrNhanVien[index].txtGioLam;

        var txtTaiKhoan = document.getElementById("txtTaiKhoan");
        txtTaiKhoan.placeholder = nhanVienTam.txtTaiKhoan;
        document.getElementById("txtTaiKhoan").disabled = true;

        var txtHoTen = document.getElementById("txtHoTen");
        txtHoTen.value = nhanVienTam.txtHoTen;

        var txtEmail = document.getElementById("txtEmail");
        txtEmail.value = nhanVienTam.txtEmail;

        var txtMatKhau = document.getElementById("txtMatKhau");
        txtMatKhau.value = nhanVienTam.txtMatKhau;

        var txtNgayLam = document.getElementById("txtNgayLam");
        txtNgayLam.value = nhanVienTam.txtNgayLam;

        var txtLuongCB = document.getElementById("txtLuongCB");
        txtLuongCB.value = nhanVienTam.txtLuongCB;

        var txtChucVu = document.getElementById("txtChucVu");
        txtChucVu.value = nhanVienTam.txtChucVu;

        var txtGioLam = document.getElementById("txtGioLam");
        txtGioLam.value = nhanVienTam.txtGioLam;
    }
}

function updateNV() {
    var taiKhoan = nhanVienTam.txtTaiKhoan;
    let index = arrNhanVien.findIndex((item, index) => {
        return item.txtTaiKhoan == taiKhoan;
    });

    if (index != -1) {
        nhanVienTam.txtHoTen = document.getElementById("txtHoTen").value;
        nhanVienTam.txtEmail = document.getElementById("txtEmail").value;
        nhanVienTam.txtMatKhau = document.getElementById("txtMatKhau").value;
        nhanVienTam.txtNgayLam = document.getElementById("txtNgayLam").value;
        nhanVienTam.txtLuongCB = parseFloat(document.getElementById("txtLuongCB").value);
        nhanVienTam.txtChucVu = parseInt(document.getElementById("txtChucVu").value);
        nhanVienTam.txtGioLam = parseInt(document.getElementById("txtGioLam").value);

        isTaiKhoanValid = validateTK(nhanVien.txtTaiKhoan);
        if (isTaiKhoanValid == false) return false;

        isHoTenValid = validateHT(nhanVien.txtHoTen);
        if (isHoTenValid == false) return false;

        isEmailValid = validateEmail(nhanVien.txtEmail);
        if (isEmailValid == false) return false;

        isPasswordValid = validatePassword(nhanVien.txtMatKhau);
        if (isPasswordValid == false) return false;

        isLuongCBValid = validateLuongCB(nhanVien.txtLuongCB);
        if (isLuongCBValid == false) return false;

        isNgayLamValid = validateNgayLam(nhanVien.txtNgayLam);
        if (isNgayLamValid == false) return false;

        arrNhanVien[index] = nhanVienTam;
        renderArrNhanVien();
        alert("Cập nhật thông tin nhân viên thành công");
    }
}

function validateTK(taiKhoan) {
    if (taiKhoan == "") {
        alert("Vui lòng nhập thông tin tài khoản");
        return false;
    }

    if (taiKhoan.length < 4 || taiKhoan.length > 6) {
        alert("Vui lòng kiểm tra thông tin tài khoản");
        return false;
    }

    let index = arrNhanVien.findIndex((item, index) => {
        return item.txtTaiKhoan == taiKhoan;
    });
    if (index != -1) {
        alert("Tài khoản đã tồn tại trong hệ thống");
        return false;
    }

    return true;
}

function validateHT(hoTen) {
    if (hoTen == "") {
        alert("Vui lòng nhập thông tin họ và tên");
        return false;
    }

    var re = /^[A-Za-z\s]+$/;
    isValid = re.test(removeAscent(hoTen));
    if (isValid == false) {
        alert("Vui lòng kiểm tra thông tin họ tên");
        return false;
    }

    return true;
}

function validateEmail(email) {
    if (email == "") {
        alert("Vui lòng nhập thông tin email");
        return false;
    }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    isValid = re.test(String(email).toLowerCase());
    if (isValid == false) {
        alert("Vui lòng kiểm tra thông tin email");
        return false;
    }

    return true;
}

function validatePassword(password) {
    console.log(password)
    if (password == "") {
        alert("Vui lòng nhập thông tin password");
        return false;
    }

    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    isValid = re.test(password);
    if (isValid == false) {
        alert("Vui lòng kiểm tra thông tin password");
        return false;
    }

    return true;
}

function validateLuongCB(luongCB) {
    if (luongCB == "") {
        alert("Vui lòng nhập thông tin lương cơ bản");
        return false;
    }

    if (validateNumber(luongCB) == false || luongCB.length < 1000000 || luongCB.length > 20000000) {
        alert("Vui lòng kiểm tra thông tin lương cơ bản");
        return false;
    }

    return true;
}

function validateNgayLam(ngayLam) {
    if (ngayLam == "") {
        alert("Vui lòng nhập thông tin ngày làm");
        return false;
    }

    var re = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    isValid = re.test(ngayLam);
    if (isValid == false) {
        alert("Vui lòng kiểm tra thông tin ngày làm");
        return false;
    }

    return true;
}

function removeAscent(str) {
    if (str === null || str === undefined) return str;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
}

function validateNumber(input) {
    return !isNaN(parseFloat(input)) && isFinite(input);
}

function timNV() {
    var arrNhanVienTam = new Array();
    var lenArrNhanVien = arrNhanVien.length;
    var xepLoai = document.getElementById("txtSearchLoai").value;
    if (xepLoai == 0) {
        renderArrNhanVien(arrNhanVien);
        return true;
    } else if (xepLoai == 1) {
        for (var i = 0; i < lenArrNhanVien; i++) {
            console.log(arrNhanVien[i].txtGioLam)
            if (arrNhanVien[i].txtGioLam >= 192) {
                arrNhanVienTam.push(arrNhanVien[i])
            }
        }
    } else if (xepLoai == 2) {
        for (var i = 0; i < lenArrNhanVien; i++) {
            console.log(arrNhanVien[i].txtGioLam)
            if (arrNhanVien[i].txtGioLam < 192 && arrNhanVien[i].txtGioLam >= 175) {
                arrNhanVienTam.push(arrNhanVien[i])
            }
        }
    } else if (xepLoai == 3) {
        for (var i = 0; i < lenArrNhanVien; i++) {
            console.log(arrNhanVien[i].txtGioLam)
            if (arrNhanVien[i].txtGioLam < 175 && arrNhanVien[i].txtGioLam >= 160) {
                arrNhanVienTam.push(arrNhanVien[i])
            }
        }
    } else if (xepLoai == 4) {
        for (var i = 0; i < lenArrNhanVien; i++) {
            console.log(arrNhanVien[i].txtGioLam)
            if (arrNhanVien[i].txtGioLam < 160) {
                arrNhanVienTam.push(arrNhanVien[i])
            }
        }
    }
    renderArrNhanVien(arrNhanVienTam);
}

function clearData() {
    document.getElementById("formInput").reset();
}