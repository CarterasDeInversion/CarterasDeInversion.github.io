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
                    class="input_tabla precio"
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
                    class="input_tabla precio"
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
            ></textarea>

            <input
                name="ProgramaAcademico_T5R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="ProgramaAcademico_T5R${i}RO"
                data-campo="ProgramaAcademico_T5R${i}"
            >
        </td>

        <td>
            <textarea
                name="Espacio_T5R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Espacio"
            ></textarea>

            <input
                name="Espacio_T5R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="Espacio_T5R${i}RO"
                data-campo="Espacio_T5R${i}"
            >
        </td>

        <td>
            <textarea
                name="nombredelEquipo_T5R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Nombre del Equipo"
            ></textarea>

            <input
                name="nombredelEquipo_T5R${i}RO"
                type="checkbox"
                class="check-verificacion"
                id="nombredelEquipo_T5R${i}RO"
                data-campo="nombredelEquipo_T5R${i}"
            >
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
  /*const tr = document.createElement("tr");
  const tr1 = document.createElement("tr");
  const tr2 = document.createElement("tr");
  const tr3 = document.createElement("tr");
  const tr4 = document.createElement("tr");
  const trC = document.createElement("tr");
  const tr5 = document.createElement("tr");
  /*
  const tr6 = document.createElement("tr");
  
  */
 /*
 const tr7 = document.createElement("tr");
 
 *//*
  tr.innerHTML = `

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
         id="Programa_T1R${i}RO"
         data-campo="Programa_T1R${i}"
       >

    </td>

    <td>
    <input type="number" name="Usuarios1_T1R${i}" class="input_tabla " aria-label="Usuarios1"> </input> 
    <input
         name="Usuarios1_T1R${i}RO" 
             type="checkbox"
         id="Usuarios1_T1R${i}RO"
         data-campo="Usuarios1_T1R${i}"
       >
    </td>
    <td>
    <input type="number" name="Usuarios2_T1R${i}" class="input_tabla " aria-label="Usuarios2"> </input>
     <input
         name="Usuarios2_T1R${i}RO" 
             type="checkbox"
         id="Usuarios2_T1R${i}RO"
         data-campo="Usuarios2_T1R${i}"
       > 

    </td>
    <td> 
    <input type="number" name="Usuarios3_T1R${i}" class="input_tabla " aria-label="Usuarios3"> </input>
    <input
         name="Usuarios3_T1R${i}RO" 
             type="checkbox"
         id="Usuarios3_T1R${i}RO"
         data-campo="Usuarios3_T1R${i}"
       > 
    </td>
    <td>
    <input type="number" name="Usuarios4_T1R${i}" class="input_tabla " aria-label="Usuarios4"> </input>
    <input
         name="Usuarios4_T1R${i}RO" 
             type="checkbox"
         id="Usuarios4_T1R${i}RO"
         data-campo="Usuarios4_T1R${i}"
       >
    </td>
    <td>
    <input type="number" name="Usuarios5_T1R${i}" class="input_tabla " aria-label="Usuarios5"> </input>
    <input
         name="Usuarios5_T1R${i}RO" 
             type="checkbox"
         id="Usuarios5_T1R${i}RO"
         data-campo="Usuarios5_T1R${i}"
       >
    </td>
    <td>
    <input type="number" name="Usuarios6_T1R${i}" class="input_tabla " aria-label="Usuarios6"> </input>
    <input
         name="Usuarios6_T1R${i}RO" 
             type="checkbox"
         id="Usuarios6_T1R${i}RO"
         data-campo="Usuarios6_T1R${i}"
       >
    </td>
    <td>
    <input type="number" name="Usuarios7_T1R${i}" class="input_tabla " aria-label="Usuarios7"> </input>
    <input
         name="Usuarios7_T1R${i}RO" 
             type="checkbox"
         id="Usuarios7_T1R${i}RO"
         data-campo="Usuarios7_T1R${i}"
       >
    </td>

    <td>
    <input type="number" name="Usuarios8_T1R${i}" class="input_tabla " aria-label="Usuarios8"> </input>
    <input
         name="Usuarios8_T1R${i}RO" 
             type="checkbox"
         id="Usuarios8_T1R${i}RO"
         data-campo="Usuarios8_T1R${i}"
       >
    </td>

    <td>
    <input type="number" name="Usuarios9_T1R${i}" class="input_tabla " aria-label="Usuarios9"> </input>
    <input
         name="Usuarios9_T1R${i}RO" 
             type="checkbox"
         id="Usuarios9_T1R${i}RO"
         data-campo="Usuarios9_T1R${i}"
       >
    </td>


    <td>
    <input type="number" name="Usuarios10_T1R${i}" class="input_tabla " aria-label="Usuarios10"> </input>
    <input
         name="Usuarios10_T1R${i}RO" 
             type="checkbox"
         id="Usuarios10_T1R${i}RO"
         data-campo="Usuarios10_T1R${i}"
       >
    </td>

  `;

                                    
  tr1.innerHTML = `

    
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
         id="Programa_T1_1R${i}RO"
         data-campo="Programa_T1_1R${i}"
       >    
    </td>
    <td>
    <input type="number" name="Usuarios1_T1_1R${i}" class="input_tabla " aria-label="Usuarios1"> </input>
    <input
         name="Usuarios1_T1_1R${i}RO" 
             type="checkbox"
         id="Usuarios1_T1_1R${i}RO"
         data-campo="Usuarios1_T1_1R${i}"
       >
    </td>
    <td>
    <input type="number" name="Usuarios2_T1_1R${i}" class="input_tabla " aria-label="Usuarios2"> </input>
    <input
         name="Usuarios2_T1_1R${i}RO" 
             type="checkbox"
         id="Usuarios2_T1_1R${i}RO"
         data-campo="Usuarios2_T1_1R${i}"
       >
    </td>
    <td> 
    <input type="number" name="Usuarios3_T1_1R${i}" class="input_tabla " aria-label="Usuarios3"> </input>
    <input
         name="Usuarios3_T1_1R${i}RO" 
             type="checkbox"
         id="Usuarios3_T1_1R${i}RO"
         data-campo="Usuarios3_T1_1R${i}"
       >
    </td>
    <td>
    <input type="number" name="Usuarios4_T1_1R${i}" class="input_tabla " aria-label="Usuarios4"> </input>
    <input
         name="Usuarios4_T1_1R${i}RO" 
             type="checkbox"
         id="Usuarios4_T1_1R${i}RO"
         data-campo="Usuarios4_T1_1R${i}"
       >
    </td>
    <td>
    <input type="number" name="Usuarios5_T1_1R${i}" class="input_tabla " aria-label="Usuarios5"> </input>
    <input
         name="Usuarios5_T1_1R${i}RO" 
             type="checkbox"
         id="Usuarios5_T1_1R${i}RO"
         data-campo="Usuarios5_T1_1R${i}"
       >
    </td>
    <td>
    <input type="number" name="Usuarios6_T1_1R${i}" class="input_tabla " aria-label="Usuarios6"> </input>
    <input
         name="Usuarios6_T1_1R${i}RO" 
             type="checkbox"
         id="Usuarios6_T1_1R${i}RO"
         data-campo="Usuarios6_T1_1R${i}"
       >
    </td>
    <td>
    <input type="number" name="Usuarios7_T1_1R${i}" class="input_tabla " aria-label="Usuarios7"> </input>
    <input
         name="Usuarios7_T1_1R${i}RO" 
             type="checkbox"
         id="Usuarios7_T1_1R${i}RO"
         data-campo="Usuarios7_T1_1R${i}"
       >
    </td>

    <td>
    <input type="number" name="Usuarios8_T1_1R${i}" class="input_tabla " aria-label="Usuarios8"> </input>
    <input
         name="Usuarios8_T1_1R${i}RO" 
             type="checkbox"
         id="Usuarios8_T1_1R${i}RO"
         data-campo="Usuarios8_T1_1R${i}"
       >
    </td>

    <td>
    <input type="number" name="Usuarios9_T1_1R${i}" class="input_tabla " aria-label="Usuarios9"> </input>
    <input
         name="Usuarios9_T1_1R${i}RO" 
             type="checkbox"
         id="Usuarios9_T1_1R${i}RO"
         data-campo="Usuarios9_T1_1R${i}"
       >
    </td>

    <td>
    <input type="number" name="Usuarios10_T1_1R${i}" class="input_tabla " aria-label="Usuarios10"> </input>
    <input
         name="Usuarios10_T1_1R${i}RO" 
             type="checkbox"
         id="Usuarios10_T1_1R${i}RO"
         data-campo="Usuarios10_T1_1R${i}"
       >
    </td>
  `;




tr2.innerHTML = `
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
        id="Horas_T2R${i}RO" 
        data-campo="Horas_T2R${i}"
    >

</td>

  `;








  tr3.innerHTML = `
         
    <td>
        ${i}
    </td>
     
    <td>
        <input 
            name="Edificio_T3R${i}" 
            class="input_tabla" 
            aria-label="Edificio">
        </input>

        <input
            name="Edificio_T3R${i}RO"
            type="checkbox"
            id="Edificio_T3R${i}RO"
            data-campo="Edificio_T3R${i}"
        >
    </td>

    <td>
        <input 
            type="number" 
            name="MetrosCuadrados_T3R${i}" 
            class="input_tabla" 
            aria-label="MetrosCuadrados">
        </input>

        <input
            name="MetrosCuadrados_T3R${i}RO"
            type="checkbox"
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
            readonly>
        </textarea>

    
    </td>
`;






trC.innerHTML = `
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
            aria-label="Año de la cotizacion">
        </input>

        <input
            name="anio_TCR${i}RO"
            type="checkbox"
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
            aria-label="Año de la cotizacion">
        </input>

        <input
            name="anioA2_TCR${i}RO"
            type="checkbox"
            id="anioA2_TCR${i}RO"
            data-campo="anioA2_TCR${i}"
        >
    </td>


`;









tr4.innerHTML = `
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
            aria-label="Programa Académico">
        </textarea>

        <input
            name="ProgramaAcademico_T4R${i}RO" 
            type="checkbox"
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
            aria-label="Espacio">
        </textarea>

        <input
            name="Espacio_T4R${i}RO"
            type="checkbox"
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
            aria-label="clave">
        </textarea>

        <input
            name="Clave_T4R${i}RO"
            type="checkbox"
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
            aria-label="Nombre del Equipo">
        </textarea>

        <input
            name="nombredelEquipo_T4R${i}RO"
            type="checkbox"
            id="nombredelEquipo_T4R${i}RO"
            data-campo="nombredelEquipo_T4R${i}"
        >
    </td>

    <td class="cantidadCol">

        <input 
            type="number" 
            name="cantidad_T4R${i}" 
            class="input_tabla" 
            aria-label="Cantidad">
        </input>

        <input
            name="cantidad_T4R${i}RO"
            type="checkbox"
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
            aria-label="Especificaciones">
        </textarea>

        <input
            name="especificaciones_T4R${i}RO"
            type="checkbox"
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
            aria-label="Justificación">
        </textarea>

        <input
            name="justificacion_T4R${i}RO"
            type="checkbox"
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
                class="input_tabla precio"
                oninput="formatearMiles(this)"
                inputmode="decimal" 
                aria-label="Precio"> 
            </input>
        </div>

        <input
            name="precio_T4R${i}RO"
            type="checkbox"
            id="precio_T4R${i}RO"
            data-campo="precio_T4R${i}"
        >
    </td>
    
    <td>
        <textarea
            name="nombreCotizacion_T4R${i}"
            class="auto-expand input_tabla obligatorio"
            rows="1"
            style="resize:none;"
            aria-label="Nombre del archivo donde esta la Cotizacion del Equipo">
        </textarea>

        <input
            name="nombreCotizacion_T4R${i}RO"
            type="checkbox"
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
            aria-label="Url de las Cotizaciones">
        </textarea>

        <input
            name="urlCotizacionAdquisicion_T4R${i}RO"
            type="checkbox"
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
                class="input_tabla precio"
                oninput="formatearMiles(this)"
                inputmode="decimal" 
                aria-label="Precio 2"> 
            </input>
        </div>

        <input
            name="precio2_T4R${i}RO"
            type="checkbox"
            id="precio2_T4R${i}RO"
            data-campo="precio2_T4R${i}"
        >
    </td>
     
    <td>
        <textarea
            name="nombreCotizacion_T4R${i}"
            class="auto-expand input_tabla obligatorio"
            rows="1"
            style="resize:none;"
            aria-label="Nombre del archivo donde esta la Cotizacion del Equipo">
        </textarea>

        <input
            name="nombreCotizacion2_T4R${i}RO"
            type="checkbox"
            id="nombreCotizacion_T4R${i}RO"
            data-campo="nombreCotizacion_T4R${i}"
        >
    </td>

    <td class="paso">
        <textarea
            name="urlCotizacionAdquisicion2_T4R${i}"
            class="auto-expand input_tabla"
            rows="1"
            style="resize:none;"
            aria-label="Url de las Cotizaciones">
        </textarea>

        <input
            name="urlCotizacionAdquisicion2_T4R${i}RO"
            type="checkbox"
            id="urlCotizacionAdquisicion2_T4R${i}RO"
            data-campo="urlCotizacionAdquisicion2_T4R${i}"
        >
    </td>
`;







tr5.innerHTML = `
    <td>
        ${i}
    </td>

    <td>
        <textarea
            name="ProgramaAcademico_T5R${i}"
            class="auto-expand input_tabla obligatorio"
            rows="1"
            style="resize:none;"
            aria-label="Programa Académico">
        </textarea>

        <input
            name="ProgramaAcademico_T5R${i}RO"
            type="checkbox"
            id="ProgramaAcademico_T5R${i}RO"
            data-campo="ProgramaAcademico_T5R${i}"
        >
    </td> 
    
    <td>
        <textarea
            name="Espacio_T5R${i}"
            class="auto-expand input_tabla obligatorio"
            rows="1"
            style="resize:none;"
            aria-label="Espacio">
        </textarea>

        <input
            name="Espacio_T5R${i}RO"
            type="checkbox"
            id="Espacio_T5R${i}RO"
            data-campo="Espacio_T5R${i}"
        >
    </td>

    <td>
        <textarea
            name="nombredelEquipo_T5R${i}"
            class="auto-expand input_tabla obligatorio"
            rows="1"
            style="resize:none;"
            aria-label="Nombre del Equipo">
        </textarea>

        <input
            name="nombredelEquipo_T5R${i}RO"
            type="checkbox"
            id="nombredelEquipo_T5R${i}RO"
            data-campo="nombredelEquipo_T5R${i}"
        >
    </td>

    <td>
        <textarea
            name="especificaciones_T5R${i}"
            class="auto-expand input_tabla"
            rows="1"
            style="resize:none;"
            aria-label="Especificaciones">
        </textarea>

        <input
            name="especificaciones_T5R${i}RO"
            type="checkbox"
            id="especificaciones_T5R${i}RO"
            data-campo="especificaciones_T5R${i}"
        >
    </td>

    <td class="cantidadCol">

        <input 
            type="number" 
            name="cantidadMal_estado_T5R${i}" 
            class="input_tabla" 
            aria-label="Cantidad en mal estado">
        </input>

        <input
            name="cantidadMal_estado_T5R${i}RO"
            type="checkbox"
            id="cantidadMal_estado_T5R${i}RO"
            data-campo="cantidadMal_estado_T5R${i}"
        >

    </td>

    <td class="cantidadCol">

        <input 
            type="number" 
            name="cantidadBuen_estado_T5R${i}" 
            class="input_tabla" 
            aria-label="Cantidad en buen estado">
        </input>

        <input
            name="cantidadBuen_estado_T5R${i}RO"
            type="checkbox"
            id="cantidadBuen_estado_T5R${i}RO"
            data-campo="cantidadBuen_estado_T5R${i}"
        >

    </td>

    <td class="cantidadCol">

        <input 
            type="number" 
            name="cantidadRegular_estado_T5R${i}" 
            class="input_tabla" 
            aria-label="Cantidad en estado Regular">
        </input>

        <input
            name="cantidadRegular_estado_T5R${i}RO"
            type="checkbox"
            id="cantidadRegular_estado_T5R${i}RO"
            data-campo="cantidadRegular_estado_T5R${i}"
        >

    </td>
`;




/*


tr6.innerHTML = `
    <td>
      <textarea
        name="ProgramaAcademico_T6R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Programa Académico"
        > </textarea>
    </td> 
    
    <td>
    <textarea
        name="Espacio_T6R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Espacio"
        > </textarea></td>


    <td>
      <textarea
        name="nombredelEquipo_T6R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Nombre del Equipo"
        > </textarea>
    </td>
    
    

    

    <td>
      <textarea
        name="especificaciones_T6R${i}"
        class="auto-expand input_tabla"
        rows="1"
        style="resize:none;"
        aria-label="Especificaciones"
        > </textarea>
    </td>

  
    <td class="cantidadCol">

      <input type="number" name="cantidadBuen_estado_T6R${i}" class="input_tabla " aria-label="Cantidad en buen estado"> </input>  
    
      </td>
    <td class="cantidadCol">

      <input type="number" name="cantidadRegular_estado_T6R${i}" class="input_tabla " aria-label="Cantidad en estado Regular"> </input>  
    
      </td>
     

`;




*/



