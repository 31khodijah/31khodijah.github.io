        // var validasi = (function (){
        //     event.preventDefault();
        //     alert('test');
        // });


        function validasi() {
            var name = document.getElementById("name").value;
            var password = document.getElementById("password").value;
            console.log(name);

            if (name == "admin" && password == "admin") {
                alert("Selamat Datang Admin");
                setTimeout("location.href='adminhome.html'", 10);
            } else if (name != "" && password != "") {
                alert("Selamat Datang");
                setTimeout("location.href='home.html'", 10);
            }
            else {
                alert("Data Kosong");
                return false;
            }
        }