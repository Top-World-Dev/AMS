var intervalId="";
function verifyApplication(){
    $.ajax({
        url:$("#web_url").val()+"ajax/maxPower.php",
        type:"POST",
        data:"token=validateDomainName",
        dataType:"json",
        success:function(a){
            window.clearInterval(intervalId),
            "logout"==a.action?window.location=a.url+"logout.php":console.log("Valid Application")
        }
    }
    )
}

function registerPurchasedCode(){
    $.ajax(
        {
            url:$("#web_url").val()+"ajax/maxPower.php",
            type:"POST",
            data:"token=registerPurchasedCode",
            dataType:"json",
            success:function(a){
                (a.action="logout")?window.location=a.url+"logout.php":console.log("Valid Application")
            }
        }
    )
}

jQuery(document).ready(function(){
    jQuery("#modalVerify").length>0&&jQuery("#modalVerify").modal({
        backdrop:"static",keyboard:!1
    })
    // intervalId=window.setInterval(function(){verifyApplication()},3e3)
}
);