/*


  tbody.appendChild(tr);
  tbody1.appendChild(tr1);
  tbody2.appendChild(tr2);
  tbody3.appendChild(tr3);
  tbody4.appendChild(tr4);
  tbodyC.appendChild(trC);
  tbody5.appendChild(tr5);*/
  /*
  tbody6.appendChild(tr6);
*/
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
/*




function obtenerDependencia(folio) {
    const clave = extraerClaveDependencia(folio);

    return dependencias.get(clave) ?? "Dependencia no encontrada";
}

const dependenciaB = obtenerDependencia(folio);

document.querySelector("#dependencia").value = dependenciaB;


const folio = document.getElementById("folioInput").value.trim();
function obtenerDependencia(folio) {
     
 // const clave = extraerClaveDependencia(folio);

    return dependencias.get(folio) ?? "Dependencia no encontrada";
}

function cargarDep(){
   const folio = document.getElementById("folioInput").value.trim();

    if (!folio) {
        alert("Escribe un folio primero.");
        return;
    }

    const dependenciaB = obtenerDependencia(folio);

    setSelectValue("dependencia", dependenciaB);    
  
             
}
// document.querySelector("#dependencia").value = ;



document.getElementById("cargarDependencia").addEventListener("click", cargarDep);






*/

// document.querySelector("#dependencia").value = ;



