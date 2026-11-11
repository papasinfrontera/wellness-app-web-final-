/* Shared membership cards — single source of truth for both sections */
(function(){
"use strict";
const plans=[
 {id:"basico",title:"Plan Básico",price:65,desc:"Organiza y comprende tu información de salud.",icon:"▣",badge:"SIN ANÁLISIS INCLUIDOS",badgeClass:"",features:["Acceso a la plataforma durante 12 meses","Carga tus propios resultados de laboratorio","Historial personal y visualización de tendencias","Registro de hábitos y datos de dispositivos compatibles","Comparte información con profesionales autorizados"],cta:"Comenzar"},
 {id:"advanced",title:"Plan Advanced",price:120,desc:"Más información para comprender tus indicadores esenciales y tu evolución.",icon:"♙",badge:"INCLUYE ANÁLISIS",badgeClass:"wp-includes",featured:true,features:["Todo lo incluido en el Plan Básico","Panel anual de 60 indicadores de laboratorio","Estimación de edad biológica mediante PhenoAge","Resultados con referencias e historial de evolución","Indicadores adicionales disponibles a pedido y con costo extra"],cta:"Elegir Advanced"},
 {id:"premium",title:"Plan Premium",price:349,desc:"Una perspectiva más amplia para explorar y comprender tu bienestar a largo plazo.",icon:"◇",badge:"INCLUYE ANÁLISIS",badgeClass:"wp-includes",extra:"MÁS COMPLETO",features:["Todo lo incluido en el Plan Advanced","Panel anual de 100 indicadores de laboratorio (sustituye el panel de 60)","Estimación de edad biológica mediante PhenoAge","Mayor amplitud de indicadores y evolución histórica","Indicadores adicionales disponibles a pedido y con costo extra"],cta:"Elegir Premium"}
];
function card(p){
 const d=(p.price/365).toFixed(2);
 return '<article class="wp-card'+(p.featured?' wp-featured':'')+'" data-plan="'+p.id+'">'+
 (p.featured?'<div class="wp-recommended">RECOMENDADO</div>':'')+
 '<div class="wp-badges"><span class="wp-symbol" aria-hidden="true">'+p.icon+'</span><span class="wp-pill '+p.badgeClass+'">'+p.badge+'</span>'+(p.extra?'<span class="wp-pill wp-complete">'+p.extra+'</span>':'')+'</div>'+
 '<h3>'+p.title+'</h3><p class="wp-desc">'+p.desc+'</p>'+
 '<div class="wp-price"><strong>US$ '+p.price+'</strong><span>/ año</span></div>'+
 '<div class="wp-daily" aria-label="Equivalente diario: '+d+' dólares">US$ '+d.replace('.',',')+' / día</div>'+
 '<ul class="wp-benefits">'+p.features.map(t=>'<li><span class="wp-tick" aria-hidden="true">✓</span><span>'+t+'</span></li>').join('')+'</ul>'+
 (p.id==="basico"?'<div class="wp-no-labs">ⓘ &nbsp;No incluye análisis de laboratorio.</div>':'')+
 '<button type="button" class="wp-action" data-plan-choice="'+p.id+'">'+p.cta+' <span aria-hidden="true">→</span></button></article>';
}
function showNotice(p){
 const existing=document.getElementById('wp-plan-notice');if(existing)existing.remove();
 const backdrop=document.createElement('div');backdrop.id='wp-plan-notice';backdrop.style.cssText='position:fixed;inset:0;z-index:99999;background:rgba(13,37,42,.55);display:grid;place-items:center;padding:20px';
 backdrop.innerHTML='<div role="dialog" aria-modal="true" aria-labelledby="wp-notice-title" style="max-width:440px;width:100%;background:#fff;border-radius:20px;padding:29px;color:#123F47;box-shadow:0 25px 80px #123F4740;font-family:Arial,sans-serif"><h2 id="wp-notice-title" style="font:400 32px Georgia,serif;margin:0 0 13px">'+p.title+'</h2><p style="font-size:15px;line-height:1.65;margin:0 0 20px">La contratación todavía no está disponible. Los precios y los análisis incluidos están sujetos a confirmación de proveedores y condiciones de lanzamiento.</p><button type="button" id="wp-notice-close" style="border:0;border-radius:30px;padding:12px 28px;background:#123F47;color:#fff;cursor:pointer">Entendido</button></div>';
 const previous=document.activeElement;
 document.body.appendChild(backdrop);const btn=backdrop.querySelector('#wp-notice-close');btn.focus();
 function close(){backdrop.remove();document.removeEventListener('keydown',key);if(previous&&previous.focus)previous.focus()}
 function key(e){if(e.key==='Escape')close()}
 btn.addEventListener('click',close);backdrop.addEventListener('click',e=>{if(e.target===backdrop)close()});document.addEventListener('keydown',key);
}
function render(){
 document.querySelectorAll('[data-wp-plans]').forEach(root=>{
 root.innerHTML='<div class="wp-wrap"><header class="wp-head"><p class="wp-eyebrow">PLANES</p><h2 id="wp-planes-titulo">Elige el plan que mejor<br><em>te acompaña.</em></h2><p class="wp-intro">Tres opciones para organizar tu salud, hacer tus análisis y dar seguimiento a tus resultados.</p></header><div class="wp-grid">'+plans.map(card).join('')+'</div><p class="wp-legend"><span aria-hidden="true">ⓘ</span><span><b>Básico:</b> solo plataforma · <b>Advanced y Premium:</b> análisis incluidos</span></p><p class="wp-notes">El equivalente diario se calcula dividiendo el precio anual entre 365 días; la facturación indicada es anual. Los planes, los análisis de laboratorio y la disponibilidad están sujetos a confirmación comercial y de proveedores. La contratación todavía no está habilitada. La estimación PhenoAge es informativa y no constituye diagnóstico.</p></div>';
 root.querySelectorAll('[data-plan-choice]').forEach(b=>b.addEventListener('click',()=>showNotice(plans.find(p=>p.id===b.dataset.planChoice))));
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render);else render();
})();
