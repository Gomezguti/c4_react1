import { Fragment, useState } from "react";
import ProyectListItem from "./ProyectListItem";

const HorasProyecto = function (props) {

    const [ lista_datos, setListaDatos ] = useState([
        { id:"2", nombre: "Sistema de Control de Inventarios", fechaInicio: "11/12/2021", fechaFinal: "31/12/2021", horasDefinidas: "20", horasReportadas: "10", descripcion: "Sistema para controlar inventarios de bodegas con multiples ubicaciones.", empleado:"Alfredo M", completado: false },
        { id:"4", nombre: "Sistema de Control de Riego de Cultivos", fechaInicio: "11/12/2021", fechaFinal: "31/12/2021", horasDefinidas: "20", horasReportadas: "10", descripcion: "Servicio RESTful para para dispositivos IoT que activan o desactivan los sistemas de riego de cultivos.", empleado:"Jorge R", completado: false },
        { id:"5", nombre: "Sistema de Control de Temperatura", fechaInicio: "11/12/2021", fechaFinal: "31/12/2021", horasDefinidas: "20", horasReportadas: "10", descripcion: "Servicio RESTful para para dispositivos IoT que emite alertas cuando la temperatura de los contenedores sale de los umbrales permitidos.", empleado:"Jimmy V", completado: false }
      ]);
      
    const listaProyectos = lista_datos.map ( p => 
        <ProyectListItem 
            key={ p.id }
            layout='HorasProyectos'
            {...p}
        />
    );

    return (
        <Fragment>
             <div class="card text-center">
                <div class="card-body">
                    <h2 class="card-title">Informe Horas por Proyecto</h2>
                    <p class="card-text">Número de horas esperadas para cada proyecto y el número de horas ejecutadas.</p>
                </div>
            </div>
            <div className="container">
                <div className="list-group mt-lg-5">{listaProyectos}</div>
                {/* <Paginator /> */}
            </div>
    </Fragment>
    );
}

export default HorasProyecto;