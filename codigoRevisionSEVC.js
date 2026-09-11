const tbody  = document.getElementById("tablaBody");
const tbody1 = document.getElementById("tablaBody1_1");
const tbody2 = document.getElementById("tablaBody2");
const tbody3 = document.getElementById("tablaBody3");
const tbody4 = document.getElementById("tablaBody4");
const tbodyC = document.getElementById("tablaCotizaciones");
const tbody5 = document.getElementById("tablaBody5");
/*
const tbody6 = document.getElementById("tablaBody6");
*/
const tbody7 = document.getElementById("tablaBody7");

function agregarFila(){
  const tbody = document.getElementById("tablaBody");
  const tbody1 = document.getElementById("tablaBody1_1");
  const i = obtenerNumeroFila1();
  const j = obtenerNumeroFila1_1();

  const fila = document.createElement("tr");
  const fila1 = document.createElement("tr");
  
fila.innerHTML = `

    <td>
        ${i}
    </td>

    <td>
        <textarea
            name="Programa_T1R${i}"
            class="auto-expand input_tabla obligatorio"
            rows="1"
            style="resize:none;"
            aria-label="Programas académicos, servicios o actividades de la dependencia"
        > </textarea>

        <input
            name="Programa_T1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Programa_T1R${i}RO"
            data-campo="Programa_T1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios1_T1R${i}"
            class="input_tabla"
            aria-label="Usuarios1"
        >

        <input
            name="Usuarios1_T1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios1_T1R${i}RO"
            data-campo="Usuarios1_T1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios2_T1R${i}"
            class="input_tabla"
            aria-label="Usuarios2"
        >

        <input
            name="Usuarios2_T1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios2_T1R${i}RO"
            data-campo="Usuarios2_T1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios3_T1R${i}"
            class="input_tabla"
            aria-label="Usuarios3"
        >

        <input
            name="Usuarios3_T1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios3_T1R${i}RO"
            data-campo="Usuarios3_T1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios4_T1R${i}"
            class="input_tabla"
            aria-label="Usuarios4"
        >

        <input
            name="Usuarios4_T1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios4_T1R${i}RO"
            data-campo="Usuarios4_T1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios5_T1R${i}"
            class="input_tabla"
            aria-label="Usuarios5"
        >

        <input
            name="Usuarios5_T1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios5_T1R${i}RO"
            data-campo="Usuarios5_T1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios6_T1R${i}"
            class="input_tabla"
            aria-label="Usuarios6"
        >

        <input
            name="Usuarios6_T1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios6_T1R${i}RO"
            data-campo="Usuarios6_T1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios7_T1R${i}"
            class="input_tabla"
            aria-label="Usuarios7"
        >

        <input
            name="Usuarios7_T1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios7_T1R${i}RO"
            data-campo="Usuarios7_T1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios8_T1R${i}"
            class="input_tabla"
            aria-label="Usuarios8"
        >

        <input
            name="Usuarios8_T1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios8_T1R${i}RO"
            data-campo="Usuarios8_T1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios9_T1R${i}"
            class="input_tabla"
            aria-label="Usuarios9"
        >

        <input
            name="Usuarios9_T1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios9_T1R${i}RO"
            data-campo="Usuarios9_T1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios10_T1R${i}"
            class="input_tabla"
            aria-label="Usuarios10"
        >

        <input
            name="Usuarios10_T1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios10_T1R${i}RO"
            data-campo="Usuarios10_T1R${i}"
        >
    </td>
`;

fila1.innerHTML = `

    <td>
        ${i}
    </td>

    <td>
        <textarea
            name="Programa_T1_1R${i}"
            class="auto-expand input_tabla obligatorio"
            rows="1"
            style="resize:none;"
            aria-label="Programas académicos, servicios o actividades de la dependencia"
        > </textarea>

        <input
            name="Programa_T1_1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Programa_T1_1R${i}RO"
            data-campo="Programa_T1_1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios1_T1_1R${i}"
            class="input_tabla"
            aria-label="Usuarios1"
        >

        <input
            name="Usuarios1_T1_1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios1_T1_1R${i}RO"
            data-campo="Usuarios1_T1_1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios2_T1_1R${i}"
            class="input_tabla"
            aria-label="Usuarios2"
        >

        <input
            name="Usuarios2_T1_1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios2_T1_1R${i}RO"
            data-campo="Usuarios2_T1_1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios3_T1_1R${i}"
            class="input_tabla"
            aria-label="Usuarios3"
        >

        <input
            name="Usuarios3_T1_1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios3_T1_1R${i}RO"
            data-campo="Usuarios3_T1_1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios4_T1_1R${i}"
            class="input_tabla"
            aria-label="Usuarios4"
        >

        <input
            name="Usuarios4_T1_1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios4_T1_1R${i}RO"
            data-campo="Usuarios4_T1_1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios5_T1_1R${i}"
            class="input_tabla"
            aria-label="Usuarios5"
        >

        <input
            name="Usuarios5_T1_1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios5_T1_1R${i}RO"
            data-campo="Usuarios5_T1_1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios6_T1_1R${i}"
            class="input_tabla"
            aria-label="Usuarios6"
        >

        <input
            name="Usuarios6_T1_1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios6_T1_1R${i}RO"
            data-campo="Usuarios6_T1_1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios7_T1_1R${i}"
            class="input_tabla"
            aria-label="Usuarios7"
        >

        <input
            name="Usuarios7_T1_1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios7_T1_1R${i}RO"
            data-campo="Usuarios7_T1_1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios8_T1_1R${i}"
            class="input_tabla"
            aria-label="Usuarios8"
        >

        <input
            name="Usuarios8_T1_1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios8_T1_1R${i}RO"
            data-campo="Usuarios8_T1_1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios9_T1_1R${i}"
            class="input_tabla"
            aria-label="Usuarios9"
        >

        <input
            name="Usuarios9_T1_1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios9_T1_1R${i}RO"
            data-campo="Usuarios9_T1_1R${i}"
        >
    </td>

    <td>
        <input
            type="number"
            name="Usuarios10_T1_1R${i}"
            class="input_tabla"
            aria-label="Usuarios10"
        >

        <input
            name="Usuarios10_T1_1R${i}RO"
            type="checkbox"
            class="check-verificacion"
            id="Usuarios10_T1_1R${i}RO"
            data-campo="Usuarios10_T1_1R${i}"
        >
    </td>
`;

tbody.appendChild(fila);
tbody1.appendChild(fila1);

activarAutoExpand(fila);
activarAutoExpand(fila1);
}

//*-----------------------Agregar fila tabla 2*

function agregarFila2() {

    const tbody = document.getElementById("tablaBody2");
    const i = obtenerNumeroFila2();

    const fila = document.createElement("tr");

    fila.innerHTML = `

        <td>
            ${i}
        </td>

        <td>
            <input
                name="Edificio_T2R${i}"
                class="input_tabla"
                aria-label="Edificio"
            >

            <input
                name="Edificio_T2R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="Edificio_T2R${i}RO"
                data-campo="Edificio_T2R${i}"
            >
        </td>

        <td>
            <input
                name="Nivel_T2R${i}"
                class="input_tabla"
                aria-label="Nivel"
            >

            <input
                name="Nivel_T2R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="Nivel_T2R${i}RO"
                data-campo="Nivel_T2R${i}"
            >
        </td>

        <td>
            <input
                name="Espacio_T2R${i}"
                class="input_tabla"
                aria-label="Espacio"
            >

            <input
                name="Espacio_T2R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="Espacio_T2R${i}RO"
                data-campo="Espacio_T2R${i}"
            >
        </td>

        <td class="cantidadCol">
            <input
                type="number"
                name="Largo_T2R${i}"
                class="input_tabla"
                aria-label="Largo"
            >

            <input
                name="Largo_T2R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="Largo_T2R${i}RO"
                data-campo="Largo_T2R${i}"
            >
        </td>

        <td class="cantidadCol">
            <input
                type="number"
                name="Ancho_T2R${i}"
                class="input_tabla"
                aria-label="Ancho"
            >

            <input
                name="Ancho_T2R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="Ancho_T2R${i}RO"
                data-campo="Ancho_T2R${i}"
            >
        </td>

        <td class="cantidadCol">
            <input
                type="number"
                name="Alumnos_T2R${i}"
                class="input_tabla"
                aria-label="Numero de Alumnos"
            >

            <input
                name="Alumnos_T2R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="Alumnos_T2R${i}RO"
                data-campo="Alumnos_T2R${i}"
            >
        </td>

        <td class="cantidadCol">
            <input
                type="number"
                name="Horas_T2R${i}"
                class="input_tabla"
                aria-label="Horas de Servicio"
            >

            <input
                name="Horas_T2R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="Horas_T2R${i}RO"
                data-campo="Horas_T2R${i}"
            >
        </td>
    `;

    tbody.appendChild(fila);

    activarAutoExpand(fila);
}


//*-----------------------Agregar fila tabla 3*

function agregarFila3() {

    const tbody = document.getElementById("tablaBody3");
    const i = obtenerNumeroFila3();

    const fila = document.createElement("tr");

    fila.innerHTML = `

        <td>
            ${i}
        </td>

        <td>
            <input
                name="Edificio_T3R${i}"
                class="input_tabla"
                aria-label="Edificio"
            >

            <input
                name="Edificio_T3R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="Edificio_T3R${i}RO"
                data-campo="Edificio_T3R${i}"
            >
        </td>

        <td>
            <input
                type="number"
                name="MetrosCuadrados_T3R${i}"
                class="input_tabla"
                aria-label="MetrosCuadrados"
            >

            <input
                name="MetrosCuadrados_T3R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="MetrosCuadrados_T3R${i}RO"
                data-campo="MetrosCuadrados_T3R${i}"
            >
        </td>

        <td>
            <textarea
                id="urlPlanos_T3R${i}"
                name="urlPlanos_T3R${i}"
                class="auto-expand input_tabla"
                rows="1"
                style="resize:none;"
                aria-label="Url de los planos recibidos"
                readonly
            ></textarea>
        </td>
    `;

    tbody.appendChild(fila);

    activarAutoExpand(fila);
}


//*-----------------------Agregar fila tabla C*

function agregarFilaC() {

    const tbody = document.getElementById("tablaCotizaciones");
    const i = obtenerNumeroFilaC();

    const fila = document.createElement("tr");

    fila.innerHTML = `

        <td>
            ${i}
        </td>

        <td>
            <textarea
                name="nombreCotizacion_TCR${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Nombre de la Cotizacion"
            > </textarea>
        </td>

        <td>
            <textarea
                name="urlCotizacionAdquisicionG1_TCR${i}"
                class="auto-expand input_tabla"
                rows="1"
                style="resize:none;"
                aria-label="Url de las Cotizaciones"
            > </textarea>
        </td>

        <td class="cantidadCol">

            <input
                type="number"
                name="anio_TCR${i}"
                class="input_tabla"
                aria-label="Año de la cotizacion"
            >

            <input
                name="anio_TCR${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="anio_TCR${i}RO"
                data-campo="anio_TCR${i}"
            >

        </td>

        <td>
            <textarea
                name="nombreCotizacion2_TCR${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Nombre de la Cotizacion 2"
            > </textarea>
        </td>

        <td>
            <textarea
                name="urlCotizacionAdquisicionG2_TCR${i}"
                class="auto-expand input_tabla"
                rows="1"
                style="resize:none;"
                aria-label="Url de las Cotizaciones"
            > </textarea>
        </td>

        <td>
            <input
                type="number"
                name="anioA2_TCR${i}"
                class="input_tabla"
                aria-label="Año de la cotizacion"
            >

            <input
                name="anioA2_TCR${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="anioA2_TCR${i}RO"
                data-campo="anioA2_TCR${i}"
            >
        </td>
    `;

    tbody.appendChild(fila);

    activarAutoExpand(fila);
}


//*-----------------------Agregar fila tabla 4*

function agregarFila4() {

    const tbody = document.getElementById("tablaBody4");
    const i = obtenerNumeroFila4();

    const fila = document.createElement("tr");

    fila.innerHTML = `

        <td>
            ${i}
        </td>

        <td>
            <textarea
                id="ProgramaAcademico_T4R${i}"
                name="ProgramaAcademico_T4R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Programa Académico"
            ></textarea>

            <input
                name="ProgramaAcademico_T4R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="ProgramaAcademico_T4R${i}RO"
                data-campo="ProgramaAcademico_T4R${i}"
            >
        </td>




        <td>
            <textarea
                name="Espacio_T4R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Espacio"
            ></textarea>

            <input
                name="Espacio_T4R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="Espacio_T4R${i}RO"
                data-campo="Espacio_T4R${i}"
            >
        </td>






        <td>
            <textarea
                name="Clave_T4R${i}"
                class="auto-expand input_tabla"
                rows="1"
                style="resize:none;"
                aria-label="clave"
            ></textarea>

            <input
                name="Clave_T4R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="Clave_T4R${i}RO"
                data-campo="Clave_T4R${i}"
            >
        </td>






        <td>
            <textarea
                name="nombredelEquipo_T4R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Nombre del Equipo"
            ></textarea>

            <input
                name="nombredelEquipo_T4R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="nombredelEquipo_T4R${i}RO"
                data-campo="nombredelEquipo_T4R${i}"
            >
        </td>







        <td class="cantidadCol">

            <input
                type="number"
                id="cantidad_T4R${i}"
                name="cantidad_T4R${i}"
                class="input_tabla"
                aria-label="Cantidad"
            >

            <input
                name="cantidad_T4R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="cantidad_T4R${i}RO"
                data-campo="cantidad_T4R${i}"
            >

        </td>






        <td>
            <textarea
                name="especificaciones_T4R${i}"
                class="auto-expand input_tabla expandible"
                rows="1"
                style="resize:none;"
                aria-label="Especificaciones"
            ></textarea>

            <input
                name="especificaciones_T4R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="especificaciones_T4R${i}RO"
                data-campo="especificaciones_T4R${i}"
            >
        </td>







        <td>
            <textarea
                id="justificacion_T4R${i}"
                name="justificacion_T4R${i}"
                class="auto-expand input_tabla expandible"
                rows="1"
                style="resize:none;"
                aria-label="Justificación"
            ></textarea>

            <input
                name="justificacion_T4R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="justificacion_T4R${i}RO"
                data-campo="justificacion_T4R${i}"
            >
        </td>








        <td>
            <div class="precio-wrapper">

                <span class="peso">$</span>

                <input
                    type="text"
                    name="precio_T4R${i}"
                    class="input_tabla precio unitario"
                    data-cant="cantidad_T4R${i}"
                    data-precio="precioTotal_T4R${i}"
                    oninput="formatearMiles(this)"
                    inputmode="decimal"
                    aria-label="Precio"
                >

            </div>

            <input
                name="precio_T4R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="precio_T4R${i}RO"
                data-campo="precio_T4R${i}"
            >
        </td>
        
        




        <td>
            <div class="precio-wrapper">

                <span class="peso">$</span>

                <input
                    type="text"
                    readonly
                    id="precioTotal_T4R${i}"
                    name="precioTotal_T4R${i}"
                    class="input_tabla precio"
                    oninput="formatearMiles(this)"
                    inputmode="decimal"
                    aria-label="Precio Total mas IVA"
                >

            </div>
            
        </td>
        







        <td>
            <textarea
                name="nombreCotizacion_T4R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Nombre del archivo donde esta la Cotizacion del Equipo"
            ></textarea>

            <input
                name="nombreCotizacion_T4R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="nombreCotizacion_T4R${i}RO"
                data-campo="nombreCotizacion_T4R${i}"
            >
        </td>

        <td class="paso">
            <textarea
                name="urlCotizacionAdquisicion_T4R${i}"
                class="auto-expand input_tabla"
                rows="1"
                style="resize:none;"
                aria-label="Url de las Cotizaciones"
            ></textarea>

            <input
                name="urlCotizacionAdquisicion_T4R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="urlCotizacionAdquisicion_T4R${i}RO"
                data-campo="urlCotizacionAdquisicion_T4R${i}"
            >
        </td>

        <td>
            <div class="precio-wrapper">

                <span class="peso">$</span>

                <input
                    type="text"
                    name="precio2_T4R${i}"
                    class="input_tabla precio unitario"
                    data-cant="cantidad_T4R${i}"
                    data-precio="precioTotal2_T4R${i}"
                    oninput="formatearMiles(this)"
                    inputmode="decimal"
                    aria-label="Precio 2"
                >

            </div>

            <input
                name="precio2_T4R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="precio2_T4R${i}RO"
                data-campo="precio2_T4R${i}"
            >
        </td>

        

        <td>
            <div class="precio-wrapper">

                <span class="peso">$</span>

                <input
                    type="text"
                    readonly
                    id="precioTotal2_T4R${i}"
                    name="precioTotal2_T4R${i}"
                    class="input_tabla precio"
                    oninput="formatearMiles(this)"
                    inputmode="decimal"
                    aria-label="Precio Total mas IVA"
                >

            </div>

        </td>





        <td>
            <textarea
                name="nombreCotizacion2_T4R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Nombre del archivo donde esta la Cotizacion del Equipo"
            ></textarea>

            <input
                name="nombreCotizacion2_T4R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="nombreCotizacion2_T4R${i}RO"
                data-campo="nombreCotizacion2_T4R${i}"
            >
        </td>

        <td class="paso">
            <textarea
                name="urlCotizacionAdquisicion2_T4R${i}"
                class="auto-expand input_tabla"
                rows="1"
                style="resize:none;"
                aria-label="Url de las Cotizaciones"
            ></textarea>

            <input
                name="urlCotizacionAdquisicion2_T4R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="urlCotizacionAdquisicion2_T4R${i}RO"
                data-campo="urlCotizacionAdquisicion2_T4R${i}"
            >
        </td>
    `;

    tbody.appendChild(fila);

    activarAutoExpand(fila);
}