function obtenerFolio(dependenciaA) {
     
    return folios.get(dependenciaA) ?? "folio de la Dependencia no encontrado";
}

function cargarFol(){

const    dependenciaI = document.getElementById("dependencia").value.trim();


    if (!dependenciaI) {
        alert("Selecciona una dependencia primero.");
        return;
    }

    const folioB = obtenerFolio(dependenciaI);

    document.getElementById("folioInput").value=folioB;    
       
             
}

document.getElementById("cargarFolio").addEventListener("click", cargarFol);


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

/*

document.getElementById("tablaBody6").addEventListener("input", function (e) {
  if (!e.target.classList.contains("obligatorio")) return;

  const fila = e.target.closest("tr");
  actualizarObligatoriedadFila(fila);
});
*/



//----------------------Agregar fila

//-----------------------Agergar fila tabla 1


/*
function agregarFila6(){
  const tbody = document.getElementById("tablaBody6");
  const i = obtenerNumeroFila6();


  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>
      <textarea
        name="ProgramaAcademico_T6R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Programa Académico"
        > </textarea>
    </td> 
    
    <td>
    <textarea
        name="Espacio_T6R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Espacio"
        > </textarea></td>
    
    <td>
      <textarea
        name="nombredelEquipo_T6R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Nombre del Equipo"
        > </textarea>
    </td>
    
    

    

    <td>
      <textarea
        name="especificaciones_T6R${i}"
        class="auto-expand input_tabla"
        rows="1"
        style="resize:none;"
        aria-label="Especificaciones"
        > </textarea>
    </td>

      

    <td class="cantidadCol">

      <input type="number" name="cantidadBuen_estado_T6R${i}" class="input_tabla " aria-label="Cantidad en buen estado"> </input>  
    
      </td>
    <td class="cantidadCol">

      <input type="number" name="cantidadRegular_estado_T6R${i}" class="input_tabla " aria-label="Cantidad en estado Regular"> </input>  
    
      </td>
     

`;

  tbody.appendChild(fila);

//  generarNivel();
//  generarDependencia();
  activarAutoExpand(fila);
}

*/





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








