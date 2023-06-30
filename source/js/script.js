// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import appearance from "./modules/appearance";
import FullPageScroll from './modules/full-page-scroll';
import footerPrize from './modules/prize-footer';
import history from './modules/history';
import titles from "./modules/titles";
import svgLength from './modules/svgLength'
// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
appearance();
footerPrize();
history();
titles();
svgLength();
const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
