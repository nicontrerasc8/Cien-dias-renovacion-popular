export default function DatabaseData() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 1000)
    })
}
const data = [
    {
        legend:"#1 Hambre cero",
        description:"Mediante la fusión de ministerios de agricultura, pesquería y producción, crearemos el ministerio de la alimentación, el cual mediante programas estatales y centrales de compra de alimentos peruanos se combata contra el hambre. Nuestro partido busca garantizar que el 100% de los ciudadanos peruanos desde el vientre de su mamá, estén bien alimentados.",
        how: "Primero que nada impondremos una multa de 20 mil millones de dólares a Odebrecht. Parte del dinero recuperado, se dispondrá en función de brindar alimentos peruanos a las personas más necesitadas de nuestro país. La entrega de los alimentos se hará gracias al programa Juventud Solidaria, donde millones de jóvenes podrán realizar voluntariado los días sábado y llevar estos alimentos a las zonas de pobreza y extrema pobreza."
    },
    {
        legend: "#2 Postas médicas",
        description:"Nuestro partido busca re-abrir las postas médicas y equiparlas con oxígeno y medicamentos que luchen contra el Coronavirus. Estas estarán abiertas las 24 horas.",
        how:"Una gran parte de la inversión pública será destinada a la reapertura de las postas médicas. Además promoveremos la producción de oxígeno en el Perú utilizando las universidades nacionales y apoyaremos la producción de vacunas con el laboratorio Farvet en Chincha, para así tener además de vacunas internacionales, la vacuna peruana."
    },
    {
        legend: "#3 Seguridad ciudadana",
        description:"Deportaremos a todo extranjero que incumpla la ley y fortaleceremos a la Policía Nacional del Perú (PNP).",
        how:"Crearemos comisarias en las zonas más inseguras de todo el país y brindaremos a los policías y serenazgos motos alquiladas con GPS."
    },
    {
        legend:"#4 Educación de calidad",
        description:"Nuestra principal propuesta en el sector educación se basa en brindar tablets a los niños y jóvenes de colegios, institutos y universidades nacionales. Vamos a luchar para que las tablets estén implementadas a partir del 28 de julio de 2021.",
        how:"Haremos viable la llegada del millón de tablets que serán implementadas a los niños y jóvenes. A esto le añadimos internet satelital, que aparte de tener un costo no muy elevado, es altamente efectivo.",
    }
]