function agregarFila5() {

    const tbody = document.getElementById("tablaBody5");
    const i = obtenerNumeroFila5();

    const fila = document.createElement("tr");

    fila.innerHTML = `

        <td>
            ${i}
        </td>



        


<td>
            <textarea
                name="ProgramaAcademico_T5R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Programa Académico"
                readonly
                data-relleno="ProgramaAcademico_T4R${i}"
                >
            </textarea>

            </td>




        <td>
            <textarea
                name="Espacio_T5R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Espacio"
                data-relleno="Espacio_T4R${i}"
                readonly
                >
            </textarea>

        </td>

        <td>
            <textarea
                name="nombredelEquipo_T5R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Nombre del Equipo"
                data-relleno="nombredelEquipo_T4R${i}"
                readonly
                >
            </textarea>
        </td>


        <td>
            <textarea
                name="especificaciones_T5R${i}"
                class="auto-expand input_tabla"
                rows="1"
                style="resize:none;"
                aria-label="Especificaciones"
            ></textarea>

            <input
                name="especificaciones_T5R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="especificaciones_T5R${i}RO"
                data-campo="especificaciones_T5R${i}"
            >
        </td>

        <td class="cantidadCol">

            <input
                type="number"
                name="cantidadMal_estado_T5R${i}"
                class="input_tabla"
                aria-label="Cantidad en mal estado"
            >

            <input
                name="cantidadMal_estado_T5R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="cantidadMal_estado_T5R${i}RO"
                data-campo="cantidadMal_estado_T5R${i}"
            >

        </td>

        <td class="cantidadCol">

            <input
                type="number"
                name="cantidadBuen_estado_T5R${i}"
                class="input_tabla"
                aria-label="Cantidad en buen estado"
            >

            <input
                name="cantidadBuen_estado_T5R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="cantidadBuen_estado_T5R${i}RO"
                data-campo="cantidadBuen_estado_T5R${i}"
            >

        </td>

        <td class="cantidadCol">

            <input
                type="number"
                name="cantidadRegular_estado_T5R${i}"
                class="input_tabla"
                aria-label="Cantidad en estado Regular"
            >

            <input
                name="cantidadRegular_estado_T5R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="cantidadRegular_estado_T5R${i}RO"
                data-campo="cantidadRegular_estado_T5R${i}"
            >

        </td>
    `;

    tbody.appendChild(fila);

    activarAutoExpand(fila);
}







//------------------------------------Construccion de tabla--------------------------


for (let i = 1; i <= 10; i++) {

  agregarFila();
  agregarFila2();
  agregarFila3();
  agregarFilaC();
  agregarFila4();
  agregarFila5();
}





//----------------------------------------Archivos y su mecanismo-----------------------------------------------------



document.addEventListener("change", (e) => {

  if (!e.target.matches(".archivoInput")) return;

  const input = e.target;
  const contenedor = input.closest(".contenedorArchivo");

  const nombre = contenedor.querySelector(".nombreArchivo");

  if (input.files.length > 0) {

    nombre.textContent = input.files[0].name;

    input.style.display = "none";

  }

});

document.addEventListener("click", (e) => {

  if (!e.target.matches(".borrarArchivo")) return;

  const contenedor = e.target.closest(".contenedorArchivo");

  const input = contenedor.querySelector(".archivoInput");

  const nombre = contenedor.querySelector(".nombreArchivo");

  input.value = "";

  input.style.display = "block";

  nombre.textContent = "";

});
















//---------------------------Definicion de variables para selects de D Generales-------------------------------

//const secretariaInput = document.getElementById("secretaria");
//const direccionInput = document.getElementById("direccion");
//const nivelInput = document.getElementById("nivel");



const tipoDeSolicitudInput = document.getElementById("tipoDeSolicitud");

const dependenciaInput = document.getElementById("dependencia");
 const dependenciaEncabezado = document.getElementById("dependenciaSolicitud");



function actualizarEncabezado() {

    const dependencia =
        dependenciaInput.options[dependenciaInput.selectedIndex]?.value || "";

    const tipoSolicitud =
        tipoDeSolicitudInput.options[tipoDeSolicitudInput.selectedIndex]?.value || "";

    dependenciaSolicitud.textContent =
        dependencia + " - " + tipoSolicitud;
}



dependenciaInput.addEventListener("change", actualizarEncabezado);



tipoDeSolicitudInput.addEventListener("change", actualizarEncabezado);











//-----------------------------------Agregar fila cuando se agrega un equipo---------------------------------------
document.getElementById("tablaBody").addEventListener("change", e => {
  if (!e.target.name?.startsWith("Programa_T1R")) return;

  const filas = document.querySelectorAll("#tablaBody tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFila();
  }
});
document.getElementById("tablaBody2").addEventListener("change", e => {
  if (!e.target.name?.startsWith("Edificio_T2R")) return;

  const filas = document.querySelectorAll("#tablaBody2 tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFila2();
  }
});
document.getElementById("tablaBody3").addEventListener("change", e => {
  if (!e.target.name?.startsWith("Edificio_T3R")) return;

  const filas = document.querySelectorAll("#tablaBody3 tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFila3();
  }
});



document.getElementById("tablaCotizaciones").addEventListener("change", e => {
  if (!e.target.name?.startsWith("CotizacionAdquisicionG1_TCR")) return;

  const filas = document.querySelectorAll("#tablaCotizaciones tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFilaC();
  }
});





document.getElementById("tablaBody4").addEventListener("change", e => {
  if (!e.target.name?.startsWith("nombredelEquipo_T4R")) return;

  const filas = document.querySelectorAll("#tablaBody4 tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFila4();
  }
});



document.getElementById("tablaBody5").addEventListener("change", e => {
  if (!e.target.name?.startsWith("nombredelEquipo_T5R")) return;

  const filas = document.querySelectorAll("#tablaBody5 tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFila5();
  }
});
/*
document.getElementById("tablaBody6").addEventListener("change", e => {
  if (!e.target.name?.startsWith("nombredelEquipo_T6R")) return;

  const filas = document.querySelectorAll("#tablaBody6 tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFila6();
  }
});
*/


//Recuerda agregar esta misma funcion para cada tabla en caso de que las 4 tablas queden en la misma pagina cosa que aun no decido
//----------------------------------------rellenado automatico de Nivel y dependencia----------------------------------------------
//nivelInput.addEventListener("change", generarNivel);
//dependenciaInput.addEventListener("change", generarDependencia);














/*
function generarNivel() {
  const select = nivelInput;
  const texto = select.options[select.selectedIndex].text;

  const celdasNivel = document.querySelectorAll("[id^='nivelR']");
  celdasNivel.forEach(celda => {
    celda.textContent = texto;
  });
}
*/

function generarDependencia() {
  const valor = dependenciaInput.value.trim();
  const celdasDep = document.querySelectorAll("[id^='dependenciaR']");
  celdasDep.forEach(celda => celda.textContent = valor);
}

// Ajuste automatico de celdas con mucho texto

const textareas = document.querySelectorAll(".auto-expand");

