        // var validasi = (function (){
        //     event.preventDefault();
        //     alert('test');
        // });


        function validasi() {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var alamat = document.getElementById("alamat").value;
            var nohp = document.getElementById("nohp").value;
            var myFile = document.getElementById("myFile").value;
            console.log(name);

            if (name == "" && email == "" && password == "" && alamat == "" && nohp == "" && myFile == "") {
                alert("Data Tidak Lengkap");
                return false;
            } else if (name != "" && email != "" && password != "" && alamat != "" && nohp != "" && myFile !="") {
                alert("Selamat Datang");
                setTimeout("location.href='home.html'", 10);
            }
            else {
                alert("Data Kosong");
                return false;
            }
        }

