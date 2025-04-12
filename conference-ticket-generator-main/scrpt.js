const uploadInput = document.querySelector(".upload-avatar");
const uploadImage = document.querySelector(".drag-and-drop-figure img");
const uploadParagraph = document.querySelector(".drag-and-drop-p");
const sendButton = document.querySelector(".main-form");

const maxSize = 500 * 1024; //500 KB


uploadInput.addEventListener("change",() => {
    if(uploadInput != undefined){
        const archivo = this.file;
        if(archivo.size > maxSize){
            uploadInput.setCustomValidity("Tu archivo supera el tamaño especificado");
            uploadInput.reportValidity();
            
        }
        else{
            if(archivo && uploadImage && archivo.value!=="" ){

                let ruta = archivo.value.split("\\");
                uploadImage.setAttribute("src",`assets/images/${ruta[ruta.length-1]}`);
                uploadImage.style.width = "100%";
                uploadParagraph.classList.add("hidden");
            }
            else {
                uploadImage.setAttribute("src",`assets/images/icon-upload.svg`);
                uploadImage.style.width = "60%";
                uploadParagraph.classList.remove("hidden");
            }
        }
    }
})



sendButton.addEventListener("submit",()=>{
    console.log("Hola");
})

