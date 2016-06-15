<?php
    header('Content-Type:text/html;charset=utf-8');
	
	define('DB_HOST','localhost');
	define('DB_USER','root');
	define('DB_PASS','1234');
	define('DB_NAME','test');
	
	$conn=@mysql_connect(DB_HOST,DB_USER,DB_PASS)or die ('数据库连接失败'.mysql_error());
	@mysql_select_db(DB_NAME)or die ('没有指定数据库表'.mysql_error());
	mysql_query('SET NAMES UTF8');
	
	function _affected_rows(){
		return mysql_affected_rows();
	}
	function _query($_sql){
		if(!$result=mysql_query($_sql)){
			exit('SQL失败'.mysql_error());
		};
		return $result;
	};
	
	function _fetch_array($_sql){
		return mysql_fetch_array(_query($_sql),MYSQL_ASSOC);
	}
	function _fetch_array_list($_result){
		return mysql_fetch_array($_result,MYSQL_ASSOC);
	}
?>
