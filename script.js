// ===== PHONE DATA =====
const phones = [
  { brand:"apple",name:"iPhone 14 Pro",storage:"128GB",ram:"6GB",battery:"89%",condition:"Excellent",price:52999,original:79999,color:"#333",icon:"🍎" },
  { brand:"apple",name:"iPhone 13",storage:"128GB",ram:"4GB",battery:"92%",condition:"Excellent",price:38999,original:59999,color:"#555",icon:"🍎" },
  { brand:"apple",name:"iPhone 12",storage:"64GB",ram:"4GB",battery:"85%",condition:"Good",price:27999,original:49999,color:"#222",icon:"🍎" },
  { brand:"samsung",name:"Samsung Galaxy S23",storage:"256GB",ram:"8GB",battery:"95%",condition:"Excellent",price:42999,original:74999,color:"#1a1a2e",icon:"📱" },
  { brand:"samsung",name:"Samsung Galaxy A54",storage:"128GB",ram:"8GB",battery:"91%",condition:"Good",price:18999,original:32999,color:"#16213e",icon:"📱" },
  { brand:"samsung",name:"Samsung Galaxy M34",storage:"128GB",ram:"6GB",battery:"94%",condition:"Excellent",price:11999,original:18999,color:"#0f3460",icon:"📱" },
  { brand:"oneplus",name:"OnePlus 11",storage:"256GB",ram:"16GB",battery:"90%",condition:"Excellent",price:34999,original:56999,color:"#1a1a1a",icon:"📱" },
  { brand:"oneplus",name:"OnePlus Nord 3",storage:"128GB",ram:"8GB",battery:"93%",condition:"Good",price:17999,original:29999,color:"#2d2d2d",icon:"📱" },
  { brand:"xiaomi",name:"Xiaomi 13 Pro",storage:"256GB",ram:"12GB",battery:"88%",condition:"Good",price:31999,original:59999,color:"#1c1c1c",icon:"📱" },
  { brand:"xiaomi",name:"Redmi Note 13 Pro",storage:"128GB",ram:"8GB",battery:"96%",condition:"Excellent",price:14999,original:24999,color:"#262626",icon:"📱" },
  { brand:"xiaomi",name:"POCO F5",storage:"256GB",ram:"8GB",battery:"91%",condition:"Good",price:16999,original:26999,color:"#303030",icon:"📱" },
  { brand:"apple",name:"iPhone 11",storage:"64GB",ram:"4GB",battery:"82%",condition:"Fair",price:19999,original:39999,color:"#444",icon:"🍎" },
];

// ===== RENDER PHONES =====
const grid = document.getElementById('phonesGrid');
function renderPhones(filter='all'){
  const filtered = filter==='all' ? phones : phones.filter(p=>p.brand===filter);
  grid.innerHTML = filtered.map(p=>`
    <div class="phone-card" data-brand="${p.brand}">
      <div class="phone-img" style="background:${p.color}">
        <span style="font-size:3.5rem">${p.icon}</span>
        <span class="condition ${p.condition.toLowerCase()}">${p.condition}</span>
      </div>
      <div class="phone-details">
        <h3>${p.name}</h3>
        <div class="phone-specs">
          <span>💾 ${p.storage}</span><span>🧠 ${p.ram}</span><span>🔋 ${p.battery}</span>
        </div>
        <div class="phone-price-row">
          <div><span class="phone-price">₹${p.price.toLocaleString('en-IN')}</span><span class="phone-original">₹${p.original.toLocaleString('en-IN')}</span></div>
          <a href="#contact" class="btn btn-primary" style="padding:8px 18px;font-size:.8rem">Enquire</a>
        </div>
      </div>
    </div>
  `).join('');
}
renderPhones();

// ===== FILTER BUTTONS =====
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderPhones(btn.dataset.filter);
  });
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll',()=>{
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE TOGGLE =====
document.getElementById('navToggle').addEventListener('click',()=>{
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open'));
});

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  showToast('✅ Enquiry sent successfully! We\'ll contact you shortly.');
  e.target.reset();
});

function showToast(msg){
  let t = document.querySelector('.toast');
  if(!t){ t=document.createElement('div'); t.className='toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; }
  });
},{threshold:.1});

document.querySelectorAll('.brand-card,.service-card,.phone-card,.whyus-card,.review-card,.info-card').forEach(el=>{
  el.style.opacity='0';
  el.style.transform='translateY(30px)';
  el.style.transition='opacity .6s ease, transform .6s ease';
  observer.observe(el);
});
