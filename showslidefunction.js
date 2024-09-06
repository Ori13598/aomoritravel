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
