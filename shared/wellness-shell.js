/* WELLNESS APP — Un único controlador de menú para las dos páginas. */
(function(){'use strict';
 const button=document.querySelector('.wa-menu-toggle'),menu=document.getElementById('waUnifiedMenu'),backdrop=document.getElementById('waMenuBackdrop'),closer=document.querySelector('.wa-menu-close');
 const header=document.querySelector('.wa-unified-header');
 if(!button||!menu||!backdrop||!closer)return;
 let previous=null;
 function setMenu(open){
   if(open)previous=document.activeElement;
   menu.hidden=!open;backdrop.hidden=!open;
   button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
   button.firstElementChild.textContent=open?'×':'☰';document.body.classList.toggle('wa-menu-open',open);
   if(open)closer.focus({preventScroll:true});else if(previous&&previous.isConnected)previous.focus({preventScroll:true});
 }
 button.addEventListener('click',()=>setMenu(menu.hidden));closer.addEventListener('click',()=>setMenu(false));backdrop.addEventListener('click',()=>setMenu(false));
 menu.querySelectorAll('a,[data-dialog]').forEach(el=>el.addEventListener('click',()=>setMenu(false)));
 document.addEventListener('keydown',event=>{
  if(menu.hidden)return;
  if(event.key==='Escape'){event.preventDefault();setMenu(false);return}
  if(event.key!=='Tab')return;
  const visible=[...menu.querySelectorAll('a[href],button:not([disabled])')].filter(el=>el.getClientRects().length);
  if(!visible.length)return;
  const first=visible[0],last=visible[visible.length-1];
  if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
  else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
 });
 // Preserve landing's established top-to-floating header transition.
 if(header?.closest('.hero')){
   const update=()=>header.classList.toggle('is-scrolled',window.scrollY>85);
   window.addEventListener('scroll',update,{passive:true});update();
 }
 // The same footer's newsletter disclosure works on either page, without pretending signup succeeds.
 const form=document.getElementById('wfNewsletter');
 if(form)form.addEventListener('submit',event=>{event.preventDefault();const note=document.getElementById('wfNewsletterMessage');if(note)note.textContent='La suscripción al newsletter estará disponible próximamente. Aún no se ha registrado tu correo.'});
})();
