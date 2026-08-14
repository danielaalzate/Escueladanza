const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('.site-nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelector('.nav-dropdown button')?.addEventListener('click', event => {
  event.preventDefault();
  const panel = document.querySelector('.dropdown-panel');
  panel.style.display = panel.style.display === 'flex' ? '' : 'flex';
});
document.querySelector('#contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = data.get('name'); const email = data.get('email');
  document.querySelector('#form-feedback').textContent = `Gracias, ${name}. Abriremos tu correo para que puedas enviarnos tu consulta.`;
  window.location.href = `mailto:info@tallerdedanzasonsolesborja.com?subject=${encodeURIComponent('Solicitud de información')}&body=${encodeURIComponent(`Hola, soy ${name} (${email}). Me gustaría recibir información sobre las clases.`)}`;
});

// Custom wordmark proposal: the original dancer icon remains, paired with an editorial type lock-up.
document.querySelectorAll('a.brand').forEach(brand => {
  brand.innerHTML = '<span class="brand-icon"><img src="assets/logo-sonsoles-borja.png" alt="" /></span><span class="brand-wordmark">Sonsoles <b>Borja</b><i>Danza · Pilates</i></span>';
});
const brandStyles = document.createElement('style');
brandStyles.textContent = `.brand{display:flex!important;align-items:center!important;gap:9px!important}.brand-icon{width:35px;height:47px;display:block;overflow:hidden;position:relative;flex:0 0 35px}.brand-icon img{width:185px!important;max-width:none!important;max-height:none!important;height:auto!important;position:absolute;left:0;top:1px}.brand-wordmark{font:500 17px/.86 'Playfair Display',serif;letter-spacing:-.05em;white-space:nowrap}.brand-wordmark b{font-weight:700}.brand-wordmark i{display:block;margin-top:5px;color:#c32f78;font:500 7px/1 'DM Mono',monospace;letter-spacing:.1em;text-transform:uppercase}@media(max-width:850px){.brand-icon{width:29px;height:40px;flex-basis:29px}.brand-icon img{width:158px!important}.brand-wordmark{font-size:15px}.brand-wordmark i{font-size:6px}}`;
document.head.appendChild(brandStyles);
const brandCropFix = document.createElement('style');
brandCropFix.textContent = `.brand-icon{width:23px;height:47px;flex-basis:23px}.brand-icon img{width:76px!important;max-width:none!important;top:-13px;left:0}@media(max-width:850px){.brand-icon{width:20px;height:40px;flex-basis:20px}.brand-icon img{width:65px!important;top:-11px}}`;
document.head.appendChild(brandCropFix);
