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

document.addEventListener('DOMContentLoaded', function(){
    const gallery = document.getElementById("galleryScroll");
    const dots = document.getElementById("dots");

    if(gallery && dots){
        const imgs = gallery.querySelectorAll("img");
        imgs.forEach((_,i)=>{
            let d=document.createElement("span");
            if(i==0) d.classList.add("active");
            dots.appendChild(d);
        });

        gallery.addEventListener("scroll",()=>{
            let itemWidth = (gallery.firstElementChild ? gallery.firstElementChild.clientWidth + 16 : 210);
            let i=Math.round(gallery.scrollLeft / itemWidth);
            dots.querySelectorAll("span").forEach(d=>d.classList.remove("active"));
            if(dots.children[i]) dots.children[i].classList.add("active");
        });
    }

    // Set default language after DOM is ready
    setLang('en');
});

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