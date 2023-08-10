var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("Active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("Active-link");
            document.getElementById(tabname).classList.add("active-tab");
            tablinks.classList.add( "Active-link")
        }


        var sidemenu=document.getElementById("sidemenu");
        function openmenu(){
            sidemenu.style.right="0";
        }
        function closemenu(){
            sidemenu.style.right="-200px";
        }



        const scriptURL = 'https://script.google.com/macros/s/AKfycby5AiCM_tye6IffFllXQ2d5B0YeX-tiuK3MSXnbIKUJfGR9xMy0Pb3t4yOnR-rVtfEO/exec'
        const form = document.forms['submit-to-google-sheet']
        constmsg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })