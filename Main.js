/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function sendMail() {
    var link = "mailto:kbrogley@steeliteusa.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("Commission Adjustments")
             + "&body=" + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}