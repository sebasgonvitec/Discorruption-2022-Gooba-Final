//cuando se haga click en submit
const button = document.getElementById('submit');
button.addEventListener('click', async event => {
    //extraer valores de entradas de texto
    //datos personales opcionales
    const datos_nombre = document.getElementById('datos_nombre').value;
    const datos_sexo = document.getElementById('datos_sexo').value;
    const datos_edad = document.getElementById('datos_edad').value;
    const datos_ocupacion = document.getElementById('datos_ocupacion').value;
    const datos_escolaridad = document.getElementById('datos_escolaridad').value;
    const datos_correo = document.getElementById('datos_correo').value;
    
    //datos de denuncia obligatorios
    const lugar = document.getElementById('denuncia_lugar').value;
    const fecha = document.getElementById('denuncia_fecha').value;
    const nombre_denunciado = document.getElementById('denuncia_nombreDenunciado').value;
    const descripcion_hechos = document.getElementById('denuncia_descripcion').value;
    const evidencia = document.getElementById('denuncia_evidencia').value;
    
    //juntar datos
    const data = { datos_nombre,
                    datos_sexo,
                    datos_edad,
                    datos_ocupacion,
                    datos_escolaridad,
                    datos_correo,
                    lugar,
                    fecha,
                    nombre_denunciado,
                    descripcion_hechos,
                    evidencia};
    
    //options para post request a db
    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data),
    };
    //hacer el post request y esperar response
    const response = await fetch('/api', options);
    //creacion de json
    const json = await response.json();
    console.log(json);
});