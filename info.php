<?php
    require 'config.php';
	if(!isset($_GET['sys'])&&!isset($_GET['position'])){
		exit('非法操作！');
	};
	mysql_query("INSERT INTO info(sys,width,height,position,ip) values ('{$_GET['sys']}','{$_GET['width']}','{$_GET['height']}','{$_GET['position']}','{$_SERVER["REMOTE_ADDR"]}')");
	
	if(_affected_rows()==1){
		echo '[true,"'.$_SERVER['REMOTE_ADDR'].'"]';
	}else{
		echo '[false,"000"]';
	}
	
	//$json="";
	//while(!!$row=mysql_fetch_array($query,MYSQL_ASSOC)){
	//	$json.=json_encode($row).',';
	//}
	//echo '['.substr($json,0,strlen($json)-1).']';
	//mysql_close();
?>