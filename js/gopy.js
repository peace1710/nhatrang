<script>
document.addEventListener("DOMContentLoaded", function () {
    //Tìm Form để theo dõi sự kiện Gửi
    const formGopY = document.getElementById("feedback");
    formGopY.addEventListener("submit", function(e) {
        //chặn trang web không tự load lại
        e.preventDefault();

        //Lấy giá trị từ các ô Input
        let tenNguoiDung = document.getElementById("name").value;
        let noiDungGopY = document.getElementById("message").value;

        console.log("Đang lưu:", tenNguoiDung, noiDungGopY);

        //Lưu vào Storage
        localStorage.setItem("name", tenNguoiDung);
        localStorage.setItem("message", noiDungGopY);

        //Thông báo xóa Form sau khi nhập
        alert("Cảm ơn " + tenNguoiDung + "! Góp ý đã được lưu.");
        formGopY.reset(); 
    });
});
</script>