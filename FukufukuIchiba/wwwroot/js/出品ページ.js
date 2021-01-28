
    var obj1 = document.getElementById("selfile");
obj1.addEventListener("change", function(evt){
  var file = evt.target.files;
  var reader = new FileReader();

  //dataURL形式でファイルを読み込む
  reader.readAsDataURL(file[0]);

  //ファイルの読込が終了した時の処理
  reader.onload = function(){
    var dataUrl = reader.result;

    //読み込んだ画像とdataURLを書き出す
    document.getElementById("bg").innerHTML = "<img src='" + dataUrl + "'>";
    }
    },false);
 
        var obj2 = document.getElementById("selfile1");
obj2.addEventListener("change", function(evt){
  var file = evt.target.files;
  var reader = new FileReader();

  //dataURL形式でファイルを読み込む
  reader.readAsDataURL(file[0]);

  //ファイルの読込が終了した時の処理
  reader.onload = function(){
    var dataUrl = reader.result;

    //読み込んだ画像とdataURLを書き出す
    document.getElementById("bg1").innerHTML = "<img src='" + dataUrl + "'>";
        }
        },false);

            var obj3 = document.getElementById("selfile2");
obj3.addEventListener("change", function(evt){
  var file = evt.target.files;
  var reader = new FileReader();

  //dataURL形式でファイルを読み込む
  reader.readAsDataURL(file[0]);

  //ファイルの読込が終了した時の処理
  reader.onload = function(){
    var dataUrl = reader.result;

    //読み込んだ画像とdataURLを書き出す
    document.getElementById("bg2").innerHTML = "<img src='" + dataUrl + "'>";
            }
}, false);

                var obj4 = document.getElementById("selfile3");
obj4.addEventListener("change", function(evt){
  var file = evt.target.files;
  var reader = new FileReader();

  //dataURL形式でファイルを読み込む
  reader.readAsDataURL(file[0]);

  //ファイルの読込が終了した時の処理
  reader.onload = function(){
    var dataUrl = reader.result;

    //読み込んだ画像とdataURLを書き出す
    document.getElementById("bg3").innerHTML = "<img src='" + dataUrl + "'>";
                }
                },false);
 
                    var obj5 = document.getElementById("selfile4");
obj5.addEventListener("change", function(evt){
  var file = evt.target.files;
  var reader = new FileReader();

  //dataURL形式でファイルを読み込む
  reader.readAsDataURL(file[0]);

  //ファイルの読込が終了した時の処理
  reader.onload = function(){
    var dataUrl = reader.result;

    //読み込んだ画像とdataURLを書き出す
    document.getElementById("bg4").innerHTML = "<img src='" + dataUrl + "'>";
                    }
                    },false);
              