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
      document.getElementById("MID_title_content_wordcloud").innerHTML = "ワードクラウド(単語の雲)";
      document.getElementById("MID_title_content_network").innerHTML = "遊び";  
    } else if(valuelan ==="En") {
        document.querySelector('.top_title_content').innerHTML = "Welcome to Aomori";
        document.querySelector('.top_option_month_content').innerHTML = "Monthly Information and Event";
        for (let f = 0;  f <= 11; f++ ) {
          document.getElementById("top_option_month_monthvalue_id").options[f].innerHTML = enmontharray[f];
        }
        document.getElementById("MID_title_content_sightseeing").innerHTML = "Sightseeing";
        document.getElementById("MID_title_content_wordcloud").innerHTML = "WordCloud";
        document.getElementById("MID_title_content_network").innerHTML = "Co-occurrence network";  
    }
    const monthvalue =document.querySelector('.top_option_month_monthvalue').value;
    const valuelanguage =document.querySelector('.top_option_language_la').value;
/* show January English data */
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
                    <a class ="MID_travelspot_infor_tag">${DB_sightseeing_JAN[`${a-1}`].hatstag1.hastag}</a>
                  </div>
                  <div class="MID_travelspot_carousel_sightseeing${a} fade">
                    <p class ="MID_travelspot_infor">${DB_sightseeing_JAN[`${a-1}`].content2.encontent}</p>
                    <a class ="MID_travelspot_infor_tag">${DB_sightseeing_JAN[`${a-1}`].hatstag2.hastag}</a>
                  </div>
                  <div class="MID_travelspot_carousel_sightseeing${a} fade">
                    <p class ="MID_travelspot_infor">${DB_sightseeing_JAN[`${a-1}`].content3.encontent}</p>
                    <a class ="MID_travelspot_infor_tag">${DB_sightseeing_JAN[`${a-1}`].hatstag3.hastag}</a>
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

        /*function countlike */
        let accountlike = 1;
        array_sightseeing_slideindex.forEach(() =>{
        document.querySelector(`.SJANcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SJANstored_countlike${accountlike}`)) || 0;
        accountlike++;
        }); 
         /*Function change wordcloud and network*/
         document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc01.png';
         document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw01.png';
        /*show JAN Japanese data */
    }else if (monthvalue === "JAN" && valuelanguage === "Jp") {
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
                    <a class ="MID_travelspot_infor_tag">${DB_sightseeing_JAN[`${a-1}`].hatstag1.hastag}</a>
                  </div>
                  <div class="MID_travelspot_carousel_sightseeing${a} fade">
                    <p class ="MID_travelspot_infor">${DB_sightseeing_JAN[`${a-1}`].content2.jpcontent}</p>
                    <a class ="MID_travelspot_infor_tag">${DB_sightseeing_JAN[`${a-1}`].hatstag2.hastag}</a>
                  </div>
                  <div class="MID_travelspot_carousel_sightseeing${a} fade">
                    <p class ="MID_travelspot_infor">${DB_sightseeing_JAN[`${a-1}`].content3.jpcontent}</p>
                    <a class ="MID_travelspot_infor_tag">${DB_sightseeing_JAN[`${a-1}`].hatstag3.hastag}</a>
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
        /*function countlike */
        let accountlike = 1;
        array_sightseeing_slideindex.forEach(() =>{
        document.querySelector(`.SJANcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SJANstored_countlike${accountlike}`)) || 0;
        accountlike++;
        }); 
        document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc01.png';
        document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw01.png';
        /* show Feb English data */
    }else if (monthvalue === "FEB" && valuelanguage === "En") {
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
                          <a class ="MID_travelspot_infor_tag">${DB_sightseeing_FEB[`${a-1}`].hatstag1.hastag}</a>
                        </div>
                        <div class="MID_travelspot_carousel_sightseeing${a} fade">
                          <p class ="MID_travelspot_infor">${DB_sightseeing_FEB[`${a-1}`].content2.encontent}</p>
                          <a class ="MID_travelspot_infor_tag">${DB_sightseeing_FEB[`${a-1}`].hatstag2.hastag}</a>
                        </div>
                        <div class="MID_travelspot_carousel_sightseeing${a} fade">
                          <p class ="MID_travelspot_infor">${DB_sightseeing_FEB[`${a-1}`].content3.encontent}</p>
                          <a class ="MID_travelspot_infor_tag">${DB_sightseeing_FEB[`${a-1}`].hatstag3.hastag}</a>
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
              
          /*function countlike */
          let accountlike = 1;
          array_sightseeing_slideindex.forEach(() =>{
            document.querySelector(`.SFEBcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SFEBstored_countlike${accountlike}`)) || 0;
            accountlike++;
          }); 
          document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc02.png';
          document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw02.png';
        /* show Feb Japanese data */
    }else if (monthvalue === "FEB" && valuelanguage === "Jp") {
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
                    <a class ="MID_travelspot_infor_tag">${DB_sightseeing_FEB[`${a-1}`].hatstag1.hastag}</a>
                  </div>
                  <div class="MID_travelspot_carousel_sightseeing${a} fade">
                    <p class ="MID_travelspot_infor">${DB_sightseeing_FEB[`${a-1}`].content2.jpcontent}</p>
                    <a class ="MID_travelspot_infor_tag">${DB_sightseeing_FEB[`${a-1}`].hatstag2.hastag}</a>
                  </div>
                  <div class="MID_travelspot_carousel_sightseeing${a} fade">
                    <p class ="MID_travelspot_infor">${DB_sightseeing_FEB[`${a-1}`].content3.jpcontent}</p>
                    <a class ="MID_travelspot_infor_tag">${DB_sightseeing_FEB[`${a-1}`].hatstag3.hastag}</a>
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

        /*function countlike */
        let accountlike = 1;
        array_sightseeing_slideindex.forEach(() =>{
        document.querySelector(`.SFEBcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SFEBstored_countlike${accountlike}`)) || 0;
        accountlike++;
        }); 
        document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc02.png';
        document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw02.png';
    }else if (monthvalue === "MAR" && valuelanguage === "En") {
        /*Generate HTML SIGHTSEEING*/

        let sightseeingHTML="";
        let array_sightseeing_carousel =[];
        let array_sightseeing_slideindex =[];
        let a = 1;
        DB_sightseeing_MAR.forEach((sightseeing_MAR) => {
          sightseeingHTML +=`
                <div class="MID_travelspot">
                  <div class="MID_travelspot_carousel_sightseeing${a} fade">
                    <p class ="MID_travelspot_infor">${DB_sightseeing_MAR[`${a-1}`].content1.encontent}</p>
                    <a class ="MID_travelspot_infor_tag">${DB_sightseeing_MAR[`${a-1}`].hatstag1.hastag}</a>
                  </div>
                  <div class="MID_travelspot_carousel_sightseeing${a} fade">
                    <p class ="MID_travelspot_infor">${DB_sightseeing_MAR[`${a-1}`].content2.encontent}</p>
                    <a class ="MID_travelspot_infor_tag">${DB_sightseeing_MAR[`${a-1}`].hatstag2.hastag}</a>
                  </div>
                  <div class="MID_travelspot_carousel_sightseeing${a} fade">
                    <p class ="MID_travelspot_infor">${DB_sightseeing_MAR[`${a-1}`].content3.encontent}</p>
                    <a class ="MID_travelspot_infor_tag">${DB_sightseeing_MAR[`${a-1}`].hatstag3.hastag}</a>
                  </div>
                  <button class="MID_travelspot_button likebutton" onclick="SMARcountlikebutton(${a})">いいね！</button>
                  <a class="countlike SMARcountlike${a}"></a>
                  <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
                  <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
                </div>`;
          array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
          array_sightseeing_slideindex.push(1);
          a++;
        });
        document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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
        
    /*function countlike */
    let accountlike = 1;
    array_sightseeing_slideindex.forEach(() =>{
      document.querySelector(`.SMARcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SMARstored_countlike${accountlike}`)) || 0;
      accountlike++;
    }); 
    document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc03.png';
    document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw03.png';
  /* show MAR Japanese data */
    }else if (monthvalue === "MAR" && valuelanguage === "Jp") {
      /*Generate HTML SIGHTSEEING*/

      let sightseeingHTML="";
      let array_sightseeing_carousel =[];
      let array_sightseeing_slideindex =[];
      let a = 1;
      DB_sightseeing_MAR.forEach((sightseeing_MAR) => {
        sightseeingHTML +=`
              <div class="MID_travelspot">
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_MAR[`${a-1}`].content1.jpcontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_MAR[`${a-1}`].hatstag1.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_MAR[`${a-1}`].content2.jpcontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_MAR[`${a-1}`].hatstag2.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_MAR[`${a-1}`].content3.jpcontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_MAR[`${a-1}`].hatstag3.hastag}</a>
                </div>
                <button class="MID_travelspot_button likebutton" onclick="SMARcountlikebutton(${a})">いいね！</button>
                <a class="countlike SMARcountlike${a}"></a>
                <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
                <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
              </div>`;
        array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
        array_sightseeing_slideindex.push(1);
        a++;
      });
      document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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

      /*function countlike */
      let accountlike = 1;
      array_sightseeing_slideindex.forEach(() =>{
      document.querySelector(`.SMARcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SMARstored_countlike${accountlike}`)) || 0;
      accountlike++;
      }); 
      document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc03.png';
      document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw03.png';
    }else if (monthvalue === "APR" && valuelanguage === "En") {
      /*Generate HTML SIGHTSEEING*/

      let sightseeingHTML="";
      let array_sightseeing_carousel =[];
      let array_sightseeing_slideindex =[];
      let a = 1;
      DB_sightseeing_APR.forEach((sightseeing_APR) => {
        sightseeingHTML +=`
              <div class="MID_travelspot">
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_APR[`${a-1}`].content1.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_APR[`${a-1}`].hatstag1.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_APR[`${a-1}`].content2.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_APR[`${a-1}`].hatstag2.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_APR[`${a-1}`].content3.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_APR[`${a-1}`].hatstag3.hastag}</a>
                </div>
                <button class="MID_travelspot_button likebutton" onclick="SAPRcountlikebutton(${a})">いいね！</button>
                <a class="countlike SAPRcountlike${a}"></a>
                <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
                <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
              </div>`;
        array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
        array_sightseeing_slideindex.push(1);
        a++;
      });
      document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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
      
  /*function countlike */
  let accountlike = 1;
  array_sightseeing_slideindex.forEach(() =>{
    document.querySelector(`.SAPRcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SAPRstored_countlike${accountlike}`)) || 0;
    accountlike++;
  }); 
  document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc04.png';
  document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw04.png';
