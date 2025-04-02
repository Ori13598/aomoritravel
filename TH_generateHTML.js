
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
            <a class="countlike SJANcountlike${a}">0</a>
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
