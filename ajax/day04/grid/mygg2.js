$(function() {
    function renderData(param) {
        $.ajax({
            type: 'post',
            data: param,
            dataType: 'json',
            url: 'bookInfo.php',
            success: function(data) {
                // console.log(data);
                var html = template('books', data);
                $("tbody").html(html);
                $.each($("#bookList tr"), function(i, v) {
                    //删除数据
                    $(v).find("td:eq(6)").find("a:eq(1)").click(function() {
                        var id = $(this).parent().parent().find("td:eq(0)").text();
                        // console.log(id);
                        renderData({
                            flag: 2,
                            id: id
                        });
                    });
                    //更新数据:
                    $(v).find("td:eq(6)").find("a:eq(0)").click(function() {
                        var id = $(this).parent().parent().find("td:eq(0)").text();
                        // console.log(id);
                        updateData(id);
                    });
                });
            }
        });
    }
    //数据初始化
    renderData({
        "flag": 0
    });
    //添加数据:
    $("#btn").unbind("click").click(function() {
        //获取表单数据:
        var res = $("#formId").serialize();
        var param = 'flag=1&' + res;
        renderData(param);
        $('#formId')[0].reset(); //清空已添加数据
    });
    //更新数据:
    function updateData(id) {
        // console.log(id);
        $.ajax({
            type: 'post',
            data: {
                flag: 3,
                id: id
            },
            dataType: 'json',
            url: 'bookInfo.php',
            success: function(data) {
                // console.log(data);
                $("#id").val(data.id);
                $("#bookName").val(data.bookName);
                $("#bookDesc").val(data.bookDesc);
                $("#bookAuthor").val(data.bookAuthor);
                $("#formId input[name=recommend][value=" + data.recommend + "]").prop("checked", true);
                var arr = data.category.split(",");
                $.each(arr, function(i, v) {
                    $("#formId input[type=checkbox][value=" + v + "]").prop("checked", true);
                });
                $("#btn").unbind("click").click(function() { 
                	var res =$("#formId").serialize();
                	// console.log(res);
                	res +="&flag=4";
                    renderData(res);
                });
            }
        });
    }
});