/* show APR Japanese data */
    }else if (monthvalue === "APR" && valuelanguage === "Jp") {
    /*Generate HTML SIGHTSEEING*/

    let sightseeingHTML="";
    let array_sightseeing_carousel =[];
    let array_sightseeing_slideindex =[];
    let a = 1;
    DB_sightseeing_APR.forEach((sightseeing_APR) => {
      sightseeingHTML +=`
            <div class="MID_travelspot">
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_APR[`${a-1}`].content1.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_APR[`${a-1}`].hatstag1.hastag}</a>
              </div>
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_APR[`${a-1}`].content2.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_APR[`${a-1}`].hatstag2.hastag}</a>
              </div>
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_APR[`${a-1}`].content3.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_APR[`${a-1}`].hatstag3.hastag}</a>
              </div>
              <button class="MID_travelspot_button likebutton" onclick="SAPRcountlikebutton(${a})">いいね！</button>
              <a class="countlike SAPRcountlike${a}"></a>
              <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
              <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
            </div>`;
      array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
      array_sightseeing_slideindex.push(1);
      a++;
    });
    document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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

    /*function countlike */
    let accountlike = 1;
    array_sightseeing_slideindex.forEach(() =>{
    document.querySelector(`.SAPRcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SAPRstored_countlike${accountlike}`)) || 0;
    accountlike++;
    }); 
    document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc04.png';
    document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw04.png';
    }else if (monthvalue === "MAY" && valuelanguage === "En") {
      /*Generate HTML SIGHTSEEING*/

      let sightseeingHTML="";
      let array_sightseeing_carousel =[];
      let array_sightseeing_slideindex =[];
      let a = 1;
      DB_sightseeing_MAY.forEach((sightseeing_MAY) => {
        sightseeingHTML +=`
              <div class="MID_travelspot">
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_MAY[`${a-1}`].content1.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_MAY[`${a-1}`].hatstag1.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_MAY[`${a-1}`].content2.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_MAY[`${a-1}`].hatstag2.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_MAY[`${a-1}`].content3.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_MAY[`${a-1}`].hatstag3.hastag}</a>
                </div>
                <button class="MID_travelspot_button likebutton" onclick="SMAYcountlikebutton(${a})">いいね！</button>
                <a class="countlike SMAYcountlike${a}"></a>
                <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
                <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
              </div>`;
        array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
        array_sightseeing_slideindex.push(1);
        a++;
      });
      document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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
      
  /*function countlike */
  let accountlike = 1;
  array_sightseeing_slideindex.forEach(() =>{
    document.querySelector(`.SMAYcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SMAYstored_countlike${accountlike}`)) || 0;
    accountlike++;
  }); 
  document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc05.png';
  document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw05.png';
