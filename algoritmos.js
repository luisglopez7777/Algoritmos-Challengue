const prompt = require('prompt')
prompt.start()

class HouseSuper {
    start() {
        prompt.get(['Sabes donde esta el super? \n 1 = si \n 2 =no'], (err, result) => {
            let respuesta = Object.values(result)[0]
            if (respuesta === '1') {
                console.log('sube al lamborghini, empieza la ruta y revisa la gasolina')
                this.gasolina()
            } else {
                console.log('Busca en Google el super mas lejano')
                this.gasolina()
            }
        })
    }

    gasolina() {
        let promesa = new Promise((resolve, reject) => {
            prompt.get(['Tienese suficiente gasolina para ir al super y regresar?\n 1 = si \n 2 =no'], (err, result) => {
                let respuesta = Object.values(result)[0]
                if (respuesta === '1') {
                    console.log('Sigue la ruta')
                    resolve(this.semaforo())
                } else {
                    console.log('Parate en la gasolinera del britania')
                    resolve(this.gasolina())
                }
            })
        })
        return promesa
    }
    semaforo() {
        let promesa = new Promise((resolve, reject) => {
            prompt.get(['Hay algun semaforo?\n 1 = si \n 2 =no'], (err, result) => {
                let respuesta = Object.values(result)[0]
                if (respuesta !== '2') {
                    prompt.get(['De que color es el semaforo? 1 verde 2 amarillo 3 rojo'], (err, result) => {
                        let respuesta2 = Object.values(result)[0]
                        if (respuesta2 === '1') {
                            console.log('Continua manejando')
                            resolve(this.semaforo())
                        } else {
                            console.log('Espera y cuando el semaforo este en verde continua manejando')
                            resolve(this.semaforo())
                        }
                    })
                    // this.semaforo()
                } else {
                    console.log('Continua hasta llegar a tu destino')
                    resolve(console.log('Felicidades, has llegado a tu destino'))
                }
            })
        })
        return promesa
    }
}



class FoodDelivery {
    start() {
        let promesa = new Promise((resolve, reject) => {
            console.log('Busca en google la comida que quieres pedir')
            resolve(this.uberEats())
        })
        return promesa
    }
    uberEats() {
        let promesa = new Promise((resolve, reject) => {
            prompt.get(['Esta la comida en UberEats?\n 1 = si \n 2 =no'], (err, result) => {
                let respuesta = Object.values(result)[0]
                if (respuesta === '1') {
                    console.log('Pide la comida directamente desde ahi')
                    resolve(this.confirmOrder())
                } else {
                    console.log('Marca por telefono al local')
                    resolve(this.confirmOrder())
                }
            })
        })
        return promesa
    }
    confirmOrder() {
        let promesa = new Promise((resolve, reject) => {
            console.log('Confirma el pedido, anota el precio y espera 30 minutos')
            resolve(this.orderArrived())
        })
        return promesa
    }
    orderArrived() {
        let promesa = new Promise((resolve, reject) => {
            prompt.get(['Ya llego el pedido?\n 1 = si \n 2 =no'], (err, result) => {
                let respuesta = Object.values(result)[0]
                if (respuesta === '1') {
                    console.log('Sal y recibe amablemente al repartidor')
                    resolve(this.isOrderGood())
                } else {
                    console.log('Continua esperando')
                    resolve(this.orderArrived())
                }
            })
        })
        return promesa
    }
    isOrderGood() {
        let promesa = new Promise((resolve, reject) => {
            prompt.get(['Es el pedido y precio como lo pediste?\n 1 = si \n 2 =no'], (err, result) => {
                let respuesta = Object.values(result)[0]
                if (respuesta === '1') {
                    console.log('Recibe el pedido y preparate para pagar')
                    resolve(this.isTip())
                } else {
                    console.log('Cancela el pedido y vuelve a ordenar')
                    resolve(this.start())
                }
            })
        })
        return promesa
    }
    isTip() {
        let promesa = new Promise((resolve, reject) => {
            prompt.get(['Estas satisfecho con el servicio?\n 1 = si \n 2 =no'], (err, result) => {
                let respuesta = Object.values(result)[0]
                if (respuesta === '1') {
                    console.log('Paga el pedido y da un 15% de propina')
                    resolve(this.end())
                } else {
                    console.log('Paga exactamente el precio del pedido')
                    resolve(this.end())
                }
            })
        })
        return promesa
    }

    end() {
        let promesa = new Promise((resolve, reject) => {
            resolve(console.log('Enjoy!'))
        })
        return promesa
    }
}

// const fooDelivery = new FoodDelivery()
// fooDelivery.start()

