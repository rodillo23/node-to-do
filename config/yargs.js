const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion : {
            demand : true,
            alias : 'd',
            desc : 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion : {
            demand : true,
            alias : 'd',
            desc : 'Descripcion de la tarea por hacer'
        },
        completado : {
            alias : 'c',
            default : true,
            desc : 'Marca como colpetado o pendiente la tarea'
        }
    }).command('borrar', 'Borra el registro de una tarea', {
        descripcion:{
            alias : 'd',
            demand : true,
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}
