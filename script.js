/* Demo config: fill in only after the owner approves the details. Supabase anon key is public by design; protect data with RLS. Never put service_role keys here. */
const AURA_CONFIG = { supabaseUrl: "", supabaseAnonKey: "", businessName: "AURA", address: "", phone: "", hours: "", mapsQuery: "" };
const $ = (s, root=document) => root.querySelector(s);
$("#year").textContent = new Date().getFullYear();
$("#menuBtn").addEventListener("click",()=>$("#nav").classList.toggle("open"));
$("#nav").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>$("#nav").classList.remove("open")));
const observer = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");
 const f=btn.dataset.filter;
 document.querySelectorAll(".style-card").forEach(card=>{
  const show=f==="all"||(f==="men"&&card.dataset.gender==="men")||(f==="women"&&card.dataset.gender==="women")||card.dataset.tags.split(" ").includes(f);
  card.hidden=!show;
 });
}));
function notify(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2600)}
function applyBusinessDetails(d){
 if(d.address){$("#addressText").textContent=d.address;$("#mapsLink").href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(d.address);$("#mapFrame").src="https://maps.google.com/maps?q="+encodeURIComponent(d.address)+"&z=15&output=embed"}
 if(d.phone){$("#phoneText").textContent=d.phone;$("#callBtn").href="tel:"+d.phone.replace(/[^+\d]/g,"");$("#callBtn").textContent="TELEFONLA ULAŞ ↗"}
 if(d.hours)$("#hoursText").textContent=d.hours;
}
applyBusinessDetails(AURA_CONFIG);
async function loadFromSupabase(){
 if(!AURA_CONFIG.supabaseUrl||!AURA_CONFIG.supabaseAnonKey)return;
 try{
  const url=AURA_CONFIG.supabaseUrl.replace(/\/$/,"")+"/rest/v1/site_settings?select=key,value";
  const res=await fetch(url,{headers:{apikey:AURA_CONFIG.supabaseAnonKey,Authorization:"Bearer "+AURA_CONFIG.supabaseAnonKey}});
  if(!res.ok)throw new Error("Ayarlar yüklenemedi");
  const rows=await res.json();const data={};
  rows.forEach(r=>data[r.key]=r.value);
  applyBusinessDetails({address:data.address,phone:data.phone,hours:data.hours});
  if(data.business_name)document.title=data.business_name+" — Hair Studio";
 }catch(e){console.info("Supabase henüz yapılandırılmadı; demo içeriği gösteriliyor.",e)}
}
loadFromSupabase();
