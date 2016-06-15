<?php
    require 'config.php';
	if(!isset($_GET['currentsize'])){
		$_rows=_query("select * from info order by datatime desc");
	}else{
		$_GET['currentsize']=$_GET['currentsize']*$_GET['pagesize'];
		$_rows=_query("select * from message order by datatime desc limit {$_GET['currentsize']},{$_GET['pagesize']}");
	}
	$_json="";
	while(!!$_row=_fetch_array_list($_rows)){
		$_json.=json_encode($_row).',';
	}
	echo '['.substr($_json,0,strlen($_json)-1).']';
	//$json="";
	//while(!!$row=mysql_fetch_array($query,MYSQL_ASSOC)){
	//	$json.=json_encode($row).',';
	//}
	//echo '['.substr($json,0,strlen($json)-1).']';
	mysql_close();
?>