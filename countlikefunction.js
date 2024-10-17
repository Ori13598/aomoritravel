/*function count like for sightseeing*/
let accountlike = 1;
array_sightseeing_slideindex.forEach(() =>{
  document.querySelector(`.SJANcountlike${accountlike}`).innerHTML =parseInt(localStorage.getItem(`SJANstored_countlike${accountlike}`)) || 0;
  accountlike++;
});

function SJANcountlikebutton(acountlike) {
  const countlike = parseInt(document.querySelector(`.SJANcountlike${acountlike}`).innerHTML);
  document.querySelector(`.SJANcountlike${acountlike}`).innerHTML= countlike + 1;
  const stored_countlike = parseInt(document.querySelector(`.SJANcountlike${acountlike}`).innerHTML);
  localStorage.setItem(`SJANstored_countlike${acountlike}`,stored_countlike);
};

function SFEBcountlikebutton(acountlike) {
  const countlike = parseInt(document.querySelector(`.SFEBcountlike${acountlike}`).innerHTML);
  document.querySelector(`.SFEBcountlike${acountlike}`).innerHTML= countlike + 1;
  const stored_countlike = parseInt(document.querySelector(`.SFEBcountlike${acountlike}`).innerHTML);
  localStorage.setItem(`SFEBstored_countlike${acountlike}`,stored_countlike);
};

/*function count like for foodtour*/
let bccountlike = 1;
array_sightseeing_slideindex.forEach(() =>{
  document.querySelector(`.TJANcountlike${bccountlike}`).innerHTML =parseInt(localStorage.getItem(`TJANstored_countlike${bccountlike}`)) || 0;
  bccountlike++;
});

function TJANcountlikebutton(bcountlike) {
  const countlike = parseInt(document.querySelector(`.TJANcountlike${bcountlike}`).innerHTML);
  document.querySelector(`.TJANcountlike${bcountlike}`).innerHTML= countlike + 1;
  const stored_countlike = parseInt(document.querySelector(`.TJANcountlike${bcountlike}`).innerHTML);
  localStorage.setItem(`TJANstored_countlike${bcountlike}`,stored_countlike);
};

function TFEBcountlikebutton(bcountlike) {
  const countlike = parseInt(document.querySelector(`.TFEBcountlike${bcountlike}`).innerHTML);
  document.querySelector(`.TFEBcountlike${bcountlike}`).innerHTML= countlike + 1;
  const stored_countlike = parseInt(document.querySelector(`.TFEBcountlike${bcountlike}`).innerHTML);
  localStorage.setItem(`TFEBstored_countlike${bcountlike}`,stored_countlike);
};

/*function count like for entertainment*/
let cccountlike = 1;
array_sightseeing_slideindex.forEach(() =>{
  document.querySelector(`.EJANcountlike${cccountlike}`).innerHTML =parseInt(localStorage.getItem(`EJANstored_countlike${cccountlike}`)) || 0;
  cccountlike++;
});

function EJANcountlikebutton(ccountlike) {
  const countlike = parseInt(document.querySelector(`.EJANcountlike${ccountlike}`).innerHTML);
  document.querySelector(`.EJANcountlike${ccountlike}`).innerHTML= countlike + 1;
  const stored_countlike = parseInt(document.querySelector(`.EJANcountlike${ccountlike}`).innerHTML);
  localStorage.setItem(`EJANstored_countlike${ccountlike}`,stored_countlike);
};

function EFEBcountlikebutton(ccountlike) {
  const countlike = parseInt(document.querySelector(`.EFEBcountlike${ccountlike}`).innerHTML);
  document.querySelector(`.EFEBcountlike${ccountlike}`).innerHTML= countlike + 1;
  const stored_countlike = parseInt(document.querySelector(`.EFEBcountlike${ccountlike}`).innerHTML);
  localStorage.setItem(`EFEBstored_countlike${ccountlike}`,stored_countlike);
};
