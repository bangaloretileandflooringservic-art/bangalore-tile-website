document.getElementById('year').textContent = new Date().getFullYear();
const menuButton=document.getElementById('menuButton');
const mainNav=document.getElementById('mainNav');
menuButton.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuButton.setAttribute('aria-expanded',open);menuButton.textContent=open?'×':'☰';});
document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰';}));
document.getElementById('enquiryForm').addEventListener('submit',(e)=>{e.preventDefault();const name=document.getElementById('name').value.trim();const phone=document.getElementById('phone').value.trim();const message=document.getElementById('message').value.trim();const businessNumber='916362831731';const text=`Hello, I need tile/flooring work.\nName: ${name}\nPhone: ${phone}\nProject: ${message}`;window.open(`https://wa.me/${businessNumber}?text=${encodeURIComponent(text)}`,'_blank','noopener');});
const lightbox=document.getElementById('lightbox');
const lightboxImage=document.getElementById('lightboxImage');
const lightboxClose=document.getElementById('lightboxClose');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{lightboxImage.src=item.dataset.full;lightboxImage.alt=item.querySelector('img').alt;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');}));
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImage.src='';}
lightboxClose.addEventListener('click',closeLightbox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});