/* show MAY Japanese data */
    }else if (monthvalue === "MAY" && valuelanguage === "Jp") {
    /*Generate HTML SIGHTSEEING*/

    let sightseeingHTML="";
    let array_sightseeing_carousel =[];
    let array_sightseeing_slideindex =[];
    let a = 1;
    DB_sightseeing_MAY.forEach((sightseeing_MAY) => {
      sightseeingHTML +=`
            <div class="MID_travelspot">
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_MAY[`${a-1}`].content1.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_MAY[`${a-1}`].hatstag1.hastag}</a>
              </div>
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_MAY[`${a-1}`].content2.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_MAY[`${a-1}`].hatstag2.hastag}</a>
              </div>
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_MAY[`${a-1}`].content3.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_MAY[`${a-1}`].hatstag3.hastag}</a>
              </div>
              <button class="MID_travelspot_button likebutton" onclick="SMAYcountlikebutton(${a})">いいね！</button>
              <a class="countlike SMAYcountlike${a}"></a>
              <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
              <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
            </div>`;
      array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
      array_sightseeing_slideindex.push(1);
      a++;
    });
    document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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

    /*function countlike */
    let accountlike = 1;
    array_sightseeing_slideindex.forEach(() =>{
    document.querySelector(`.SMAYcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SMAYstored_countlike${accountlike}`)) || 0;
    accountlike++;
    }); 
    document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc05.png';
    document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw05.png';
    }else if (monthvalue === "JUN" && valuelanguage === "En") {
      /*Generate HTML SIGHTSEEING*/

      let sightseeingHTML="";
      let array_sightseeing_carousel =[];
      let array_sightseeing_slideindex =[];
      let a = 1;
      DB_sightseeing_JUN.forEach((sightseeing_JUN) => {
        sightseeingHTML +=`
              <div class="MID_travelspot">
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_JUN[`${a-1}`].content1.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_JUN[`${a-1}`].hatstag1.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_JUN[`${a-1}`].content2.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_JUN[`${a-1}`].hatstag2.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_JUN[`${a-1}`].content3.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_JUN[`${a-1}`].hatstag3.hastag}</a>
                </div>
                <button class="MID_travelspot_button likebutton" onclick="SJUNcountlikebutton(${a})">いいね！</button>
                <a class="countlike SJUNcountlike${a}"></a>
                <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
                <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
              </div>`;
        array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
        array_sightseeing_slideindex.push(1);
        a++;
      });
      document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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
      
  /*function countlike */
  let accountlike = 1;
  array_sightseeing_slideindex.forEach(() =>{
    document.querySelector(`.SJUNcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SJUNstored_countlike${accountlike}`)) || 0;
    accountlike++;
  }); 
  document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc06.png';
  document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw06.png';
