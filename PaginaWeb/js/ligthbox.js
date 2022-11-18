const imagenes=document.querySelectorAll('.img-galeria')
const imagenligth=document.querySelector('.agragar-imagen')
const contenedorl=document.querySelector('.imagen-ligth')

console.log(imagenes)
console.log(imagenligth)
console.log(contenedorl)

const imagenesa = Array.apply(null,imagenes)


imagenesa.forEach(imagen =>{
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
})

const aparecerImagen = (imagen)=>{
    imagenligth.src =imagen
    contenedorl.classList.toggle('show')
    imagenligth.classList.toggle('showImage')
}