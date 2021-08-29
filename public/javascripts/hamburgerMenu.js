const navEl = document.getElementsByTagName('nav')[0];
const linksDivEl = document.getElementById('links-div');
const HBOpen = document.getElementById('HBI-open');
const HBClose = document.getElementById('HBI-close');
const ghostDivEl = document.getElementById('ghost-div');

HBOpen.onclick = (evt) => {
  navEl.className = "open-menu";
  ghostDivEl.style.width = "282px";
  HBClose.style.display = "inherit";
  linksDivEl.style.display = "flex";
  evt.target.style.display = "none";

}

HBClose.onclick = (evt) => {
  navEl.className = "";
  ghostDivEl.style.width = "65px";
  HBOpen.style.display = "inherit";
  linksDivEl.style.display = "none";
  evt.target.style.display = "none";
}
