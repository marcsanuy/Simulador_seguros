// obtener diferencia de años

export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

// calcula el total a pagar según la zona
export function calcularZona(zone) {
    let incremento;

    switch(zone) {
        case 'americano':
            incremento = 1.10;
            break;
        case 'asiatico':
            incremento = 1.06;
            break;
        case 'europeo':
            incremento = 1.02;
            break;
        default:
            break;
    }

    return incremento;
}

// Calcula el tipo de seguro
export function calcularTipoSeguro(type) {
    let plan;

    switch(type) {
        case 'terceros':
            plan = 1.1;
            break;
        case 'terceros ampliado':
            plan = 1.5;
            break;
        case 'todo riesgo':
            plan = 2;
            break;
        default:
            break;
    }

    return plan;
}