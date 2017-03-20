/*onload = function () {
    var xhr = new XMLHttpRequest();
    xhr.open("Get", "http://jsonplaceholder.typicode.com/posts", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var jsonData = JSON.parse(xhr.responseText);
            for (var data of jsonData) {
                console.log(data.userId + " " + data.id + " " + data.body);
            }
        }
    }
    xhr.send();
}*/
$(document).ready(function () {
    $('#id').on('blur', function () {
        $.getJSON("http://jsonplaceholder.typicode.com/posts/"+ $(this).val(), function (jsonData) {
            /*for (var data of jsonData) {
                console.log(data.userId + " " + data.id + " " + data.body);
            }*/
            $('#title').val(jsonData.title)
            $('#body').val(jsonData.body)
        });
    });
});