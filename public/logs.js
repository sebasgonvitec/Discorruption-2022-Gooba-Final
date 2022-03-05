getData(); 
        //funcion para extraer datos de API
        async function getData() {
            const response = await fetch('/api');
            const data = await response.json();

            //crear div para cada elemento de la denuncia
            for (item of data) {

                const root = document.createElement('div');
                const datos_nombre = document.createElement('p');
                const datos_sexo = document.createElement('div');
                const datos_edad = document.createElement('div');
                const datos_ocupacion = document.createElement('div');
                const datos_escolaridad = document.createElement('div');
                const datos_correo = document.createElement('div');
                const  lugar = document.createElement('div');
                const fecha = document.createElement('div');
                const nombre_denunciado = document.createElement('div');
                const descripcion_hechos = document.createElement('div');
                const evidencia = document.createElement('div');

                datos_nombre.textContent = `Nombre del denunciante(opcional): ${item.datos_nombre}`;
                datos_sexo.textContent = `Sexo del denunciante(opcional): ${item.datos_sexo}`;
                datos_edad.textContent = `Edad del denunciante(opcional): ${item.datos_edad}`;
                datos_ocupacion.textContent = `Ocupacion del denunciante(opcional): ${item.datos_ocupacion}`;
                datos_escolaridad.textContent = `Escolaridad del denunciante(opcional): ${item.datos_escolaridad}`;
                datos_correo.textContent = `Correo del denunciante(opcional): ${item.datos_correo}`;
                lugar.textContent = `Lugar de los hechos: ${item.lugar}`;
                fecha.textContent = `Fecha de los hechos: ${item.fecha}`;
                nombre_denunciado.textContent = `Nombre del denunciado: ${item.nombre_denunciado}`;
                descripcion_hechos.textContent = `Descripcion de los hechos: ${item.descripcion_hechos}`;
                evidencia.textContent = `Evidencia: ${item.evidencia}`;

                //añadir divs a root div
                root.append(datos_nombre, 
                            datos_sexo, 
                            datos_edad, 
                            datos_ocupacion, 
                            datos_escolaridad, 
                            datos_correo, 
                            lugar, 
                            fecha, 
                            nombre_denunciado, 
                            descripcion_hechos, 
                            evidencia);
                //añadir root a body
                document.body.append(root);
            }
            console.log(data);
        }