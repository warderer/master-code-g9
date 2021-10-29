// CIFRAR O HASHEAR LA INFORMACIÓN

//VAMOS A TRABAJAR UNA FUNCIÓN

export default function () {

    const token = window.localStorage.getItem('token');

    if(token){
        const [header, payload, signature ] = token.split('.');   // header.payload.signature
        //Blindamos el payload, porque en ocasiones un payload en base 64 reemplaza 
        // caracteres que nos pueden dar problemas

        //ES UN CIFRADO
        const base64 = payload.replace('-','+').replace('_','/')   //jesua:"#$@  -> base64 = zzZAASCASAE_WE==

        // atob convierte base64 a String y ese texto es el resultado que se convierte a objeto
        // en formato JSON
        const payloadObject = JSON.parse(window.atob(base64));
        return payloadObject
    }else {
        return null;
    }

}