function autoResize(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

textareas.forEach(textarea => {
  textarea.addEventListener("input", () => autoResize(textarea));

  // Ajusta la altura inicial si ya tiene texto
  autoResize(textarea);
});

/*
const opciones = ["Unidad Politécnica de Gestión con Perspectiva de Género (UPGPG)",
                  "Defensoría de los Derechos Politécnicos",
                  "Secretaría General",
                  //Direcion General
                  "Dirección General",
                  "Coordinación Politécnica para la Sustentabilidad",
                  //Abogado General
                  "Oficina del Abogado General",
                  "Dirección de Asuntos Jurídicos",
                  "Dirección de Convenios y Trámite Registral",  
                  "Dirección de Legislación, Consulta y Transparencia",    
                  //Presidencia del decanato 
                  "Presidencia del Decanato",

                  //Secretaria Academica
                 'Centro de Estudios Tecnológicos (CET 1)"Walter Cross Buchanan"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 1) "Gonzalo Vázquez Vela"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 2) "Miguel Bernard"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 3) "Estanislao Ramírez Ruiz"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 4) "Lázaro Cárdenas"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 5) "Benito Juárez"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 6) "Miguel Othón De Mendizábal"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 7) "Cuauhtémoc"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 8) "Narciso Bassols"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 9) "Juan De Dios Bátiz"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 10) "Carlos Vallejo Márquez"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 11) "Wilfrido Massieu"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 12) "José María Morelos"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 13) "Ricardo Flores Magón"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 14) "Luis Enrique Erro"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 15) "Diódoro Antúnez Echegaray"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 16) "Hidalgo"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 17) "León, Guanajuato"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 18) "Zacatecas"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 19) "Leona Vicario"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 20) "Natalia Serdán Alatriste"',
                 "Dirección de Educación Media Superior",
                 "Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco",
                 "Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Culhuacán",
                 "Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Azcapotzalco",
                 "Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Ticomán",
                 "Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Zacatenco",
                 "Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Tecamachalco", 
                 "Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Ticomán",
                 "Escuela Superior de Ingeniería Textil (ESIT)",
                 "Escuela Superior de Ingeniería Química E Industrias Extractivas (ESIQIE)",
                 "Escuela Superior de Física y Matemáticas (ESFM)",
                 "Escuela Superior de Cómputo (ESCOM)",
                 "Escuela Nacional de Ciencias Biológicas (ENCB)",
                 "Escuela Superior de Medicina (ESM)",
                 "Escuela Nacional de Medicina y Homeopatía (ENMH)",
                 "Escuela Superior de Enfermería y Obstetricia (ESEO)",
                 "Centro Interdisciplinario de Ciencias de la Salud (CICS)Unidad Milpa Alta",
                 "Centro Interdisciplinario de Ciencias de la Salud (CICS) Unidad Santo Tomás",
                 "Escuela Superior de Comercio y Administración (ESCA) Unidad Santo Tomás",
                 "Escuela Superior de Comercio y Administración (ESCA) Unidad Tepepan",
                 "Escuela Superior de Economía (ESE)",
                 "Escuela Superior de Turismo (EST)",
                 "Escuela Nacional de Biblioteconomía y Archivonomía (ENBA)",
                 "Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas (UPIITA)",
                 "Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA)",
                 "Unidad Profesional Interdisciplinaria de Biotecnología (UPIBI)",
                 "Unidad Profesional Interdisciplinaria de Ingeniería Campus Hidalgo (UPIIH)",
                 "Unidad Profesional Interdisciplinaria de Ingeniería, Campus Guanajuato (UPIIG)",
                 "Unidad Profesional Interdisciplinaria de Ingeniería, Campus Zacatecas (UPIIZ)",
                 "Unidad Profesional Interdisciplinaria de Energía y Movilidad (UPIEM)",
                 "Unidad Profesional Interdisciplinaria de Ingeniería Campus Palenque (UPIIP)",
                 "Unidad Profesional Interdisciplinaria de Ingeniería Campus Coahuila (UPIIC)",
                 "Unidad Profesional Interdisciplinaria de Ingeniería Campus Tlaxcala (UPIIT)",
                 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)',
                 "Dirección de Educación Superior",
                 "Dirección de Educación Virtual",
                 "Dirección de Formación e Innovación Educativa",
                 "Dirección de Formación en Lenguas Extranjeras",
                 "Centro de Lenguas Extranjeras (CENLEX), Unidad Zacatenco",
                 "Centro de Lenguas Extranjeras (CENLEX), Unidad Santo Tomás",           
                 "Secretaría Académica",
                     
                                  
                 //Secretaria Administrativa
                 "Secretaría de Administración",
                 "Dirección de Capital Humano",
                 "Dirección de Programación y Presupuesto",
                 "Dirección de Recursos Financieros",
                 "Dirección de Recursos Materiales e Infraestructua",
                 "Dirección de Servicios Generales",
                 "Coordinación de Centros de Desarrollo Infantil",
                 
                 //Secretaria de Inovacion e Integracion Social
                 
                 "Centro de Vinculación y Desarrollo Regional (CVDR),Unidad Cajeme -Sonora",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Campeche",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Cancún",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Culiacán",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Durango",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Los Mochis",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Mazatlán",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Morelia",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Oaxaca",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Tampico",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Tijuana",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Tlaxcala", 
                 "Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Cuidad Juárez, Chihuahua",
                 "Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Papantla, Veracruz",
                 "Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla",
                 "Dirección de Vinculación y Desarrollo Regional",
                 "Secretaría de Innovación e Integración Social",
                 "Dirección de Egresados y Servicio Social",
                 "Dirección de Relaciones Internacionales",
                 "Dirección de Servicios Empresariales y Transferencia Tecnológica",
                 "Dirección de Incubación de Empresas Tecnológicas",
                 "Dirección de Prospectiva e Inteligencia Tecnológica Tecnópoli",
                 




                 //Secretaria de Investigacion y Posgrado
                 "Dirección de Investigación",
                 "Secretaría de Investigación y Posgrado",
                 "Dirección de Posgrado",
                 "Dirección de Difusión de Ciencia y Tecnología",
                 "Centro de Desarrollo Aeroespacial (CDA)",
                 "Centro de Nanociencias y Micro y Nanotecnologías (CNMN)",
                 "Centro Interdisciplinario de Ciencias Marinas (CICIMAR)",
                 "Centro Interdisciplinario de Investigación y Estudios Sobre Medio Ambiente Y Desarrollo (CIIEMAD)",
                 "Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Durango",
                 "Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Sinaloa",
                 "Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Michoacán",
                 "Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Oaxaca",
                 "Centro de Desarrollo de Productos Bióticos (CEPROBI)",
                 "Centro de Biotecnología Genómica (CBG)",
                 "Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Legaría",
                 "Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Altamira",
                 "Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Querétaro",
                 "Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada  (CICATA), Unidad Morelos",
                 "Centro de Investigación en Computación (CIC)",
                 "Centro de Investigación y Desarrollo de Tecnología Digital (CITEDI)",
                 "Centro de Investigaciones Económicas, Administrativas y Sociales (CIECAS)",
                 "Centro de Investigación en Biotecnología Aplicada, IPN -Tlaxcala (CIBA)",
                 "Centro de Innovación y Desarrollo Tecnológico En Cómputo (CIDETEC)",
                 "Centro de Investigación e Innovación Tecnológica (CIITEC)",
                 "Centro Mexicano para la Producción Más Limpia (CMP+L)",




                 "Secretaría de Servicios Educativos",
                 "Dirección de Administración Escolar",
                 "Dirección de Difusión Cultural",
                 "Dirección de Actividades Deportivas",
                 "Dirección de Bibliotecas y Publicaciones",
                 "Dirección de Apoyos a Estudiantes",


                 //Coordinacion General de Planeacion e Informacion Institucional
                 
                 "Coordinación General de Planeación e Información Institucional",
                 "Dirección de Planeación y Organización",
                 "Dirección de Información Institucional",



                 // Coordinación de Imagen Institucional
                 
                 "Coordinación de Imagen Institucional",
                 
                 
                 //Centro Nacional de Calculo
                 
                 "Centro Nacional de Cálculo (CENAC)",
                 "Dirección de cómputo y comunicaciones",                 
                 "Dirección de sistemas informáticos",
                 
                   
                 //Estacion de Radio
                 
                 "Estación de Radiodifusión Radio IPN XHIPN-FM 95.7 MHZ.",
                 
                 "Patronato de Obras e Instalaciones  (POI)",
                 "Comisión de Operación y Fomento de Actividades Académicas (COFAA)"
                 ];






const folios =new Map( [
              [ "Unidad Politécnica de Gestión con Perspectiva de Género (UPGPG)"                                            ,"FDN-UPGPG-001"                               ],                                                                                                     
              [ "Defensoría de los Derechos Politécnicos"                                                                    ,"FDN-DDP-002"                                 ],                                                                                                     
              [ "Secretaría General"                                                                                         ,"FDN-SG-003"                                  ],                                                                                                                                                                                                           
              [ "Dirección General"                                                                                          ,"FDN-DG-004"                                  ],                                                                                                     
              [ "Coordinación Politécnica para la Sustentabilidad"                                                           ,"FDN-CPS-005"                                 ],                                                                                                     
              [ "Oficina del Abogado General"                                                                                ,"FDN-OAG-006"                                 ],                                                                                                     
              [ "Dirección de Asuntos Jurídicos"                                                                             ,"FDN-DAJ-007"                                 ],                                                                                                                                                                                  
              [ "Dirección de Convenios y Trámite Registral"                                                                 ,"FDN-DCT-008"                                 ],                                                                                                       
              [ "Dirección de Legislación, Consulta y Transparencia"                                                         ,"FDN-LCT-009"                                 ],                                                                                                 
              [ "Presidencia del Decanato"                                                                                   ,"FDN-PD-010"                                  ],                                                                                                 
              [ 'Centro de Estudios Tecnológicos (CET 1)"Walter Cross Buchanan"'                                             ,"FDN-CET1-011"                                ],                                                                                                 
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 1) "Gonzalo Vázquez Vela"'                             ,"FDN-CECyT1-012"                              ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 2) "Miguel Bernard"'                                   ,"FDN-CECyT2-013"                              ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 3) "Estanislao Ramírez Ruiz"'                          ,"FDN-CECyT3-014"                              ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 4) "Lázaro Cárdenas"'                                  ,"FDN-CECyT4-015"                              ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 5) "Benito Juárez"'                                    ,"FDN-CECyT5-016"                              ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 6) "Miguel Othón De Mendizábal"'                       ,"FDN-CECyT6-017"                              ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 7) "Cuauhtémoc"'                                       ,"FDN-CECyT7-018"                              ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 8) "Narciso Bassols"'                                  ,"FDN-CECyT8-019"                              ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 9) "Juan De Dios Bátiz"'                               ,"FDN-CECyT9-020"                              ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 10) "Carlos Vallejo Márquez"'                          ,"FDN-CECyT10-021"                             ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 11) "Wilfrido Massieu"'                                ,"FDN-CECyT11-022"                             ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 12) "José María Morelos"'                              ,"FDN-CECyT12-023"                             ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 13) "Ricardo Flores Magón"'                            ,"FDN-CECyT13-024"                             ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 14) "Luis Enrique Erro"'                               ,"FDN-CECyT14-025"                             ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 15) "Diódoro Antúnez Echegaray"'                       ,"FDN-CECyT15-026"                             ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 16) "Hidalgo"'                                         ,"FDN-CECyT16-027"                             ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 17) "León, Guanajuato"'                                ,"FDN-CECyT17-028"                             ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 18) "Zacatecas"'                                       ,"FDN-CECyT18-029"                             ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 19) "Leona Vicario"'                                   ,"FDN-CECyT19-030"                             ],
              [ 'Centro de Estudios Científicos y Tecnológicos (CECYT 20) "Natalia Serdán Alatriste"'                        ,"FDN-CECyT20-031"                             ],
              [ "Dirección de Educación Media Superior"                                                                      ,"FDN-DIEMS-032"                               ],
              [ "Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco"                              ,"FDN-ESIME-Zacatenco-033"                     ],
              [ "Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Culhuacán"                              ,"FDN-ESIME-Culhuacán-034"                     ],
              [ "Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Azcapotzalco"                           ,"FDN-ESIME-Azcapotzalco-035"                  ],
              [ "Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Ticomán"                                ,"FDN-ESIME-Ticomán-036"                       ],
              [ "Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Zacatenco"                                     ,"FDN-ESIA-Zacatenco-037"                      ],
              [ "Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Tecamachalco"                                  ,"FDN-ESIA-Tecamachalco-038"                   ],
              [ "Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Ticomán"                                       ,"FDN-ESIA-Ticoman-039"                        ],
              [ "Escuela Superior de Ingeniería Textil (ESIT)"                                                               ,"FDN-ESIT-040"                                ],
              [ "Escuela Superior de Ingeniería Química E Industrias Extractivas (ESIQIE)"                                   ,"FDN-ESIQIE-041"                              ],
              [ "Escuela Superior de Física y Matemáticas (ESFM)"                                                            ,"FDN-ESFM-042"                                ],
              [ "Escuela Superior de Cómputo (ESCOM)"                                                                        ,"FDN-ESCOM-043"                               ],
              [ "Escuela Nacional de Ciencias Biológicas (ENCB)"                                                             ,"FDN-ENCB-044"                                ],
              [ "Escuela Superior de Medicina (ESM)"                                                                         ,"FDN-ESM-045"                                 ],
              [  "Escuela Nacional de Medicina y Homeopatía (ENMH)"                                                          ,"FDN-ENMH-046"                                ],
              [  "Escuela Superior de Enfermería y Obstetricia (ESEO)","Escuela Superior de Enfermería y Obstetricia (ESEO)" ,"FDN-ESEO-047"                                ],
              [  "Centro Interdisciplinario de Ciencias de la Salud (CICS)Unidad Milpa Alta"                                 ,"FDN-CICS-MilpaAlta-048"                      ],
              [  "Centro Interdisciplinario de Ciencias de la Salud (CICS) Unidad Santo Tomás"                               ,"FDN-CICS-SantoTomas-049"                     ],
              [  "Escuela Superior de Comercio y Administración (ESCA) Unidad Santo Tomás"                                   ,"FDN-ESCA-SantoTomas-050"                     ],
              [  "Escuela Superior de Comercio y Administración (ESCA) Unidad Tepepan"                                       ,"FDN-ESCA-Tepepan-051"                        ],
              [  "Escuela Superior de Economía (ESE)"                                                                        ,"FDN-ESE-052"                                 ],
              [  "Escuela Superior de Turismo (EST)"                                                                         ,"FDN-EST-053"                                 ],
              [  "Escuela Nacional de Biblioteconomía y Archivonomía (ENBA)"                                                 ,"FDN-ENBA-054"                                ],
              [  "Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas (UPIITA)"                      ,"FDN-UPIITA-055"                              ],
              [  "Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA)"       ,"FDN-UPIICSA-056"                             ],
              [  "Unidad Profesional Interdisciplinaria de Biotecnología (UPIBI)"                                            ,"FDN-UPIBI-057"                               ],
              [  "Unidad Profesional Interdisciplinaria de Ingeniería Campus Hidalgo (UPIIH)"                                ,"FDN-UPIIH-Hidalgo-058"                       ],
              [  "Unidad Profesional Interdisciplinaria de Ingeniería, Campus Guanajuato (UPIIG)"                            ,"FDN-UPIIG-Guanajuato-59"                     ]      ,
              [  "Unidad Profesional Interdisciplinaria de Ingeniería, Campus Zacatecas (UPIIZ)"                             ,"FDN-UPIIZ-Zacatecas-60"                      ],
              [  "Unidad Profesional Interdisciplinaria de Energía y Movilidad (UPIEM)"                                      ,"FDN-UPIEM-061"                               ],
              [  "Unidad Profesional Interdisciplinaria de Ingeniería Campus Palenque (UPIIP)"                               ,"FDN-UPIIP-Palenque-062"                      ],
              [  "Unidad Profesional Interdisciplinaria de Ingeniería Campus Coahuila (UPIIC)"                               ,"FDN-UPIIC-Coahuila-063"                      ],
              [  "Unidad Profesional Interdisciplinaria de Ingeniería Campus Tlaxcala (UPIIT)"                               ,"FDN-UPIIT-Tlaxcala-064"                      ],
              [  'Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)'               ,'FDN-UPIIAP-Puebla-065'                       ],
              [  "Dirección de Educación Superior"                                                                           ,"FDN-DES-066"                                 ],
              [  "Dirección de Educación Virtual"                                                                            ,"FDN-DEV-067"                                 ],
              [  "Dirección de Formación e Innovación Educativa"                                                             ,"FDN-DFIE-068"                                ],
              [  "Dirección de Formación en Lenguas Extranjeras"                                                             ,"FDN-DFLE-069"                                ],
              [  "Centro de Lenguas Extranjeras (CENLEX), Unidad Zacatenco"                                                  ,"FDN-CENLEX-Zacatenco-70"                     ] ,
              [  "Centro de Lenguas Extranjeras (CENLEX), Unidad Santo Tomás"                                                ,"FDN-CENLEX-SantoTomas-071"                   ]  ,
              [  "Secretaría Académica "                                                                                     ,"FDN-SA-072"                                  ]  ,
              [  "Secretaría de Administración "                                                                             ,"FDN-SAD-073"                                 ]  ,
              [  "Dirección de Capital Humano "                                                                              ,"FDN-DCH-074"                                 ]  ,
              [  "Dirección de Programación y Presupuesto"                                                                   ,"FDN-DPP-075"                                 ],                     
              [  "Dirección de Recursos Financieros"                                                                         ,"FDN-DRF-076"                                 ],                     
              [  "Dirección de Recursos Materiales e Infraestructua"                                                         ,"FDN-DRMI-077"                                ],                     
              [  "Dirección de Servicios Generales"                                                                          ,"FDN-DSG-078"                                 ],                     
              [  "Coordinación de Centros de Desarrollo Infantil"                                                            ,"FDN-CCDI-079"                                ],                     
              [  "Centro de Vinculación y Desarrollo Regional (CVDR),Unidad Cajeme -Sonora"                                  ,"FDN-CVDR-Cajeme-080"                         ],
              [  "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Campeche"                                       ,"FDN-CVDR-Campeche-81"                        ],
              [  "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Cancún"                                         ,"FDN-CVDR-Cancun-082"                         ],
              [  "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Culiacán"                                       ,"FDN-CVDR-Culiacan-083"                       ],
              [  "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Durango"                                        ,"FDN-CVDR-Durango-084"                        ],
              [  "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Los Mochis"                                     ,"FDN-CVDR-LosMochis-085"                      ],
              [  "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Mazatlán"                                       ,"FDN-CVDR-Mazatlan-086"                       ],
              [  "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Morelia"                                        ,"FDN-CVDR-Morelia-087"                        ],
              [  "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Oaxaca"                                         ,"FDN-CVDR-Oaxaca-088"                         ],
              [  "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Tampico"                                        ,"FDN-CVDR-Tampico-089"                        ],
              [  "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Tijuana"                                        ,"FDN-CVDR-Tijuana-090"                        ],
              [  "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Tlaxcala"                                       ,"FDN-CVDR-Tlaxcala-091"                       ],
              [  "Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Cuidad Juárez, Chihuahua"      ,"FDN-CIITA-Ciudad Juarez-092"                 ],
              [  "Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Papantla, Veracruz"            ,"FDN-CIITA-Papantla-093"                      ],
              [  "Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla"                        ,"FDN-CIITA-Puebla-094"                        ],
              [  "Dirección de Vinculación y Desarrollo Regional"                                                            ,"FDN-DVDR-095"                                ],
              [  "Secretaría de Innovación e Integración Social"                                                             ,"FDN-SIIS-096"                                ],
              [  "Dirección de Egresados y Servicio Social"                                                                  ,"FDN-DESS-097"                                ],
              [  "Dirección de Relaciones Internacionales"                                                                   ,"FDN-DRI-098"                                 ],
              [  "Dirección de Servicios Empresariales y Transferencia Tecnológica"                                          ,"FDN-DSETT-099"                               ],
              [  "Dirección de Incubación de Empresas Tecnológicas"                                                          ,"FDN-DIET-100"                                ],
              [  "Dirección de Prospectiva e Inteligencia Tecnológica Tecnópoli"                                             ,"FDN-DPIT-101 - Tecnópoli"                    ],
              [  "Dirección de Investigación"                                                                                ,"FDN-DI-102"                                  ],
              [  "Secretaría de Investigación y Posgrado"                                                                    ,"FDN-SIP-103"                                 ],
              [  "Dirección de Posgrado"                                                                                     ,"FDN-DP-104"                                  ],
              [  "Dirección de Difusión de Ciencia y Tecnología"                                                             ,"FDN-DDCyT-105"                               ],
              [  "Centro de Desarrollo Aeroespacial (CDA)"                                                                   ,"FDN-CDA-106"                                 ],
              [  "Centro de Nanociencias y Micro y Nanotecnologías (CNMN)"                                                   ,"FDN-CNMN-107"                                ],
              [  "Centro Interdisciplinario de Ciencias Marinas (CICIMAR)"                                                   ,"FDN-CICIMAR-108"                             ],
              [  "Centro Interdisciplinario de Investigación y Estudios Sobre Medio Ambiente Y Desarrollo (CIIEMAD)"         ,"FDN-CIIEMAD-109"                             ],
              [  "Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Durango"  ,"FDN-CIIDIR-Durango-110"                      ],
              [  "Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Sinaloa"  ,"FDN-CIIDIR-Sinaloa-111"                      ],
              [  "Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Michoacán","FDN-CIIDIR-Michoacán-112"                    ],
              [  "Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Oaxaca"   ,"FDN-CIIDIR-Oaxaca-113"                       ], 
              [  "Centro de Desarrollo de Productos Bióticos (CEPROBI)"                                                      ,"FDN-CEPROBI-114"                             ],
              [  "Centro de Biotecnología Genómica (CBG)"                                                                    ,"FDN-CBG-115"                                 ],
              [  "Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Legaría"                ,"FDN-CICATA-Legaria-116"                      ],
              [  "Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Altamira"               ,"FDN-CICATA-Altamira-117"                     ],
              [  "Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Querétaro"              ,"FDN-CICATA-Querétaro-118"                    ],
              [  "Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada  (CICATA), Unidad Morelos"               ,"FDN-CICATA-Morelos-119"                      ],
              [  "Centro de Investigación en Computación (CIC)"                                                              ,"FDN-CIC-120"                                 ],
              [  "Centro de Investigación y Desarrollo de Tecnología Digital (CITEDI)"                                       ,"FDN-CITEDI-121"                              ],
              [  "Centro de Investigaciones Económicas, Administrativas y Sociales (CIECAS)"                                 ,"FDN-CIECAS-122"                              ],
              [  "Centro de Investigación en Biotecnología Aplicada, IPN -Tlaxcala (CIBA)"                                   ,"FDN-CIBA-Tlaxcala-123"                       ],
              [  "Centro de Innovación y Desarrollo Tecnológico En Cómputo (CIDETEC)"                                        ,"FDN-CIDETEC-124"                             ],
              [  "Centro de Investigación e Innovación Tecnológica (CIITEC)"                                                 ,"FDN-CIITEC-125"                              ],
              [  "Centro Mexicano para la Producción Más Limpia (CMP+L)"                                                     ,"FDN-CMP+L-126"                               ],
              [  "Secretaría de Servicios Educativos"                                                                        ,"FDN-SSE-127"                                 ],
              [  "Dirección de Administración Escolar"                                                                       ,"FDN-DAE-128"                                 ],
              [  "Dirección de Difusión Cultural"                                                                            ,"FDN-DDC-129"                                 ],
              [  "Dirección de Actividades Deportivas"                                                                       ,"FDN-DAD-130"                                 ],
              [  "Dirección de Bibliotecas y Publicaciones"                                                                  ,"FDN-DBP-131"                                 ],
              [  "Dirección de Apoyos a Estudiantes"                                                                         ,"FDN-DAE-132"                                 ],
              [  "Coordinación General de Planeación e Información Institucional"                                            ,"FDN-CGPII-133"                               ],
              [ "Dirección de Planeación y Organización"                                                                     ,"FDN-DPO-134"                                 ],
              [  "Dirección de Información Institucional"                                                                    ,"FDN-DII-135"                                 ],
              [  "Coordinación de Imagen Institucional"                                                                      ,"FDN-CII-136"                                 ],
              [  "Centro Nacional de Cálculo (CENAC)"                                                                        ,"FDN-CENAC-137"                               ],
              [  "Dirección de cómputo y comunicaciones"                                                                     ,"FDN-DCC-138"                                 ],
              [  "Dirección de sistemas informáticos"                                                                        ,"FDN-DSI-139"                                 ],
              [  "Estación de Radiodifusión Radio IPN XHIPN-FM 95.7 MHZ."                                                    ,"FDN-Radio-IPN-140"                           ],
              [  "Patronato de Obras e Instalaciones  (POI)"                                                                 ,"FDN-POI-141"                                 ],
              [  "Comisión de Operación y Fomento de Actividades Académicas (COFAA)"                                         ,"FDN-COFAA-142"                               ]
              ]);
*/
const mapaFolios = new Map([
[
    "ESIA-Zacatenco-EGC5000-001",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Zacatenco',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT17-BT-002",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECyT 17) "León, Guanajuato"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DAE-BT-004",
    {
        dependencia: 'Dirección de Apoyo a Estudiantes',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIA-Tecamachalco-BT-005",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Tecamachalco',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT10-EGC5000-006",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 10) "Carlos Vallejo Márquez"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CIIEMAD-BT-007",
    {
        dependencia: 'Centro Interdisciplinario de Investigación y Estudios Sobre Medio Ambiente y Desarrollo (CIIEMAD)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CET1-BT-008",
    {
        dependencia: 'Centro de Estudios Tecnológicos (CET 1) "Walter Cross Buchanan"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CET1-EGC5000-009",
    {
        dependencia: 'Centro de Estudios Tecnológicos (CET 1) "Walter Cross Buchanan"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIME-Zacatenco-BT-011",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIME-Zacatenco-EGC5000-012",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIICSA-BT-013",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "EST-EGC5000-014",
    {
        dependencia: 'Escuela Superior de Turismo (EST)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIME-Culhuacan-BT-017",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Culhuacán',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ENBA-EGC5000-018",
    {
        dependencia: 'Escuela Nacional de Biblioteconomía y Archivonomía (ENBA)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICS-SantoTomas-EL-019",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Santo Tomás (CICS UST)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESM-BT-020",
    {
        dependencia: 'Escuela Superior de Medicina (ESM)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESM-EL-021",
    {
        dependencia: 'Escuela Superior de Medicina (ESM)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESFM-BT-022",
    {
        dependencia: 'Escuela Superior de Física y Matemáticas (ESFM)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT12-BT-023",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 12) "José María Morelos"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CIC-BT-024",
    {
        dependencia: 'Centro de Investigación en Computación (CIC)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT10-BT-025",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 10) "Carlos Vallejo Márquez"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIP-Palenque-EGC5000-026",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Palenque (UPIIP)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ENMH-EGC5000-027",
    {
        dependencia: 'Escuela Nacional de Medicina y Homeopatía (ENMH)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT10-EL-028",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 10) "Carlos Vallejo Márquez"',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DES-EGC5000-029",
    {
        dependencia: 'Dirección de Educación Superior',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DFIE-BT-030",
    {
        dependencia: 'Dirección de Formación e Innovación Educativa',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "SA-EGC5000-031",
    {
        dependencia: 'Secretaría Académica',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CENLEX-Zacatenco-EGC5000-032",
    {
        dependencia: 'Centro de Lenguas Extranjeras (CENLEX), Unidad Zacatenco',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DFIE-EGC5000-033",
    {
        dependencia: 'Dirección de Formación e Innovación Educativa',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICS-SantoTomas-BT-034",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Santo Tomás (CICS UST)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESCA-Tepepan-EGC5000-035",
    {
        dependencia: 'Escuela Superior de Comercio y Administración (ESCA), Unidad Tepepan',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESCA-Tepepan-BT-036",
    {
        dependencia: 'Escuela Superior de Comercio y Administración (ESCA), Unidad Tepepan',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIH-Hidalgo-EGC5000-037",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Hidalgo (UPIIH)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESEO-EL-038",
    {
        dependencia: 'Escuela Superior de Enfermería y Obstetricia (ESEO)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CENLEX-Zacatenco-BT-039",
    {
        dependencia: 'Centro de Lenguas Extranjeras (CENLEX), Unidad Zacatenco',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESCA-SantoTomas-BT-040",
    {
        dependencia: 'Escuela Superior de Comercio y Administración (ESCA), Unidad Santo Tomás',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "SA-BT-041",
    {
        dependencia: 'Secretaría Académica',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CNMN-EGC5000-042",
    {
        dependencia: 'Centro de Nanociencia y Micro-nanotecnología (CNMN)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIIP-Palenque-BT-043",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Palenque (UPIIP)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIH-Hidalgo-BT-044",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Hidalgo (UPIIH)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ENBA-BT-045",
    {
        dependencia: 'Escuela Nacional de Biblioteconomía y Archivonomía (ENBA)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIEM-BT-046",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Energía y Movilidad (UPIEM)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CICIMAR-EGC5000-047",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias Marinas (CICIMAR)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DES-BT-048",
    {
        dependencia: 'Dirección de Educación Superior',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIQIE-BT-049",
    {
        dependencia: 'Escuela Superior de Ingeniería Química E Industrias Extractivas (ESIQIE)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIME-Culhuacan-EGC5000-050",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Culhuacán',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIME-Zacatenco-EL-051",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESIME-Ticoman-EGC5000-052",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Ticomán',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIA-Ticoman-EGC5000-053",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Ticomán',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIA-Ticoman-EL-054",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Ticomán',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESIA-Ticoman-BT-055",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Ticomán',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIBI-EGC5000-056",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Biotecnología (UPIBI)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIICSA-EGC5000-057",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT3-BT-058",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 3) "Estanislao Ramírez Ruiz"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT3-EGC5000-059",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 3) "Estanislao Ramírez Ruiz"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICATA-Altamira-BT-060",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Altamira',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CICATA-Altamira-EGC5000-061",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Altamira',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIT-BT-062",
    {
        dependencia: 'Escuela Superior de Ingeniería Textil (ESIT)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CICS-MilpaAlta-EL-063",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Milpa Alta (CICS UMA)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESIT-EL-065",
    {
        dependencia: 'Escuela Superior de Ingeniería Textil (ESIT)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DRMI-EGC5000-066",
    {
        dependencia: 'Dirección de Recursos Materiales E Infraestructura',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DRMI-BT-067",
    {
        dependencia: 'Dirección de Recursos Materiales E Infraestructura',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ENCB-EGC5000-068",
    {
        dependencia: 'Escuela Nacional de Ciencias Biológicas (ENCB)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CITEDI-EGC5000-069",
    {
        dependencia: 'Centro de Investigación y Desarrollo de Tecnología Digital (CITEDI)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DDCyT-EGC5000-070",
    {
        dependencia: 'Dirección de Difusión de Ciencia y Tecnología',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESEO-EGC5000-071",
    {
        dependencia: 'Escuela Superior de Enfermería y Obstetricia (ESEO)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ENCB-BT-072",
    {
        dependencia: 'Escuela Nacional de Ciencias Biológicas (ENCB)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIA-Zacatenco-BT-073",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Zacatenco',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESEO-BT-074",
    {
        dependencia: 'Escuela Superior de Enfermería y Obstetricia (ESEO)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIA-Tecamachalco-EGC5000-075",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Tecamachalco',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICS-MilpaAlta-BT-076",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Milpa Alta (CICS UMA)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIBI-BT-077",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Biotecnología (UPIBI)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT18-EGC5000-078",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 18) "Zacatecas"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DAE-FV-079",
    {
        dependencia: 'Dirección de Apoyo a Estudiantes',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "DAE-EGC5000-080",
    {
        dependencia: 'Dirección de Apoyo a Estudiantes',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CITEDI-BT-081",
    {
        dependencia: 'Centro de Investigación y Desarrollo de Tecnología Digital (CITEDI)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CICATA-Legaria-EGC5000-082",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Legaría',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICATA-Legaria-BT-083",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Legaría',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CIIDIR-Oaxaca-EGC5000-084",
    {
        dependencia: 'Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Oaxaca',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CIIDIR-Oaxaca-BT-085",
    {
        dependencia: 'Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Oaxaca',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIQIE-EGC5000-086",
    {
        dependencia: 'Escuela Superior de Ingeniería Química E Industrias Extractivas (ESIQIE)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIME-Azcapotzalco-EGC5000-088",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Azcapotzalco',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIEM-EGC5000-089",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Energía y Movilidad (UPIEM)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ENCB-EL-090",
    {
        dependencia: 'Escuela Nacional de Ciencias Biológicas (ENCB)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESIQIE-EL-091",
    {
        dependencia: 'Escuela Superior de Ingeniería Química E Industrias Extractivas (ESIQIE)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESE-BT-092",
    {
        dependencia: 'Escuela Superior de Economía (ESE)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIG-Guanajuato-EGC5000-093",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Guanajuato (UPIIG)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIIG-Guanajuato-BT-094",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Guanajuato (UPIIG)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT8-EL-095",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 8) "Narciso Bassols"',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT8-EGC5000-096",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 8) "Narciso Bassols"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT8-BT-097",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 8) "Narciso Bassols"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIT-Tlaxcala-EGC5000-098",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Tlaxcala (UPIIT)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CIIEMAD-EL-099",
    {
        dependencia: 'Centro Interdisciplinario de Investigación y Estudios Sobre Medio Ambiente y Desarrollo (CIIEMAD)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CIIEMAD-EGC5000-100",
    {
        dependencia: 'Centro Interdisciplinario de Investigación y Estudios Sobre Medio Ambiente y Desarrollo (CIIEMAD)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT18-BT-101",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 18) "Zacatecas"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CEPROBI-EL-102",
    {
        dependencia: 'Centro de Desarrollo de Productos Bióticos (CEPROBI)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CEPROBI-EGC5000-103",
    {
        dependencia: 'Centro de Desarrollo de Productos Bióticos (CEPROBI)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CEPROBI-BT-104",
    {
        dependencia: 'Centro de Desarrollo de Productos Bióticos (CEPROBI)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ENMH-EL-105",
    {
        dependencia: 'Escuela Nacional de Medicina y Homeopatía (ENMH)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DII-BT-106",
    {
        dependencia: 'Dirección de Información Institucional',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CET1-FV-107",
    {
        dependencia: 'Centro de Estudios Tecnológicos (CET 1) "Walter Cross Buchanan"',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CET1-EL-108",
    {
        dependencia: 'Centro de Estudios Tecnológicos (CET 1) "Walter Cross Buchanan"',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESCOM-BT-109",
    {
        dependencia: 'Escuela Superior de Cómputo (ESCOM)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CICATA-Morelos-BT-111",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Morelos',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CIIDIR-Michoacan-BT-112",
    {
        dependencia: 'Centro Interdisciplinario de Investigación para El Desarrollo Integral Regional (CIIDIR), Unidad Michoacán',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIME-Azcapotzalco-BT-113",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Azcapotzalco',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DDP-BT-114",
    {
        dependencia: 'Defensoría de los Derechos Politécnicos',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DDP-EGC5000-115",
    {
        dependencia: 'Defensoría de los Derechos Politécnicos',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIME-Zacatenco-FV-116",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "DFLE-BT-117",
    {
        dependencia: 'Dirección de Formación en Lenguas Extranjeras',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DFLE-EGC5000-118",
    {
        dependencia: 'Dirección de Formación en Lenguas Extranjeras',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DG-EGC5000-119",
    {
        dependencia: 'Dirección General',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DG-BT-120",
    {
        dependencia: 'Dirección General',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CIIDIR-Oaxaca-EL-121",
    {
        dependencia: 'Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Oaxaca',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESM-EGC5000-122",
    {
        dependencia: 'Escuela Superior de Medicina (ESM)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICS-MilpaAlta-EGC5000-123",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Milpa Alta (CICS UMA)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIIZ-Zacatecas-BT-124",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Zacatecas (UPIIZ)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIME-Culhuacan-FV-125",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Culhuacán',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "SA-FV-126",
    {
        dependencia: 'Secretaría Académica',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CIITA-Puebla-EGC5000-127",
    {
        dependencia: 'Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CIITA-Puebla-EL-128",
    {
        dependencia: 'Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CIITA-Puebla-BT-129",
    {
        dependencia: 'Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CIITA-Puebla-FV-130",
    {
        dependencia: 'Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "DRI-BT-131",
    {
        dependencia: 'Dirección de Relaciones Internacionales',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ENMH-BT-132",
    {
        dependencia: 'Escuela Nacional de Medicina y Homeopatía (ENMH)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIZ-Zacatecas-EGC5000-134",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Zacatecas (UPIIZ)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DCH-BT-135",
    {
        dependencia: 'Dirección de Capital Humano',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESFM-EGC5000-136",
    {
        dependencia: 'Escuela Superior de Física y Matemáticas (ESFM)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESM-FV-137",
    {
        dependencia: 'Escuela Superior de Medicina (ESM)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CICIMAR-BT-138",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias Marinas (CICIMAR)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESFM-EL-140",
    {
        dependencia: 'Escuela Superior de Física y Matemáticas (ESFM)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT19-EGC5000-142",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 19) "Tecámac"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT19-FV-143",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 19) "Tecámac"',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ESIME-Culhuacan-EL-144",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Culhuacán',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT12-EGC5000-145",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 12) "José María Morelos"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CIC-EGC5000-146",
    {
        dependencia: 'Centro de Investigación en Computación (CIC)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIME-Azcapotzalco-EL-147",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Azcapotzalco',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIBI-EL-148",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Biotecnología (UPIBI)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DIEMS-BT-149",
    {
        dependencia: 'Dirección de Educación Media Superior',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DIEMS-FV-150",
    {
        dependencia: 'Dirección de Educación Media Superior',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CGPII-BT-151",
    {
        dependencia: 'Coordinación General de Planeación E Información Institucional',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CGPII-EGC5000-152",
    {
        dependencia: 'Coordinación General de Planeación E Información Institucional',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CNMN-EL-153",
    {
        dependencia: 'Centro de Nanociencia y Micro-nanotecnología (CNMN)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CII-EGC5000-154",
    {
        dependencia: 'Coordinación de Imagen Institucional',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DES-FV-157",
    {
        dependencia: 'Dirección de Educación Superior',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "UPIEM-EL-158",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Energía y Movilidad (UPIEM)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIIP-Palenque-EL-159",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Palenque (UPIIP)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ENMH-FV-160",
    {
        dependencia: 'Escuela Nacional de Medicina y Homeopatía (ENMH)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ESCA-SantoTomas-EGC5000-161",
    {
        dependencia: 'Escuela Superior de Comercio y Administración (ESCA), Unidad Santo Tomás',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT7-EGC5000-162",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 7) "Cuauhtémoc"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIICSA-FV-163",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "DFIE-EL-164",
    {
        dependencia: 'Dirección de Formación e Innovación Educativa',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT2-BT-165",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 2) "Miguel Bernard"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT2-EGC5000-166",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 2) "Miguel Bernard"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICS-SantoTomas-EGC5000-167",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Santo Tomás (CICS UST)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIIP-Palenque-FV-168",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Palenque (UPIIP)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "SA-EL-169",
    {
        dependencia: 'Secretaría Académica',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DFLE-FV-170",
    {
        dependencia: 'Dirección de Formación en Lenguas Extranjeras',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ESCA-Tepepan-FV-171",
    {
        dependencia: 'Escuela Superior de Comercio y Administración (ESCA), Unidad Tepepan',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CNMN-BT-172",
    {
        dependencia: 'Centro de Nanociencia y Micro-nanotecnología (CNMN)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CNMN-FV-173",
    {
        dependencia: 'Centro de Nanociencia y Micro-nanotecnología (CNMN)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CVDR-Culiacan-BT-174",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Culiacán',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIH-Hidalgo-FV-175",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Hidalgo (UPIIH)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ENBA-EL-176",
    {
        dependencia: 'Escuela Nacional de Biblioteconomía y Archivonomía (ENBA)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIIH-Hidalgo-EL-177",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Hidalgo (UPIIH)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CIIDIR-Durango-EL-178",
    {
        dependencia: 'Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Durango',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CIIDIR-Durango-EGC5000-179",
    {
        dependencia: 'Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Durango',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CVDR-Mazatlan-EGC5000-180",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Mazatlán',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CVDR-Campeche-BT-181",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Campeche',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CVDR-Oaxaca-EGC5000-182",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Oaxaca',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICIMAR-EL-183",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias Marinas (CICIMAR)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESIA-Zacatenco-FV-184",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Zacatenco',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CICATA-Altamira-EL-185",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Altamira',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CICIMAR-FV-186",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias Marinas (CICIMAR)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CVDR-Mazatlan-FV-187",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Mazatlán',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ESIME-Ticoman-EL-188",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Ticomán',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESIME-Ticoman-BT-189",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Ticomán',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CVDR-Oaxaca-BT-190",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Oaxaca',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIA-Ticoman-FV-191",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Ticomán',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ESIME-Ticoman-FV-192",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Ticomán',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CVDR-Oaxaca-FV-196",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Oaxaca',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CICS-MilpaAlta-FV-197",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Milpa Alta (CICS UMA)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CIBA-Tlaxcala-BT-198",
    {
        dependencia: 'Centro de Investigación en Biotecnología Aplicada, IPN-tlaxcala (CIBA)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CIBA-Tlaxcala-EGC5000-199",
    {
        dependencia: 'Centro de Investigación en Biotecnología Aplicada, IPN-tlaxcala (CIBA)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIA-Zacatenco-EL-200",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Zacatenco',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESCA-Tepepan-EL-201",
    {
        dependencia: 'Escuela Superior de Comercio y Administración (ESCA), Unidad Tepepan',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIBI-FV-202",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Biotecnología (UPIBI)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ESE-EGC5000-203",
    {
        dependencia: 'Escuela Superior de Economía (ESE)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DCC-BT-204",
    {
        dependencia: 'Dirección de Cómputo y Comunicaciones',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DCC-EGC5000-205",
    {
        dependencia: 'Dirección de Cómputo y Comunicaciones',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT4-EGC5000-206",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 4) "Lázaro Cárdenas"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "SIP-EGC5000-207",
    {
        dependencia: 'Secretaría de Investigación y Posgrado',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "SIP-BT-208",
    {
        dependencia: 'Secretaría de Investigación y Posgrado',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "SIP-FV-209",
    {
        dependencia: 'Secretaría de Investigación y Posgrado',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CECyT3-FV-210",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 3) "Estanislao Ramírez Ruiz"',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CICATA-Altamira-FV-211",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Altamira',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "UPIEM-FV-212",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Energía y Movilidad (UPIEM)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "UPIIG-Guanajuato-EL-213",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Guanajuato (UPIIG)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CENLEX-Zacatenco-EL-214",
    {
        dependencia: 'Centro de Lenguas Extranjeras (CENLEX), Unidad Zacatenco',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DDCyT-BT-215",
    {
        dependencia: 'Dirección de Difusión de Ciencia y Tecnología',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DVDR-BT-216",
    {
        dependencia: 'Dirección de Vinculación y Desarrollo Regional',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DVDR-EL-217",
    {
        dependencia: 'Dirección de Vinculación y Desarrollo Regional',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DVDR-EGC5000-218",
    {
        dependencia: 'Dirección de Vinculación y Desarrollo Regional',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DVDR-FV-219",
    {
        dependencia: 'Dirección de Vinculación y Desarrollo Regional',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "UPIIZ-Zacatecas-EL-220",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Zacatecas (UPIIZ)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIIZ-Zacatecas-FV-221",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Zacatecas (UPIIZ)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CVDR-Campeche-EGC5000-222",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Campeche',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIT-EGC5000-223",
    {
        dependencia: 'Escuela Superior de Ingeniería Textil (ESIT)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CMP+L-BT-224",
    {
        dependencia: 'Centro Mexicano para la Producción Más Limpia (CMP+L)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CMP+L-EL-225",
    {
        dependencia: 'Centro Mexicano para la Producción Más Limpia (CMP+L)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CICATA-Queretaro-FV-226",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Querétaro',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CICATA-Queretaro-EGC5000-227",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Querétaro',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICATA-Queretaro-BT-228",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Querétaro',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "SG-EGC5000-229",
    {
        dependencia: 'Secretaría General',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CMP+L-EGC5000-230",
    {
        dependencia: 'Centro Mexicano para la Producción Más Limpia (CMP+L)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DESS-BT-231",
    {
        dependencia: 'Dirección de Egresados y Servicio Social',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DESS-EGC5000-232",
    {
        dependencia: 'Dirección de Egresados y Servicio Social',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CITEDI-EL-233",
    {
        dependencia: 'Centro de Investigación y Desarrollo de Tecnología Digital (CITEDI)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CICATA-Morelos-EL-234",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Morelos',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DESS-EL-235",
    {
        dependencia: 'Dirección de Egresados y Servicio Social',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CENLEX-SantoTomas-BT-236",
    {
        dependencia: 'Centro de Lenguas Extranjeras (CENLEX), Unidad Santo Tomás',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DDCyT-FV-237",
    {
        dependencia: 'Dirección de Difusión de Ciencia y Tecnología',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CICATA-Morelos-EGC5000-238",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Morelos',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "SIIS-EGC5000-239",
    {
        dependencia: 'Secretaría de Innovación E Integración Social',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICATA-Queretaro-EL-240",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Querétaro',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DBP-EGC5000-241",
    {
        dependencia: 'Dirección de Bibliotecas y Publicaciones',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DBP-BT-242",
    {
        dependencia: 'Dirección de Bibliotecas y Publicaciones',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CENLEX-SantoTomas-EGC5000-243",
    {
        dependencia: 'Centro de Lenguas Extranjeras (CENLEX), Unidad Santo Tomás',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIA-Tecamachalco-EL-246",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Tecamachalco',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESCOM-EGC5000-247",
    {
        dependencia: 'Escuela Superior de Cómputo (ESCOM)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CBG-EL-248",
    {
        dependencia: 'Centro de Biotecnología Genómica (CBG)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT18-FV-249",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 18) "Zacatecas"',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "DEV-BT-250",
    {
        dependencia: 'Dirección de Educación Virtual',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "EST-BT-252",
    {
        dependencia: 'Escuela Superior de Turismo (EST)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CVDR-Mazatlan-BT-253",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Mazatlán',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT11-BT-254",
    {
        dependencia: 'Centro de Estudios Cientificos y Tecnológicos (CECYT 11) "Wilfrido Massieu"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DPO-BT-255",
    {
        dependencia: 'Dirección de Planeación y Organización',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "SG-BT-256",
    {
        dependencia: 'Secretaría General',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CVDR-Cancun-BT-257",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Cancún',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DESS-FV-258",
    {
        dependencia: 'Dirección de Egresados y Servicio Social',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CECyT4-BT-259",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 4) "Lázaro Cárdenas"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT4-FV-260",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 4) "Lázaro Cárdenas"',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "DDC-EGC5000-261",
    {
        dependencia: 'Dirección de Difusión Cultural',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DDC-BT-262",
    {
        dependencia: 'Dirección de Difusión Cultural',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPGPG-BT-263",
    {
        dependencia: 'Unidad Politécnica de Gestión con Perspectiva de Género (UPGPG)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPGPG-EGC5000-264",
    {
        dependencia: 'Unidad Politécnica de Gestión con Perspectiva de Género (UPGPG)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIIAP-Puebla-BT-265",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIAP-Puebla-EL-267",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIIT-Tlaxcala-EL-268",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Tlaxcala (UPIIT)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIIAP-Puebla-EGC5000-269",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIIAP-Puebla-FV-271",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CECyT20-BT-272",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 20) "Natalia Serdán Alatriste"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT20-EGC5000-273",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 20) "Natalia Serdán Alatriste"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT20-EL-275",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 20) "Natalia Serdán Alatriste"',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT13-EGC5000-276",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 13) "Ricardo Flores Magón"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT18-EL-281",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 18) "Zacatecas"',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIICSA-EL-282",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT19-BT-283",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 19) "Tecámac"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DIET-BT-284",
    {
        dependencia: 'Dirección de Incubación de Empresas Tecnológicas',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT15-BT-285",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 15) "Diódoro Antúnez Echegaray"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CBG-BT-286",
    {
        dependencia: 'Centro de Biotecnología Genómica (CBG)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CVDR-Cancun-EGC5000-287",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Cancún',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
]
]);

const siglasDependencias = new Map([
    ["Dirección de Asuntos Jurídicos", "DAJ"],
    ["Dirección de Programación y Presupuesto", "DPP"],
    ["Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Zacatenco", "ESIA-Zacatenco"],
    ['Centro de Estudios Científicos y Tecnológicos (CECyT 17) "León, Guanajuato"', "CECyT17"],
    ['Centro de Estudios Científicos y Tecnológicos (CECyT 19) "Leona Vicario"', "CECyT19"],
    ["Dirección de Apoyo a Estudiantes", "DAE"],
    ["Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Tecamachalco", "ESIA-Tecamachalco"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 10) "Carlos Vallejo Márquez"', "CECyT10"],
    ["Centro Interdisciplinario de Investigación y Estudios Sobre Medio Ambiente y Desarrollo (CIIEMAD)", "CIIEMAD"],
    ['Centro de Estudios Tecnológicos (CET 1) "Walter Cross Buchanan"', "CET1"],
    ["Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas (UPIITA)", "UPIITA"],
    ["Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco", "ESIME-Zacatenco"],
    ["Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA)", "UPIICSA"],
    ["Escuela Superior de Turismo (EST)", "EST"],
    ["Centro de Investigaciones Económicas, Administrativas y Sociales (CIECAS)", "CIECAS"],
    ["Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Culhuacán", "ESIME-Culhuacan"],
    ["Escuela Nacional de Biblioteconomía y Archivonomía (ENBA)", "ENBA"],
    ["Centro Interdisciplinario de Ciencias de la Salud, Unidad Santo Tomás (CICS UST)", "CICS-SantoTomas"],
    ["Escuela Superior de Medicina (ESM)", "ESM"],
    ["Escuela Superior de Física y Matemáticas (ESFM)", "ESFM"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 12) "José María Morelos"', "CECyT12"],
    ["Centro de Investigación en Computación (CIC)", "CIC"],
    ["Unidad Profesional Interdisciplinaria de Ingeniería, Campus Palenque (UPIIP)", "UPIIP-Palenque"],
    ["Escuela Nacional de Medicina y Homeopatía (ENMH)", "ENMH"],
    ["Dirección de Educación Superior", "DES"],
    ["Dirección de Formación e Innovación Educativa", "DFIE"],
    ["Secretaría Académica", "SA"],
    ["Centro de Lenguas Extranjeras (CENLEX), Unidad Zacatenco", "CENLEX-Zacatenco"],
    ["Escuela Superior de Comercio y Administración (ESCA), Unidad Tepepan", "ESCA-Tepepan"],
    ["Unidad Profesional Interdisciplinaria de Ingeniería, Campus Hidalgo (UPIIH)", "UPIIH-Hidalgo"],
    ["Escuela Superior de Enfermería y Obstetricia (ESEO)", "ESEO"],
    ["Escuela Superior de Comercio y Administración (ESCA), Unidad Santo Tomás", "ESCA-SantoTomas"],
    ["Centro de Nanociencia y Micro-nanotecnología (CNMN)", "CNMN"],
    ["Unidad Profesional Interdisciplinaria de Energía y Movilidad (UPIEM)", "UPIEM"],
    ["Centro Interdisciplinario de Ciencias Marinas (CICIMAR)", "CICIMAR"],
    ["Escuela Superior de Ingeniería Química E Industrias Extractivas (ESIQIE)", "ESIQIE"],
    ["Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Ticomán", "ESIME-Ticoman"],
    ["Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Ticomán", "ESIA-Ticoman"],
    ["Unidad Profesional Interdisciplinaria de Biotecnología (UPIBI)", "UPIBI"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 3) "Estanislao Ramírez Ruiz"', "CECyT3"],
    ["Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Altamira", "CICATA-Altamira"],
    ["Escuela Superior de Ingeniería Textil (ESIT)", "ESIT"],
    ["Centro Interdisciplinario de Ciencias de la Salud, Unidad Milpa Alta (CICS UMA)", "CICS-MilpaAlta"],
    ["Dirección de Recursos Materiales E Infraestructura", "DRMI"],
    ["Escuela Nacional de Ciencias Biológicas (ENCB)", "ENCB"],
    ["Centro de Investigación y Desarrollo de Tecnología Digital (CITEDI)", "CITEDI"],
    ["Dirección de Difusión de Ciencia y Tecnología", "DDCyT"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 18) "Zacatecas"', "CECyT18"],
    ["Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Legaría", "CICATA-Legaria"],
    ["Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Oaxaca", "CIIDIR-Oaxaca"],
    ["Escuela Superior de Ingeniería Química e Industrias Extractivas (ESIQIE)", "ESIQIE"],
    ["Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Azcapotzalco", "ESIME-Azcapotzalco"],
    ["Escuela Superior de Economía (ESE)", "ESE"],
    ["Unidad Profesional Interdisciplinaria de Ingeniería, Campus Guanajuato (UPIIG)", "UPIIG-Guanajuato"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 8) "Narciso Bassols"', "CECyT8"],
    ["Unidad Profesional Interdisciplinaria de Ingeniería, Campus Tlaxcala (UPIIT)", "UPIIT-Tlaxcala"],
    ["Centro de Desarrollo de Productos Bióticos (CEPROBI)", "CEPROBI"],
    ["Dirección de Información Institucional", "DII"],
    ["Escuela Superior de Cómputo (ESCOM)", "ESCOM"],
    ["Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Morelos", "CICATA-Morelos"],
    ["Centro Interdisciplinario de Investigación para El Desarrollo Integral Regional (CIIDIR), Unidad Michoacán", "CIIDIR-Michoacan"],
    ["Defensoría de los Derechos Politécnicos", "DDP"],
    ["Dirección de Formación en Lenguas Extranjeras", "DFLE"],
    ["Dirección General", "DG"],
    ["Unidad Profesional Interdisciplinaria de Ingeniería, Campus Zacatecas (UPIIZ)", "UPIIZ-Zacatecas"],
    ["Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla", "CIITA-Puebla"],
    ["Dirección de Relaciones Internacionales", "DRI"],
    ["Dirección de Capital Humano", "DCH"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 19) "Tecámac"', "CECyT19"],
    ["Dirección de Educación Media Superior", "DIEMS"],
    ["Coordinación General de Planeación E Información Institucional", "CGPII"],
    ["Coordinación de Imagen Institucional", "CII"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 7) "Cuauhtémoc"', "CECyT7"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 2) "Miguel Bernard"', "CECyT2"],
    ["Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Culiacán", "CVDR-Culiacan"],
    ["Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Durango", "CIIDIR-Durango"],
    ["Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Mazatlán", "CVDR-Mazatlan"],
    ["Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Campeche", "CVDR-Campeche"],
    ["Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Oaxaca", "CVDR-Oaxaca"],
    ["Centro de Investigación en Biotecnología Aplicada, IPN-tlaxcala (CIBA)", "CIBA-Tlaxcala"],
    ["Dirección de Cómputo y Comunicaciones", "DCC"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 4) "Lázaro Cárdenas"', "CECyT4"],
    ["Secretaría de Investigación y Posgrado", "SIP"],
    ["Dirección de Vinculación y Desarrollo Regional", "DVDR"],
    ["Centro Mexicano para la Producción Más Limpia (CMP+L)", "CMP+L"],
    ["Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Querétaro", "CICATA-Queretaro"],
    ["Secretaría General", "SG"],
    ["Dirección de Egresados y Servicio Social", "DESS"],
    ["Centro de Lenguas Extranjeras (CENLEX), Unidad Santo Tomás", "CENLEX-SantoTomas"],
    ["Secretaría de Innovación E Integración Social", "SIIS"],
    ["Dirección de Bibliotecas y Publicaciones", "DBP"],
    ["Centro de Biotecnología Genómica (CBG)", "CBG"],
    ["Dirección de Educación Virtual", "DEV"],
    ['Centro de Estudios Cientificos y Tecnológicos (CECYT 11) "Wilfrido Massieu"', "CECyT11"],
    ["Dirección de Planeación y Organización", "DPO"],
    ["Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Cancún", "CVDR-Cancun"],
    ["Dirección de Difusión Cultural", "DDC"],
    ["Unidad Politécnica de Gestión con Perspectiva de Género (UPGPG)", "UPGPG"],
    ['Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)', "UPIIAP-Puebla"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 20) "Natalia Serdán Alatriste"', "CECyT20"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 13) "Ricardo Flores Magón"', "CECyT13"],
    ["Dirección de Recursos Materiales e Infraestructura", "DRMI"],
    ["Dirección de Incubación de Empresas Tecnológicas", "DIET"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 15) "Diódoro Antúnez Echegaray"', "CECyT15"]
]);




function obtenerListaDependencias() {
    return Array.from(siglasDependencias.keys());
}






const opciones = obtenerListaDependencias();










function cargarFoliosPorDependencia(dependenciaBuscada) {

    const select = document.getElementById("folioSeleccionado");

    select.innerHTML = `
        <option value="">
            Selecciona una opción
        </option>
    `;

    for (const [folio, datos] of mapaFolios) {

        if (datos.dependencia === dependenciaBuscada) {

            const option = document.createElement("option");

            option.value = folio;

            option.textContent =
                `${folio} — ${datos.tipoDeBien}`;

            select.appendChild(option);
        }
    }
}


document.getElementById("dependencia").addEventListener("change",  function () {

          dependencia =this.value;
          setSelectValue("tipoDeSolicitud","");
          let Folio= document.getElementById("folioInput");
        Folio.value=""; 
        if (!dependencia) {
            alert("Selecciona una dependencia.");
            return;
        }

        cargarFoliosPorDependencia(dependencia);
    });


document
    .getElementById("folioSeleccionado")
    .addEventListener("change", function () {

        const folio = this.value;
        
        if (!folio) {
            return;
        }

        const datos = mapaFolios.get(folio);

        if (!datos) {
            return;
        }
        let Folio= document.getElementById("folioInput");
        Folio.value=folio;
        setSelectValue(
            "tipoDeSolicitud",
            datos.tipoDeBien
        );
        document.getElementById("folioSeleccionado");
    });








/*




function cargarFol(){

const    dependenciaI = document.getElementById("dependencia").value.trim();


    if (!dependenciaI) {
        alert("Selecciona una dependencia primero.");
        return;
    }

    const folioB = obtenerFolio(dependenciaI);

    document.getElementById("folioInput").value=folioB;    
       
             
}
*/









opciones.forEach(value => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    dependenciaInput.appendChild(option);
  });






function actualizarObligatoriedadFila(fila) {
  const equipo = fila.querySelector(".obligatorio");
  if (!equipo) return;

  const tieneEquipo = equipo.value.trim() !== "";
  const campos = fila.querySelectorAll("input, textarea, select");

  campos.forEach(campo => {
    if (tieneEquipo) {
      campo.setAttribute("required", "required");
    } else {
      campo.removeAttribute("required");
    }
  });
}


//----------------Esta parte se encarga de detectar un cambio en las celdas de la tabla y cuando recibe un cambio que no es 
//----------------en la clase obligatorio este no reacciona, en caso afirmativo cambio el estado de required
//--------------------------------------** *------------------------------------------/

document.getElementById("tablaBody").addEventListener("input", function (e) {
  if (!e.target.classList.contains("obligatorio")) return;

  const fila = e.target.closest("tr");
  actualizarObligatoriedadFila(fila);
});



document.getElementById("tablaBody2").addEventListener("input", function (e) {
  if (!e.target.classList.contains("obligatorio")) return;

  const fila = e.target.closest("tr");
  actualizarObligatoriedadFila(fila);
});


document.getElementById("tablaBody3").addEventListener("input", function (e) {
  if (!e.target.classList.contains("obligatorio")) return;

  const fila = e.target.closest("tr");
  actualizarObligatoriedadFila(fila);
});

document.getElementById("tablaCotizaciones").addEventListener("input", function (e) {
  if (!e.target.classList.contains("obligatorio")) return;
  const fila = e.target.closest("tr");
  actualizarObligatoriedadFila(fila);
});






document.getElementById("tablaBody4").addEventListener("input", function (e) {
  if (!e.target.classList.contains("obligatorio")) return;

  const fila = e.target.closest("tr");
  actualizarObligatoriedadFila(fila);
});







document.getElementById("tablaBody5").addEventListener("input", function (e) {
  if (!e.target.classList.contains("obligatorio")) return;

  const fila = e.target.closest("tr");
  actualizarObligatoriedadFila(fila);
});







function obtenerNumeroFila1(){
  return document.querySelectorAll("#tablaBody tr").length + 1;
}
function obtenerNumeroFila1_1(){
  return document.querySelectorAll("#tablaBody1_1 tr").length + 1;
}
function obtenerNumeroFila2(){
  return document.querySelectorAll("#tablaBody2 tr").length + 1;
}

function obtenerNumeroFila3(){
  return document.querySelectorAll("#tablaBody3 tr").length + 1;
}

function obtenerNumeroFilaC(){
  return document.querySelectorAll("#tablaCotizaciones tr").length + 1;
}

function obtenerNumeroFila4(){
  return document.querySelectorAll("#tablaBody4 tr").length + 1;
}

function obtenerNumeroFila5(){
  return document.querySelectorAll("#tablaBody5 tr").length + 1;
}
/*
function obtenerNumeroFila6(){
  return document.querySelectorAll("#tablaBody6 tr").length + 1;
}
*/




function formatearMiles(input) {
  // Quitar todo menos números y punto
  let valor = input.value.replace(/[^0-9.]/g, "");

  // Evitar más de un punto decimal
  const partes = valor.split(".");
  if (partes.length > 2) {
    valor = partes[0] + "." + partes.slice(1).join("");
  }
  // Separar parte entera y decimal
  let [entero, decimal] = valor.split(".");

  // Agregar separador de miles
  entero = entero.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  input.value = decimal !== undefined
    ? `${entero}.${decimal.slice(0,2)}`
    : entero;
}


function activarAutoExpand(fila){
  const textareas = fila.querySelectorAll(".auto-expand");
  textareas.forEach(textarea => {
    textarea.addEventListener("input", () => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    });
  });
}

document.getElementById("miFormulario").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
});




//---------------------------Generar Folio
function generarFolio() {
   return Math.random().toString(36).substr(2, 8).toUpperCase();
}












//------------------------Separacion de tablas por ventana
/*
function siguiente(numero){

  document
    .getElementById(`paso${numero}`)
    .classList.remove("activo");

  document
    .getElementById(`paso${numero+1}`)
    .classList.add("activo");
}

function anterior(numero){

  document
    .getElementById(`paso${numero}`)
    .classList.remove("activo");

  document
    .getElementById(`paso${numero-1}`)
    .classList.add("activo");
}
*/
function siguiente(numero,numeroActivar){

  document
    .getElementById(`paso${numero}`)
    .classList.remove("activo");

  document
    .getElementById(`paso${numeroActivar}`)
    .classList.add("activo");
}


function anterior(numero){

  document
    .getElementById(`paso${numero}`)
    .classList.remove("activo");

  document
    .getElementById(`paso${numero-1}`)
    .classList.add("activo");
}
function soloActivar(numero){
if(document
    .getElementById(`paso${numero}`)
    .classList.contains("activo")){
         document
    .getElementById(`paso${numero}`)
    .classList.remove("activo");    
    }else{

  document
    .getElementById(`paso${numero}`)
    .classList.add("activo");
  }
}




document
  .querySelector(".Tabla4")
  .addEventListener("change", function(event) {

    if (event.target.classList.contains("unitario")) {
        let precioTotal=event.target.dataset.precio;
        let cantidad=event.target.dataset.cant;
         let valorUnitario = Number(
        event.target.value.replace(/,/g, "")
      );
  let valorCant=document
  .getElementById(cantidad).value;
        document
  .getElementById(precioTotal).value=valorUnitario *1.16*valorCant;
    }

  });








/*dependencia.addEventListener("mousedown", e => {
  e.preventDefault();
});
*/
const direccionEnlace="https://script.google.com/macros/s/AKfycbxW225Zjh-t7AMDfE3Tw8aa3zAyvMd7vn5yZnJYOKIFf5uepfYxUFcHluavCGBABzHzaQ/exec"

let folioActual=null;
let edicionActual=null;
let numerodeEnvio=1;
let ExistenciaDeCotizaciones=false;
let ExistenciaDeCotizaciones_T4=false;

let ExistenciaDeCotizacionesA2=false;
let ExistenciaDeCotizacionesA2_T4=false;


//----------------------------------------cargar Ultimo Guardado


document.getElementById("cargarFolio").addEventListener("click", async function () {   
    
    const folio = document.getElementById("folioInput").value.trim();

    const dependencia = document.getElementById("dependencia").value.trim();
   
  const tipoDeEquipamento = document.getElementById("tipoDeSolicitud").value.trim();
try{
    const res = await fetch(direccionEnlace, {
    method: "POST",
    body: JSON.stringify({
        action: "cargarUltimaVersion",
        dependencia:dependencia,
        tipoDeBien:tipoDeEquipamento
    })
});

const json = await res.json();
const data =json.data;
alert(data.dependencia + "  su funcion y accion funcionan bien.Hora de la actualizacion:" + data.fechaModificacion +". el Origen es un" + json.origen );

 const form = document.getElementById("miFormulario");

  // Limpiar tabla
  const tbody = document.getElementById("tablaBody");
  const tbody2 = document.getElementById("tablaBody2");
  const tbody3 = document.getElementById("tablaBody3");
  const tbodyC = document.getElementById("tablaCotizaciones");
  const tbody4 = document.getElementById("tablaBody4");
  const tbody5 = document.getElementById("tablaBody5");
/*
  const tbody6 = document.getElementById("tablaBody6");
*/
  tbody.innerHTML = "";
  tbody2.innerHTML = "";
  tbody3.innerHTML = "";
  tbodyC.innerHTML = "";
  tbody4.innerHTML = "";
  tbody5.innerHTML = "";
/*  tbody6.innerHTML = "";

*/
// Reconstruir filas
//  const filas = data.__filas || 10;
//  for (let i = 1; i <= filas; i++) {
//    agregarFila();
//  }
  
      folioActual = folio;
      edicionActual=data.edicion;
// Restaurar selects encadenados
/*setSelectValue("secretaria", data.secretaria);

setTimeout(() => {
  setSelectValue("direccion", data.direccion);

  setTimeout(() => {
    setSelectValue("nivel", data.nivel);

    setTimeout(() => {
*/

// folioValor.value=data.folio;
setSelectValue("dependencia", data.dependencia);

Object.keys(data).forEach(name => {
                          if (name.includes("__filas")) return;
                          if (name.includes("R")) return; //quitamos los campos de la tabla
                          if(name.includes("secretaria")) return;
                          if(name.includes("direccion")) return; 
                          if(name.includes("nivel")) return; 
                         // if(name.includes("dependencia")) return; 
                          const campo = document.querySelector(`[name="${name}"]`);
                          if (!campo) return;
                          
    campo.value = data[name];

    if (campo.tagName === "TEXTAREA") {
      campo.style.height = "auto";
      campo.style.height = campo.scrollHeight + "px";
    }
  });




      
      // ⬇️ Ahora sí, restaurar la tabla
      restaurarTabla(data);
      
      document.querySelectorAll(".check-verificacion").forEach(check => {

    if (data.hasOwnProperty(check.name)) {
        check.checked = data[check.name] === true;
    }

});


      document.querySelectorAll("#tablaBody tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody2 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody3 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody4 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody5 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
/*
      document.querySelectorAll("#tablaBody6 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
*/
//    }, 0);
//  }, 0);
//  }, 0);
  alert("📂 Datos cargados correctamente");
} catch (e) {
    alert("⚠️ Error de conexión al cargar los Datos");
}



    });







//---------------------------GuardarBorrador--------------------------------------------------


  document.getElementById("guardarBorrador").addEventListener("click", async () => {
  const form = document.getElementById("miFormulario");
  const formData = new FormData(form);

  const data = {};

  formData.forEach((value, key) => {
    if (value instanceof File) return;
    data[key] = value;
  });


  
 
  
    // Guardamos también el número de filas actuales
  data.__filas1 = document.querySelectorAll("#tablaBody tr").length;
  data.__filas2 = document.querySelectorAll("#tablaBody2 tr").length;
  data.__filas3 = document.querySelectorAll("#tablaBody3 tr").length;
  data.__filas4 = document.querySelectorAll("#tablaBody4 tr").length;
  data.__filas5 = document.querySelectorAll("#tablaBody5 tr").length;
/*
  data.__filas6 = document.querySelectorAll("#tablaBody6 tr").length;
 */ 
/*alert(data.__filas4);
alert(document.getElementById(`ProgramaAcademico_T4R1RO`).checked);

*/

document.querySelectorAll(".check-verificacion").forEach(check => {

    data[check.name] = check.checked;

});



/*
for(let i =1;i<data.__filas4;i++){
  alert(`ProgramaAcademico_T4R${i}RO`);
  alert(document.getElementById(`ProgramaAcademico_T4R${i}RO`).checked);
  data[`ProgramaAcademico_T4R${i}RO`] =
    document.getElementById(`ProgramaAcademico_T4R${i}RO`).checked;
}

*/
/*
  if(folioActual==null){
             folioActual = generarFolio();
  }
  data.__folio = folioActual;

*/

 // formData.append(
 //   "payload",
 //   JSON.stringify({
 //       action: "guardarBorrador",
 //       data
 //   })
//);

try {

    const partes = dividirData(data);

const res = await fetch(direccionEnlace, {
    method: "POST",
    body: JSON.stringify({
        action: "guardarBorrador",
        json1: partes[0],
           json2: partes[1],
           json3: partes[2],
           json4: partes[3],
           json5: partes[4],   
           json6: partes[5],
           json7: partes[6],
           json8:partes[7]
    })
});

/*
    const res = await fetch(direccionEnlace, {
      method: "POST",
      body: JSON.stringify({action: "guardarBorrador", data})
    });

*/  
// ---------------Nuevo------------------------------------------- 

  const json = await res.json();
if (json.success) {
      alert(`✅ Borrador guardado correctamente. Tu folio es: ${folioActual}`);
    } else {
      alert("⚠️ Error al guardar el borrador: " + json.message);
    }
  } catch (e) {
    alert("⚠️ Error de conexión al guardar el borrador");
  }

});






function setSelectValue(selectId, value) {
  const select = document.getElementById(selectId);
  if (!select) return;

  select.value = value;
  select.dispatchEvent(new Event("change"));
}

function restaurarTabla(data) {
 
 

 


  const filas1 = data.__filas1 || 10;
  const filas2 = data.__filas2 || 10;
  const filas3 = data.__filas3 || 10;
  const filasC = data.__filasC || 10;
  const filas4 = data.__filas4 || 10;
  const filas5 = data.__filas5 || 10;
  /*
  const filas6 = data.__filas6 || 10;
  */
  
  const tbody = document.getElementById("tablaBody");
  const tbody1 = document.getElementById("tablaBody1_1"); 
  const tbody2 = document.getElementById("tablaBody2");
  const tbody3 = document.getElementById("tablaBody3");
  const tbodyC = document.getElementById("tablaCotizaciones"); 
  const tbody4 = document.getElementById("tablaBody4");
  const tbody5 = document.getElementById("tablaBody5");
/*
  const tbody6 = document.getElementById("tablaBody6");
 */
 
  tbody.innerHTML  = "";
  tbody1.innerHTML = "";
  tbody2.innerHTML = "";
  tbody3.innerHTML = "";
  tbodyC.innerHTML = "";
  tbody4.innerHTML = "";
  tbody5.innerHTML = "";
  /*
  tbody6.innerHTML = "";
  */
  for (let i = 1; i <= filas1; i++) {
    agregarFila();
  }
  for (let i = 1; i <= filas2; i++) {
    agregarFila2();
  }
  for (let i = 1; i <= filas3; i++) {
    agregarFila3();

  }
  for (let i = 1; i <= filasC; i++) {
    agregarFilaC();
  }
  for (let i = 1; i <= filas4; i++) {
    agregarFila4();
  }
  for (let i = 1; i <= filas5; i++) {
    agregarFila5();
  }
  /*
  for (let i = 1; i <= filas6; i++) {
    agregarFila6();
  }
*/

  Object.keys(data).forEach(name => {
    if (name.includes("__filas")) return;
     if (!name.includes("R")) return; // solo campos de la tabla
    
     const campo = document.querySelector(`[name="${name}"]`);
    if (!campo) return;
   


    if (campo.type === "file") {
    console.log("Archivo omitido:", name);
    return;
  }

  if (
    data[name] !== null &&
    typeof data[name] === "object"
  ) {
    console.log("Objeto omitido:", name, data[name]);
    return;
  }
    campo.value = data[name];
    
    if (campo.tagName === "TEXTAREA") {
      campo.style.height = "auto";
      campo.style.height = campo.scrollHeight + "px";
    }
  });
  // generarNivel();
  // generarDependencia();
       
   document.querySelectorAll("#tablaBody5 [data-relleno]").forEach(campo => {

    const nombreOrigen = campo.dataset.relleno;

    const campoOrigen = document.querySelector(
        `[name="${nombreOrigen}"]`
    );

    if (!campoOrigen) return;

    campo.value = campoOrigen.value;

    if (campo.tagName === "TEXTAREA") {
        campo.style.height = "auto";
        campo.style.height = campo.scrollHeight + "px";
    }
});     
        





}







document.getElementById("cargarBorrador").addEventListener("click", async () => {
//-------------------------- Borrador con  folio (Backend)   
  

  const folio = document.getElementById("folioInput").value.trim();
  //-----------------------------nuevo----------------
  const dependencia = document.getElementById("dependencia").value.trim();
   
  const tipoDeEquipamento = document.getElementById("tipoDeSolicitud").value.trim();

   if (!dependencia) {
    alert("⚠️ Ingresa una dependencia válida");
    return;
   }





/*
  const folio = document.getElementById("folioInput").value.trim();
  if (!folio) {
    alert("⚠️ Ingresa un folio válido");
    return;
  }
*/
try {
    const res = await fetch(direccionEnlace, {
      method: "POST",
      body: JSON.stringify({action: "cargarBorrador", dependencia, tipoDeEquipamento})
    });


    const json = await res.json();

    if (!json.success) {
      alert("⚠️ " + json.message);
      return;
    }

//----------------------------------------------------------------------------

  
//-------------BORRADOR LOCAL--------------------------------------------------  
//  const borrador = localStorage.getItem("borradorFormulario");
//  if (!borrador) {
//    alert("⚠️ No hay ningún borrador guardado");
//    return;
//  }

  
  //  (Datos locales)  const data = JSON.parse(borrador);



  const data =json.data;

  
  const form = document.getElementById("miFormulario");

  // Limpiar tabla
  const tbody = document.getElementById("tablaBody");
  const tbody2 = document.getElementById("tablaBody2");
  const tbody3 = document.getElementById("tablaBody3");
  const tbodyC = document.getElementById("tablaCotizaciones");
  const tbody4 = document.getElementById("tablaBody4");
  const tbody5 = document.getElementById("tablaBody5");
/*
  const tbody6 = document.getElementById("tablaBody6");
*/
  tbody.innerHTML = "";
  tbody2.innerHTML = "";
  tbody3.innerHTML = "";
  tbodyC.innerHTML = "";
  tbody4.innerHTML = "";
  tbody5.innerHTML = "";
/*  tbody6.innerHTML = "";

*/
// Reconstruir filas
//  const filas = data.__filas || 10;
//  for (let i = 1; i <= filas; i++) {
//    agregarFila();
//  }
  
      folioActual = folio;
      edicionActual=data.edicion;
// Restaurar selects encadenados
/*setSelectValue("secretaria", data.secretaria);

setTimeout(() => {
  setSelectValue("direccion", data.direccion);

  setTimeout(() => {
    setSelectValue("nivel", data.nivel);

    setTimeout(() => {
*/

// folioValor.value=data.folio;
setSelectValue("dependencia", data.dependencia);

Object.keys(data).forEach(name => {
                          if (name.includes("__filas")) return;
                          if (name.includes("R")) return; //quitamos los campos de la tabla
                          if(name.includes("secretaria")) return;
                          if(name.includes("direccion")) return; 
                          if(name.includes("nivel")) return; 
                         // if(name.includes("dependencia")) return; 
                          const campo = document.querySelector(`[name="${name}"]`);
                          if (!campo) return;
                          
    campo.value = data[name];

    if (campo.tagName === "TEXTAREA") {
      campo.style.height = "auto";
      campo.style.height = campo.scrollHeight + "px";
    }
  });




      
      // ⬇️ Ahora sí, restaurar la tabla
      restaurarTabla(data);
      
      document.querySelectorAll(".check-verificacion").forEach(check => {

    if (data.hasOwnProperty(check.name)) {
        check.checked = data[check.name] === true;
    }

});


      document.querySelectorAll("#tablaBody tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody2 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody3 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody4 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody5 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
/*
      document.querySelectorAll("#tablaBody6 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
*/
//    }, 0);
//  }, 0);
//  }, 0);
  alert("📂 Borrador cargado correctamente");
} catch (e) {
    alert("⚠️ Error de conexión al cargar el borrador");
}
  
});


document.getElementById("cargarRespuesta").addEventListener("click", async () => {
//-------------------------- Borrador con  folio (Backend)   
  
  const folio = document.getElementById("folioInput").value.trim();
  
  //-----------------------------nuevo----------------
  const dependencia = document.getElementById("dependencia").value.trim();
   
  const tipoDeEquipamento = document.getElementById("tipoDeSolicitud").value.trim();


  if (!dependencia) {
    alert("⚠️ Ingresa una dependencia válida");
    return;
   }

  //-------------------------------------------------------------
  /*
  if (!folio) {
    alert("⚠️ Ingresa un folio válido");
    return;
  }
*/
try {
    const res = await fetch(direccionEnlace, {
      method: "POST",
      body: JSON.stringify({action: "cargarRespuesta", dependencia,tipoDeEquipamento})
    });


    const json = await res.json();

    if (!json.success) {
      alert("⚠️ " + json.message);
      return;
    }

//----------------------------------------------------------------------------

  
//-------------BORRADOR LOCAL--------------------------------------------------  
//  const borrador = localStorage.getItem("borradorFormulario");
//  if (!borrador) {
//    alert("⚠️ No hay ningún borrador guardado");
//    return;
//  }

  
  //  (Datos locales)  const data = JSON.parse(borrador);



  const data =json.data;

  
  const form = document.getElementById("miFormulario");

  // Limpiar tabla
  const tbody = document.getElementById("tablaBody");
  const tbody2 = document.getElementById("tablaBody2");
  const tbody3 = document.getElementById("tablaBody3");
  const tbodyC = document.getElementById("tablaCotizaciones");
  const tbody4 = document.getElementById("tablaBody4");
  const tbody5 = document.getElementById("tablaBody5");
/*
  const tbody6 = document.getElementById("tablaBody6");
*/  
tbody.innerHTML = "";
  tbody2.innerHTML = "";
  tbody3.innerHTML = "";
  tbodyC.innerHTML = "";
  tbody4.innerHTML = "";
  tbody5.innerHTML = "";
/*
  tbody6.innerHTML = "";
*/
  // Reconstruir filas
//  const filas = data.__filas || 10;
//  for (let i = 1; i <= filas; i++) {
//    agregarFila();
//  }

folioActual=folio;
edicionActual=data.edicion;
numerodeEnvio=data.numeroEnvio;
/*
alert("En la revision Existen cotizaciones Generales para la primera alternativa cargadas:"+ ExistenciaDeCotizaciones);
alert("En la revision la existencia de cotizaciones Generales para la segunda alternativa cargadas:"+ ExistenciaDeCotizacionesA2);
alert("En la revision Existen cotizaciones para la tabla 4 para la primera alternativa cargadas:"+ ExistenciaDeCotizaciones_T4);
alert("En la revision Existen cotizaciones para la tabla 4 para la segunda alternativa cargadas:"+ ExistenciaDeCotizacionesA2_T4);
*/


// Restaurar selects encadenados
/* 
  setSelectValue("secretaria", data.secretaria);

setTimeout(() => {
  setSelectValue("direccion", data.direccion);

  setTimeout(() => {
    setSelectValue("nivel", data.nivel);

    setTimeout(() => {
*/
 //     setSelectValue("dependencia", data.dependencia);

Object.keys(data).forEach(name => {
                          if (name.includes("__filas")) return;
                          if (name.includes("R")) return; //quitamos los campos de la tabla
                          if(name.includes("secretaria")) return;
                          if(name.includes("direccion")) return; 
                          if(name.includes("nivel")) return; 
 //                         if(name.includes("dependencia")) return; 
                          const campo = document.querySelector(`[name="${name}"]`);
                          if (!campo) return;                     

                            campo.value = data[name];

    if (campo.tagName === "TEXTAREA") {
      campo.style.height = "auto";
      campo.style.height = campo.scrollHeight + "px";
    }
  });




      
      // ⬇️ Ahora sí, restaurar la tabla
      restaurarTabla(data);

      document.querySelectorAll(".check-verificacion").forEach(check => {

    if (data.hasOwnProperty(check.name)) {
        check.checked = data[check.name] === true;
    }

});


      document.querySelectorAll("#tablaBody tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody2 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody3 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody4 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody5 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
/*
      document.querySelectorAll("#tablaBody6 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
*/
//    }, 0);
//  }, 0);
// }, 0);
  alert("📂 Respuesta cargada correctamente");
} catch (e) {
    alert("⚠️ Error de conexión al cargar la respuesta");
}
  
});












//Guardado de Datos    
  
 const form = document.getElementById("miFormulario");
 const aviso = document.getElementById("aviso");   



document.getElementById("Enviar").addEventListener("click", async function(e) {
   
//document.getElementById("Enviar").addEventListener("submit", function(e){
                    e.preventDefault();
                //if (!this.checkValidity()) {
                //    this.reportValidity(); // muestra mensajes
                //    return;  
               // }
                 const confirmar = confirm("¿Estás seguro de que deseas enviar el formulario?");

                if (!confirmar) {
                  // ❌ Usuario canceló
                  return;
                }
       //**
       



//const formData = new FormData(this);

const formData = new FormData(form);

  const data = {};

const selectsTexto = [
                    //  "secretaria",
                    //  "direccion",
                    //  "nivel",
                      "dependencia"
                ];
                selectsTexto.forEach(id => {
                        const select = document.getElementById(id);
                        if (select && select.selectedIndex >= 0) {
                        formData.set(id, select.options[select.selectedIndex].value);
                        }
                });
                aviso.textContent = " ";

  

  for (const [key, value] of formData.entries()) {
     
    if (!(value instanceof File)) {
        data[key] = value;
        continue;
    }

    if (value.size === 0) {
        data[key] = "";
        continue;
    }

    const base64 = await new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(value);
    });


    data[key] = {
        nombre: value.name,
        tipo: value.type,
        contenido: base64
    };
    
}



/*
data.secretariaT = document.getElementById("secretaria").options[
    document.getElementById("secretaria").selectedIndex
].text;

data.direccionT = document.getElementById("direccion").options[
    document.getElementById("direccion").selectedIndex
].text;

data.nivelT = document.getElementById("nivel").options[
    document.getElementById("nivel").selectedIndex
].text;
*/
data.dependenciaT = document.getElementById("dependencia").options[
    document.getElementById("dependencia").selectedIndex
].text;

  // Guardamos también el número de filas actuales
  data.__filas1 = document.querySelectorAll("#tablaBody tr").length;
  data.__filas2 = document.querySelectorAll("#tablaBody2 tr").length;
  data.__filas3 = document.querySelectorAll("#tablaBody3 tr").length;
  data.__filasC = document.querySelectorAll("#tablaCotizaciones tr").length;
  data.__filas4 = document.querySelectorAll("#tablaBody4 tr").length;
  data.__filas5 = document.querySelectorAll("#tablaBody5 tr").length;
/*
  data.__filas6 = document.querySelectorAll("#tablaBody6 tr").length;
  */
  if(folioActual==null){
      folioActual = generarFolio();
  }
  data.__folio = folioActual;
  data.__envioDependencia = false;
  data.edicion=true;
  data.numeroEnvio=numerodeEnvio+1;
  data.existenciaCotizaciones=ExistenciaDeCotizaciones;
  data.existenciaCotizaciones_T4=ExistenciaDeCotizaciones_T4;
  
  data.existenciaCotizaciones2=ExistenciaDeCotizacionesA2;
  data.existenciaCotizaciones2_T4=ExistenciaDeCotizacionesA2_T4;

  /*
   alert("Revision data.existenciaCotizaciones:"+data.existenciaCotizaciones);
  alert("Revision data.existenciaCotizaciones_T4:"+data.existenciaCotizaciones_T4);
  
  alert("Revision data.existenciaCotizaciones2 :"+ data.existenciaCotizaciones2);
  alert("Revision data.existenciaCotizaciones2_T4 :"+data.existenciaCotizaciones2_T4);
*/ 
formData.append(
    "payload",
    JSON.stringify({
        action: "EnviarFormulario",
        data
    })
);  



document.querySelectorAll(".check-verificacion").forEach(check => {

    data[check.name] = check.checked;

});





try {


/*
    const res = await fetch(direccionEnlace, {
        method: "POST",
        body: formData
        */

const partes = dividirData(data);

const res = await fetch(direccionEnlace, {
    method: "POST",
    body: JSON.stringify({
        action: "EnviarFormulario",
        json1: partes[0],
           json2: partes[1],
           json3: partes[2],
           json4: partes[3],
           json5: partes[4],   
           json6: partes[5],
           json7: partes[6],
           json8:partes[7]
    })
});
/*
const res = await fetch(direccionEnlace, {
      method: "POST",
      body: JSON.stringify({action: "EnviarFormulario", data})   


    });
*/



 



    const json = await res.json();

   


    if (json.success) {

        if(numerodeEnvio==2){
        alert(`✅ Tus observaciones han sido correctamente Enviadas. Tu folio es: ${folioActual}`);

        }else{
          alert(`✅ Las observaciones han sido actualizadas. Te recordamos que el folio es: ${folioActual}`);

        }
        aviso.textContent = "✅ La dependencia ya puede corregir el formato";
        aviso.style.color = "green";

        form.reset();

    } else {

        alert("⚠️ Error al enviar los datos: " + json.message);

    }

} catch (e) {

    console.error(e);
    alert("⚠️ Error de conexión: " + e.message);

}

  });


  

document.getElementById("cargarAnio").addEventListener("click", async () => {
   

  const data = {};





data.anio = document.getElementById("encabezados").value;



try {


const res = await fetch(direccionEnlace, {
      method: "POST",
      body: JSON.stringify({action: "ActualizarAnio", data})   


    });




 



    const json = await res.json();


        if (json.success) {
            
                           alert("✅ Año actualizado correctamente");

        } else {
           alert("⚠️ " + json.message);
        
        } 
 
    } catch (e) {

        console.error(e);
        
         alert("⚠️ Error de conexión: " + e.message);
    
}

});



 window.onload = async function () {

const res = await fetch(direccionEnlace,{
    method:"POST",
    body: JSON.stringify({
        action:"ObtenerConfiguracion"
    })
});


const config = await res.json();
let encabezados=config.encabezados;
    document.getElementById("UsuariosHAnio1").textContent = encabezados.encabezado1;
    document.getElementById("UsuariosMAnio1").textContent = encabezados.encabezado2;
    document.getElementById("UsuariosHAnio2").textContent = encabezados.encabezado3;
    document.getElementById("UsuariosMAnio2").textContent = encabezados.encabezado4;
    document.getElementById("UsuariosHAnio3").textContent = encabezados.encabezado5;
    document.getElementById("UsuariosMAnio3").textContent = encabezados.encabezado6;
    document.getElementById("UsuariosHAnio1Obs").textContent = encabezados.encabezado1;
    document.getElementById("UsuariosMAnio1Obs").textContent = encabezados.encabezado2;
    document.getElementById("UsuariosHAnio2Obs").textContent = encabezados.encabezado3;
    document.getElementById("UsuariosMAnio2Obs").textContent = encabezados.encabezado4;
    document.getElementById("UsuariosHAnio3Obs").textContent = encabezados.encabezado5;
    document.getElementById("UsuariosMAnio3Obs").textContent = encabezados.encabezado6;
    


    document.getElementById("UsuariosHAnio4").textContent = encabezados.encabezado13;
    document.getElementById("UsuariosMAnio4").textContent = encabezados.encabezado14;
    document.getElementById("UsuariosHAnio5").textContent = encabezados.encabezado15;
    document.getElementById("UsuariosMAnio5").textContent = encabezados.encabezado16;
    
    document.getElementById("UsuariosHAnio4Obs").textContent = encabezados.encabezado13;
    document.getElementById("UsuariosMAnio4Obs").textContent = encabezados.encabezado14;
    document.getElementById("UsuariosHAnio5Obs").textContent = encabezados.encabezado15;
    document.getElementById("UsuariosMAnio5Obs").textContent = encabezados.encabezado16;
    

    document.getElementById("UsuariosAHAnio1").textContent = encabezados.encabezado7;
    document.getElementById("UsuariosAMAnio1").textContent = encabezados.encabezado8;
    document.getElementById("UsuariosAHAnio2").textContent = encabezados.encabezado9;
    document.getElementById("UsuariosAMAnio2").textContent = encabezados.encabezado10;
    document.getElementById("UsuariosAHAnio3").textContent = encabezados.encabezado11;
    document.getElementById("UsuariosAMAnio3").textContent = encabezados.encabezado12,
    
    document.getElementById("UsuariosAHAnio1Obs").textContent = encabezados.encabezado7;
    document.getElementById("UsuariosAMAnio1Obs").textContent = encabezados.encabezado8;
    document.getElementById("UsuariosAHAnio2Obs").textContent = encabezados.encabezado9;
    document.getElementById("UsuariosAMAnio2Obs").textContent = encabezados.encabezado10;
    document.getElementById("UsuariosAHAnio3Obs").textContent = encabezados.encabezado11;
    document.getElementById("UsuariosAMAnio3Obs").textContent = encabezados.encabezado12;


    document.getElementById("UsuariosAHAnio4").textContent = encabezados.encabezado17;
    document.getElementById("UsuariosAMAnio4").textContent = encabezados.encabezado18;
    document.getElementById("UsuariosAHAnio5").textContent = encabezados.encabezado19;
    document.getElementById("UsuariosAMAnio5").textContent = encabezados.encabezado20;
    
    document.getElementById("UsuariosAHAnio4Obs").textContent = encabezados.encabezado17;
    document.getElementById("UsuariosAMAnio4Obs").textContent = encabezados.encabezado18;
    document.getElementById("UsuariosAHAnio5Obs").textContent = encabezados.encabezado19;
    document.getElementById("UsuariosAMAnio5Obs").textContent = encabezados.encabezado20;

    
};



const formulario = document.getElementById("miFormulario");

let campoMoviendo = null;
let offsetX = 0;
let offsetY = 0;


// =======================
// AMPLIAR AL ENTRAR
// =======================

formulario.addEventListener("focusin", function (e) {

    const campo = e.target;

    if (!campo.matches(".expandible")) return;

    campo.classList.add("campo-ampliado");
    campo.classList.remove("ventanaFormulario");


    let leyenda = document.querySelector(
        `.leyenda-textarea[data-campo="${campo.name}"]`
    );

    if (!leyenda) {

        leyenda = document.createElement("div");

        leyenda.className = "leyenda-textarea";
        leyenda.dataset.campo = campo.name;

        leyenda.textContent =
            campo.getAttribute("aria-label") || "Campo";

        document.body.appendChild(leyenda);
    }


    const rect = campo.getBoundingClientRect();

    leyenda.style.left = rect.left + "px";
    leyenda.style.top = (rect.top - 32) + "px";
});



// =======================
// RESTAURAR AL SALIR
// =======================

formulario.addEventListener("focusout", function (e) {

    const campo = e.target;

    if (!campo.matches(".expandible")) return;


    campo.classList.remove("campo-ampliado");
    campo.classList.add("ventanaFormulario");


    const leyenda = document.querySelector(
        `.leyenda-textarea[data-campo="${campo.name}"]`
    );

    if (leyenda) {
        leyenda.remove();
    }


    campo.style.left = "";
    campo.style.top = "";


    requestAnimationFrame(() => {

        campo.style.height = "auto";
        campo.style.height = campo.scrollHeight + "px";

    });
});



// =======================
// INICIAR MOVIMIENTO
// CTRL + CLIC
// =======================

formulario.addEventListener("mousedown", function (e) {

    const campo = e.target;

    if (!campo.matches(".expandible")) return;

    if (!campo.classList.contains("campo-ampliado")) return;

    if (!e.ctrlKey) return;


    campoMoviendo = campo;


    const rect = campo.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;


    campo.style.cursor = "grabbing";

    e.preventDefault();
});



// =======================
// MOVER
// =======================

document.addEventListener("mousemove", function (e) {

    if (!campoMoviendo) return;


    const left = e.clientX - offsetX;
    const top = e.clientY - offsetY;


    campoMoviendo.style.left = left + "px";
    campoMoviendo.style.top = top + "px";


    const leyenda = document.querySelector(
        `.leyenda-textarea[data-campo="${campoMoviendo.name}"]`
    );


    if (leyenda) {

        leyenda.style.left = left + "px";
        leyenda.style.top = (top - 32) + "px";

    }

});



// =======================
// TERMINAR MOVIMIENTO
// =======================

document.addEventListener("mouseup", function () {

    if (!campoMoviendo) return;


    campoMoviendo.style.cursor = "";

    campoMoviendo = null;

});







/*

document.querySelectorAll("#miFormulario .expandible").forEach(campo => {

    campo.addEventListener("focus", function () {
        this.classList.add("campo-ampliado");
         let leyenda = document.querySelector(
        `.leyenda-textarea[data-campo="${this.name}"]`
    );

    if (!leyenda) {

        leyenda = document.createElement("div");

        leyenda.className = "leyenda-textarea";
        leyenda.dataset.campo = this.name;

        leyenda.textContent =
            this.getAttribute("aria-label") || "Campo";

        document.body.appendChild(leyenda);
    }

    const rect = this.getBoundingClientRect();

    leyenda.style.left = rect.left + "px";
    leyenda.style.top = (rect.top - 32) + "px";
    });





   
campo.addEventListener("blur", function () {
    this.classList.remove("campo-ampliado");
    const leyenda = document.querySelector(
        `.leyenda-textarea[data-campo="${this.name}"]`
    );

    if (leyenda) {
        leyenda.remove();
    }

    this.style.left = "";
    this.style.top = "";

    // Esperamos a que vuelva a su tamaño normal
    requestAnimationFrame(() => {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
    });
});




    let moviendo = false;
    let offsetX = 0;
    let offsetY = 0;

    campo.addEventListener("mousedown", function(e) {

        if (!this.classList.contains("campo-ampliado")) return;

        // Ctrl + clic para mover la ventana
        if (!e.ctrlKey) return;

        moviendo = true;

        const rect = this.getBoundingClientRect();

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        this.style.cursor = "grabbing";

        e.preventDefault();
    });

    document.addEventListener("mousemove", function(e) {

        if (!moviendo) return;

    const left = e.clientX - offsetX;
    const top = e.clientY - offsetY;

    campo.style.left = left + "px";
    campo.style.top = top + "px";

    const leyenda = document.querySelector(
        `.leyenda-textarea[data-campo="${campo.name}"]`
    );

    if (leyenda) {
        leyenda.style.left = left + "px";
        leyenda.style.top = (top - 32) + "px";
    }

    });

    document.addEventListener("mouseup", function() {

        if (!moviendo) return;

        moviendo = false;
        campo.style.cursor = "";

    });

});


*/

function dividirData(data, partes = 8) {

    const json = JSON.stringify(data);

    const tam = Math.ceil(json.length / partes);

    const resultado = [];

    for (let i = 0; i < partes; i++) {
        resultado.push(
            json.substring(i * tam, (i + 1) * tam)
        );
    }

    return resultado;
}

document.getElementById("convertirSolicitudes").addEventListener("click", async () => {

    if (!confirm("¿Deseas convertir las solicitudes en borradores?")) {
        return;
    }

    try {

        const res = await fetch(direccionEnlace,{
            method:"POST",
            body: JSON.stringify({
                action:"convertirSolicitudes"
            })
        });

        const json = await res.json();

        if(json.success){
            alert("✅ " + json.message);
        }else{
            alert("⚠️ " + json.message);
        }

    }catch(e){

        console.error(e);
        alert("Error: "+e.message);

    }

});