class DoSuper {
    start() {
        let promesa = new Promise((resolve, reject) => {
            let despensa = ['arroz', 'aceite', 'vino', 'pizza', 'pastel']
            console.log('Que te gustaría tener en el super?')
            prompt.get(['Objeto 1', 'Objeto2', 'Objeto3', 'Objeto4', 'Objeto5'], (err, result) => {
                let array = Object.values(result)
                console.log('Lo que necesitas es:', array)
                console.log('En despensa tienes:', despensa)
                array.map(item => {
                    despensa.map(des => {
                        if (item === des) {
                            array = array.filter((product) => {
                                return product !== item
                            })
                        }
                    })
                })
                console.log('La lista de lo que necesitas comprar en el supermercado es: ', array)
                console.log('Busca en Google el super mas cercano')

                //Falta
                let goSuper = new HouseSuper()

                return goSuper.gasolina().then(() => {
                    return resolve(this.isSuperComplete())
                })
            })
        })
        return promesa
    }
    isSuperComplete() {
        let promesa = new Promise((resolve, reject) => {
            prompt.get(['Está todo lo que buscas en el super?\n 1 = si \n 2 =no'], (err, result) => {
                let respuesta = Object.values(result)[0]
                if (respuesta === '1') {
                    console.log('Paga en caja, sube a tu coche y regresa a casa')
                    let backHome = new HouseSuper()
                    return backHome.semaforo().then(() => {
                        return resolve(console.log('Super terminado, felicidades!'))
                    })
                } else {
                    console.log('Paga en caja y lo pedirás desde casa.')
                    console.log('Sube al coche para regresar a tu casa')
                    let backHome = new HouseSuper()
                    return backHome.semaforo().then(() => {
                        let otherFood = new FoodDelivery()
                        return otherFood.start().then(() => {
                            resolve(console.log('Super terminado, felicidades!'))
                        })
                    })
                }
            })
        })
        return promesa
    }
}

// const doSuper = new DoSuper()
// doSuper.start()

class ChargeCellphone {
    start() {
        prompt.get(['Tienes el 100% de pila\n 1 = si \n 2 =no'], (err, result) => {
            let respuesta = Object.values(result)[0]
            if (respuesta === '1') {
                this.end()
            } else {
                this.evaluateCharge()
            }
        })
    }
    evaluateCharge() {
        prompt.get(['Se esta cargando tu celular?\n 1 = si \n 2 =no'], (err, result) => {
            let respuesta = Object.values(result)[0]
            if (respuesta === '1') {
                console.log('Espera 20 minutos')
                this.start()
            } else {
                this.chargeCellphone()
            }
        })
    }

    chargeCellphone() {
        console.log('Conecta tu celular al cargador y a una fuente de energía')
        this.evaluateCharge()
    }

    end() {
        console.log('Felicidades! Tu celular esta cargado')
    }
}

// const chargeCellphone = new ChargeCellphone()
// chargeCellphone.start()

class RiceCooking {
    start() {
        console.log('Los ingredientes son arroz, aceite, agua y sal. Ve y revisa la despensa')
        let shopRice = new DoSuper()
        shopRice.start().then(() => {
            console.log('Poner el arroz en tazas, y después en una cacerola. Por cada tasa de arroz son dos cucharadas de aceite')
            console.log('Caliente la cazuela')
            prompt.get(['Esta la cazuela caliente?\n 1 = si \n 2 =no'], (err, result) => {
                let respuesta = Object.values(result)[0]
                if (respuesta === '1') {
                    console.log('Añade 2.5 tasas de agua por cada tasa de arroz y pon el fuego alto')
                    this.addWater()
                } else {
                    console.log('Espera 2 minutos a que la casuela este caliente')
                    console.log('Añade 2.5 tasas de agua por cada tasa de arroz y pon el fuego alto')
                    this.addWater()
                }
            })
        })
    }
    addWater() {
        prompt.get(['Esta el agua hirviendo?\n 1 = si \n 2 =no'], (err, result) => {
            let respuesta = Object.values(result)[0]
            if (respuesta === '1') {
                this.addSalt()
            } else {
                console.log('Espera 2 minutos')
                this.addWater()
            }
        })
    }
    addSalt() {
        console.log('Agrega sal y pon a fuego medio por 12 minutos...')
        this.lowFire()
    }
    lowFire() {
        console.log('Fuego lento por 3 minutos')
        console.log('Apaga y deja el arroz reposando por 5 minutos')
        console.log('Prueba el arroz')
        prompt.get(['Está rico el arroz?\n 1 = si \n 2 =no'], (err, result) => {
            let respuesta = Object.values(result)[0]
            if (respuesta === '1') {
                this.end()
            } else {
                console.log('Agrega un poco de sal')
                this.lowFire()
            }
        })
    }
    end() {
        console.log('Disfruta!')
    }
}

// const riceCooking = new RiceCooking()
// riceCooking.start()

function start() {
    prompt.get(['Que es lo que quieres hacer?\n 1 = Ir al supermercado mas lejos de la ciudad \n 2 = Pedir comida a domicilio\n 3 = Hacer mercado\n 4 = Poner a cargar tu celular \n 5 = Cocinas arroz'], (err, result) => {
        let respuesta = Object.values(result)[0]
        switch (respuesta) {
            case '1':
                const houseSuper = new HouseSuper()
                return houseSuper.start()

            case '2':
                const foodDelivery = new FoodDelivery()
                return foodDelivery.start()

            case '3':
                const doSuper = new DoSuper()
                return doSuper.start()

            case '4':
                const chargeCellphone = new ChargeCellphone()
                return chargeCellphone.start()

            case '5':
                const riceCooking = new RiceCooking()
                return riceCooking.start()

            default:
                return console.log('Fallaste')
        }
    })
}

start()