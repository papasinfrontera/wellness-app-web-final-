from pathlib import Path
import re
root=Path(__file__).resolve().parent.parent
source=(root/'shared/footer-source.html').read_text(encoding='utf-8')
for filename in ['index.html','que-analizamos/index.html']:
    target=root/filename
    current=target.read_text(encoding='utf-8')
    html=source if filename=='index.html' else source.replace('href="#','href="../index.html#').replace('href="que-analizamos/index.html"','href="#inicio"')
    current,n=re.subn(r'<footer class="wf-footer" id="footer-wellness">[\s\S]*?</footer>',lambda m:html,current,count=1)
    if n!=1:raise RuntimeError('Footer missing: '+filename)
    target.write_text(current,encoding='utf-8')
