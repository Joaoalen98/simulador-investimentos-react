function formatarReal (valor: number) {
    return valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
}

export default formatarReal