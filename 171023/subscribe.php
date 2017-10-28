<?php

	// Put your MailChimp API and List ID hehe
	$api_key = '1081be73e3dfad69f9b375f669e24f0b-us8';
	$list_id = '550c0977f7';

	// Let's start by including the MailChimp API wrapper
	include('./inc/MailChimp.php');
	// Then call/use the class
	use \DrewM\MailChimp\MailChimp;
	$MailChimp = new MailChimp($api_key);
	$subscriber_hash = $MailChimp->subscriberHash($_POST["email"]);
	if(isset($subscriber_hash)) {
		$result = $MailChimp->put("lists/$list_id/members/$subscriber_hash", [
								'email_address' => $_POST["email"],
								'merge_fields'  => ['FNAME'=>$_POST["fname"], 'LNAME'=>$_POST["lname"], 'TEL'=>$_POST["phone"], 'MEMBERSHIP'=>$_POST["memberships"],'CMTH'=>$_POST["call-month"],'CDAY'=>$_POST["call-day"],'CTIME'=>$_POST["call-time"],'SEAT'=>$_POST["seating"]],
								'status_if_new' => 'subscribed',
							]);
	}
else {
	// Submit subscriber data to MailChimp
	// For parameters doc, refer to: http://developer.mailchimp.com/documentation/mailchimp/reference/lists/members/
	// For wrapper's doc, visit: https://github.com/drewm/mailchimp-api
	$result = $MailChimp->post("lists/$list_id/members", [
							'email_address' => $_POST["email"],
							'merge_fields'  => ['FNAME'=>$_POST["fname"], 'LNAME'=>$_POST["lname"], 'TEL'=>$_POST["phone"], 'MEMBERSHIP'=>$_POST["memberships"],'CMTH'=>$_POST["call-month"],'CDAY'=>$_POST["call-day"],'CTIME'=>$_POST["call-time"],'SEAT'=>$_POST["seating"]],
							'status' => 'subscribed',
						]);
}
	if ($MailChimp->success()) {
		// Success message
		echo "<h4>Thank you, you have been added to our mailing list.</h4>";
	} else {
		// Display error
		echo $MailChimp->getLastError();
		// Alternatively you can use a generic error message like:
		// echo "<h4>Please try again.</h4>";
	}
?>