/* show JUN Japanese data */
    }else if (monthvalue === "JUN" && valuelanguage === "Jp") {
    /*Generate HTML SIGHTSEEING*/

    let sightseeingHTML="";
    let array_sightseeing_carousel =[];
    let array_sightseeing_slideindex =[];
    let a = 1;
    DB_sightseeing_JUN.forEach((sightseeing_JUN) => {
      sightseeingHTML +=`
            <div class="MID_travelspot">
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_JUN[`${a-1}`].content1.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_JUN[`${a-1}`].hatstag1.hastag}</a>
              </div>
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_JUN[`${a-1}`].content2.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_JUN[`${a-1}`].hatstag2.hastag}</a>
              </div>
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_JUN[`${a-1}`].content3.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_JUN[`${a-1}`].hatstag3.hastag}</a>
              </div>
              <button class="MID_travelspot_button likebutton" onclick="SJUNcountlikebutton(${a})">いいね！</button>
              <a class="countlike SJUNcountlike${a}"></a>
              <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
              <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
            </div>`;
      array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
      array_sightseeing_slideindex.push(1);
      a++;
    });
    document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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

    /*function countlike */
    let accountlike = 1;
    array_sightseeing_slideindex.forEach(() =>{
    document.querySelector(`.SJUNcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SJUNstored_countlike${accountlike}`)) || 0;
    accountlike++;
    }); 
    document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc06.png';
    document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw06.png';
    }else if (monthvalue === "JUL" && valuelanguage === "En") {
      /*Generate HTML SIGHTSEEING*/

      let sightseeingHTML="";
      let array_sightseeing_carousel =[];
      let array_sightseeing_slideindex =[];
      let a = 1;
      DB_sightseeing_JUL.forEach((sightseeing_JUL) => {
        sightseeingHTML +=`
              <div class="MID_travelspot">
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_JUL[`${a-1}`].content1.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_JUL[`${a-1}`].hatstag1.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_JUL[`${a-1}`].content2.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_JUL[`${a-1}`].hatstag2.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_JUL[`${a-1}`].content3.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_JUL[`${a-1}`].hatstag3.hastag}</a>
                </div>
                <button class="MID_travelspot_button likebutton" onclick="SJULcountlikebutton(${a})">いいね！</button>
                <a class="countlike SJULcountlike${a}"></a>
                <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
                <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
              </div>`;
        array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
        array_sightseeing_slideindex.push(1);
        a++;
      });
      document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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
      
  /*function countlike */
  let accountlike = 1;
  array_sightseeing_slideindex.forEach(() =>{
    document.querySelector(`.SJULcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SJULstored_countlike${accountlike}`)) || 0;
    accountlike++;
  }); 
  document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc07.png';
  document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw07.png';
