       
        const subli = document.querySelectorAll(".sub_page_title_menu")
        console.log(subli)
        const subMn = document.querySelectorAll(".sub_submenu")
        console.log(subMn)
        

        for(var i=0; i<subli.length; i++){
            subli[i].addEventListener("click",function(){
                this.querySelector("ul").classList.toggle("active")
            })
        }

    
    
        const btWrap = document.querySelector(".header_bottom_wrap")
        const btSub = document.querySelector(".header_bottom_submenu")
        
        btWrap.addEventListener("mouseover",()=>{
            btSub.style.display="block";
            btWrap.classList.add("active")
            document.querySelector(".sub_page_menu_wrap").classList.add("active")
        });
        btWrap.addEventListener("mouseout",()=>{
            btSub.style.display="none";
            btWrap.classList.remove("active")
            document.querySelector(".sub_page_menu_wrap").classList.remove("active")
        });
        //메인 gnb 호버 효과 //
        
        const lngBtn = document.querySelector(".header_top .language_btn")
        const lngBtnSm = document.querySelector(".language_btn_submenu")
        var count = 0;
    
        lngBtn.addEventListener("click",()=>{
            
            count ++
            
            if(count%2 != 0){
                lngBtnSm.style.opacity="1"
            }else{
                lngBtnSm.style.opacity="0"
            }
            
            console.log(count)
            
            
            
        })