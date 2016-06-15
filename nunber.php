<?php
    require 'config.php';
	$_rows=_query("select id from {$_GET['table']}");
	$_json="";
	while(!!$_row=_fetch_array_list($_rows)){
		$_json.=json_encode($_row).',';
	}
	echo '['.substr($_json,0,strlen($_json)-1).']';
	mysql_close();
?>