// VARIABLES FOR THE CODE

const uploadInput = document.querySelector(".upload-avatar");
const uploadImage = document.querySelector(".drag-and-drop-figure img");
const uploadParagraph = document.querySelector(".drag-and-drop-p");
const sendButton = document.querySelector(".main-form");
const buttonsContainer = document.querySelector(".upload-avatar-buttons-container");

// 500KB
const maxSize = 500 * 1024; //500 KB

// Function called when upload and new image or change the actual image failed.
const failedImageSelected = (file)=>{
    uploadImage.setAttribute("src",`assets/images/icon-upload.svg`);
    uploadImage.style.width = "60%";
    uploadParagraph.classList.remove("hidden");
    buttonsContainer.classList.add("hidden");
    uploadInput.style.pointerEvents = "all";
    file.value="";
}


// Adding event listeners to the remove and change buttons
buttonsContainer.lastElementChild.addEventListener('click',()=>{
    uploadInput.click();
})

//Adding callbacks to the upload input element
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
                buttonsContainer.classList.remove("hidden");
                uploadInput.style.pointerEvents = "none";
                uploadInput.style.userSelect = "none";
                buttonsContainer.firstElementChild.addEventListener('click',()=>{
                    failedImageSelected(archivo);
                })
            }
            else {
                failedImageSelected(archivo);
            }
        }
    }
})



sendButton.addEventListener("submit",()=>{
    console.log("Hola");
})

