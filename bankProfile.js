/* deposit withdraw part js*/
document.getElementById('depositButId').addEventListener('click', function() {
    let deposits = document.getElementById('depositInput');
    let newdepositText = deposits.value;   /* deposit ta kothay seta define kore value ta neowa */
    let newdepositAmount = parseFloat(newdepositText);   /* parseFloat kore numbere kora  */

    /* amount ta jekhane raka hobe se ta ke define kora*/
    let depositTotal = document.getElementById("depositShow");

    
    let previousAmount = parseFloat(depositTotal.innerText) ; 

    /*  duita amoount jog part  */
    let currentAmount = previousAmount +  newdepositAmount ;
  
    depositTotal.innerText =  currentAmount ;
    /* update totalbalance */
    let balanceTotal = document.getElementById("totalBalanceId");
        let balanceText = balanceTotal.innerText;
            let balanceAmount = parseFloat(balanceText); 
        let updateTotalBalance = balanceAmount +  newdepositAmount ;

        balanceTotal.innerText = updateTotalBalance ;

    // clear the deposit input
    deposits.value = '';

});

/* Withdraw part */ 
document.getElementById("withdrawButId").addEventListener('click' , function(){
        let withdraw = document.getElementById('wihdrawInput');
            let newWithdrawtext = withdraw.value;
            let newWithdraw = parseFloat(newWithdrawtext);
            /*     console.log(newWithdraw); */
        
        /*withdraw amount define part */
        let withdrawshow = document.getElementById('withdrawId');
            let withdrawshowtext =  withdrawshow.innerText;
                let withdraws = parseFloat(withdrawshowtext);

        /* total withdraw jog */
        let totalWithdraw = newWithdraw + withdraws ;
        withdrawshow.innerText = totalWithdraw ;

    /* update the balance after withdraw */
        let balanceafter = document.getElementById('totalBalanceId');
            let balanceText = balanceafter.innerText ;
                let parseBalance = parseFloat(balanceText); 
            
        let newBalanceAfterWithdraw = parseBalance - newWithdraw ;  /* balance theke notun withdraw ta bad jabe */

        balanceafter.innerText = newBalanceAfterWithdraw ;






     /*    clean the input */
     withdraw.value = '' ;



});