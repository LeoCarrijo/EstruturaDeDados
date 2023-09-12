import { saveAs } from "./fileSaver.mjs";

function salvar(){
    let texto = 'Alguma Coisa pra PlaceHolder', titulo = 'Nome do Arquivo'
    let blob = new Blob([texto],{
        type: 'text/plain;charset=utf-8'
    });
    saveAs(blob, titulo + '.txt')
}