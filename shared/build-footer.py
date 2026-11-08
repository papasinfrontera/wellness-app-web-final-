from pathlib import Path
import re
root=Path(__file__).resolve().parent.parent
source=(root/'shared/footer-source.html').read_text(encoding='utf-8')
for filename in ['index.html','que-analizamos/index.html','mision/index.html']:
    target=root/filename
    current=target.read_text(encoding='utf-8')
    if filename=='index.html':
        html=source
    else:
        html=source.replace('href="#','href="../index.html#').replace('href="que-analizamos/index.html"','href="../que-analizamos/index.html"').replace('href="mision/index.html"','href="../mision/index.html"')
        if filename=='que-analizamos/index.html':
            html=html.replace('href="../que-analizamos/index.html"','href="#inicio"')
        if filename=='mision/index.html':
            html=html.replace('href="../mision/index.html"','href="#inicio"')
    current,n=re.subn(r'<footer class="wf-footer" id="footer-wellness">[\s\S]*?</footer>',lambda m:html,current,count=1)
    if n!=1:raise RuntimeError('Footer missing: '+filename)
    target.write_text(current,encoding='utf-8')
