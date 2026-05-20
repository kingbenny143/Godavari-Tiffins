   
function toggleGallery(){
document.getElementById("gallerySection").classList.toggle("hidden");
}

function openPreview(img){
    const modal = document.getElementById("previewModal");
    const preview = document.getElementById("previewImg");

    preview.src = img.src;

    modal.classList.remove("hidden");
    modal.style.opacity = "0";

    setTimeout(() => {
        modal.style.opacity = "1";
    }, 10);
}

function closePreview(){
document.getElementById("previewModal").classList.add("hidden");
}

const gallery = document.getElementById("galleryScroll");
const dots = document.getElementById("dots");

if(gallery){
const imgs = gallery.querySelectorAll("img");
imgs.forEach((_,i)=>{
let d=document.createElement("span");
if(i==0)d.classList.add("active");
dots.appendChild(d);
});

gallery.addEventListener("scroll",()=>{
let i=Math.round(gallery.scrollLeft/210);
dots.querySelectorAll("span").forEach(d=>d.classList.remove("active"));
if(dots.children[i]) dots.children[i].classList.add("active");
});
}

function setLang(lang){
    document.querySelectorAll('.en').forEach(e=>{
        e.classList.toggle('hidden', lang !== 'en');
        e.style.display = (lang==='en') ? '' : 'none';
    });
    document.querySelectorAll('.te').forEach(e=>{
        e.classList.toggle('hidden', lang !== 'te');
        e.style.display = (lang==='te') ? '' : 'none';
    });
}

// Set default language on page load
setLang('en');