/*dependencia.addEventListener("mousedown", e => {
  e.preventDefault();
});
*/

const direccionEnlace="https://script.google.com/macros/s/AKfycbxMWW1L4i_8R0b8GM9M-Hn3WOYriq_-GKdkYoauB5PfN8N-XOlG85jMrzuama1AnPr_/exec"

let folioActual=null;
let edicionActual=null;
let numerodeEnvio=1;
let ExistenciaDeCotizaciones=false;
let ExistenciaDeCotizaciones_T4=false;

let ExistenciaDeCotizacionesA2=false;
let ExistenciaDeCotizacionesA2_T4=false;

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
    document.getElementById("UsuariosHAnio1").textContent = config.encabezado1;
    document.getElementById("UsuariosMAnio1").textContent = config.encabezado2;
    document.getElementById("UsuariosHAnio2").textContent = config.encabezado3;
    document.getElementById("UsuariosMAnio2").textContent = config.encabezado4;
    document.getElementById("UsuariosHAnio3").textContent = config.encabezado5;
    document.getElementById("UsuariosMAnio3").textContent = config.encabezado6;
document.getElementById("UsuariosHAnio1Obs").textContent = config.encabezado1;
    document.getElementById("UsuariosMAnio1Obs").textContent = config.encabezado2;
    document.getElementById("UsuariosHAnio2Obs").textContent = config.encabezado3;
    document.getElementById("UsuariosMAnio2Obs").textContent = config.encabezado4;
    document.getElementById("UsuariosHAnio3Obs").textContent = config.encabezado5;
    document.getElementById("UsuariosMAnio3Obs").textContent = config.encabezado6;
    


    document.getElementById("UsuariosHAnio4").textContent = config.encabezado13;
    document.getElementById("UsuariosMAnio4").textContent = config.encabezado14;
    document.getElementById("UsuariosHAnio5").textContent = config.encabezado15;
    document.getElementById("UsuariosMAnio5").textContent = config.encabezado16;
    
    document.getElementById("UsuariosHAnio4Obs").textContent = config.encabezado13;
    document.getElementById("UsuariosMAnio4Obs").textContent = config.encabezado14;
    document.getElementById("UsuariosHAnio5Obs").textContent = config.encabezado15;
    document.getElementById("UsuariosMAnio5Obs").textContent = config.encabezado16;
    

    document.getElementById("UsuariosAHAnio1").textContent = config.encabezado7;
    document.getElementById("UsuariosAMAnio1").textContent = config.encabezado8;
    document.getElementById("UsuariosAHAnio2").textContent = config.encabezado9;
    document.getElementById("UsuariosAMAnio2").textContent = config.encabezado10;
    document.getElementById("UsuariosAHAnio3").textContent = config.encabezado11;
    document.getElementById("UsuariosAMAnio3").textContent = config.encabezado12,
    
    document.getElementById("UsuariosAHAnio1Obs").textContent = config.encabezado7;
    document.getElementById("UsuariosAMAnio1Obs").textContent = config.encabezado8;
    document.getElementById("UsuariosAHAnio2Obs").textContent = config.encabezado9;
    document.getElementById("UsuariosAMAnio2Obs").textContent = config.encabezado10;
    document.getElementById("UsuariosAHAnio3Obs").textContent = config.encabezado11;
    document.getElementById("UsuariosAMAnio3Obs").textContent = config.encabezado12;


    document.getElementById("UsuariosAHAnio4").textContent = config.encabezado17;
    document.getElementById("UsuariosAMAnio4").textContent = config.encabezado18;
    document.getElementById("UsuariosAHAnio5").textContent = config.encabezado19;
    document.getElementById("UsuariosAMAnio5").textContent = config.encabezado20;
    
    document.getElementById("UsuariosAHAnio4Obs").textContent = config.encabezado17;
    document.getElementById("UsuariosAMAnio4Obs").textContent = config.encabezado18;
    document.getElementById("UsuariosAHAnio5Obs").textContent = config.encabezado19;
    document.getElementById("UsuariosAMAnio5Obs").textContent = config.encabezado20;

    
};

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
