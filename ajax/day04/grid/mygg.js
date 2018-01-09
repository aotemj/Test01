$(function(){
	//# 图书管理功能接口文档
//	  ## 查询图书列表数据
//	  - 接口地址 http://localhost/grid/bookInfo.php
//	  - 请求类型 post
//	  - 请求参数 flag=0 查询信息标志位
	
	//需求1:查询数据库,将书籍列表加载到页面上:
		function renderData(param){
			$.ajax({
				type:'post',
				data:param,
				url:'bookInfo.php',
				dataType:'json',
				success:function(data){
					//console.log(data);
					//拼接字符串
					var tag='';
					for(var i =0;i<data.length;i++){
						tag+='<tr><td>'+data[i].id+'</td><td>'+data[i].bookName+'</td><td>'+data[i].bookAuthor+'</td><td>'+data[i].category+'</td><td>'+data[i].recommend+'</td><td>'+data[i].bookDesc+'</td><td><a href="javascript:;">修改</a>|<a href="javascript:;">删除</a></td></tr>';
					}
					//将字符串添加到页面上:
					$("#bookList tbody").html(tag);
					
					var trs = $("#bookList tbody tr");
					
					$.each(trs,function(i,v){
						var td = $(v).find("td:eq(6)");
						var id= $(v).find("td:eq(0)").text();

						//删除书籍
						td.find("a:eq(1)").click(function(){
							renderData({"flag":2,"id":id});
						});
						//更新书籍
						td.find("a:eq(0)").click(function(){
							updateData(id);
						});
					});		
				}
			});
		}
		//初始化页面
		renderData({"flag":0});
	
		//添加书籍
		$("#btn").unbind("click").on("click",function(){
			//获取当前页面上用户输入的书籍信息:
			var formData=$("#formId").serialize();
			formData+="&flag=1";
			renderData(formData);
		});

		//更新书籍函数:
		function updateData(id){
			$.ajax({
				type:'post',
				data:{"flag":3,"id":id},
				url:'bookInfo.php',
				dataType:'json',
				success:function(data){
					console.log(data);
					//id
					$("#id").val(data.id);
					//bookName:
					$("#bookName").val(data.bookName);
					//bookAuthor
					$("#bookAuthor").val(data.bookAuthor);
					//recommend
					$("input[name=recommend][value="+data.recommend+"]").prop("checked",true);

					//category
					var arr = data.category.split(",");
					$.each(arr,function(i,v){
						$("#formId input[value="+Number(v)+"]:checkbox").prop("checked",true);
					});
					//bookDesc
					$("#bookDesc").val(data.bookDesc);

					//重新绑定提交事件
					$("#btn").unbind("click").click(function(){
						var formData=$("#formId").serialize();
						formData+="&flag=4";
						renderData(formData);
					});
				}
			});
					
		}
		
});

// 					<tr>
//                  <td>1</td>
//                  <td>三国演义</td>
//                  <td>罗贯中</td>
//                  <td>文学</td>
//                  <td>是</td>
//                  <td>杀伐纷争的年代</td>
//                  <td><a href="javascript:;">修改</a>|<a href="javascript:;">删除</a></td>
//              	</tr> 