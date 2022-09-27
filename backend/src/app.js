require('./db/mongoose')

// const port = process.env.PORT || 3001
const port = 3001 //rc95 26/08/2022 01:10 - forzamos el puerto en heroku
const express = require('express')
const app = express()

//rc95 25/08/2022 02:29
const cors = require('cors')
app.use(cors({ origin: "*" }))

// JSON Middleware
app.use(express.json());

// Import routes
// const notesRouter = require('./routes/notesRoutes')


// Route middleware
// app.use("/api/notes", notesRouter);

app.get("/", (req, res) => {
    res.send('hello world from Lady - nodejs backend')
});

app.get("/api/ping", (req, res) => {
    res.send('pong')
});

app.get('/*', (req, res) => {
    res.status(404).send()
})

const main = async () => {
    console.log(` *** Vamos a empezar a poblar la BD..`)

    //todo esto debemos eliminar mas adelante y poner los apropiados routers-controllers..

    //rc95 27/09/2022 19:31 - document_type
    const role = require('./models/role')
    const visitor_role = await new role({ name: 'Visitor' }).save()
    const player_role = await new role({ name: 'Player' }).save()
    const user_role = await new role({ name: 'User' }).save()
    const deo_role = await new role({ name: 'Data Entry Operator' }).save()
    const sa_role = await new role({ name: 'Super Admin' }).save()

    //users..
    const user = require('./models/user')
    const visitor_user = await new user({ username: 'visit', password: 'visit', id_role: visitor_role._id }).save()
    const normal_user = await new user({ username: 'test', password: 'test', id_role: user_role._id }).save()
    const deo_user = await new user({ username: 'deo', password: 'deo', id_role: deo_role._id }).save()
    const sa_user = await new user({ username: 'sa', password: 'admin', id_role: sa_role._id }).save()


    //rc95 24/09/2022 10:54
    const continent = require('./models/continent')
    const asia = await new continent({ name: 'Asia' }).save()
    const america_norte = await new continent({ name: 'América del Norte' }).save()
    const america_sur = await new continent({ name: 'América del Sur' }).save()
    const america_central = await new continent({ name: 'América Central' }).save()
    const america_insular = await new continent({ name: 'América Insular' }).save()
    const africa = await new continent({ name: 'Africa' }).save()
    const antartida = await new continent({ name: 'Antartida' }).save()
    const europa = await new continent({ name: 'Europa' }).save()
    const oceania = await new continent({ name: 'Oceania' }).save()

    //America del Norte
    const country = require('./models/country')
    const bermudas = await new country({ name: 'Bermudas', id_continent: america_norte._id }).save()
    const canada = await new country({ name: 'Canada', id_continent: america_norte._id }).save()
    const united_states = await new country({ name: 'United States', id_continent: america_norte._id }).save()
    const groenland = await new country({ name: 'Groenland', id_continent: america_norte._id }).save()
    const mexico = await new country({ name: 'Mexico', id_continent: america_norte._id }).save()
    const saint_pierre = await new country({ name: 'San Pedro y Miquelón', id_continent: america_norte._id }).save()

    //America del Sur
    const argentina = await new country({ name: 'Argentina', id_continent: america_sur._id }).save()
    const bolivia = await new country({ name: 'Bolivia', id_continent: america_sur._id }).save()
    const brasil = await new country({ name: 'Brasil', id_continent: america_sur._id }).save()
    const chile = await new country({ name: 'Chile', id_continent: america_sur._id }).save()
    const colombia = await new country({ name: 'Colombia', id_continent: america_sur._id }).save()
    const ecuador = await new country({ name: 'Ecuador', id_continent: america_sur._id }).save()
    const guayana_francesa = await new country({ name: 'Guayana Francesa', id_continent: america_sur._id }).save()
    const guyana = await new country({ name: 'Guyana', id_continent: america_sur._id }).save()
    const paraguay = await new country({ name: 'Paraguay', id_continent: america_sur._id }).save()
    const perú = await new country({ name: 'Perú', id_continent: america_sur._id }).save()
    const surinam = await new country({ name: 'Surinam', id_continent: america_sur._id }).save()
    const uruguay = await new country({ name: 'Uruguay', id_continent: america_sur._id }).save()
    const venezuela = await new country({ name: 'Venezuela', id_continent: america_sur._id }).save()


    //rc95 27/09/2022 19:31 - document_type
    const identifier_type = require('./models/identifier_type')
    const cedula_py = await new identifier_type({ name: 'Cedula de identidad Paraguaya', id_country: paraguay._id }).save()
    const pasaporte_py = await new identifier_type({ name: 'Pasaporte', id_country: paraguay._id }).save()
    const dni_argentina = await new identifier_type({ name: 'DNI', id_country: argentina._id }).save()


    //17 estados (departamentos) de paraguay
    const state = require('./models/state')
    const asuncion_state = await new state({ name: 'Asunción', id_country: paraguay._id }).save()

    const alto_paraguay = await new state({ name: 'Alto Paraguay', id_country: paraguay._id }).save()
    const alto_parana = await new state({ name: 'Alto Parana', id_country: paraguay._id }).save()
    const amambay = await new state({ name: 'Amambay', id_country: paraguay._id }).save()
    const boqueron = await new state({ name: 'Boquerón', id_country: paraguay._id }).save()
    const caaguazu = await new state({ name: 'Caaguazú', id_country: paraguay._id }).save()
    const caazapa = await new state({ name: 'Caazapá', id_country: paraguay._id }).save()
    const canindeyu = await new state({ name: 'Canindeyú', id_country: paraguay._id }).save()
    const central = await new state({ name: 'Central', id_country: paraguay._id }).save()
    const concepcion = await new state({ name: 'Concepción', id_country: paraguay._id }).save()
    const guaira = await new state({ name: 'Guairá', id_country: paraguay._id }).save()
    const itapua = await new state({ name: 'Itapúa', id_country: paraguay._id }).save()
    const cordillera = await new state({ name: 'Cordillera', id_country: paraguay._id }).save()
    const misiones = await new state({ name: 'Misiones', id_country: paraguay._id }).save()
    const ñeembucu = await new state({ name: 'Ñeembucú', id_country: paraguay._id }).save()
    const paraguari = await new state({ name: 'Paraguarí', id_country: paraguay._id }).save()
    const presidente_hayes = await new state({ name: 'Presidente Hayes', id_country: paraguay._id }).save()
    const san_pedro = await new state({ name: 'San Pedro', id_country: paraguay._id }).save()


    //ciudades de asunción y central
    const city = require('./models/city')
    const asuncion = await new city({ name: 'Asunción', id_state: asuncion_state._id }).save()

    const luque = await new city({ name: 'Luque', id_state: central._id }).save()
    const san_lorenzo = await new city({ name: 'San Lorenzo', id_state: central._id }).save()
    const capiata = await new city({ name: 'Capiatá', id_state: central._id }).save()
    const lambare = await new city({ name: 'Lambaré', id_state: central._id }).save()
    const fdo_de_la_mora = await new city({ name: 'Fernando de la Mora', id_state: central._id }).save()
    const limpio = await new city({ name: 'Limpio', id_state: central._id }).save()
    const ñemby = await new city({ name: 'Ñemby', id_state: central._id }).save()
    const itaugua = await new city({ name: 'Itauguá', id_state: central._id }).save()
    const mra = await new city({ name: 'Mariano Roque Alonso', id_state: central._id }).save()
    const ita = await new city({ name: 'Itá', id_state: central._id }).save()
    const villa_elisa = await new city({ name: 'Villa Elisa', id_state: central._id }).save()
    const aregua = await new city({ name: 'Areguá', id_state: central._id }).save()
    const san_antonio = await new city({ name: 'San Antonio', id_state: central._id }).save()
    const ypane = await new city({ name: 'Ypané', id_state: central._id }).save()
    const saldivar = await new city({ name: 'Saldívar', id_state: central._id }).save()
    const villeta = await new city({ name: 'Villeta', id_state: central._id }).save()
    const guarambare = await new city({ name: 'Guarambaré', id_state: central._id }).save()
    const ypacarai = await new city({ name: 'Ypacaraí', id_state: central._id }).save()
    const nueva_italia = await new city({ name: 'Nueva Italia', id_state: central._id }).save()


    //rc95 27/09/2022 18:50 - sports
    const sport = require('./models/sport')
    const rugby = await new sport({ name: 'Rugby' }).save()
    const hockey = await new sport({ name: 'Hockey' }).save()
    const basketball = await new sport({ name: 'Basketball' }).save()
    const volleyball = await new sport({ name: 'Volleyball' }).save()
    const handball = await new sport({ name: 'Handball' }).save()
    const futbol_americano = await new sport({ name: 'Futbol Americano' }).save()
    const futbol = await new sport({ name: 'Futbol' }).save()



    //regiones de paraguay
    //rc95 27/09/2022 18:50 - agregamos id_sport
    const region = require('./models/region')
    const super_8 = await new region({ id_sport: rugby._id, name: 'Super 8', id_country: paraguay._id }).save()
    const metropolitana = await new region({ id_sport: rugby._id, name: 'Metropolitana', id_country: paraguay._id }).save()
    const centro = await new region({ id_sport: rugby._id, name: 'Centro', id_country: paraguay._id }).save()
    const este = await new region({ id_sport: rugby._id, name: 'Este', id_country: paraguay._id }).save()
    const sur = await new region({ id_sport: rugby._id, name: 'Sur', id_country: paraguay._id }).save()
    const clubes_en_desarrollo = await new region({ id_sport: rugby._id, name: 'Clubes en desarrollo', id_country: paraguay._id }).save()


    //clubes de paraguay - super 8
    const club = require('./models/club')
    const arc = await new club({ name: 'Asunción Rugby Club', id_city: asuncion._id, id_region: super_8._id }).save()
    const cristo_rey = await new club({ name: 'Cristo Rey Rugby Club', id_city: asuncion._id, id_region: super_8._id }).save()
    const curda = await new club({ name: 'CURDA', id_city: asuncion._id, id_region: super_8._id }).save()
    const okc = await new club({ name: 'Old King Club', id_city: asuncion._id, id_region: super_8._id }).save()
    const santa_clara = await new club({ name: 'Santa Clara Rugby Club', id_city: asuncion._id, id_region: super_8._id }).save()
    const luque_rugby = await new club({ name: 'Luque Rugby Club', id_city: luque._id, id_region: super_8._id }).save()
    const jabalies = await new club({ name: 'Jabalies Rugby Club', id_city: luque._id, id_region: super_8._id }).save()
    const san_jose = await new club({ name: 'San José Rugby & Hockey Club', id_city: limpio._id, id_region: super_8._id }).save()


    //clubes de paraguay - metropolitano
    const capiata_rc = await new club({ name: 'Capiata Rugby Club', id_city: capiata._id, id_region: metropolitana._id }).save()
    const sajonia = await new club({ name: 'Club Deportivo Puerto Sajonia', id_city: asuncion._id, id_region: metropolitana._id }).save()
    const jararas = await new club({ name: 'Jararas Rugby Club', id_city: san_lorenzo._id, id_region: metropolitana._id }).save()
    const mangore = await new club({ name: 'Mangore', id_city: asuncion._id, id_region: metropolitana._id }).save()
    const mra_rugby = await new club({ name: 'Mariano Rugby Club', id_city: mra._id, id_region: metropolitana._id }).save()
    const ñandupe = await new club({ name: 'Ñandupe Rugby club', id_city: asuncion._id, id_region: metropolitana._id }).save()
    const ñemby_rugby = await new club({ name: 'Ñemby Rugby Club', id_city: ñemby._id, id_region: metropolitana._id }).save()
    const villeta_rugby = await new club({ name: 'Vileta Rugby Club', id_city: villeta._id, id_region: metropolitana._id }).save()


    //clubes de paraguay - centro
    const caaguazu_rugby = await new club({ name: 'Caaguazú Rugby Club', id_city: asuncion._id, id_region: centro._id }).save()
    const craco = await new club({ name: 'CRACO', id_city: asuncion._id, id_region: centro._id }).save()
    const san_cayetano_rugby = await new club({ name: 'San Cayetano Rugby', id_city: asuncion._id, id_region: centro._id }).save()
    const santani_rugby = await new club({ name: 'Santani Rugby Club', id_city: asuncion._id, id_region: centro._id }).save()
    const villarrica_rugby = await new club({ name: 'Villarrica Rugby Club', id_city: asuncion._id, id_region: centro._id }).save()


    //clubes de paraguay - este
    const area_1__rugby = await new club({ name: 'Club Area 1', id_city: asuncion._id, id_region: este._id }).save()
    const hernandarias_rugby = await new club({ name: 'Hernandarias Rugby Club', id_city: asuncion._id, id_region: este._id }).save()
    const kurupi_rugby = await new club({ name: 'Kurupi Rugby Club', id_city: asuncion._id, id_region: este._id }).save()
    const monday_rugby = await new club({ name: 'Monday Rugby Club', id_city: asuncion._id, id_region: este._id }).save()
    const pte_franc_rugby = await new club({ name: 'Pdte Franco Rugby Club', id_city: asuncion._id, id_region: este._id }).save()
    const salto_del_guaira_rugby = await new club({ name: 'Salto del Guaira Rugby Club', id_city: asuncion._id, id_region: este._id }).save()


    //clubes de paraguay - sur
    const ayolas_rugby = await new club({ name: 'Ayolas Rugby Club', id_city: asuncion._id, id_region: sur._id }).save()
    const ma_auxiliadora_rugby = await new club({ name: 'Maria Auxiliadora Rugby Club', id_city: asuncion._id, id_region: sur._id }).save()
    const misiones_rugby = await new club({ name: 'Misiones Rugby Club', id_city: asuncion._id, id_region: sur._id }).save()
    const san_roque_rugby = await new club({ name: 'San Roque Rugby Club', id_city: asuncion._id, id_region: sur._id }).save()
    const villa_florida_rugby = await new club({ name: 'Villa Florida Rugby Club', id_city: asuncion._id, id_region: sur._id }).save()


    //clubes de paraguay - clubes en desarrollo
    const caacupe_rugby = await new club({ name: 'Caacupé Rugby Club', id_city: asuncion._id, id_region: clubes_en_desarrollo._id }).save()
    const pilar_rugby = await new club({ name: 'Pilar Rugby Club', id_city: asuncion._id, id_region: clubes_en_desarrollo._id }).save()
    const villa_elisa_rugby = await new club({ name: 'Villa Elisa Rugby Club', id_city: villa_elisa._id, id_region: clubes_en_desarrollo._id }).save()
    const ypane_rugby = await new club({ name: 'Ypane Rugby Club', id_city: ypane._id, id_region: clubes_en_desarrollo._id }).save()




    //rc95 27/09/2022 19:45 - contact_type
    const contact_type = require('./models/contact_type')
    const email_contact = await new contact_type({ name: 'Email' }).save()
    const cellphone_contact = await new contact_type({ name: 'Cellphone' }).save()
    const address_contact = await new contact_type({ name: 'Address' }).save()
    const whatsapp_contact = await new contact_type({ name: 'Whatsapp' }).save()
    const facebook_contact = await new contact_type({ name: 'Facebook' }).save()
    const instagram_contact = await new contact_type({ name: 'Instagram' }).save()






    /*
    const a = require('./models/role')
    const a1 = await new a({ name: 'Normal User' }).save()
    const a2 = await new a({ name: 'Business Owner' }).save()
    const a3 = await new a({ name: 'System Administrator' }).save()

    const b = require('./models/business')
    const b1 = await new b({ name: 'Clinica Alvarenga' }).save()
    const b2 = await new b({ name: 'Odontología Vanessa Centurión' }).save()

    const c = require('./models/user')
    const c1 = await new c({ name: 'asistente 1', id_business: b1._id, id_rol: a1._id }).save()
    const c2 = await new c({ name: 'asistente 2', id_business: b1._id, id_rol: a1._id }).save()
    const c3 = await new c({ name: 'dra leticia', id_business: b1._id, id_rol: a2._id }).save()

    const c4 = await new c({ name: 'asistente 1', id_business: b2._id, id_rol: a1._id }).save()
    const c5 = await new c({ name: 'dra vanessa', id_business: b2._id, id_rol: a2._id }).save()
    */

    console.log(` *** Finalizó la población de la BD..`)
}


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/`)

    main()
})