/* show JUL Japanese data */
    }else if (monthvalue === "JUL" && valuelanguage === "Jp") {
    /*Generate HTML SIGHTSEEING*/

    let sightseeingHTML="";
    let array_sightseeing_carousel =[];
    let array_sightseeing_slideindex =[];
    let a = 1;
    DB_sightseeing_JUL.forEach((sightseeing_JUL) => {
      sightseeingHTML +=`
            <div class="MID_travelspot">
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_JUL[`${a-1}`].content1.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_JUL[`${a-1}`].hatstag1.hastag}</a>
              </div>
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_JUL[`${a-1}`].content2.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_JUL[`${a-1}`].hatstag2.hastag}</a>
              </div>
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_JUL[`${a-1}`].content3.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_JUL[`${a-1}`].hatstag3.hastag}</a>
              </div>
              <button class="MID_travelspot_button likebutton" onclick="SJULcountlikebutton(${a})">いいね！</button>
              <a class="countlike SJULcountlike${a}"></a>
              <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
              <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
            </div>`;
      array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
      array_sightseeing_slideindex.push(1);
      a++;
    });
    document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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

    /*function countlike */
    let accountlike = 1;
    array_sightseeing_slideindex.forEach(() =>{
    document.querySelector(`.SJULcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SJULstored_countlike${accountlike}`)) || 0;
    accountlike++;
    }); 
    document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc07.png';
    document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw07.png';
    }else if (monthvalue === "AUG" && valuelanguage === "En") {
      /*Generate HTML SIGHTSEEING*/

      let sightseeingHTML="";
      let array_sightseeing_carousel =[];
      let array_sightseeing_slideindex =[];
      let a = 1;
      DB_sightseeing_AUG.forEach((sightseeing_AUG) => {
        sightseeingHTML +=`
              <div class="MID_travelspot">
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_AUG[`${a-1}`].content1.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_AUG[`${a-1}`].hatstag1.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_AUG[`${a-1}`].content2.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_AUG[`${a-1}`].hatstag2.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_AUG[`${a-1}`].content3.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_AUG[`${a-1}`].hatstag3.hastag}</a>
                </div>
                <button class="MID_travelspot_button likebutton" onclick="SAUGcountlikebutton(${a})">いいね！</button>
                <a class="countlike SAUGcountlike${a}"></a>
                <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
                <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
              </div>`;
        array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
        array_sightseeing_slideindex.push(1);
        a++;
      });
      document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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
      
  /*function countlike */
  let accountlike = 1;
  array_sightseeing_slideindex.forEach(() =>{
    document.querySelector(`.SAUGcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SAUGstored_countlike${accountlike}`)) || 0;
    accountlike++;
  }); 
  document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc08.png';
  document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw08.png';
