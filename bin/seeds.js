const mongoose = require("mongoose");
const Spot = require("../models/Spot");
require("../db/index.js");
// require("../configs/db.config.js");
// do we need this? how we normally call/connect to DB?
const spots = [
  {
    name: "BS1",
    address: "Carrer de Balmes, 145, 08001 Barcelona, Spain",
    latitude: "2.1565420049009765",
    longitude: "41.393949160746395",
    vacantSpaces: 100,
  },
  {
    name: "BS2",
    address: "Carrer de Casanova, 156, 08001 Barcelona, Spain",
    latitude: "41.38910910264879",
    longitude: "2.153943844110464",
    vacantSpaces: 100,
  },
  {
    name: "BS3",
    address: "Carrer d'Enric Granados, 100, 102, 08001 Barcelona, Spain",
    latitude: "41.39335356399017",
    longitude: "2.1550833311048256",
    vacantSpaces: 100,
  },
  {
    name: "BS4",
    address: "Carrer d'Aribau, 153, 08001 Barcelona, Spain",
    latitude: "41.39250040237277",
    longitude: "2.1538821493741045",
    vacantSpaces: 100,
  },
  {
    name: "BS5",
    address: "Carrer de Muntaner, 209, 08001 Barcelona, Spain",
    latitude: "41.39160430101815",
    longitude: "2.1528240179177294",
    vacantSpaces: 100,
  },
  {
    name: "BS6",
    address: "Carrer de Casanova, 192, 08001 Barcelona, Spain",
    latitude: "41.39079404358117",
    longitude: "2.1516800557728777",
    vacantSpaces: 100,
  },
  {
    name: "BS7",
    address: "Carrer de Villarroel, 180, 08001 Barcelona, Spain",
    latitude: "41.38991938354225",
    longitude: "2.150536093628026",
    vacantSpaces: 100,
  },
  {
    name: "BS8",
    address: "Carrer de Villarroel, 164, 08001 Barcelona, Spain",
    latitude: "41.38908764000075",
    longitude: "2.151652340486172",
    vacantSpaces: 100,
  },
  {
    name: "BS9",
    address: "Carrer de Casanova, 172, 08001 Barcelona, Spain",
    latitude: "41.39008036271545",
    longitude: "2.1529974683071407",
    vacantSpaces: 100,
  },
  {
    name: "BS10",
    address: "Carrer de Muntaner, 180, 08001 Barcelona, Spain",
    latitude: "41.39090136032035",
    longitude: "2.154142326267894",
    vacantSpaces: 100,
  },
  {
    name: "BS11",
    address: "Carrer d'Aribau, 125, 08001 Barcelona, Spain",
    latitude: "41.39161234643708",
    longitude: "2.155072382243808",
    vacantSpaces: 100,
  },
  {
    name: "BS12",
    address: "Carrer del Rosselló, 191, 08001 Barcelona, Spain",
    latitude: "41.39249503146469",
    longitude: "2.1562170149409132",
    vacantSpaces: 100,
  },
  {
    name: "BS13",
    address: "Carrer de Balmes, 129 B, 08001 Barcelona, Spain",
    latitude: "41.3933025839995",
    longitude: "2.1573616476380186",
    vacantSpaces: 100,
  },
  {
    name: "BS14",
    address: "Carrer de Provença, 244, 246, 08001 Barcelona, Spain",
    latitude: "41.39243600695849",
    longitude: "2.1584633649908858",
    vacantSpaces: 100,
  },
  {
    name: "BS15",
    address: "Carrer d'Enric Granados, 79, 81, 08001 Barcelona, Spain",
    latitude: "41.39162307759088",
    longitude: "2.157319180201731",
    vacantSpaces: 100,
  },
  {
    name: "BS16",
    address: "Carrer d'Aribau, 113, 08001 Barcelona, Spain",
    latitude: "41.39077794222311",
    longitude: "2.1561892996542076",
    vacantSpaces: 100,
  },
  {
    name: "BS17",
    address: "Carrer de Muntaner, 165, 08001 Barcelona, Spain",
    latitude: "41.38993279586844",
    longitude: "2.155059419106684",
    vacantSpaces: 100,
  },
  {
    name: "BS51",
    address: "Carrer de Villarroel, 148, 08001 Barcelona, Spain",
    latitude: "41.38818880769139",
    longitude: "2.1527996593213095",
    vacantSpaces: 100,
  },
  {
    name: "BS18",
    address: "Carrer de Mallorca, 137, 08001 Barcelona, Spain",
    latitude: "41.38735436002839",
    longitude: "2.153944292018415",
    vacantSpaces: 100,
  },
  {
    name: "BS19",
    address: "Carrer de Mallorca, 157, 08001 Barcelona, Spain",
    latitude: "41.388215638459215",
    longitude: "2.155074620473889",
    vacantSpaces: 100,
  },
  {
    name: "BS20",
    address: "Carrer de Muntaner, 141, 08001 Barcelona, Spain",
    latitude: "41.38900177951208",
    longitude: "2.156262168515233",
    vacantSpaces: 100,
  },
  {
    name: "BS21",
    address: "Carrer d'Aribau, 97, 08001 Barcelona, Spain",
    latitude: "41.389959624933994",
    longitude: "2.157292360730927",
    vacantSpaces: 100,
  },
  {
    name: "BS22",
    address: "Carrer de Mallorca, 211, 08001 Barcelona, Spain",
    latitude: "41.390724281317446",
    longitude: "2.1583511627395557",
    vacantSpaces: 100,
  },
  {
    name: "BS23",
    address: "Carrer de Balmes, 95, 08001 Barcelona, Spain",
    latitude: "41.39149966037252",
    longitude: "2.159781898604698",
    vacantSpaces: 100,
  },
  {
    name: "BS24",
    address: "Carrer de València, 225, 08007 Barcelona, Spain",
    latitude: "41.390879894333835",
    longitude: "2.160840700613327",
    vacantSpaces: 100,
  },
  {
    name: "BS25",
    address: "Carrer d'Enric Granados, 22, 08001 Barcelona, Spain",
    latitude: "41.389820107261045",
    longitude: "2.1597108200658033",
    vacantSpaces: 100,
  },
  {
    name: "BS26",
    address: "Carrer d'Aribau, 08001 Barcelona, Spain",
    latitude: "41.38918959304276",
    longitude: "2.158309143211219",
    vacantSpaces: 100,
  },
  {
    name: "BS27",
    address: "Carrer de Muntaner, 121, 08001 Barcelona, Spain",
    latitude: "41.38821563759946",
    longitude: "2.1573080086964103",
    vacantSpaces: 100,
  },
  {
    name: "BS28",
    address: "Carrer de Casanova, 120, 08001 Barcelona, Spain",
    latitude: "41.38747778265969",
    longitude: "2.156020772323237",
    vacantSpaces: 100,
  },
  {
    name: "BS29",
    address: "Carrer de Villarroel, 116, 08001 Barcelona, Spain",
    latitude: "41.386514534061305",
    longitude: "2.1550196378084285",
    vacantSpaces: 100,
  },
  {
    name: "BS30",
    address: "Carrer de Villarroel, 100, 08001 Barcelona, Spain",
    latitude: "41.38565859953372",
    longitude: "2.1562071858497722",
    vacantSpaces: 100,
  },
  {
    name: "BS31",
    address: "Carrer de Casanova, 75, 08001 Barcelona, Spain",
    latitude: "41.38595643347513",
    longitude: "2.1569231130124455",
    vacantSpaces: 100,
  },
  {
    name: "BS32",
    address: "Carrer de Muntaner, 97, 08001 Barcelona, Spain",
    latitude: "41.38725776562377",
    longitude: "2.1585827298404103",
    vacantSpaces: 100,
  },
  {
    name: "BS33",
    address: "Carrer d'Aribau, 39, 08001 Barcelona, Spain",
    latitude: "41.38810831298787",
    longitude: "2.1597130582958846",
    vacantSpaces: 100,
  },
  {
    name: "BS34",
    address: "Carrer del Consell de Cent, 270, 08001 Barcelona, Spain",
    latitude: "41.38864761313217",
    longitude: "2.1612439290911345",
    vacantSpaces: 100,
  },
  {
    name: "BS35",
    address: "Carrer de Balmes, 49, 08001 Barcelona, Spain",
    latitude: "41.38985230258721",
    longitude: "2.161959408345857",
    vacantSpaces: 100,
  },
  {
    name: "BS36",
    address: "Carrer del Consell de Cent, 276, 08007 Barcelona, Spain",
    latitude: "41.38895348269173",
    longitude: "2.162846548977533",
    vacantSpaces: 100,
  },
  {
    name: "BS37",
    address: "Carrer del Consell de Cent, 270, 08001 Barcelona, Spain",
    latitude: "41.38822636882266",
    longitude: "2.161831110221093",
    vacantSpaces: 100,
  },
  {
    name: "BS38",
    address: "Carrer del Consell de Cent, 256, 08001 Barcelona, Spain",
    latitude: "41.387348991642924",
    longitude: "2.1607441450178078",
    vacantSpaces: 100,
  },
  {
    name: "BS39",
    address: "Carrer de Muntaner, 79, 08001 Barcelona, Spain",
    latitude: "41.38657892895414",
    longitude: "2.1594569086446347",
    vacantSpaces: 100,
  },
  {
    name: "BS40",
    address: "Carrer de Casanova, 84, 08001 Barcelona, Spain",
    latitude: "41.38584642163177",
    longitude: "2.1582130355236506",
    vacantSpaces: 100,
  },
  {
    name: "BS41",
    address: "Carrer de Villarroel, 84, 08001 Barcelona, Spain",
    latitude: "41.38482948395394",
    longitude: "2.1572834274556874",
    vacantSpaces: 100,
  },
  {
    name: "BS42",
    address: "Carrer de Casanova, 52, 08001 Barcelona, Spain",
    latitude: "41.38505487507988",
    longitude: "2.1603742267470727",
    vacantSpaces: 100,
  },
  {
    name: "BS43",
    address: "Carrer d'Aribau, 08001 Barcelona, Spain",
    latitude: "41.38643672017978",
    longitude: "2.1618474300485024",
    vacantSpaces: 100,
  },
  {
    name: "BS44",
    address: "Carrer de Balmes, 25, 08001 Barcelona, Spain",
    latitude: "41.388030501259394",
    longitude: "2.1643083568196664",
    vacantSpaces: 100,
  },
  {
    name: "BS45",
    address: "Gran Via de les Corts Catalanes, 08001 Barcelona, Spain",
    latitude: "41.38698140059449",
    longitude: "2.1653099392424258",
    vacantSpaces: 100,
  },
  {
    name: "BS46",
    address: "Plaça de la Universitat, 08001 Barcelona, Spain",
    latitude: "41.38522391749708",
    longitude: "2.163536328531328",
    vacantSpaces: 100,
  },
  {
    name: "BS47",
    address: "Carrer de Muntaner, 37, 08001 Barcelona, Spain",
    latitude: "41.384936812580655",
    longitude: "2.161648277338819",
    vacantSpaces: 100,
  },
  {
    name: "BS48",
    address: "Carrer de Villarroel, 62, 08001 Barcelona, Spain",
    latitude: "41.3837132476674",
    longitude: "2.1587309297465174",
    vacantSpaces: 100,
  },
  {
    name: "BS49",
    address: "Rambla de Catalunya, 19, 08001 Barcelona, Spain",
    latitude: "41.38887811574018",
    longitude: "2.1663152851258882",
    vacantSpaces: 100,
  },
  {
    name: "BS50",
    address: "Carrer de Pelai, 9, 08001 Barcelona, Spain",
    latitude: "41.38579630212158",
    longitude: "2.1664256698386186",
    vacantSpaces: 100,
  },
];
Spot.insertMany(spots)
  .then((addedSpots) => {
    console.log(`${addedSpots.length} spots added to DB`);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Could not add seed data", err);
    mongoose.connection.close();
  });