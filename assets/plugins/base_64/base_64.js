const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

const uploadImage = async (event, inputFile) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    var inputHidden = `data-${inputFile.name}`;
    console.log(inputHidden);
    // var inputHidden = document.createElement("textarea");
    // // inputHidden.type = "textarea";
    // inputHidden.name = 'data-'+inputFile.name;
    // inputHidden.style.opacity = 0;
    document.querySelector(`#${inputHidden}`).innerText = base64;
    // // Insere o novo elemento após o input file
    // inputFile.parentNode.insertBefore(inputHidden, inputFile.nextSibling);
};

window.onload = function() {
    // Obtém todos os elementos input do tipo "file" do formulário
    var inputsArquivo = document.querySelectorAll('input[type="file"]');

    // Adiciona o evento a cada elemento input de arquivo
    inputsArquivo.forEach(function(input) {
      input.addEventListener('change', (e)=>{uploadImage(e, input)});
    });
  };