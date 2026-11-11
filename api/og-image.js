/* Social preview 1200x630 · WELLNESS APP · branded JPEG, self-contained */
import sharp from 'sharp';
const photoUrl='https://wellness-app-ciencia-revision.vercel.app/como-funciona/hero-retrato-natural.webp';
const escapeXml=(value)=>String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
export default async function handler(req,res){
  try{
    const imageReq=await fetch(photoUrl,{signal:AbortSignal.timeout(8000)});
    if(!imageReq.ok)throw Error('Portrait unavailable');
    const portrait=Buffer.from(await imageReq.arrayBuffer());
    // Use the site's own approved portrait, not a stock photo.
    const right=await sharp(portrait).resize(690,630,{fit:'cover',position:'centre'}).jpeg({quality:90}).toBuffer();
    const svg=Buffer.from(String.raw`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><linearGradient id="fade" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FAF6F1"/><stop offset=".68" stop-color="#FAF6F1"/><stop offset="1" stop-color="#FAF6F1" stop-opacity="0"/></linearGradient></defs>
<rect x="0" y="0" width="1200" height="630" fill="none"/>
<rect x="0" y="0" width="815" height="630" fill="url(#fade)"/>
<g transform="translate(68 66)">
<circle cx="25" cy="25" r="22" fill="none" stroke="#123F47" stroke-width="12" stroke-dasharray="51 90" stroke-linecap="butt" transform="rotate(40 25 25)"/>
<circle cx="25" cy="25" r="22" fill="none" stroke="#168C8B" stroke-width="12" stroke-dasharray="44 97" transform="rotate(178 25 25)"/>
<circle cx="25" cy="25" r="22" fill="none" stroke="#FF713D" stroke-width="12" stroke-dasharray="37 104" transform="rotate(278 25 25)"/>
<circle cx="25" cy="25" r="10" fill="#FAF6F1"/>
</g>
<text x="135" y="103" fill="#123F47" font-family="Arial,Helvetica,sans-serif" font-weight="700" letter-spacing="3.5" font-size="32">WELLNESS APP</text>
<text x="65" y="255" fill="#123F47" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="58">Inteligencia</text>
<text x="65" y="330" fill="#123F47" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="56">para tu bienestar.</text>
<text x="67" y="413" fill="#123F47" font-family="Arial,Helvetica,sans-serif" font-size="24">Conoce tus indicadores de salud,</text>
<text x="67" y="448" fill="#123F47" font-family="Arial,Helvetica,sans-serif" font-size="24">comprende tus resultados y descubre</text>
<text x="67" y="483" fill="#123F47" font-family="Arial,Helvetica,sans-serif" font-size="24">una nueva forma de cuidar tu bienestar.</text>
<path d="M67 545H500" stroke="#D6E4DE" stroke-width="2"/>
<text x="67" y="579" fill="#43666A" font-family="Arial,Helvetica,sans-serif" font-size="19">WELLNESS APP</text>
</svg>`, 'utf8');
    const image=await sharp({create:{width:1200,height:630,channels:3,background:'#FAF6F1'}})
      .composite([{input:right,left:510,top:0},{input:svg,left:0,top:0}])
      .jpeg({quality:86,mozjpeg:true}).toBuffer();
    res.setHeader('Content-Type','image/jpeg');
    res.setHeader('Cache-Control','public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400');
    res.setHeader('Content-Length',String(image.length));
    res.status(200).end(image);
  }catch(e){
    console.error('OG image generation error:',e.message);
    res.status(503).json({error:'Image temporarily unavailable'});
  }
}
