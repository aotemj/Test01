window.onload = function() {
	var btn = document.querySelector("#btn");

	btn.onclick = function() {
		var search = document.querySelector("#search");
		if(search.value == "") {
			document.querySelector("#info").innerHTML = "请输入要查找的书籍名称";
			return;
		}
		sendAjax('get', 'test4.php', 'books=' + search.value, function(data) {
			if(data == "0") {
				document.querySelector("#info").innerHTML = "您要查找的书籍不存在";
				return;
			}
			var obj = JSON.parse(data);

			document.querySelector("#info").innerHTML = '<ul><li>书名:' + obj.name + '</li><li>作者:' + obj.author + '</li><li>介绍:' + obj.desc + '</li></ul>';
		});
	}

	function sendAjax(type, url, param, callback) {
		//1
		var x = new XMLHttpRequest();
		//2

		if(type == "get") {
			url += "?" + param;
		}
		x.open(type, url);
		//3
		var data = null;
		if(type == "post") {
			data = param;
			x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		}
		x.send(data);
		//4
		x.onreadystatechange = function() {
			if(x.readyState == 4 && x.status == 200) {
				var data = x.responseText;
				callback(data);
			}
		}
	}
}