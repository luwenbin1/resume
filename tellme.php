<?php
    require 'config.php';
	if(!isset($_GET['tell'])&&!isset($_GET['name'])&&!isset($_GET['email'])){
		exit('非法操作！');
	};
	mysql_query("INSERT INTO message(tell,name,email,ip) values ('{$_GET['tell']}','{$_GET['name']}','{$_GET['email']}','{$_SERVER['REMOTE_ADDR']}')");
	//sleep(2);
	if(_affected_rows()==1){
		echo 'true';
	}else{
		echo 'false';
	}
	
	
	//$json="";
	//while(!!$row=mysql_fetch_array($query,MYSQL_ASSOC)){
	//	$json.=json_encode($row).',';
	//}
	//echo '['.substr($json,0,strlen($json)-1).']';
	//mysql_close();
?>