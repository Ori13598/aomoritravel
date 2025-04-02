const countlikearray = [
  {SJANdata:"",}
];
/*function count like for sightseeing*/
let accountlike = 1;
array_sightseeing_slideindex.forEach(() =>{
  SJANcountlikebutton(accountlike);
  accountlike++;
});

function SJANcountlikebutton(acountlike) {
const countlike = parseInt(document.querySelector(`.SJANcountlike${acountlike}`).innerHTML);
document.querySelector(`.SJANcountlike${acountlike}`).innerHTML= countlike + 1;
};

function SFEBcountlikebutton(acountlike) {
  const countlike = parseInt(document.querySelector(`.SFEBcountlike${acountlike}`).innerHTML);
  document.querySelector(`.SFEBcountlike${acountlike}`).innerHTML= countlike + 1;
  const stored_countlike = parseInt(document.querySelector(`.SFEBcountlike${acountlike}`).innerHTML);
  localStorage.setItem(`SFEBstored_countlike${acountlike}`,stored_countlike);
};
function SMARcountlikebutton(acountlike) {
  const countlike = parseInt(document.querySelector(`.SMARcountlike${acountlike}`).innerHTML);
  document.querySelector(`.SMARcountlike${acountlike}`).innerHTML= countlike + 1;
  const stored_countlike = parseInt(document.querySelector(`.SMARcountlike${acountlike}`).innerHTML);
  localStorage.setItem(`SMARstored_countlike${acountlike}`,stored_countlike);
};
function SAPRcountlikebutton(acountlike) {
  const countlike = parseInt(document.querySelector(`.SAPRcountlike${acountlike}`).innerHTML);
  document.querySelector(`.SAPRcountlike${acountlike}`).innerHTML= countlike + 1;
  const stored_countlike = parseInt(document.querySelector(`.SAPRcountlike${acountlike}`).innerHTML);
  localStorage.setItem(`SAPRstored_countlike${acountlike}`,stored_countlike);
};
function SMAYcountlikebutton(acountlike) {
  const countlike = parseInt(document.querySelector(`.SMAYcountlike${acountlike}`).innerHTML);
  document.querySelector(`.SMAYcountlike${acountlike}`).innerHTML= countlike + 1;
  const stored_countlike = parseInt(document.querySelector(`.SMAYcountlike${acountlike}`).innerHTML);
  localStorage.setItem(`SMAYstored_countlike${acountlike}`,stored_countlike);
};
function SJUNcountlikebutton(acountlike) {
  const countlike = parseInt(document.querySelector(`.SJUNcountlike${acountlike}`).innerHTML);
  document.querySelector(`.SJUNcountlike${acountlike}`).innerHTML= countlike + 1;
  const stored_countlike = parseInt(document.querySelector(`.SJUNcountlike${acountlike}`).innerHTML);
  localStorage.setItem(`SJUNstored_countlike${acountlike}`,stored_countlike);
};
function SJULcountlikebutton(acountlike) {
  const countlike = parseInt(document.querySelector(`.SJULcountlike${acountlike}`).innerHTML);
  document.querySelector(`.SJULcountlike${acountlike}`).innerHTML= countlike + 1;
  const stored_countlike = parseInt(document.querySelector(`.SJULcountlike${acountlike}`).innerHTML);
  localStorage.setItem(`SJULstored_countlike${acountlike}`,stored_countlike);
};
function SAUGcountlikebutton(acountlike) {
  const countlike = parseInt(document.querySelector(`.SAUGcountlike${acountlike}`).innerHTML);
  document.querySelector(`.SAUGcountlike${acountlike}`).innerHTML= countlike + 1;
  const stored_countlike = parseInt(document.querySelector(`.SAUGcountlike${acountlike}`).innerHTML);
  localStorage.setItem(`SAUGstored_countlike${acountlike}`,stored_countlike);
};
function SSEPcountlikebutton(acountlike) {
  const countlike = parseInt(document.querySelector(`.SSEPcountlike${acountlike}`).innerHTML);
  document.querySelector(`.SSEPcountlike${acountlike}`).innerHTML= countlike + 1;
  const stored_countlike = parseInt(document.querySelector(`.SSEPcountlike${acountlike}`).innerHTML);
  localStorage.setItem(`SSEPstored_countlike${acountlike}`,stored_countlike);
};
function SOCTcountlikebutton(acountlike) {
  const countlike = parseInt(document.querySelector(`.SOCTcountlike${acountlike}`).innerHTML);
  document.querySelector(`.SOCTcountlike${acountlike}`).innerHTML= countlike + 1;
  const stored_countlike = parseInt(document.querySelector(`.SOCTcountlike${acountlike}`).innerHTML);
  localStorage.setItem(`SOCTstored_countlike${acountlike}`,stored_countlike);
};
function SNOVcountlikebutton(acountlike) {
  const countlike = parseInt(document.querySelector(`.SNOVcountlike${acountlike}`).innerHTML);
  document.querySelector(`.SNOVcountlike${acountlike}`).innerHTML= countlike + 1;
  const stored_countlike = parseInt(document.querySelector(`.SNOVcountlike${acountlike}`).innerHTML);
  localStorage.setItem(`SNOVstored_countlike${acountlike}`,stored_countlike);
};

function SDECcountlikebutton(acountlike) {
  const countlike = parseInt(document.querySelector(`.SDECcountlike${acountlike}`).innerHTML);
  document.querySelector(`.SDECcountlike${acountlike}`).innerHTML= countlike + 1;
  const stored_countlike = parseInt(document.querySelector(`.SDECcountlike${acountlike}`).innerHTML);
  localStorage.setItem(`SDECstored_countlike${acountlike}`,stored_countlike);
};