/* show AUG Japanese data */
    }else if (monthvalue === "AUG" && valuelanguage === "Jp") {
    /*Generate HTML SIGHTSEEING*/

    let sightseeingHTML="";
    let array_sightseeing_carousel =[];
    let array_sightseeing_slideindex =[];
    let a = 1;
    DB_sightseeing_AUG.forEach((sightseeing_AUG) => {
      sightseeingHTML +=`
            <div class="MID_travelspot">
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_AUG[`${a-1}`].content1.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_AUG[`${a-1}`].hatstag1.hastag}</a>
              </div>
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_AUG[`${a-1}`].content2.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_AUG[`${a-1}`].hatstag2.hastag}</a>
              </div>
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_AUG[`${a-1}`].content3.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_AUG[`${a-1}`].hatstag3.hastag}</a>
              </div>
              <button class="MID_travelspot_button likebutton" onclick="SAUGcountlikebutton(${a})">いいね！</button>
              <a class="countlike SAUGcountlike${a}"></a>
              <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
              <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
            </div>`;
      array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
      array_sightseeing_slideindex.push(1);
      a++;
    });
    document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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

    /*function countlike */
    let accountlike = 1;
    array_sightseeing_slideindex.forEach(() =>{
    document.querySelector(`.SAUGcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SAUGstored_countlike${accountlike}`)) || 0;
    accountlike++;
    }); 
    document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc08.png';
    document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw08.png';
    }else if (monthvalue === "SEP" && valuelanguage === "En") {
      /*Generate HTML SIGHTSEEING*/

      let sightseeingHTML="";
      let array_sightseeing_carousel =[];
      let array_sightseeing_slideindex =[];
      let a = 1;
      DB_sightseeing_SEP.forEach((sightseeing_SEP) => {
        sightseeingHTML +=`
              <div class="MID_travelspot">
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_SEP[`${a-1}`].content1.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_SEP[`${a-1}`].hatstag1.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_SEP[`${a-1}`].content2.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_SEP[`${a-1}`].hatstag2.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_SEP[`${a-1}`].content3.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_SEP[`${a-1}`].hatstag3.hastag}</a>
                </div>
                <button class="MID_travelspot_button likebutton" onclick="SSEPcountlikebutton(${a})">いいね！</button>
                <a class="countlike SSEPcountlike${a}"></a>
                <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
                <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
              </div>`;
        array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
        array_sightseeing_slideindex.push(1);
        a++;
      });
      document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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
      
  /*function countlike */
  let accountlike = 1;
  array_sightseeing_slideindex.forEach(() =>{
    document.querySelector(`.SSEPcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SSEPstored_countlike${accountlike}`)) || 0;
    accountlike++;
  }); 
  document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc09.png';
  document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw09.png';
/* show SEP Japanese data */
    }else if (monthvalue === "SEP" && valuelanguage === "Jp") {
/*Generate HTML SIGHTSEEING*/

let sightseeingHTML="";
let array_sightseeing_carousel =[];
let array_sightseeing_slideindex =[];
let a = 1;
DB_sightseeing_SEP.forEach((sightseeing_SEP) => {
  sightseeingHTML +=`
        <div class="MID_travelspot">
          <div class="MID_travelspot_carousel_sightseeing${a} fade">
            <p class ="MID_travelspot_infor">${DB_sightseeing_SEP[`${a-1}`].content1.jpcontent}</p>
            <a class ="MID_travelspot_infor_tag">${DB_sightseeing_SEP[`${a-1}`].hatstag1.hastag}</a>
          </div>
          <div class="MID_travelspot_carousel_sightseeing${a} fade">
            <p class ="MID_travelspot_infor">${DB_sightseeing_SEP[`${a-1}`].content2.jpcontent}</p>
            <a class ="MID_travelspot_infor_tag">${DB_sightseeing_SEP[`${a-1}`].hatstag2.hastag}</a>
          </div>
          <div class="MID_travelspot_carousel_sightseeing${a} fade">
            <p class ="MID_travelspot_infor">${DB_sightseeing_SEP[`${a-1}`].content3.jpcontent}</p>
            <a class ="MID_travelspot_infor_tag">${DB_sightseeing_SEP[`${a-1}`].hatstag3.hastag}</a>
          </div>
          <button class="MID_travelspot_button likebutton" onclick="SSEPcountlikebutton(${a})">いいね！</button>
          <a class="countlike SSEPcountlike${a}"></a>
          <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
          <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
        </div>`;
  array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
  array_sightseeing_slideindex.push(1);
  a++;
});
document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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

/*function countlike */
let accountlike = 1;
array_sightseeing_slideindex.forEach(() =>{
document.querySelector(`.SSEPcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SSEPstored_countlike${accountlike}`)) || 0;
accountlike++;
}); 
document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc09.png';
document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw09.png';
    }else if (monthvalue === "OCT" && valuelanguage === "En") {
      /*Generate HTML SIGHTSEEING*/

      let sightseeingHTML="";
      let array_sightseeing_carousel =[];
      let array_sightseeing_slideindex =[];
      let a = 1;
      DB_sightseeing_OCT.forEach((sightseeing_OCT) => {
        sightseeingHTML +=`
              <div class="MID_travelspot">
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_OCT[`${a-1}`].content1.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_OCT[`${a-1}`].hatstag1.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_OCT[`${a-1}`].content2.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_OCT[`${a-1}`].hatstag2.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_OCT[`${a-1}`].content3.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_OCT[`${a-1}`].hatstag3.hastag}</a>
                </div>
                <button class="MID_travelspot_button likebutton" onclick="SOCTcountlikebutton(${a})">いいね！</button>
                <a class="countlike SOCTcountlike${a}"></a>
                <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
                <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
              </div>`;
        array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
        array_sightseeing_slideindex.push(1);
        a++;
      });
      document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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
      
  /*function countlike */
  let accountlike = 1;
  array_sightseeing_slideindex.forEach(() =>{
    document.querySelector(`.SOCTcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SOCTstored_countlike${accountlike}`)) || 0;
    accountlike++;
  }); 
  document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc10.png';
  document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw1010.png';
