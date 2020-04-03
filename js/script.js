var wEbButton = document.getElementById('Web-development-btn');
var AnDButton = document.getElementById('And-development-btn');
var mEgButton = document.getElementById('meg-development-btn');
var wEbOvErLay = document.getElementById('weboverlay');
var mEgOvErLay = document.getElementById('Megoverlay');
var AnDOvErLay= document.getElementById('Andoverlay');
var ClOsE = document.getElementById('js-close');

wEbButton.addEventListener('click', function(){
wEbOvErLay.classList.add('display');
ClOsE.classList.add('display');
BoDy.classList.add('overflow-nv');
});
ClOsE.addEventListener('click', function(){
wEbOvErLay.classList.remove('display');
ClOsE.classList.remove('display');
BoDy.classList.remove('overflow-nv');
});
mEgButton.addEventListener('click', function(){
    mEgOvErLay.classList.add('display');
    ClOsE.classList.add('display');
    BoDy.classList.add('overflow-nv');
    });
    ClOsE.addEventListener('click', function(){
    mEgOvErLay.classList.remove('display');
    ClOsE.classList.remove('display');
    BoDy.classList.remove('overflow-nv');
    });

    AnDButton.addEventListener('click', function(){
        AnDOvErLay.classList.add('display');
        ClOsE.classList.add('display');
        BoDy.classList.add('overflow-nv');
        });
        ClOsE.addEventListener('click', function(){
        AnDOvErLay.classList.remove('display');
        ClOsE.classList.remove('display');
        BoDy.classList.remove('overflow-nv');
        });

var CoStUmEr_CaRd_1 = document.getElementById('display-1');
var CoStUmEr_CaRd_2 = document.getElementById('display-2');
var CoStUmEr_CaRd_3 = document.getElementById('display-3');
var CoStUmEr_CaRd_4 = document.getElementById('display-4');
var CoStUmEr_CaRd_5 = document.getElementById('display-5');
var CoStUmEr_CaRd_6 = document.getElementById('display-6');

var CoStUmEr_CoMmEnTs_1 = document.getElementById('r-display-1');
var CoStUmEr_CoMmEnTs_2 = document.getElementById('r-display-2');
var CoStUmEr_CoMmEnTs_3 = document.getElementById('r-display-3');
var CoStUmEr_CoMmEnTs_4 = document.getElementById('r-display-4');
var CoStUmEr_CoMmEnTs_5 = document.getElementById('r-display-5');
var CoStUmEr_CoMmEnTs_6 = document.getElementById('r-display-6');

CoStUmEr_CaRd_1.addEventListener('mouseover', function(){
 CoStUmEr_CoMmEnTs_1.style.display="block";
 CoStUmEr_CoMmEnTs_2.style.display="none";
 CoStUmEr_CoMmEnTs_3.style.display="none";
 CoStUmEr_CoMmEnTs_4.style.display="none";
 CoStUmEr_CoMmEnTs_5.style.display="none";
 CoStUmEr_CoMmEnTs_6.style.display="none";
});

CoStUmEr_CaRd_2.addEventListener('mouseover', function(){
    CoStUmEr_CoMmEnTs_2.style.display="block";
    CoStUmEr_CoMmEnTs_1.style.display="none";
    CoStUmEr_CoMmEnTs_3.style.display="none";
    CoStUmEr_CoMmEnTs_4.style.display="none";
    CoStUmEr_CoMmEnTs_5.style.display="none";
    CoStUmEr_CoMmEnTs_6.style.display="none";
   });

   CoStUmEr_CaRd_3.addEventListener('mouseover', function(){
    CoStUmEr_CoMmEnTs_3.style.display="block";
    CoStUmEr_CoMmEnTs_1.style.display="none";
    CoStUmEr_CoMmEnTs_2.style.display="none";
    CoStUmEr_CoMmEnTs_4.style.display="none";
    CoStUmEr_CoMmEnTs_5.style.display="none";
    CoStUmEr_CoMmEnTs_6.style.display="none";
   });

   CoStUmEr_CaRd_4.addEventListener('mouseover', function(){
    CoStUmEr_CoMmEnTs_4.style.display="block";
    CoStUmEr_CoMmEnTs_1.style.display="none";
    CoStUmEr_CoMmEnTs_2.style.display="none";
    CoStUmEr_CoMmEnTs_3.style.display="none";
    CoStUmEr_CoMmEnTs_5.style.display="none";
    CoStUmEr_CoMmEnTs_6.style.display="none";
   });

   CoStUmEr_CaRd_5.addEventListener('mouseover', function(){
    CoStUmEr_CoMmEnTs_5.style.display="block";
    CoStUmEr_CoMmEnTs_1.style.display="none";
    CoStUmEr_CoMmEnTs_2.style.display="none";
    CoStUmEr_CoMmEnTs_4.style.display="none";
    CoStUmEr_CoMmEnTs_3.style.display="none";
    CoStUmEr_CoMmEnTs_6.style.display="none";
   });

   CoStUmEr_CaRd_6.addEventListener('mouseover', function(){
    CoStUmEr_CoMmEnTs_6.style.display="block";
    CoStUmEr_CoMmEnTs_1.style.display="none";
    CoStUmEr_CoMmEnTs_2.style.display="none";
    CoStUmEr_CoMmEnTs_4.style.display="none";
    CoStUmEr_CoMmEnTs_5.style.display="none";
    CoStUmEr_CoMmEnTs_3.style.display="none";
   });
   const HaNdBuRgEr = document.querySelector('.h-b');
   const NaVeOpEn = document.querySelector('.nav-2');
   const BoDy = document.querySelector('.window');
   const WiNdOw_c = document.querySelector('.w-c');
   const NaV_ClOsE = document.querySelector('.nav-c');

   HaNdBuRgEr.addEventListener('click', function(){
       NaVeOpEn.classList.add('open');
       BoDy.classList.add('overflow-nv');
   });
WiNdOw_c.addEventListener('click', function(){
    NaVeOpEn.classList.remove('open');
    BoDy.classList.remove('overflow-nv');
});
NaV_ClOsE.addEventListener('click', function(){
    NaVeOpEn.classList.remove('open');
    BoDy.classList.remove('overflow-nv');
});

function validate(){
    var uname1=document.getElementById("first-name").value;
    var regu1=/^([a-z A-Z \. 0-9 -])+$/;
    
    
    var login=document.getElementById("email").value;
    var regl=/^([a-z A-Z \. 0-9 -]+)@([a-z A-Z]{3,5}).([a-z]{2,5})$/;
    
    
    var num=document.getElementById("number").value;
    var regn=/^([0-9]{11})$/;

    var mess=document.getElementById("message").value;
    
    if((uname1=="") || (login=="") || (num=="") || (mess=="")){
        alert("field the input fields properly");
        }
        else if(regu1.test(uname1) && regl.test(login) && regn.test(num)){
            alert("Sumbit Successful");
            }
            
            else{alert("invalid input")};
    
}


