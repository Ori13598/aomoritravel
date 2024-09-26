/*Generate HTML SIGHTSEEING*/
  let sightseeingHTML="";
  let array_sightseeing_carousel =[];
  let array_sightseeing_slideindex =[];
  let a = 1;
  DB_sightseeing_JAN.forEach((sightseeing_JAN) => {
    sightseeingHTML +=`
          <div class="MID_travelspot">
            <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <img class="MID_travelspot_image_img" src=${DB_sightseeing_JAN[`${a-1}`].image1}>
                <p class ="MID_travelspot_infor_tag">${DB_sightseeing_JAN[`${a-1}`].content1.jpcontent}</p>
            </div>
            <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <img class="MID_travelspot_image_img" src="${DB_sightseeing_JAN[`${a-1}`].image2}">
              <p class ="MID_travelspot_infor_tag">${DB_sightseeing_JAN[`${a-1}`].content2.jpcontent}</p>
            </div>
            <div class="MID_travelspot_carousel_sightseeing${a} fade">
                <img class="MID_travelspot_image_img" src="${DB_sightseeing_JAN[`${a-1}`].image3}">
              <p class ="MID_travelspot_infor_tag">${DB_sightseeing_JAN[`${a-1}`].content3.jpcontent}</p>
            </div>
            <img class="MID_travelspot_image_gif" src="image/Apple.gif">
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
                <img class="MID_travelspot_image_img" src="${DB_foodtour_JAN[`${b-1}`].image1}">
                <p class ="MID_travelspot_infor_tag">${DB_foodtour_JAN[`${b-1}`].content1.jpcontent}</p>
             </div>
              <div class="MID_travelspot_carousel_foodtour${b} fade">
                <img class="MID_travelspot_image_img" src="${DB_foodtour_JAN[`${b-1}`].image2}">
                <p class ="MID_travelspot_infor_tag">${DB_foodtour_JAN[`${b-1}`].content2.jpcontent}</p>
              </div>
              <div class="MID_travelspot_carousel_foodtour${b} fade">
                <img class="MID_travelspot_image_img" src="${DB_foodtour_JAN[`${b-1}`].image3}">
                <p class ="MID_travelspot_infor_tag">${DB_foodtour_JAN[`${b-1}`].content3.jpcontent}</p>
              </div>
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
                  <img class="MID_travelspot_image_img" src="${DB_entertainment_JAN[`${c-1}`].image1}">
                <p class ="MID_travelspot_infor_tag">${DB_entertainment_JAN[`${c-1}`].content1.jpcontent}</p>
              </div>
              <div class="MID_travelspot_carousel_entertainment${c} fade">
                <img class="MID_travelspot_image_img" src="${DB_entertainment_JAN[`${c-1}`].image2}">
                <p class ="MID_travelspot_infor_tag">${DB_entertainment_JAN[`${c-1}`].content2.jpcontent}</p>
              </div>
              <div class="MID_travelspot_carousel_entertainment${c} fade">
                <img class="MID_travelspot_image_img" src="${DB_entertainment_JAN[`${c-1}`].image3}">
                <p class ="MID_travelspot_infor_tag">${DB_entertainment_JAN[`${c-1}`].content3.jpcontent}</p>
              </div>
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