/* show OCT Japanese data */
    }else if (monthvalue === "OCT" && valuelanguage === "Jp") {
/*Generate HTML SIGHTSEEING*/

let sightseeingHTML="";
let array_sightseeing_carousel =[];
let array_sightseeing_slideindex =[];
let a = 1;
DB_sightseeing_OCT.forEach((sightseeing_OCT) => {
  sightseeingHTML +=`
        <div class="MID_travelspot">
          <div class="MID_travelspot_carousel_sightseeing${a} fade">
            <p class ="MID_travelspot_infor">${DB_sightseeing_OCT[`${a-1}`].content1.jpcontent}</p>
            <a class ="MID_travelspot_infor_tag">${DB_sightseeing_OCT[`${a-1}`].hatstag1.hastag}</a>
          </div>
          <div class="MID_travelspot_carousel_sightseeing${a} fade">
            <p class ="MID_travelspot_infor">${DB_sightseeing_OCT[`${a-1}`].content2.jpcontent}</p>
            <a class ="MID_travelspot_infor_tag">${DB_sightseeing_OCT[`${a-1}`].hatstag2.hastag}</a>
          </div>
          <div class="MID_travelspot_carousel_sightseeing${a} fade">
            <p class ="MID_travelspot_infor">${DB_sightseeing_OCT[`${a-1}`].content3.jpcontent}</p>
            <a class ="MID_travelspot_infor_tag">${DB_sightseeing_OCT[`${a-1}`].hatstag3.hastag}</a>
          </div>
          <button class="MID_travelspot_button likebutton" onclick="SOCTcountlikebutton(${a})">いいね！</button>
          <a class="countlike SOCTcountlike${a}"></a>
          <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
          <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
        </div>`;
  array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
  array_sightseeing_slideindex.push(1);
  a++;
});
document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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

/*function countlike */
let accountlike = 1;
array_sightseeing_slideindex.forEach(() =>{
document.querySelector(`.SOCTcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SOCTstored_countlike${accountlike}`)) || 0;
accountlike++;
}); 
document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc10.png';
document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw1010.png';
    }else if (monthvalue === "NOV" && valuelanguage === "En") {
      /*Generate HTML SIGHTSEEING*/

      let sightseeingHTML="";
      let array_sightseeing_carousel =[];
      let array_sightseeing_slideindex =[];
      let a = 1;
      DB_sightseeing_NOV.forEach((sightseeing_NOV) => {
        sightseeingHTML +=`
              <div class="MID_travelspot">
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_NOV[`${a-1}`].content1.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_NOV[`${a-1}`].hatstag1.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_NOV[`${a-1}`].content2.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_NOV[`${a-1}`].hatstag2.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_NOV[`${a-1}`].content3.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_NOV[`${a-1}`].hatstag3.hastag}</a>
                </div>
                <button class="MID_travelspot_button likebutton" onclick="SNOVcountlikebutton(${a})">いいね！</button>
                <a class="countlike SNOVcountlike${a}"></a>
                <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
                <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
              </div>`;
        array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
        array_sightseeing_slideindex.push(1);
        a++;
      });
      document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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
      
  /*function countlike */
  let accountlike = 1;
  array_sightseeing_slideindex.forEach(() =>{
    document.querySelector(`.SNOVcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SNOVstored_countlike${accountlike}`)) || 0;
    accountlike++;
  }); 
  document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc11.png';
  document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw11.png';
