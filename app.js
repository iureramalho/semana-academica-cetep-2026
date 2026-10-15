const data = window.EVENTO;
const esc = (value) => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function renderSchedule(selector, entries) {
 document.querySelector(selector).innerHTML = entries.map(([time,title,description],i) => `<li class="${title==='Roda de conversa'?'featured':''}"><span class="schedule-time">${esc(time)}</span><div><h4>${esc(title)}</h4>${description?`<p>${esc(description)}</p>`:''}</div><span class="schedule-index" aria-hidden="true">${String(i+1).padStart(2,'0')}</span></li>`).join('');
}
renderSchedule('#schedule-list', data.schedule);
renderSchedule('#afternoon-schedule-list', data.afternoonSchedule);
function workshopPortraits(w) {
 const portrait = (image,name) => `<span class="workshop-photo workshop-photo--${esc(image)}"><img src="assets/${esc(image)}.webp" alt="${esc(name)}" loading="lazy"></span>`;
 if(w.photos) return `<span class="workshop-portraits">${w.photos.map(p=>`<span class="workshop-person">${portrait(p.image,p.name)}<span class="portrait-shift">${esc(p.shift)}</span></span>`).join('')}</span>`;
 return w.photo ? portrait(w.photo,w.person) : `<span class="workshop-symbol" aria-hidden="true">${w.symbol}</span>`;
}
document.querySelector('#workshop-list').innerHTML = data.workshops.map(w => `<details class="workshop ${w.color}${w.photos?' has-photo has-multiple-photos':w.photo?' has-photo':''}"><summary><span class="workshop-number">${w.number}</span><span class="workshop-title"><strong>${esc(w.title)}</strong><span>${esc(w.subtitle)}</span><span class="workshop-byline">Com ${esc(w.person)}</span></span>${workshopPortraits(w)}<span class="plus" aria-hidden="true">+</span></summary><div class="workshop-body"><p>${esc(w.description)}</p><dl><div><dt>Responsável</dt><dd>${esc(w.person)}</dd></div><div><dt>Turno</dt><dd>${esc(w.shift)}</dd></div><div><dt>Local</dt><dd>${esc(w.place)}</dd></div></dl></div></details>`).join('');
document.querySelector('#guest-list').innerHTML = data.guests.map((g,i) => `<article class="guest"><div class="guest-photo photo-${i}"><img src="assets/${esc(g.image)}.webp" alt="${esc(g.name)}" width="800" height="1000" loading="lazy"><span class="guest-number" aria-hidden="true">${String(i+1).padStart(2,'0')}</span></div><div class="guest-info"><p>${esc(g.role)}</p><h3>${esc(g.name)}</h3>${g.shift?`<span class="shift">${esc(g.shift)}</span>`:''}</div></article>`).join('');
if(data.registrationUrl && /^https:\/\/([a-z0-9-]+\.)?even3\.com\.br\//i.test(data.registrationUrl)) {
 document.querySelector('#registration-action').innerHTML=`<a class="button dark" href="${esc(data.registrationUrl)}" target="_blank" rel="noopener noreferrer">Inscrições na Even3 <span aria-hidden="true">↗</span><span class="sr-only"> (abre em nova aba)</span></a>`;
 document.querySelector('.hero-actions').insertAdjacentHTML('beforeend', `<a class="text-link" href="${esc(data.registrationUrl)}" target="_blank" rel="noopener noreferrer">Inscrições na Even3 ↗<span class="sr-only"> (abre em nova aba)</span></a>`);
}
if(data.partners.length) {
 document.querySelector('#partner-status').hidden=true;
 document.querySelector('#partner-list').innerHTML=data.partners.map(p=>`<figure><img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy"><figcaption>${esc(p.category)}</figcaption></figure>`).join('');
}
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
function closeMenu(restoreFocus=false){toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');if(restoreFocus)toggle.focus();}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true')closeMenu(true);});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
matchMedia('(min-width: 1101px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
