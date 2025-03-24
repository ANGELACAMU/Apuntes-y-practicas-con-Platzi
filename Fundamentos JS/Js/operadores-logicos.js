//operadores lógicos

&& // si este valor (y) el otro son o hacen esto son esto
|| // si este valor (Ó) este otro valor
    ! // valor de NO (si este valor NO es esto)

const a = 10
const b = 20
const c = "10"

// si a es igual a b y a es igual igual igual a c 
a == b && a === c // devuelve >false xq a no es igual a b y a y c tienen valores distintos

// si a es diferente a b Ó a es igual a c 
a != b || a === // devuelve >true porque sabemos que en la condicional de === alguna de las dos se tiene que cumplir por usar el Ó ||

    //si a es === a c
    !(a === c)
//devuelve >true , sabemos que a en valor es igual pero en el tipo de valor es diferente x lo tanto nos daría false, pero al hacer la negacion (!) convertimos el false en true