/* show NOV Japanese data */
    }else if (monthvalue === "NOV" && valuelanguage === "Jp") {
    /*Generate HTML SIGHTSEEING*/

    let sightseeingHTML="";
    let array_sightseeing_carousel =[];
    let array_sightseeing_slideindex =[];
    let a = 1;
    DB_sightseeing_NOV.forEach((sightseeing_NOV) => {
      sightseeingHTML +=`
            <div class="MID_travelspot">
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_NOV[`${a-1}`].content1.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_NOV[`${a-1}`].hatstag1.hastag}</a>
              </div>
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_NOV[`${a-1}`].content2.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_NOV[`${a-1}`].hatstag2.hastag}</a>
              </div>
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_NOV[`${a-1}`].content3.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_NOV[`${a-1}`].hatstag3.hastag}</a>
              </div>
              <button class="MID_travelspot_button likebutton" onclick="SNOVcountlikebutton(${a})">いいね！</button>
              <a class="countlike SNOVcountlike${a}"></a>
              <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
              <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
            </div>`;
      array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
      array_sightseeing_slideindex.push(1);
      a++;
    });
    document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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

    /*function countlike */
    let accountlike = 1;
    array_sightseeing_slideindex.forEach(() =>{
    document.querySelector(`.SNOVcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SNOVstored_countlike${accountlike}`)) || 0;
    accountlike++;
    }); 
    document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc11.png';
    document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw11.png';
    }else if (monthvalue === "DEC" && valuelanguage === "En") {
      /*Generate HTML SIGHTSEEING*/

      let sightseeingHTML="";
      let array_sightseeing_carousel =[];
      let array_sightseeing_slideindex =[];
      let a = 1;
      DB_sightseeing_DEC.forEach((sightseeing_DEC) => {
        sightseeingHTML +=`
              <div class="MID_travelspot">
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_DEC[`${a-1}`].content1.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_DEC[`${a-1}`].hatstag1.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_DEC[`${a-1}`].content2.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_DEC[`${a-1}`].hatstag2.hastag}</a>
                </div>
                <div class="MID_travelspot_carousel_sightseeing${a} fade">
                  <p class ="MID_travelspot_infor">${DB_sightseeing_DEC[`${a-1}`].content3.encontent}</p>
                  <a class ="MID_travelspot_infor_tag">${DB_sightseeing_DEC[`${a-1}`].hatstag3.hastag}</a>
                </div>
                <button class="MID_travelspot_button likebutton" onclick="SDECcountlikebutton(${a})">いいね！</button>
                <a class="countlike SDECcountlike${a}"></a>
                <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
                <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
              </div>`;
        array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
        array_sightseeing_slideindex.push(1);
        a++;
      });
      document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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
      
  /*function countlike */
  let accountlike = 1;
  array_sightseeing_slideindex.forEach(() =>{
    document.querySelector(`.SDECcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SDECstored_countlike${accountlike}`)) || 0;
    accountlike++;
  }); 
  document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc12.png';
  document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw12.png';
/* show DEC Japanese data */
    }else if (monthvalue === "DEC" && valuelanguage === "Jp") {
    /*Generate HTML SIGHTSEEING*/

    let sightseeingHTML="";
    let array_sightseeing_carousel =[];
    let array_sightseeing_slideindex =[];
    let a = 1;
    DB_sightseeing_DEC.forEach((sightseeing_DEC) => {
      sightseeingHTML +=`
            <div class="MID_travelspot">
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_DEC[`${a-1}`].content1.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_DEC[`${a-1}`].hatstag1.hastag}</a>
              </div>
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_DEC[`${a-1}`].content2.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_DEC[`${a-1}`].hatstag2.hastag}</a>
              </div>
              <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <p class ="MID_travelspot_infor">${DB_sightseeing_DEC[`${a-1}`].content3.jpcontent}</p>
                <a class ="MID_travelspot_infor_tag">${DB_sightseeing_DEC[`${a-1}`].hatstag3.hastag}</a>
              </div>
              <button class="MID_travelspot_button likebutton" onclick="SDECcountlikebutton(${a})">いいね！</button>
              <a class="countlike SDECcountlike${a}"></a>
              <a class="prev prevsightseeing" onclick="plusSlides_sightseeing(-1, ${a-1})">❮</a>
              <a class="next nextsightseeing" onclick="plusSlides_sightseeing(1, ${a-1})">❯</a>
            </div>`;
      array_sightseeing_carousel.push(`MID_travelspot_carousel_sightseeing${a}`);
      array_sightseeing_slideindex.push(1);
      a++;
    });
    document.querySelector(".MID_content_sightseeing").innerHTML = sightseeingHTML;

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

    /*function countlike */
    let accountlike = 1;
    array_sightseeing_slideindex.forEach(() =>{
    document.querySelector(`.SDECcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SDECstored_countlike${accountlike}`)) || 0;
    accountlike++;
    }); 
    document.querySelector('.MID_travelspot_image_wordcloud').src = 'https://ori13598.github.io/aomoritravel/image/03.Wordcloud/wc12.png';
    document.querySelector('.MID_travelspot_image_network').src = 'https://ori13598.github.io/aomoritravel/image/04.Network/nw12.png';
    }  
}
