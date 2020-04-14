import React,{Component} from 'react';
import uuid from 'uuid/v4';

 class AgregarCita extends Component {


    // refs
    MascotaRef = React.createRef();
    DueñoRef = React.createRef();
    FechaRef = React.createRef();
    HoraRef = React.createRef();
    SintomasRef = React.createRef();

    state = { 
        error: false
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const mascota = this.MascotaRef.current.value,
              propietario = this.DueñoRef.current.value,
              fecha = this.FechaRef.current.value,
              hora = this.HoraRef.current.value,
              sintomas = this.SintomasRef.current.value;

              if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas ===''){
                    this.setState({
                        error: true
                    })
              } else {

        const nuevaCita = {
            id : uuid(),
            mascota,
            propietario,
            fecha,
            hora,
            sintomas
        }
        // se envia el objeto hacia el padre para actualizar el state
        this.props.crearCita(nuevaCita)

        //Reiniciar el formulario
        e.currentTarget.reset();
    }
}

    render() {
        const existeError =this.state.error ;
        return (
            <div className="card mt-5"> 
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agrega las citas Aqui</h2>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                    <div className="col-sm-8 col-lg-10">
                        <input ref={this.MascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                    <div className="col-sm-8 col-lg-10">
                        <input ref={this.DueñoRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                    <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                        <input ref={this.FechaRef} type="date" className="form-control" />
                    </div>                            

                    <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="col-sm-8 col-lg-4">
                            <input ref={this.HoraRef} type="time" className="form-control" />
                        </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                    <div className="col-sm-8 col-lg-10">
                        <textarea ref={this.SintomasRef}  className="form-control"></textarea>
                    </div>
                </div>
                <div className="form-group row justify-content-end">
                    <div className="col-sm-3">
                        <button type="submit" className="btn btn-success w-100">Agregar</button>
                    </div>
                </div>
                </form>
                { existeError ? <div className="alert alert-danger text-center">Todos los campos son Obligatorios</div> : '' }
                </div>
                </div>
        );
    }
}

export default AgregarCita;