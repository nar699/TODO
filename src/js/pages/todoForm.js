document.getElementById('submit-accept').addEventListener('click', saveTask);
var ImgSelected;
drawCategoryList();

function saveTask(){

    var ttitle = document.getElementById('title').value;
    var tdeadline = document.getElementById('date').value;
    var tcategory = document.getElementById('category').value;
    var tdesciption = document.getElementById('text').value;
    var tcompleted = document.getElementById('checkbox1').checked;
    newTask(getImage(ImgSelected),ttitle,tdeadline,tcategory,tdesciption,tcompleted);
    sendToTask();
    drawCategoryList();
}

function drawCategoryList(){
    var list = getCategoryList();
    select = document.getElementById('category');
    select.innerHTML="";

    for(var i = 0; i < list.length; i++){
        var option = document.createElement("option");
        option.value = list[i].name;
        option.text = list[i].name;
        select.appendChild(option);
    }
}

function sendToTask(){
    window.location.href="index.html";
}

function uploadImg(image){
    selectImage(image);
    ImgSelected = image;
}