<?php 
	if(isset($_POST['mail'])&&!empty($_POST['mail'])){
        $mail = trim($_POST['mail']);
        if(filesize("mail.txt")>0) {
            $fp = fopen("mail.txt","r");
            $rf = fread($fp,filesize("mail.txt"));
            $mailArray = explode("\n",$rf);
            foreach($mailArray as $m){
                if(trim($m)==$mail){
                    echo '0';
                    flock($fp, LOCK_UN);
                    fclose($fp);
                    exit();
                }
            }
        }
        $fp = fopen("mail.txt","a+");
        flock($fp, LOCK_EX) ;
		fwrite($fp,$mail."\r\n");
		flock($fp, LOCK_UN);
		fclose($fp);
		echo '1';
	}
?>