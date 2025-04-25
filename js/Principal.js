fetch('api_Ext1.php')
    .then(response => response.json())
    .then(result => {
        const servicios = result.data || result;

        if (!servicios || servicios.length === 0) {
            console.log('No hay datos disponibles para mostrar.');
            return;
        }

        const contenedorExterno = document.getElementById("servicios-externos");

        servicios.forEach(servicio => {

                  
            const card = document.createElement('div');
            card.className = "col-md-4";
            card.innerHTML = `
                <div class="card mb-4 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${servicio.titulo.esp}</h5>
                        <p class="card-text">${servicio.descripcion.esp}</p>

                    </div>
                </div>
            `;          
            contenedorExterno.appendChild(card);

        });
    })
    .catch(error => {
        console.error('Error al obtener los datos externos:', error);
    });

    //*******************************************API2***************************************************************************/
    
    fetch('api_Ext2.php')
    .then(response => response.json())
    .then(result => {
        const servicios = result.data || result;

        if (!servicios || servicios.length === 0) {
            console.log('No hay datos disponibles para mostrar.');
            return;
        }

        const contenedorExterno = document.getElementById("servicios-externo2");

        servicios.forEach(servicio => {

                  
            const card = document.createElement('div');
            card.className = "col-md-4";
            card.innerHTML = `
                <div class="card mb-4 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${servicio.titulo.esp}</h5>
                        <p class="card-text">${servicio.descripcion.esp}</p>

                    </div>
                </div>
            `;          
            contenedorExterno.appendChild(card);

        });
    })
    .catch(error => {
        console.error('Error al obtener los datos externos:', error);
    });
