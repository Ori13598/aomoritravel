/* Change monthly value and according language*/

const enmontharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const jpmontharray =["１月", "２月", "３月", "４月", "５月", "６月", "７月", "８月", "９月", "１０月", "１１月", "１２月"];

function getmonthvalue(){
    const valuelan =document.querySelector('.top_option_language_la').value;
    if(valuelan ==="Jp") {
      document.querySelector('.top_title_content').innerHTML = "青森ようこそ";
      document.querySelector('.top_option_month_content').innerHTML = "毎月の情報とイベント";
      for (let f = 0;  f <= 11; f++ ) {
        document.getElementById("top_option_month_monthvalue_id").options[f].innerHTML = jpmontharray[f];
      }
      document.getElementById("MID_title_content_sightseeing").innerHTML = "観光スポット";
      document.getElementById("MID_title_content_foodtour").innerHTML = "飲食";
      document.getElementById("MID_title_content_entertainment").innerHTML = "遊び";  
    } else if(valuelan ==="En") {
        document.querySelector('.top_title_content').innerHTML = "Welcome to Aomori";
        document.querySelector('.top_option_month_content').innerHTML = "Monthly Information and Event";
        for (let f = 0;  f <= 11; f++ ) {
          document.getElementById("top_option_month_monthvalue_id").options[f].innerHTML = enmontharray[f];
        }
        document.getElementById("MID_title_content_sightseeing").innerHTML = "Sightseeing";
        document.getElementById("MID_title_content_foodtour").innerHTML = "Foodtour";
        document.getElementById("MID_title_content_entertainment").innerHTML = "Entertainment";  
    }
    const monthvalue =document.querySelector('.top_option_month_monthvalue').value;
    const valuelanguage =document.querySelector('.top_option_language_la').value;
/* show January English data */
    if (monthvalue === "JAN" && valuelanguage === "En") { 
              /*Generate HTML SIGHTSEEING*/
        
        let sightseeingHTML="";
        let array_sightseeing_carousel =[];
        let array_sightseeing_slideindex =[];
        let a = 1;
        DB_sightseeing_JAN.forEach((sightseeing_JAN) => {
          sightseeingHTML +=`
                <div class="MID_travelspot">
                  <div class="MID_travelspot_carousel_sightseeing${a} fade">
                    <p class ="MID_travelspot_infor">${DB_sightseeing_JAN[`${a-1}`].content1.encontent}</p>
                    <a class ="MID_travelspot_infor_tag" href="${DB_sightseeing_JAN[`${a-1}`].hatstag1.link }" target="_blank">${DB_sightseeing_JAN[`${a-1}`].hatstag1.hastag}</a>
                  </div>
                  <div class="MID_travelspot_carousel_sightseeing${a} fade">
                    <p class ="MID_travelspot_infor">${DB_sightseeing_JAN[`${a-1}`].content2.encontent}</p>
                    <a class ="MID_travelspot_infor_tag" href="${DB_sightseeing_JAN[`${a-1}`].hatstag2.link }" target="_blank">${DB_sightseeing_JAN[`${a-1}`].hatstag2.hastag}</a>
                  </div>
                  <div class="MID_travelspot_carousel_sightseeing${a} fade">
                    <p class ="MID_travelspot_infor">${DB_sightseeing_JAN[`${a-1}`].content3.encontent}</p>
                    <a class ="MID_travelspot_infor_tag" href="${DB_sightseeing_JAN[`${a-1}`].hatstag3.link }" target="_blank">${DB_sightseeing_JAN[`${a-1}`].hatstag3.hastag}</a>
                  </div>
                  <button class="MID_travelspot_button likebutton" onclick="SJANcountlikebutton(${a})">いいね！</button>
                  <a class="countlike SJANcountlike${a}"></a>
                  <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
                  <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
                </div>`;
          array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
          array_sightseeing_slideindex.push(1);
          a++;
        });
        document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;
    
      /*Generate HTML FOODTOUR*/

        let foodtourHTML="";
        let array_foodtour_carousel =[];
        let array_foodtour_slideindex =[];
        let b = 1;
        DB_foodtour_JAN.forEach((foodtour_JAN) => {
          foodtourHTML +=`
                  <div class="MID_travelspot">
                    <div class="MID_travelspot_carousel_foodtour${b} fade">
                      <p class ="MID_travelspot_infor">${DB_foodtour_JAN[`${b-1}`].content1.encontent}</p>
                      <a class ="MID_travelspot_infor_tag" href="${DB_foodtour_JAN[`${b-1}`].hatstag1.link }" target="_blank">${DB_foodtour_JAN[`${b-1}`].hatstag1.hastag}</a>
                  </div>
                    <div class="MID_travelspot_carousel_foodtour${b} fade">
                      <p class ="MID_travelspot_infor">${DB_foodtour_JAN[`${b-1}`].content2.encontent}</p>
                      <a class ="MID_travelspot_infor_tag" href="${DB_foodtour_JAN[`${b-1}`].hatstag2.link }" target="_blank">${DB_foodtour_JAN[`${b-1}`].hatstag2.hastag}</a>
                    </div>
                    <div class="MID_travelspot_carousel_foodtour${b} fade">
                      <p class ="MID_travelspot_infor">${DB_foodtour_JAN[`${b-1}`].content3.encontent}</p>
                      <a class ="MID_travelspot_infor_tag" href="${DB_foodtour_JAN[`${b-1}`].hatstag3.link }" target="_blank">${DB_foodtour_JAN[`${b-1}`].hatstag3.hastag}</a>
                    </div>
                    <button class="MID_travelspot_button likebutton" onclick="TJANcountlikebutton(${b})">いいね！</button>
                    <a class="countlike TJANcountlike${b}">0</a>
                    <a class="prev prevfoodtour" onclick="plusSlides_foodtour(-1, ${b-1})">❮</a>
                    <a class="next nextfoodtour" onclick="plusSlides_foodtour(1, ${b-1})">❯</a>
                  </div>`;
          array_foodtour_carousel.push(`MID_travelspot_carousel_foodtour${b}`);
          array_foodtour_slideindex.push(1);
          b++;
        });
        document.querySelector(".MID_content_foodtour").innerHTML = foodtourHTML;  

      /*Generate HTML ENTERTAINMENT*/
        let entertainmentHTML="";
        let array_entertainment_carousel = [];
        let array_entertainment_slideindex = [];
        let c = 1;
        DB_entertainment_JAN.forEach((entertainment_JAN) => {
          entertainmentHTML +=`
                  <div class="MID_travelspot">
                    <div class="MID_travelspot_carousel_entertainment${c} fade">
                      <p class ="MID_travelspot_infor">${DB_entertainment_JAN[`${c-1}`].content1.encontent}</p>
                      <a class ="MID_travelspot_infor_tag" href="${DB_entertainment_JAN[`${c-1}`].hatstag1.link }" target="_blank">${DB_entertainment_JAN[`${c-1}`].hatstag1.hastag}</a>
                    </div>
                    <div class="MID_travelspot_carousel_entertainment${c} fade">
                      <p class ="MID_travelspot_infor">${DB_entertainment_JAN[`${c-1}`].content2.encontent}</p>
                      <a class ="MID_travelspot_infor_tag" href="${DB_entertainment_JAN[`${c-1}`].hatstag2.link }" target="_blank">${DB_entertainment_JAN[`${c-1}`].hatstag2.hastag}</a>
                    </div>
                    <div class="MID_travelspot_carousel_entertainment${c} fade">
                      <p class ="MID_travelspot_infor">${DB_entertainment_JAN[`${c-1}`].content3.encontent}</p>
                      <a class ="MID_travelspot_infor_tag" href="${DB_entertainment_JAN[`${c-1}`].hatstag3.link }" target="_blank">${DB_entertainment_JAN[`${c-1}`].hatstag3.hastag}</a>
                    </div>
                    <button class="MID_travelspot_button likebutton" onclick="EJANcountlikebutton(${c})">いいね！</button>
                    <a class="countlike EJANcountlike${c}">0</a>
                    <a class="prev preventertainment" onclick="plusSlides_entertainment(-1, ${c-1})">❮</a>
                    <a class="next nextentertainment" onclick="plusSlides_entertainment(1, ${c-1})">❯</a>
                  </div>`;
          array_entertainment_carousel.push(`MID_travelspot_carousel_entertainment${c}`);
          array_entertainment_slideindex.push(1);
          c++;
        });
        document.querySelector(".MID_content_entertainment").innerHTML = entertainmentHTML;

      /*Function slideshow for sightseeing area*/
      let k = 0;
      array_sightseeing_slideindex.forEach(() =>{
        showSlides_sightseeing(1, k);
        k++;
      });

      function plusSlides_sightseeing(n, no) {
        showSlides_sightseeing(array_sightseeing_slideindex[no] += n, no);
      }

      function showSlides_sightseeing(n, no) {
        let i;
        let x = document.getElementsByClassName(array_sightseeing_carousel[no]);
        if (n > x.length) {array_sightseeing_slideindex[no] = 1}    
        if (n < 1) {array_sightseeing_slideindex[no] = x.length}
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        x[array_sightseeing_slideindex[no]-1].style.display = "block";  
      }
        
      /*Function slideshow for foodtour area*/
      let h = 0;
      array_foodtour_slideindex.forEach(() =>{
        showSlides_foodtour(1, h);
        h++;
      });

      function plusSlides_foodtour(n, no) {
        showSlides_foodtour(array_foodtour_slideindex[no] += n, no);
      }

      function showSlides_foodtour(n, no) {
        let i;
        let x = document.getElementsByClassName(array_foodtour_carousel[no]);
        if (n > x.length) {array_foodtour_slideindex[no] = 1}    
        if (n < 1) {array_foodtour_slideindex[no] = x.length}
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        x[array_foodtour_slideindex[no]-1].style.display = "block";  
      }

      /*Function slideshow for foodtour area*/
      let j = 0;
      array_entertainment_slideindex.forEach(() =>{
        showSlides_entertainment(1, j);
        j++;
      });

      function plusSlides_entertainment(n, no) {
        showSlides_entertainment(array_entertainment_slideindex[no] += n, no);
      }

      function showSlides_entertainment(n, no) {
        let i;
        let x = document.getElementsByClassName(array_entertainment_carousel[no]);
        if (n > x.length) {array_entertainment_slideindex[no] = 1}    
        if (n < 1) {array_entertainment_slideindex[no] = x.length}
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        x[array_entertainment_slideindex[no]-1].style.display = "block";  
      }
      /*function countlike */
      let accountlike = 1;
      array_sightseeing_slideindex.forEach(() =>{
        document.querySelector(`.SJANcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SJANstored_countlike${accountlike}`)) || 0;
        accountlike++;
      }); 
      let bccountlike = 1;
      array_foodtour_slideindex.forEach(() =>{
        document.querySelector(`.TJANcountlike${bccountlike}`).innerHTML =parseInt(localStorage.getItem(`TJANstored_countlike${bccountlike}`)) || 0;
        bccountlike++;
      });
      let cccountlike = 1;
      array_foodtour_slideindex.forEach(() =>{
        document.querySelector(`.EJANcountlike${cccountlike}`).innerHTML =parseInt(localStorage.getItem(`EJANstored_countlike${cccountlike}`)) || 0;
        cccountlike++;
      }); 
           
/*show February Japanese data */
    } else if (monthvalue === "JAN" && valuelanguage === "Jp") {
          /*Generate HTML SIGHTSEEING*/
        
        let sightseeingHTML="";
        let array_sightseeing_carousel =[];
        let array_sightseeing_slideindex =[];
        let a = 1;
        DB_sightseeing_JAN.forEach((sightseeing_JAN) => {
          sightseeingHTML +=`
                <div class="MID_travelspot">
                  <div class="MID_travelspot_carousel_sightseeing${a} fade">
                    <p class ="MID_travelspot_infor">${DB_sightseeing_JAN[`${a-1}`].content1.jpcontent}</p>
                    <a class ="MID_travelspot_infor_tag" href="${DB_sightseeing_JAN[`${a-1}`].hatstag1.link }" target="_blank">${DB_sightseeing_JAN[`${a-1}`].hatstag1.hastag}</a>
                  </div>
                  <div class="MID_travelspot_carousel_sightseeing${a} fade">
                    <p class ="MID_travelspot_infor">${DB_sightseeing_JAN[`${a-1}`].content2.jpcontent}</p>
                    <a class ="MID_travelspot_infor_tag" href="${DB_sightseeing_JAN[`${a-1}`].hatstag2.link }" target="_blank">${DB_sightseeing_JAN[`${a-1}`].hatstag2.hastag}</a>
                  </div>
                  <div class="MID_travelspot_carousel_sightseeing${a} fade">
                    <p class ="MID_travelspot_infor">${DB_sightseeing_JAN[`${a-1}`].content3.jpcontent}</p>
                    <a class ="MID_travelspot_infor_tag" href="${DB_sightseeing_JAN[`${a-1}`].hatstag3.link }" target="_blank">${DB_sightseeing_JAN[`${a-1}`].hatstag3.hastag}</a>
                  </div>
                  <button class="MID_travelspot_button likebutton" onclick="SJANcountlikebutton(${a})">いいね！</button>
                  <a class="countlike SJANcountlike${a}"></a>
                  <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
                  <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
                </div>`;
          array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
          array_sightseeing_slideindex.push(1);
          a++;
        });
        document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

      /*Generate HTML FOODTOUR*/

        let foodtourHTML="";
        let array_foodtour_carousel =[];
        let array_foodtour_slideindex =[];
        let b = 1;
        DB_foodtour_JAN.forEach((foodtour_JAN) => {
          foodtourHTML +=`
                  <div class="MID_travelspot">
                    <div class="MID_travelspot_carousel_foodtour${b} fade">
                      <p class ="MID_travelspot_infor">${DB_foodtour_JAN[`${b-1}`].content1.jpcontent}</p>
                      <a class ="MID_travelspot_infor_tag" href="${DB_foodtour_JAN[`${b-1}`].hatstag1.link }" target="_blank">${DB_foodtour_JAN[`${b-1}`].hatstag1.hastag}</a>
                  </div>
                    <div class="MID_travelspot_carousel_foodtour${b} fade">
                      <p class ="MID_travelspot_infor">${DB_foodtour_JAN[`${b-1}`].content2.jpcontent}</p>
                      <a class ="MID_travelspot_infor_tag" href="${DB_foodtour_JAN[`${b-1}`].hatstag2.link }" target="_blank">${DB_foodtour_JAN[`${b-1}`].hatstag2.hastag}</a>
                    </div>
                    <div class="MID_travelspot_carousel_foodtour${b} fade">
                      <p class ="MID_travelspot_infor">${DB_foodtour_JAN[`${b-1}`].content3.jpcontent}</p>
                      <a class ="MID_travelspot_infor_tag" href="${DB_foodtour_JAN[`${b-1}`].hatstag3.link }" target="_blank">${DB_foodtour_JAN[`${b-1}`].hatstag3.hastag}</a>
                    </div>
                    <button class="MID_travelspot_button likebutton" onclick="TJANcountlikebutton(${b})">いいね！</button>
                    <a class="countlike TJANcountlike${b}">0</a>
                    <a class="prev prevfoodtour" onclick="plusSlides_foodtour(-1, ${b-1})">❮</a>
                    <a class="next nextfoodtour" onclick="plusSlides_foodtour(1, ${b-1})">❯</a>
                  </div>`;
          array_foodtour_carousel.push(`MID_travelspot_carousel_foodtour${b}`);
          array_foodtour_slideindex.push(1);
          b++;
        });
        document.querySelector(".MID_content_foodtour").innerHTML = foodtourHTML;
        

      /*Generate HTML ENTERTAINMENT*/
        let entertainmentHTML="";
        let array_entertainment_carousel = [];
        let array_entertainment_slideindex = [];
        let c = 1;
        DB_entertainment_JAN.forEach((entertainment_JAN) => {
          entertainmentHTML +=`
                  <div class="MID_travelspot">
                    <div class="MID_travelspot_carousel_entertainment${c} fade">
                      <p class ="MID_travelspot_infor">${DB_entertainment_JAN[`${c-1}`].content1.jpcontent}</p>
                      <a class ="MID_travelspot_infor_tag" href="${DB_entertainment_JAN[`${c-1}`].hatstag1.link }" target="_blank">${DB_entertainment_JAN[`${c-1}`].hatstag1.hastag}</a>
                    </div>
                    <div class="MID_travelspot_carousel_entertainment${c} fade">
                      <p class ="MID_travelspot_infor">${DB_entertainment_JAN[`${c-1}`].content2.jpcontent}</p>
                      <a class ="MID_travelspot_infor_tag" href="${DB_entertainment_JAN[`${c-1}`].hatstag2.link }" target="_blank">${DB_entertainment_JAN[`${c-1}`].hatstag2.hastag}</a>
                    </div>
                    <div class="MID_travelspot_carousel_entertainment${c} fade">
                      <p class ="MID_travelspot_infor">${DB_entertainment_JAN[`${c-1}`].content3.jpcontent}</p>
                      <a class ="MID_travelspot_infor_tag" href="${DB_entertainment_JAN[`${c-1}`].hatstag3.link }" target="_blank">${DB_entertainment_JAN[`${c-1}`].hatstag3.hastag}</a>
                    </div>
                    <button class="MID_travelspot_button likebutton" onclick="EJANcountlikebutton(${c})">いいね！</button>
                    <a class="countlike EJANcountlike${c}">0</a>
                    <a class="prev preventertainment" onclick="plusSlides_entertainment(-1, ${c-1})">❮</a>
                    <a class="next nextentertainment" onclick="plusSlides_entertainment(1, ${c-1})">❯</a>
                  </div>`;
          array_entertainment_carousel.push(`MID_travelspot_carousel_entertainment${c}`);
          array_entertainment_slideindex.push(1);
          c++;
        });
        document.querySelector(".MID_content_entertainment").innerHTML = entertainmentHTML;
      /*Function slideshow for sightseeing area*/
      let k = 0;
      array_sightseeing_slideindex.forEach(() =>{
        showSlides_sightseeing(1, k);
        k++;
      });


      function plusSlides_sightseeing(n, no) {
        showSlides_sightseeing(array_sightseeing_slideindex[no] += n, no);
      }

      function showSlides_sightseeing(n, no) {
        let i;
        let x = document.getElementsByClassName(array_sightseeing_carousel[no]);
        if (n > x.length) {array_sightseeing_slideindex[no] = 1}    
        if (n < 1) {array_sightseeing_slideindex[no] = x.length}
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        x[array_sightseeing_slideindex[no]-1].style.display = "block";  
      }
        
      /*Function slideshow for foodtour area*/
      let h = 0;
      array_foodtour_slideindex.forEach(() =>{
        showSlides_foodtour(1, h);
        h++;
      });


      function plusSlides_foodtour(n, no) {
        showSlides_foodtour(array_foodtour_slideindex[no] += n, no);
      }

      function showSlides_foodtour(n, no) {
        let i;
        let x = document.getElementsByClassName(array_foodtour_carousel[no]);
        if (n > x.length) {array_foodtour_slideindex[no] = 1}    
        if (n < 1) {array_foodtour_slideindex[no] = x.length}
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        x[array_foodtour_slideindex[no]-1].style.display = "block";  
      }

      /*Function slideshow for foodtour area*/
      let j = 0;
      array_entertainment_slideindex.forEach(() =>{
        showSlides_entertainment(1, j);
        j++;
      });


      function plusSlides_entertainment(n, no) {
        showSlides_entertainment(array_entertainment_slideindex[no] += n, no);
      }

      function showSlides_entertainment(n, no) {
        let i;
        let x = document.getElementsByClassName(array_entertainment_carousel[no]);
        if (n > x.length) {array_entertainment_slideindex[no] = 1}    
        if (n < 1) {array_entertainment_slideindex[no] = x.length}
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        x[array_entertainment_slideindex[no]-1].style.display = "block";  
      }

    /*function countlike */
      let accountlike = 1;
      array_sightseeing_slideindex.forEach(() =>{
        document.querySelector(`.SJANcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SJANstored_countlike${accountlike}`)) || 0;
        accountlike++;
      }); 
      let bccountlike = 1;
      array_foodtour_slideindex.forEach(() =>{
        document.querySelector(`.TJANcountlike${bccountlike}`).innerHTML =parseInt(localStorage.getItem(`TJANstored_countlike${bccountlike}`)) || 0;
        bccountlike++;
      });
      let cccountlike = 1;
      array_foodtour_slideindex.forEach(() =>{
        document.querySelector(`.EJANcountlike${cccountlike}`).innerHTML =parseInt(localStorage.getItem(`EJANstored_countlike${cccountlike}`)) || 0;
        cccountlike++;
      }); 
    }/* show Feb English data */
     else if (monthvalue === "FEB" && valuelanguage === "En") {
              /*Generate HTML SIGHTSEEING*/
        
              let sightseeingHTML="";
              let array_sightseeing_carousel =[];
              let array_sightseeing_slideindex =[];
              let a = 1;
              DB_sightseeing_FEB.forEach((sightseeing_FEB) => {
                sightseeingHTML +=`
                      <div class="MID_travelspot">
                        <div class="MID_travelspot_carousel_sightseeing${a} fade">
                          <p class ="MID_travelspot_infor">${DB_sightseeing_FEB[`${a-1}`].content1.encontent}</p>
                          <a class ="MID_travelspot_infor_tag" href="${DB_sightseeing_FEB[`${a-1}`].hatstag1.link }" target="_blank">${DB_sightseeing_FEB[`${a-1}`].hatstag1.hastag}</a>
                        </div>
                        <div class="MID_travelspot_carousel_sightseeing${a} fade">
                          <p class ="MID_travelspot_infor">${DB_sightseeing_FEB[`${a-1}`].content2.encontent}</p>
                          <a class ="MID_travelspot_infor_tag" href="${DB_sightseeing_FEB[`${a-1}`].hatstag2.link }" target="_blank">${DB_sightseeing_FEB[`${a-1}`].hatstag2.hastag}</a>
                        </div>
                        <div class="MID_travelspot_carousel_sightseeing${a} fade">
                          <p class ="MID_travelspot_infor">${DB_sightseeing_FEB[`${a-1}`].content3.encontent}</p>
                          <a class ="MID_travelspot_infor_tag" href="${DB_sightseeing_FEB[`${a-1}`].hatstag3.link }" target="_blank">${DB_sightseeing_FEB[`${a-1}`].hatstag3.hastag}</a>
                        </div>
                        <button class="MID_travelspot_button likebutton" onclick="SFEBcountlikebutton(${a})">いいね！</button>
                        <a class="countlike SFEBcountlike${a}"></a>
                        <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
                        <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
                      </div>`;
                array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
                array_sightseeing_slideindex.push(1);
                a++;
              });
              document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;
              
            /*Generate HTML FOODTOUR*/
      
              let foodtourHTML="";
              let array_foodtour_carousel =[];
              let array_foodtour_slideindex =[];
              let b = 1;
              DB_foodtour_FEB.forEach((foodtour_FEB) => {
                foodtourHTML +=`
                        <div class="MID_travelspot">
                          <div class="MID_travelspot_carousel_foodtour${b} fade">
                            <p class ="MID_travelspot_infor">${DB_foodtour_FEB[`${b-1}`].content1.encontent}</p>
                            <a class ="MID_travelspot_infor_tag" href="${DB_foodtour_FEB[`${b-1}`].hatstag1.link }" target="_blank">${DB_foodtour_FEB[`${b-1}`].hatstag1.hastag}</a>
                        </div>
                          <div class="MID_travelspot_carousel_foodtour${b} fade">
                            <p class ="MID_travelspot_infor">${DB_foodtour_FEB[`${b-1}`].content2.encontent}</p>
                            <a class ="MID_travelspot_infor_tag" href="${DB_foodtour_FEB[`${b-1}`].hatstag2.link }" target="_blank">${DB_foodtour_FEB[`${b-1}`].hatstag2.hastag}</a>
                          </div>
                          <div class="MID_travelspot_carousel_foodtour${b} fade">
                            <p class ="MID_travelspot_infor">${DB_foodtour_FEB[`${b-1}`].content3.encontent}</p>
                            <a class ="MID_travelspot_infor_tag" href="${DB_foodtour_FEB[`${b-1}`].hatstag3.link }" target="_blank">${DB_foodtour_FEB[`${b-1}`].hatstag3.hastag}</a>
                          </div>
                          <button class="MID_travelspot_button likebutton" onclick="TFEBcountlikebutton(${b})">いいね！</button>
                          <a class="countlike TFEBcountlike${b}"></a>
                          <a class="prev prevfoodtour" onclick="plusSlides_foodtour(-1, ${b-1})">❮</a>
                          <a class="next nextfoodtour" onclick="plusSlides_foodtour(1, ${b-1})">❯</a>
                        </div>`;
                array_foodtour_carousel.push(`MID_travelspot_carousel_foodtour${b}`);
                array_foodtour_slideindex.push(1);
                b++;
              });
              document.querySelector(".MID_content_foodtour").innerHTML = foodtourHTML;
              
      
            /*Generate HTML ENTERTAINMENT*/
              let entertainmentHTML="";
              let array_entertainment_carousel = [];
              let array_entertainment_slideindex = [];
              let c = 1;
              DB_entertainment_FEB.forEach((entertainment_FEB) => {
                entertainmentHTML +=`
                        <div class="MID_travelspot">
                          <div class="MID_travelspot_carousel_entertainment${c} fade">
                            <p class ="MID_travelspot_infor">${DB_entertainment_FEB[`${c-1}`].content1.encontent}</p>
                            <a class ="MID_travelspot_infor_tag" href="${DB_entertainment_FEB[`${c-1}`].hatstag1.link }" target="_blank">${DB_entertainment_FEB[`${c-1}`].hatstag1.hastag}</a>
                          </div>
                          <div class="MID_travelspot_carousel_entertainment${c} fade">
                            <p class ="MID_travelspot_infor">${DB_entertainment_FEB[`${c-1}`].content2.encontent}</p>
                            <a class ="MID_travelspot_infor_tag" href="${DB_entertainment_FEB[`${c-1}`].hatstag2.link }" target="_blank">${DB_entertainment_FEB[`${c-1}`].hatstag2.hastag}</a>
                          </div>
                          <div class="MID_travelspot_carousel_entertainment${c} fade">
                            <p class ="MID_travelspot_infor">${DB_entertainment_FEB[`${c-1}`].content3.encontent}</p>
                            <a class ="MID_travelspot_infor_tag" href="${DB_entertainment_FEB[`${c-1}`].hatstag3.link }" target="_blank">${DB_entertainment_FEB[`${c-1}`].hatstag3.hastag}</a>
                          </div>
                          <button class="MID_travelspot_button likebutton" onclick="EFEBcountlikebutton(${c})">いいね！</button>
                          <a class="countlike EFEBcountlike${c}"></a>
                          <a class="prev preventertainment" onclick="plusSlides_entertainment(-1, ${c-1})">❮</a>
                          <a class="next nextentertainment" onclick="plusSlides_entertainment(1, ${c-1})">❯</a>
                        </div>`;
                array_entertainment_carousel.push(`MID_travelspot_carousel_entertainment${c}`);
                array_entertainment_slideindex.push(1);
                c++;
              });
              document.querySelector(".MID_content_entertainment").innerHTML = entertainmentHTML;
      
            /*Function slideshow for sightseeing area*/
            let k = 0;
            array_sightseeing_slideindex.forEach(() =>{
              showSlides_sightseeing(1, k);
              k++;
            });
      
      
            function plusSlides_sightseeing(n, no) {
              showSlides_sightseeing(array_sightseeing_slideindex[no] += n, no);
            }
      
            function showSlides_sightseeing(n, no) {
              let i;
              let x = document.getElementsByClassName(array_sightseeing_carousel[no]);
              if (n > x.length) {array_sightseeing_slideindex[no] = 1}    
              if (n < 1) {array_sightseeing_slideindex[no] = x.length}
              for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
              }
              x[array_sightseeing_slideindex[no]-1].style.display = "block";  
            }
              
            /*Function slideshow for foodtour area*/
            let h = 0;
            array_foodtour_slideindex.forEach(() =>{
              showSlides_foodtour(1, h);
              h++;
            });
      
      
            function plusSlides_foodtour(n, no) {
              showSlides_foodtour(array_foodtour_slideindex[no] += n, no);
            }
      
            function showSlides_foodtour(n, no) {
              let i;
              let x = document.getElementsByClassName(array_foodtour_carousel[no]);
              if (n > x.length) {array_foodtour_slideindex[no] = 1}    
              if (n < 1) {array_foodtour_slideindex[no] = x.length}
              for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
              }
              x[array_foodtour_slideindex[no]-1].style.display = "block";  
            }
      
            /*Function slideshow for foodtour area*/
            let j = 0;
            array_entertainment_slideindex.forEach(() =>{
              showSlides_entertainment(1, j);
              j++;
            });
      
      
            function plusSlides_entertainment(n, no) {
              showSlides_entertainment(array_entertainment_slideindex[no] += n, no);
            }
      
            function showSlides_entertainment(n, no) {
              let i;
              let x = document.getElementsByClassName(array_entertainment_carousel[no]);
              if (n > x.length) {array_entertainment_slideindex[no] = 1}    
              if (n < 1) {array_entertainment_slideindex[no] = x.length}
              for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
              }
              x[array_entertainment_slideindex[no]-1].style.display = "block";  
            }
          /*function countlike */
          let accountlike = 1;
          array_sightseeing_slideindex.forEach(() =>{
            document.querySelector(`.SFEBcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SFEBstored_countlike${accountlike}`)) || 0;
            accountlike++;
          }); 
          let bccountlike = 1;
          array_foodtour_slideindex.forEach(() =>{
            document.querySelector(`.TFEBcountlike${bccountlike}`).innerHTML =parseInt(localStorage.getItem(`TFEBstored_countlike${bccountlike}`)) || 0;
            bccountlike++;
          });
          let cccountlike = 1;
          array_foodtour_slideindex.forEach(() =>{
            document.querySelector(`.EFEBcountlike${cccountlike}`).innerHTML =parseInt(localStorage.getItem(`EFEBstored_countlike${cccountlike}`)) || 0;
            cccountlike++;
          }); 
    }/* show Feb Japanese data */
     else if (monthvalue === "FEB" && valuelanguage === "Jp") {
         /*Generate HTML SIGHTSEEING*/
        
         let sightseeingHTML="";
         let array_sightseeing_carousel =[];
         let array_sightseeing_slideindex =[];
         let a = 1;
         DB_sightseeing_FEB.forEach((sightseeing_FEB) => {
           sightseeingHTML +=`
                 <div class="MID_travelspot">
                   <div class="MID_travelspot_carousel_sightseeing${a} fade">
                     <p class ="MID_travelspot_infor">${DB_sightseeing_FEB[`${a-1}`].content1.jpcontent}</p>
                     <a class ="MID_travelspot_infor_tag" href="${DB_sightseeing_FEB[`${a-1}`].hatstag1.link }" target="_blank">${DB_sightseeing_FEB[`${a-1}`].hatstag1.hastag}</a>
                   </div>
                   <div class="MID_travelspot_carousel_sightseeing${a} fade">
                     <p class ="MID_travelspot_infor">${DB_sightseeing_FEB[`${a-1}`].content2.jpcontent}</p>
                     <a class ="MID_travelspot_infor_tag" href="${DB_sightseeing_FEB[`${a-1}`].hatstag2.link }" target="_blank">${DB_sightseeing_FEB[`${a-1}`].hatstag2.hastag}</a>
                   </div>
                   <div class="MID_travelspot_carousel_sightseeing${a} fade">
                     <p class ="MID_travelspot_infor">${DB_sightseeing_FEB[`${a-1}`].content3.jpcontent}</p>
                     <a class ="MID_travelspot_infor_tag" href="${DB_sightseeing_FEB[`${a-1}`].hatstag3.link }" target="_blank">${DB_sightseeing_FEB[`${a-1}`].hatstag3.hastag}</a>
                   </div>
                   <button class="MID_travelspot_button likebutton" onclick="SFEBcountlikebutton(${a})">いいね！</button>
                   <a class="countlike SFEBcountlike${a}"></a>
                   <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
                   <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
                 </div>`;
           array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
           array_sightseeing_slideindex.push(1);
           a++;
         });
         document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;
       /*Generate HTML FOODTOUR*/
 
         let foodtourHTML="";
         let array_foodtour_carousel =[];
         let array_foodtour_slideindex =[];
         let b = 1;
         DB_foodtour_FEB.forEach((foodtour_FEB) => {
           foodtourHTML +=`
                   <div class="MID_travelspot">
                     <div class="MID_travelspot_carousel_foodtour${b} fade">
                       <p class ="MID_travelspot_infor">${DB_foodtour_FEB[`${b-1}`].content1.jpcontent}</p>
                       <a class ="MID_travelspot_infor_tag" href="${DB_foodtour_FEB[`${b-1}`].hatstag1.link }" target="_blank">${DB_foodtour_FEB[`${b-1}`].hatstag1.hastag}</a>
                   </div>
                     <div class="MID_travelspot_carousel_foodtour${b} fade">
                       <p class ="MID_travelspot_infor">${DB_foodtour_FEB[`${b-1}`].content2.jpcontent}</p>
                       <a class ="MID_travelspot_infor_tag" href="${DB_foodtour_FEB[`${b-1}`].hatstag2.link }" target="_blank">${DB_foodtour_FEB[`${b-1}`].hatstag2.hastag}</a>
                     </div>
                     <div class="MID_travelspot_carousel_foodtour${b} fade">
                       <p class ="MID_travelspot_infor">${DB_foodtour_FEB[`${b-1}`].content3.jpcontent}</p>
                       <a class ="MID_travelspot_infor_tag" href="${DB_foodtour_FEB[`${b-1}`].hatstag3.link }" target="_blank">${DB_foodtour_FEB[`${b-1}`].hatstag3.hastag}</a>
                     </div>
                     <button class="MID_travelspot_button likebutton" onclick="TFEBcountlikebutton(${b})">いいね！</button>
                   <a class="countlike TFEBcountlike${b}"></a>
                     <a class="prev prevfoodtour" onclick="plusSlides_foodtour(-1, ${b-1})">❮</a>
                     <a class="next nextfoodtour" onclick="plusSlides_foodtour(1, ${b-1})">❯</a>
                   </div>`;
           array_foodtour_carousel.push(`MID_travelspot_carousel_foodtour${b}`);
           array_foodtour_slideindex.push(1);
           b++;
         });
         document.querySelector(".MID_content_foodtour").innerHTML = foodtourHTML;
         
 
       /*Generate HTML ENTERTAINMENT*/
         let entertainmentHTML="";
         let array_entertainment_carousel = [];
         let array_entertainment_slideindex = [];
         let c = 1;
         DB_entertainment_FEB.forEach((entertainment_FEB) => {
           entertainmentHTML +=`
                   <div class="MID_travelspot">
                     <div class="MID_travelspot_carousel_entertainment${c} fade">
                       <p class ="MID_travelspot_infor">${DB_entertainment_FEB[`${c-1}`].content1.jpcontent}</p>
                       <a class ="MID_travelspot_infor_tag" href="${DB_entertainment_FEB[`${c-1}`].hatstag1.link }" target="_blank">${DB_entertainment_FEB[`${c-1}`].hatstag1.hastag}</a>
                     </div>
                     <div class="MID_travelspot_carousel_entertainment${c} fade">
                       <p class ="MID_travelspot_infor">${DB_entertainment_FEB[`${c-1}`].content2.jpcontent}</p>
                       <a class ="MID_travelspot_infor_tag" href="${DB_entertainment_FEB[`${c-1}`].hatstag2.link }" target="_blank">${DB_entertainment_FEB[`${c-1}`].hatstag2.hastag}</a>
                     </div>
                     <div class="MID_travelspot_carousel_entertainment${c} fade">
                       <p class ="MID_travelspot_infor">${DB_entertainment_FEB[`${c-1}`].content3.jpcontent}</p>
                       <a class ="MID_travelspot_infor_tag" href="${DB_entertainment_FEB[`${c-1}`].hatstag3.link }" target="_blank">${DB_entertainment_FEB[`${c-1}`].hatstag3.hastag}</a>
                     </div>
                     <button class="MID_travelspot_button likebutton" onclick="EFEBcountlikebutton(${c})">いいね！</button>
                     <a class="countlike EFEBcountlike${c}"></a>
                     <a class="prev preventertainment" onclick="plusSlides_entertainment(-1, ${c-1})">❮</a>
                     <a class="next nextentertainment" onclick="plusSlides_entertainment(1, ${c-1})">❯</a>
                   </div>`;
           array_entertainment_carousel.push(`MID_travelspot_carousel_entertainment${c}`);
           array_entertainment_slideindex.push(1);
           c++;
         });
         document.querySelector(".MID_content_entertainment").innerHTML = entertainmentHTML;
 
       /*Function slideshow for sightseeing area*/
       let k = 0;
       array_sightseeing_slideindex.forEach(() =>{
         showSlides_sightseeing(1, k);
         k++;
       });
 
 
       function plusSlides_sightseeing(n, no) {
         showSlides_sightseeing(array_sightseeing_slideindex[no] += n, no);
       }
 
       function showSlides_sightseeing(n, no) {
         let i;
         let x = document.getElementsByClassName(array_sightseeing_carousel[no]);
         if (n > x.length) {array_sightseeing_slideindex[no] = 1}    
         if (n < 1) {array_sightseeing_slideindex[no] = x.length}
         for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";  
         }
         x[array_sightseeing_slideindex[no]-1].style.display = "block";  
       }
         
       /*Function slideshow for foodtour area*/
       let h = 0;
       array_foodtour_slideindex.forEach(() =>{
         showSlides_foodtour(1, h);
         h++;
       });
 
 
       function plusSlides_foodtour(n, no) {
         showSlides_foodtour(array_foodtour_slideindex[no] += n, no);
       }
 
       function showSlides_foodtour(n, no) {
         let i;
         let x = document.getElementsByClassName(array_foodtour_carousel[no]);
         if (n > x.length) {array_foodtour_slideindex[no] = 1}    
         if (n < 1) {array_foodtour_slideindex[no] = x.length}
         for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";  
         }
         x[array_foodtour_slideindex[no]-1].style.display = "block";  
       }
 
       /*Function slideshow for foodtour area*/
       let j = 0;
       array_entertainment_slideindex.forEach(() =>{
         showSlides_entertainment(1, j);
         j++;
       });
 
 
       function plusSlides_entertainment(n, no) {
         showSlides_entertainment(array_entertainment_slideindex[no] += n, no);
       }
 
       function showSlides_entertainment(n, no) {
         let i;
         let x = document.getElementsByClassName(array_entertainment_carousel[no]);
         if (n > x.length) {array_entertainment_slideindex[no] = 1}    
         if (n < 1) {array_entertainment_slideindex[no] = x.length}
         for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";  
         }
         x[array_entertainment_slideindex[no]-1].style.display = "block";  
       } 
       /*function countlike */
       let accountlike = 1;
       array_sightseeing_slideindex.forEach(() =>{
         document.querySelector(`.SFEBcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SFEBstored_countlike${accountlike}`)) || 0;
         accountlike++;
       }); 
       let bccountlike = 1;
       array_foodtour_slideindex.forEach(() =>{
         document.querySelector(`.TFEBcountlike${bccountlike}`).innerHTML =parseInt(localStorage.getItem(`TFEBstored_countlike${bccountlike}`)) || 0;
         bccountlike++;
       });
       let cccountlike = 1;
       array_foodtour_slideindex.forEach(() =>{
         document.querySelector(`.EFEBcountlike${cccountlike}`).innerHTML =parseInt(localStorage.getItem(`EFEBstored_countlike${cccountlike}`)) || 0;
         cccountlike++;
       });
    }
  }
