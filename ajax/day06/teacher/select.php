<?php 
    /*
    省市县后台数据接口
    接口调用规则：
    1、参数一：flag，用来区分请求的是省市县中间的那种数据（1：省，2：市；3：县）
    2、参数二：选择省的时候传递pId,选择市的时候传递cId
    

    A.http://localhost/select.php?flag=1   查询所有的省份

    B.http://localhost/select.php?flag=2&pId=1975   查询编号为1975的湖南省份对应的城市

    C.http://localhost/select.php?flag=3&cId=1283   查询编号为1283的城市对应的县
    */
    // include('./selectdata.php');
    // 引入数据文件
    require('./selectdata.php');
    // 省市县数据来自selectdata.php文件
    $province = $provinceJson;
    $city = $cityJson;
    $county = $countyJson;

    $flag = $_GET['flag'];
    // 省级数据
    if($flag == 1){
        echo json_encode($province);
    // 市级数据
    }else if($flag == 2){
        $pId = $_GET['pId'];
        $cityData = array();
        foreach ($city as $value) {
            if($value->id == $pId){
                // 直辖市
                array_push($cityData,$value);
                break;
            }else if($value->parent == $pId){
                // 非直辖市
                array_push($cityData,$value);
            }
        }
        echo json_encode($cityData);
    // 县级数据
    }else if($flag == 3){
        $cId = $_GET['cId'];
        $countyData = array();
        foreach ($county as $value) {
            if($value->parent == $cId){
                array_push($countyData,$value);
            }
        }
        echo json_encode($countyData);
    }
?>