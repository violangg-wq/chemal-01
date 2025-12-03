// Simple JS: add click-to-open lightbox behavior
document.addEventListener('click', function(e){
  const card = e.target.closest('.card');
  if(!card) return;
  const img = card.querySelector('img');
  if(!img) return;
  openLightbox(img.src, card.querySelector('figcaption')?.innerText || '');
});

function openLightbox(src, caption){
  const overlay = document.createElement('div');
  overlay.style.position='fixed';
  overlay.style.inset=0;
  overlay.style.background='rgba(10,10,10,0.8)';
  overlay.style.display='flex';
  overlay.style.alignItems='center';
  overlay.style.justifyContent='center';
  overlay.style.padding='24px';
  overlay.style.zIndex=9999;

  const wrapper = document.createElement('div');
  wrapper.style.maxWidth='90%';
  wrapper.style.maxHeight='90%';
  wrapper.style.overflow='auto';
  wrapper.style.textAlign='center';

  const image = document.createElement('img');
  image.src = src;
  image.style.maxWidth='100%';
  image.style.maxHeight='80vh';
  image.style.borderRadius='8px';
  image.alt = caption;

  const cap = document.createElement('div');
  cap.innerText = caption;
  cap.style.color='#ddd';
  cap.style.marginTop='12px';
  cap.style.fontSize='0.95rem';

  wrapper.appendChild(image);
  wrapper.appendChild(cap);

  overlay.appendChild(wrapper);
  overlay.addEventListener('click', function(){ overlay.remove(); });
  document.body.appendChild(overlay);
}
