var countries_fixture = {
    "properties": {
        "name": {
            "name": "Country Name",
            "type": "string",
            "unique": true
        },
        "official_language": {
            "name": "Official Language",
            "type": "string",
            "unique": false,
            "meta": {
                "facet": true
            }
        },
        "currency_used": {
            "name": "Currency used",
            "type": "string",
            "unique": false,
            "meta": {
                "facet": true
            }
        },
        "gdp_nominal_per_capita": {
            "name": "GDP (Nominal, per capita)",
            "type": "number",
            "unique": true,
            "meta": {
                "unit": "US$"
            }
        },
        "population": {
            "name": "Population",
            "type": "number",
            "unique": true,
            "meta": {
                "unit": "people"
            }
        }
    },
    "items": {
        "/en/algeria": {
            "name": "Algeria",
            "official_language": [
                "Arabic Language",
                "Algerian Arabic",
                "French Language"
            ],
            "currency_used": [
                "Algerian dinar"
            ],
            "gdp_nominal_per_capita": 7100,
            "population": 34895000
        },
        "/en/austria": {
            "name": "Austria",
            "official_language": [
                "Croatian language",
                "Slovenian language",
                "Austrian German",
                "German Language",
                "Hungarian"
            ],
            "currency_used": [
                "Euro",
                "Austrian schilling",
                "Austrian krone"
            ],
            "gdp_nominal_per_capita": 39200,
            "population": 8356700
        },
        "/en/american_samoa": {
            "name": "American Samoa",
            "official_language": [
                "Samoan Language",
                "English Language"
            ],
            "currency_used": [
                "US$"
            ],
            "gdp_nominal_per_capita": 8000,
            "population": 67000
        },
        "/en/aruba": {
            "name": "Aruba",
            "official_language": [
                "Dutch Language",
                "Papiamento language",
                "Spanish Language",
                "English Language"
            ],
            "currency_used": [
                "Aruban florin",
                "Euro"
            ],
            "gdp_nominal_per_capita": 21800,
            "population": 107000
        },
        "/en/angola": {
            "name": "Angola",
            "official_language": [
                "Portuguese Language"
            ],
            "currency_used": [
                "Angolan kwanza",
                "Angolan escudo"
            ],
            "gdp_nominal_per_capita": 9100,
            "population": 18498000
        },
        "/en/afghanistan": {
            "name": "Afghanistan",
            "official_language": [
                "Persian Language",
                "Dari",
                "Pashto language"
            ],
            "currency_used": [
                "Afghan afghani"
            ],
            "gdp_nominal_per_capita": 800,
            "population": 28150000
        },
        "/en/albania": {
            "name": "Albania",
            "official_language": [
                "Albanian language"
            ],
            "currency_used": [
                "Albanian lek"
            ],
            "gdp_nominal_per_capita": 6400,
            "population": 3155271
        },
        "/en/argentina": {
            "name": "Argentina",
            "official_language": [
                "Spanish Language"
            ],
            "currency_used": [
                "Argentinian Peso",
                "Argentine peso",
                "Argentine real",
                "Argentine peso argentino",
                "Argentina peso ley"
            ],
            "gdp_nominal_per_capita": 14500,
            "population": 40091359
        },
        "/en/armenia": {
            "name": "Armenia",
            "official_language": [
                "Armenian Language"
            ],
            "currency_used": [
                "Armenian dram"
            ],
            "gdp_nominal_per_capita": 6600,
            "population": 3082951
        },
        "/en/azerbaijan": {
            "name": "Azerbaijan",
            "official_language": [
                "Azerbaijani language"
            ],
            "currency_used": [
                "Azerbaijani manat"
            ],
            "gdp_nominal_per_capita": 9500,
            "population": 8781100
        },
        "/en/antigua_and_barbuda": {
            "name": "Antigua and Barbuda",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "East Caribbean dollar"
            ],
            "gdp_nominal_per_capita": 19100,
            "population": 88000
        },
        "/en/anguilla": {
            "name": "Anguilla",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "East Caribbean dollar"
            ],
            "gdp_nominal_per_capita": 8800,
            "population": 15000
        },
        "/en/belgium": {
            "name": "Belgium",
            "official_language": [
                "Dutch Language",
                "German Language",
                "French Language"
            ],
            "currency_used": [
                "Euro",
                "Belgian franc",
                "Dutch gulden"
            ],
            "gdp_nominal_per_capita": 38300,
            "population": 10741000
        },
        "/en/berlin": {
            "name": "Berlin",
            "official_language": [],
            "currency_used": [],
            "gdp_nominal_per_capita": 24473,
            "population": 3442675
        },
        "/en/brazil": {
            "name": "Brazil",
            "official_language": [
                "Portuguese Language"
            ],
            "currency_used": [
                "Brazilian real"
            ],
            "gdp_nominal_per_capita": 10300,
            "population": 254100000
        },
        "/en/bulgaria": {
            "name": "Bulgaria",
            "official_language": [
                "Bulgarian Language"
            ],
            "currency_used": [
                "Bulgarian lev"
            ],
            "gdp_nominal_per_capita": 13200,
            "population": 7602100
        },
        "/en/the_bahamas": {
            "name": "The Bahamas",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Bahamian dollar"
            ],
            "gdp_nominal_per_capita": 29900,
            "population": 342000
        },
        "/en/bahrain": {
            "name": "Bahrain",
            "official_language": [
                "Arabic Language",
                "English Language"
            ],
            "currency_used": [
                "Bahraini dinar"
            ],
            "gdp_nominal_per_capita": 37200,
            "population": 791000
        },
        "/en/bangladesh": {
            "name": "Bangladesh",
            "official_language": [
                "Bengali Language"
            ],
            "currency_used": [
                "Bangladeshi taka"
            ],
            "gdp_nominal_per_capita": 1500,
            "population": 162221000
        },
        "/en/barbados": {
            "name": "Barbados",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Barbados dollar"
            ],
            "gdp_nominal_per_capita": 20200,
            "population": 256000
        },
        "/en/belarus": {
            "name": "Belarus",
            "official_language": [
                "Belarusian language",
                "Russian Language"
            ],
            "currency_used": [
                "Belarusian ruble"
            ],
            "gdp_nominal_per_capita": 12000,
            "population": 9663000
        },
        "/en/belize": {
            "name": "Belize",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Belize dollar"
            ],
            "gdp_nominal_per_capita": 8500,
            "population": 333200
        },
        "/en/benin": {
            "name": "Benin",
            "official_language": [
                "French Language"
            ],
            "currency_used": [
                "CFA franc",
                "West African CFA franc"
            ],
            "gdp_nominal_per_capita": 1500,
            "population": 8935000
        },
        "/en/bermuda": {
            "name": "Bermuda",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Bermuda dollar",
                "Bermuda pound"
            ],
            "gdp_nominal_per_capita": 69900,
            "population": 65000
        },
        "/en/bolivia": {
            "name": "Bolivia",
            "official_language": [
                "Spanish Language",
                "Quechua",
                "Puquina Language",
                "Sirionó language",
                "Itonama Language",
                "Tapieté Language",
                "Araona Language",
                "Baure Language",
                "Mòoré Language",
                "Cavineña Language",
                "Pacahuara language",
                "Ayoreo language",
                "Canichana language",
                "Kallawaya",
                "Uru language",
                "Chiquitano language",
                "Leco language",
                "Reyesano language",
                "Wichí Lhamtés Nocten",
                "Chácobo language",
                "Aymara language",
                "Movima language",
                "Cayubaba language",
                "Tacana language"
            ],
            "currency_used": [
                "Bolivian boliviano",
                "Bolivian peso",
                "US$"
            ],
            "gdp_nominal_per_capita": 4700,
            "population": 9863000
        },
        "/en/bosnia_and_herzegovina": {
            "name": "Bosnia and Herzegovina",
            "official_language": [
                "Bosnian language",
                "Serbian language",
                "Croatian language",
                "Serbo-Croatian"
            ],
            "currency_used": [
                "Bosnia and Herzegovina convertible mark",
                "Bosnia and Herzegovina dinar"
            ],
            "gdp_nominal_per_capita": 6600,
            "population": 3767000
        },
        "/en/botswana": {
            "name": "Botswana",
            "official_language": [
                "Tswana Language",
                "English Language"
            ],
            "currency_used": [
                "Botswana pula"
            ],
            "gdp_nominal_per_capita": 15800,
            "population": 1950000
        },
        "/en/brunei": {
            "name": "Brunei",
            "official_language": [
                "Malay Language",
                "English Language"
            ],
            "currency_used": [
                "Brunei dollar"
            ],
            "gdp_nominal_per_capita": 54100,
            "population": 400000
        },
        "/en/british_virgin_islands": {
            "name": "British Virgin Islands",
            "official_language": [],
            "currency_used": [
                "East Caribbean dollar"
            ],
            "gdp_nominal_per_capita": 38500,
            "population": 23000
        },
        "/en/burkina_faso": {
            "name": "Burkina Faso",
            "official_language": [
                "French Language"
            ],
            "currency_used": [
                "West African CFA franc"
            ],
            "gdp_nominal_per_capita": 1300,
            "population": 15757000
        },
        "/en/burundi": {
            "name": "Burundi",
            "official_language": [
                "Kanuri language",
                "Kirundi language",
                "Swahili Language",
                "French Language"
            ],
            "currency_used": [
                "Burundian franc"
            ],
            "gdp_nominal_per_capita": 400,
            "population": 8303000
        },
        "/en/colombia": {
            "name": "Colombia",
            "official_language": [
                "Spanish Language"
            ],
            "currency_used": [
                "Colombian peso"
            ],
            "gdp_nominal_per_capita": 9000,
            "population": 44830423
        },
        "/en/czech_republic": {
            "name": "Czech Republic",
            "official_language": [
                "Czech Language"
            ],
            "currency_used": [
                "CZK",
                "Czech koruna"
            ],
            "gdp_nominal_per_capita": 26800,
            "population": 10474600
        },
        "/en/comoros": {
            "name": "Comoros",
            "official_language": [
                "Arabic Language",
                "Comorian language",
                "Swahili Language",
                "French Language"
            ],
            "currency_used": [
                "Comorian franc"
            ],
            "gdp_nominal_per_capita": 1100,
            "population": 676000
        },
        "/en/cameroon": {
            "name": "Cameroon",
            "official_language": [
                "English Language",
                "French Language"
            ],
            "currency_used": [
                "Central African CFA franc"
            ],
            "gdp_nominal_per_capita": 2400,
            "population": 19522000
        },
        "/en/cape_verde": {
            "name": "Cape Verde",
            "official_language": [
                "Portuguese Language"
            ],
            "currency_used": [
                "Cape Verdean escudo"
            ],
            "gdp_nominal_per_capita": 4200,
            "population": 506000
        },
        "/en/central_african_republic": {
            "name": "Central African Republic",
            "official_language": [
                "Sango Language",
                "French Language"
            ],
            "currency_used": [
                "Central African CFA franc"
            ],
            "gdp_nominal_per_capita": 700,
            "population": 4422000
        },
        "/en/chad": {
            "name": "Chad",
            "official_language": [
                "Arabic Language",
                "French Language"
            ],
            "currency_used": [
                "Central African CFA franc"
            ],
            "gdp_nominal_per_capita": 1600,
            "population": 11206000
        },
        "/en/chile": {
            "name": "Chile",
            "official_language": [
                "Spanish Language",
                "Languages of Chile",
                "German Language",
                "Chilean Spanish",
                "Mapudungun Language",
                "English Language"
            ],
            "currency_used": [
                "Chilean peso",
                "Unidad de Fomento"
            ],
            "gdp_nominal_per_capita": 15400,
            "population": 16886000
        },
        "/en/costa_rica": {
            "name": "Costa Rica",
            "official_language": [
                "Spanish Language"
            ],
            "currency_used": [
                "Costa Rican colón"
            ],
            "gdp_nominal_per_capita": 11900,
            "population": 4579000
        },
        "/en/croatia": {
            "name": "Croatia",
            "official_language": [
                "Croatian language"
            ],
            "currency_used": [
                "Croatian kuna",
                "Croatian dinar"
            ],
            "gdp_nominal_per_capita": 16900,
            "population": 4432000
        },
        "/en/cyprus": {
            "name": "Cyprus",
            "official_language": [
                "Greek Language",
                "Turkish Language"
            ],
            "currency_used": [
                "Euro"
            ],
            "gdp_nominal_per_capita": 29200,
            "population": 801600
        },
        "/en/republic_of_the_congo": {
            "name": "Republic of the Congo",
            "official_language": [
                "Lingala Language",
                "Kituba",
                "French Language"
            ],
            "currency_used": [
                "Central African CFA franc"
            ],
            "gdp_nominal_per_capita": 3800,
            "population": 3683000
        },
        "/en/cook_islands": {
            "name": "Cook Islands",
            "official_language": [
                "Rarotongan Language",
                "English Language"
            ],
            "currency_used": [
                "New Zealand dollar",
                "Cook Islands dollar",
                "New Zealand pound"
            ],
            "gdp_nominal_per_capita": 9100,
            "population": 20000
        },
        "/en/djibouti": {
            "name": "Djibouti",
            "official_language": [
                "Arabic Language",
                "French Language"
            ],
            "currency_used": [
                "Djiboutian franc"
            ],
            "gdp_nominal_per_capita": 3800,
            "population": 864000
        },
        "/en/dominica": {
            "name": "Dominica",
            "official_language": [
                "English Language",
                "Antillean Creole",
                "French Language"
            ],
            "currency_used": [
                "East Caribbean dollar"
            ],
            "gdp_nominal_per_capita": 9500,
            "population": 67000
        },
        "/en/dominican_republic": {
            "name": "Dominican Republic",
            "official_language": [
                "Spanish Language"
            ],
            "currency_used": [
                "Dominican peso"
            ],
            "gdp_nominal_per_capita": 8800,
            "population": 10090000
        },
        "/en/european_union": {
            "name": "European Union",
            "official_language": [],
            "currency_used": [
                "Euro",
                "European Currency Unit"
            ],
            "gdp_nominal_per_capita": 34000,
            "population": 490426060
        },
        "/en/ecuador": {
            "name": "Ecuador",
            "official_language": [
                "Spanish Language",
                "Quechua"
            ],
            "currency_used": [
                "US$",
                "Ecuadorian sucre"
            ],
            "gdp_nominal_per_capita": 7700,
            "population": 13938115
        },
        "/en/egypt": {
            "name": "Egypt",
            "official_language": [
                "Arabic Language",
                "English Language",
                "Modern Standard Arabic",
                "French Language"
            ],
            "currency_used": [
                "Egyptian pound"
            ],
            "gdp_nominal_per_capita": 5500,
            "population": 76030000
        },
        "/en/el_salvador": {
            "name": "El Salvador",
            "official_language": [
                "Spanish Language",
                "Nahuatl language"
            ],
            "currency_used": [
                "US$",
                "Salvadoran colón",
                "El Salvadoran peso"
            ],
            "gdp_nominal_per_capita": 6400,
            "population": 6163000
        },
        "/en/equatorial_guinea": {
            "name": "Equatorial Guinea",
            "official_language": [
                "Spanish Language",
                "Portuguese Language",
                "French Language"
            ],
            "currency_used": [
                "Central African CFA franc",
                "Equatorial Guinean ekwele",
                "Equatorial Guinean peseta"
            ],
            "gdp_nominal_per_capita": 30200,
            "population": 676000
        },
        "/en/eritrea": {
            "name": "Eritrea",
            "official_language": [
                "Arabic Language",
                "Tigrigna Language",
                "English Language",
                "Tigre language",
                "Italian Language"
            ],
            "currency_used": [
                "Eritrean nakfa"
            ],
            "gdp_nominal_per_capita": 700,
            "population": 5073000
        },
        "/en/estonia": {
            "name": "Estonia",
            "official_language": [
                "Estonian Language"
            ],
            "currency_used": [
                "Estonian kroon"
            ],
            "gdp_nominal_per_capita": 21900,
            "population": 1340341
        },
        "/en/east_timor": {
            "name": "East Timor",
            "official_language": [
                "Tetun Language",
                "Portuguese Language"
            ],
            "currency_used": [
                "US$"
            ],
            "gdp_nominal_per_capita": 2500,
            "population": 3500000
        },
        "/en/finland": {
            "name": "Finland",
            "official_language": [
                "Finnish Language",
                "Swedish Language",
                "Sami languages"
            ],
            "currency_used": [
                "Euro"
            ],
            "gdp_nominal_per_capita": 38400,
            "population": 5331096
        },
        "/en/faroe_islands": {
            "name": "Faroe Islands",
            "official_language": [
                "Danish Language",
                "Faroese"
            ],
            "currency_used": [
                "Faroese króna",
                "Danish krone"
            ],
            "gdp_nominal_per_capita": 31000,
            "population": 48797
        },
        "/en/fiji": {
            "name": "Fiji",
            "official_language": [
                "Fijian Language",
                "Hindustani language",
                "English Language",
                "Fiji Hindi"
            ],
            "currency_used": [
                "Fijian dollar",
                "Fijian pound"
            ],
            "gdp_nominal_per_capita": 3700,
            "population": 849000
        },
        "/en/french_polynesia": {
            "name": "French Polynesia",
            "official_language": [
                "Tahitian Language",
                "French Language"
            ],
            "currency_used": [
                "CFP franc"
            ],
            "gdp_nominal_per_capita": 18000,
            "population": 269043
        },
        "/en/federated_states_of_micronesia": {
            "name": "Federated States of Micronesia",
            "official_language": [
                "Yapese Language",
                "Pohnpeian language",
                "Kosraean language",
                "Ulithian Language",
                "Chuukese Language",
                "English Language",
                "Woleaian Language"
            ],
            "currency_used": [
                "US$"
            ],
            "gdp_nominal_per_capita": 2200,
            "population": 111000
        },
        "/en/germany": {
            "name": "Germany",
            "official_language": [
                "German Language"
            ],
            "currency_used": [
                "Euro"
            ],
            "gdp_nominal_per_capita": 34800,
            "population": 82062200
        },
        "/en/guatemala": {
            "name": "Guatemala",
            "official_language": [
                "Spanish Language"
            ],
            "currency_used": [
                "Guatemalan quetzal"
            ],
            "gdp_nominal_per_capita": 5400,
            "population": 14027000
        },
        "/en/guyana": {
            "name": "Guyana",
            "official_language": [
                "English Language",
                "Hindi Language",
                "Arawak"
            ],
            "currency_used": [
                "Guyanese dollar"
            ],
            "gdp_nominal_per_capita": 4000,
            "population": 762000
        },
        "/en/guam": {
            "name": "Guam",
            "official_language": [
                "Chamorro Language",
                "English Language"
            ],
            "currency_used": [
                "US$"
            ],
            "gdp_nominal_per_capita": 21000,
            "population": 178000
        },
        "/en/gabon": {
            "name": "Gabon",
            "official_language": [
                "Spanish Language",
                "French Language"
            ],
            "currency_used": [
                "CFA franc",
                "Central African CFA franc"
            ],
            "gdp_nominal_per_capita": 14900,
            "population": 1475000
        },
        "/en/gaza_strip": {
            "name": "Gaza Strip",
            "official_language": [
                "Arabic Language"
            ],
            "currency_used": [
                "Israeli new sheqel",
                "Egyptian pound"
            ],
            "gdp_nominal_per_capita": 2900,
            "population": 1482405
        },
        "/en/ghana": {
            "name": "Ghana",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Ghanaian cedi"
            ],
            "gdp_nominal_per_capita": 1500,
            "population": 23837000
        },
        "/en/gibraltar": {
            "name": "Gibraltar",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Gibraltar pound"
            ],
            "gdp_nominal_per_capita": 38200,
            "population": 31000
        },
        "/en/greece": {
            "name": "Greece",
            "official_language": [
                "Greek Language"
            ],
            "currency_used": [
                "Euro",
                "Greek drachma"
            ],
            "gdp_nominal_per_capita": 32800,
            "population": 11262500
        },
        "/en/greenland": {
            "name": "Greenland",
            "official_language": [
                "Danish Language",
                "Greenlandic language"
            ],
            "currency_used": [
                "Danish krone"
            ],
            "gdp_nominal_per_capita": 20000,
            "population": 57000
        },
        "/en/grenada": {
            "name": "Grenada",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "East Caribbean dollar"
            ],
            "gdp_nominal_per_capita": 13600,
            "population": 104000
        },
        "/en/guernsey": {
            "name": "Guernsey",
            "official_language": [],
            "currency_used": [],
            "gdp_nominal_per_capita": 44600,
            "population": 65573
        },
        "/en/guinea": {
            "name": "Guinea",
            "official_language": [
                "French Language"
            ],
            "currency_used": [
                "Guinean franc",
                "Guinean syli"
            ],
            "gdp_nominal_per_capita": 1100,
            "population": 10069000
        },
        "/en/guinea-bissau": {
            "name": "Guinea-Bissau",
            "official_language": [
                "Portuguese Language"
            ],
            "currency_used": [
                "CFA franc",
                "West African CFA franc",
                "Guinea Bissau peso"
            ],
            "gdp_nominal_per_capita": 600,
            "population": 1611000
        },
        "/en/hungary": {
            "name": "Hungary",
            "official_language": [
                "Hungarian",
                "Hungarian Sign Language"
            ],
            "currency_used": [
                "Hungarian forint"
            ],
            "gdp_nominal_per_capita": 20500,
            "population": 10029900
        },
        "/en/haiti": {
            "name": "Haiti",
            "official_language": [
                "Haitian Creole French Language",
                "French Language"
            ],
            "currency_used": [
                "Haitian gourde",
                "Hanoi"
            ],
            "gdp_nominal_per_capita": 1400,
            "population": 10033000
        },
        "/en/honduras": {
            "name": "Honduras",
            "official_language": [
                "Spanish Language"
            ],
            "currency_used": [
                "Honduran lempira"
            ],
            "gdp_nominal_per_capita": 3700,
            "population": 7466000
        },
        "/en/hong_kong": {
            "name": "Hong Kong",
            "official_language": [],
            "currency_used": [
                "Hong Kong dollar"
            ],
            "gdp_nominal_per_capita": 45300,
            "population": 7003700
        },
        "/en/iceland": {
            "name": "Iceland",
            "official_language": [
                "Icelandic Language"
            ],
            "currency_used": [
                "Icelandic króna"
            ],
            "gdp_nominal_per_capita": 42600,
            "population": 320500
        },
        "/en/italy": {
            "name": "Italy",
            "official_language": [
                "Italian Language"
            ],
            "currency_used": [
                "Euro",
                "San Marinese lira"
            ],
            "gdp_nominal_per_capita": 31000,
            "population": 60090400
        },
        "/en/india": {
            "name": "India",
            "official_language": [
                "Hindi Language",
                "English Language"
            ],
            "currency_used": [
                "Indian rupee"
            ],
            "gdp_nominal_per_capita": 2900,
            "population": 1161240000
        },
        "/en/republic_of_ireland": {
            "name": "Republic of Ireland",
            "official_language": [
                "Irish",
                "English Language"
            ],
            "currency_used": [
                "Euro"
            ],
            "gdp_nominal_per_capita": 47800,
            "population": 4517800
        },
        "/en/indonesia": {
            "name": "Indonesia",
            "official_language": [
                "Indonesian Language"
            ],
            "currency_used": [
                "Indonesian rupiah"
            ],
            "gdp_nominal_per_capita": 3900,
            "population": 229850000
        },
        "/en/iran": {
            "name": "Iran",
            "official_language": [
                "Persian Language",
                "Azerbaijani language",
                "Kurdish language",
                "Caspian languages",
                "Gilaki Language",
                "Mazanderani Language"
            ],
            "currency_used": [
                "Iranian rial"
            ],
            "gdp_nominal_per_capita": 13100,
            "population": 72903921
        },
        "/en/israel": {
            "name": "Israel",
            "official_language": [
                "Arabic Language",
                "Hebrew Language"
            ],
            "currency_used": [
                "Israeli new sheqel"
            ],
            "gdp_nominal_per_capita": 28900,
            "population": 7382200
        },
        "/en/isle_of_man": {
            "name": "Isle of Man",
            "official_language": [
                "English Language",
                "Manx Language"
            ],
            "currency_used": [
                "UK £",
                "Manx pound"
            ],
            "gdp_nominal_per_capita": 35000,
            "population": 80000
        },
        "/en/japan": {
            "name": "Japan",
            "official_language": [
                "Japanese Language"
            ],
            "currency_used": [
                "Japanese yen"
            ],
            "gdp_nominal_per_capita": 35300,
            "population": 127630000
        },
        "/en/jamaica": {
            "name": "Jamaica",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Jamaican dollar",
                "Jamaican pound"
            ],
            "gdp_nominal_per_capita": 7700,
            "population": 2719000
        },
        "/en/jersey": {
            "name": "Jersey",
            "official_language": [
                "English Language",
                "French Language"
            ],
            "currency_used": [
                "UK £",
                "Jersey pound"
            ],
            "gdp_nominal_per_capita": 57000,
            "population": 91321
        },
        "/en/jordan": {
            "name": "Jordan",
            "official_language": [
                "Arabic Language",
                "English Language"
            ],
            "currency_used": [
                "Jordanian dinar"
            ],
            "gdp_nominal_per_capita": 5000,
            "population": 6316000
        },
        "/en/kazakhstan": {
            "name": "Kazakhstan",
            "official_language": [
                "Kazakh Language",
                "Russian Language"
            ],
            "currency_used": [
                "Kazakhstani tenge"
            ],
            "gdp_nominal_per_capita": 12000,
            "population": 15888000
        },
        "/en/kiribati": {
            "name": "Kiribati",
            "official_language": [
                "Kiribati language",
                "English Language"
            ],
            "currency_used": [
                "Kiribati dollar",
                "Australian dollar"
            ],
            "gdp_nominal_per_capita": 3700,
            "population": 98000
        },
        "/en/kuwait": {
            "name": "Kuwait",
            "official_language": [
                "Arabic Language",
                "English Language"
            ],
            "currency_used": [
                "Kuwaiti dinar"
            ],
            "gdp_nominal_per_capita": 60800,
            "population": 2985000
        },
        "/en/kosovo": {
            "name": "Kosovo",
            "official_language": [],
            "currency_used": [
                "Euro"
            ],
            "gdp_nominal_per_capita": 2300,
            "population": 1805000
        },
        "/en/latvia": {
            "name": "Latvia",
            "official_language": [
                "Latvian Language"
            ],
            "currency_used": [
                "Latvian lats"
            ],
            "gdp_nominal_per_capita": 17800,
            "population": 2260000
        },
        "/en/luxembourg": {
            "name": "Luxembourg",
            "official_language": [
                "Luxembourgish language",
                "German Language",
                "French Language"
            ],
            "currency_used": [
                "Euro",
                "Belgian franc",
                "Dutch gulden"
            ],
            "gdp_nominal_per_capita": 85100,
            "population": 491700
        },
        "/en/libya": {
            "name": "Libya",
            "official_language": [
                "Arabic Language",
                "Italian Language"
            ],
            "currency_used": [
                "Libyan dinar"
            ],
            "gdp_nominal_per_capita": 14900,
            "population": 6420000
        },
        "/en/lithuania": {
            "name": "Lithuania",
            "official_language": [
                "Lithuanian language"
            ],
            "currency_used": [
                "Lithuanian litas"
            ],
            "gdp_nominal_per_capita": 18400,
            "population": 3350400
        },
        "/en/laos": {
            "name": "Laos",
            "official_language": [
                "Lao Language",
                "French Language"
            ],
            "currency_used": [
                "Lao kip"
            ],
            "gdp_nominal_per_capita": 2100,
            "population": 6320000
        },
        "/en/lebanon": {
            "name": "Lebanon",
            "official_language": [
                "Arabic Language",
                "Lebanese Arabic",
                "French Language"
            ],
            "currency_used": [
                "Lebanese lira"
            ],
            "gdp_nominal_per_capita": 11100,
            "population": 4224000
        },
        "/en/lesotho": {
            "name": "Lesotho",
            "official_language": [
                "Sotho, Southern Language",
                "English Language"
            ],
            "currency_used": [
                "Lesotho loti"
            ],
            "gdp_nominal_per_capita": 1600,
            "population": 2067000
        },
        "/en/liberia": {
            "name": "Liberia",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Liberian dollar"
            ],
            "gdp_nominal_per_capita": 500,
            "population": 3955000
        },
        "/en/liechtenstein": {
            "name": "Liechtenstein",
            "official_language": [
                "German Language"
            ],
            "currency_used": [
                "Swiss franc",
                "Austro-Hungarian krone",
                "Austrian krone"
            ],
            "gdp_nominal_per_capita": 118000,
            "population": 35700
        },
        "/en/madagascar": {
            "name": "Madagascar",
            "official_language": [
                "Malagasy language",
                "English Language",
                "French Language"
            ],
            "currency_used": [
                "Malagasy ariary"
            ],
            "gdp_nominal_per_capita": 1100,
            "population": 19625000
        },
        "/en/macau": {
            "name": "Macau",
            "official_language": [
                "Standard Cantonese",
                "Portuguese Language",
                "Chinese language",
                "Standard Mandarin",
                "Cantonese"
            ],
            "currency_used": [
                "Macanese pataca"
            ],
            "gdp_nominal_per_capita": 30000,
            "population": 537972
        },
        "/en/malawi": {
            "name": "Malawi",
            "official_language": [
                "Chewa language",
                "English Language"
            ],
            "currency_used": [
                "Malawian kwacha",
                "Malawian pound"
            ],
            "gdp_nominal_per_capita": 800,
            "population": 15263000
        },
        "/en/maldives": {
            "name": "Maldives",
            "official_language": [
                "Dhivehi language",
                "Mahl language"
            ],
            "currency_used": [
                "Maldivian rufiyaa"
            ],
            "gdp_nominal_per_capita": 4500,
            "population": 309000
        },
        "/en/mali": {
            "name": "Mali",
            "official_language": [
                "Bambara language",
                "French Language"
            ],
            "currency_used": [
                "CFA franc",
                "West African CFA franc",
                "Malian franc"
            ],
            "gdp_nominal_per_capita": 1200,
            "population": 13010000
        },
        "/en/malta": {
            "name": "Malta",
            "official_language": [
                "Maltese Language",
                "English Language"
            ],
            "currency_used": [
                "Euro"
            ],
            "gdp_nominal_per_capita": 24200,
            "population": 412600
        },
        "/en/marshall_islands": {
            "name": "Marshall Islands",
            "official_language": [
                "Marshallese Language",
                "English Language"
            ],
            "currency_used": [
                "US$"
            ],
            "gdp_nominal_per_capita": 2500,
            "population": 62000
        },
        "/en/mauritania": {
            "name": "Mauritania",
            "official_language": [
                "Arabic Language",
                "French Language"
            ],
            "currency_used": [
                "Mauritanian ouguiya"
            ],
            "gdp_nominal_per_capita": 1900,
            "population": 3291000
        },
        "/en/mauritius": {
            "name": "Mauritius",
            "official_language": [
                "English Language",
                "French Language"
            ],
            "currency_used": [
                "Mauritian rupee"
            ],
            "gdp_nominal_per_capita": 12400,
            "population": 1288000
        },
        "/en/moldova": {
            "name": "Moldova",
            "official_language": [
                "Moldovan language",
                "Romanian Language"
            ],
            "currency_used": [
                "Moldovan leu",
                "Moldovan cupon"
            ],
            "gdp_nominal_per_capita": 2500,
            "population": 3603506
        },
        "/en/monaco": {
            "name": "Monaco",
            "official_language": [
                "Monégasque language",
                "Italian Language",
                "French Language"
            ],
            "currency_used": [
                "Euro"
            ],
            "gdp_nominal_per_capita": 30000,
            "population": 33000
        },
        "/en/mongolia": {
            "name": "Mongolia",
            "official_language": [
                "Mongolian language"
            ],
            "currency_used": [
                "Mongolian tögrög"
            ],
            "gdp_nominal_per_capita": 3300,
            "population": 2671000
        },
        "/en/morocco": {
            "name": "Morocco",
            "official_language": [
                "Arabic Language",
                "French Language",
                "Berber languages",
                "Moroccan Arabic"
            ],
            "currency_used": [
                "Moroccan dirham"
            ],
            "gdp_nominal_per_capita": 4000,
            "population": 31394044
        },
        "/en/mozambique": {
            "name": "Mozambique",
            "official_language": [
                "Portuguese Language"
            ],
            "currency_used": [
                "Mozambican metical",
                "Mozambican escudo"
            ],
            "gdp_nominal_per_capita": 900,
            "population": 39100000
        },
        "/en/myanmar": {
            "name": "Burma",
            "official_language": [
                "Burmese Language"
            ],
            "currency_used": [
                "Myanma kyat"
            ],
            "gdp_nominal_per_capita": 1200,
            "population": 50020000
        },
        "/en/montenegro": {
            "name": "Montenegro",
            "official_language": [
                "Serbian language",
                "Bosnian language",
                "Albanian language",
                "Montenegrin language",
                "Croatian language"
            ],
            "currency_used": [
                "Euro"
            ],
            "gdp_nominal_per_capita": 10600,
            "population": 624000
        },
        "/en/netherlands": {
            "name": "Netherlands",
            "official_language": [
                "Dutch Language"
            ],
            "currency_used": [
                "Euro",
                "Aruban florin",
                "Netherlands Antillean gulden"
            ],
            "gdp_nominal_per_capita": 41300,
            "population": 16492476
        },
        "/en/niue": {
            "name": "Niue",
            "official_language": [
                "Niue Language",
                "English Language"
            ],
            "currency_used": [
                "New Zealand dollar"
            ],
            "gdp_nominal_per_capita": 5800,
            "population": 1500
        },
        "/en/norway": {
            "name": "Norway",
            "official_language": [
                "Nynorsk",
                "Bokmål",
                "Norwegian Language",
                "Sami languages"
            ],
            "currency_used": [
                "Norwegian krone"
            ],
            "gdp_nominal_per_capita": 57500,
            "population": 4810122
        },
        "/en/north_korea": {
            "name": "North Korea",
            "official_language": [
                "Korean Language"
            ],
            "currency_used": [
                "North Korean won"
            ],
            "gdp_nominal_per_capita": 1800,
            "population": 23906000
        },
        "/en/namibia": {
            "name": "Namibia",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Namibian dollar"
            ],
            "gdp_nominal_per_capita": 5500,
            "population": 2171000
        },
        "/en/new_caledonia": {
            "name": "New Caledonia",
            "official_language": [
                "French Language"
            ],
            "currency_used": [
                "CFP franc",
                "French franc"
            ],
            "gdp_nominal_per_capita": 15000,
            "population": 221943
        },
        "/en/nicaragua": {
            "name": "Nicaragua",
            "official_language": [
                "Spanish Language",
                "Mískito Language"
            ],
            "currency_used": [
                "Nicaraguan córdoba"
            ],
            "gdp_nominal_per_capita": 3000,
            "population": 5743000
        },
        "/en/niger": {
            "name": "Niger",
            "official_language": [
                "Hausa Language",
                "Fula language",
                "Zarma Language",
                "Tuareg languages",
                "Kanuri language",
                "French Language"
            ],
            "currency_used": [
                "CFA franc",
                "West African CFA franc"
            ],
            "gdp_nominal_per_capita": 700,
            "population": 15290000
        },
        "/en/nigeria": {
            "name": "Nigeria",
            "official_language": [
                "English Language",
                "Hausa Language",
                "Igbo Language",
                "Yoruba Language",
                "Pidgin, Nigerian Language"
            ],
            "currency_used": [
                "Nigerian naira",
                "Nigerian pound"
            ],
            "gdp_nominal_per_capita": 2200,
            "population": 154729000
        },
        "/en/northern_mariana_islands": {
            "name": "Northern Mariana Islands",
            "official_language": [
                "Chamorro Language",
                "Carolinian Language",
                "English Language"
            ],
            "currency_used": [
                "US$"
            ],
            "gdp_nominal_per_capita": 12500,
            "population": 87000
        },
        "/en/oman": {
            "name": "Oman",
            "official_language": [
                "Arabic Language"
            ],
            "currency_used": [
                "Omani rial"
            ],
            "gdp_nominal_per_capita": 20400,
            "population": 2845415
        },
        "/en/poland": {
            "name": "Poland",
            "official_language": [
                "Polish Language"
            ],
            "currency_used": [
                "Polish złoty"
            ],
            "gdp_nominal_per_capita": 17800,
            "population": 38130300
        },
        "/en/papua_new_guinea": {
            "name": "Papua New Guinea",
            "official_language": [
                "Hiri Motu language",
                "Tok Pisin Language",
                "English Language"
            ],
            "currency_used": [
                "Papua New Guinean kina"
            ],
            "gdp_nominal_per_capita": 2300,
            "population": 6732000
        },
        "/en/panama": {
            "name": "Panama",
            "official_language": [
                "Spanish Language"
            ],
            "currency_used": [
                "Panamanian balboa",
                "US$"
            ],
            "gdp_nominal_per_capita": 11900,
            "population": 3454000
        },
        "/en/portugal": {
            "name": "Portugal",
            "official_language": [
                "Portuguese Language"
            ],
            "currency_used": [
                "Euro"
            ],
            "gdp_nominal_per_capita": 22000,
            "population": 10631800
        },
        "/en/puerto_rico": {
            "name": "Puerto Rico",
            "official_language": [
                "Spanish Language",
                "English Language"
            ],
            "currency_used": [
                "US$"
            ],
            "gdp_nominal_per_capita": 18700,
            "population": 3982000
        },
        "/en/pakistan": {
            "name": "Pakistan",
            "official_language": [
                "English Language",
                "Seraiki Language",
                "Sindhi Language",
                "Pashto language",
                "Balochi language",
                "Punjabi language",
                "Urdu Language"
            ],
            "currency_used": [
                "Pakistani rupee"
            ],
            "gdp_nominal_per_capita": 2600,
            "population": 167762000
        },
        "/en/palau": {
            "name": "Palau",
            "official_language": [
                "Japanese Language",
                "Palauan Language",
                "English Language"
            ],
            "currency_used": [
                "US$"
            ],
            "gdp_nominal_per_capita": 8100,
            "population": 20000
        },
        "/en/paraguay": {
            "name": "Paraguay",
            "official_language": [
                "Paraguayan Guaraní",
                "Spanish Language",
                "Guaraní language"
            ],
            "currency_used": [
                "Paraguayan guaraní",
                "Paraguayan peso"
            ],
            "gdp_nominal_per_capita": 4300,
            "population": 6349000
        },
        "/en/philippines": {
            "name": "Philippines",
            "official_language": [
                "Filipino language",
                "English Language",
                "Tagalog language"
            ],
            "currency_used": [
                "Philippine peso"
            ],
            "gdp_nominal_per_capita": 3400,
            "population": 92226600
        },
        "/en/quebec": {
            "name": "Québec",
            "official_language": [],
            "currency_used": [],
            "gdp_nominal_per_capita": 37278,
            "population": 7750504
        },
        "/en/qatar": {
            "name": "Qatar",
            "official_language": [
                "Arabic Language"
            ],
            "currency_used": [
                "Qatari riyal"
            ],
            "gdp_nominal_per_capita": 101000,
            "population": 1409423
        },
        "/en/russia": {
            "name": "Russia",
            "official_language": [
                "Russian Language"
            ],
            "currency_used": [
                "Russian ruble"
            ],
            "gdp_nominal_per_capita": 15800,
            "population": 141850000
        },
        "/en/romania": {
            "name": "Romania",
            "official_language": [
                "Romanian Language"
            ],
            "currency_used": [
                "Romanian leu"
            ],
            "gdp_nominal_per_capita": 12500,
            "population": 21496700
        },
        "/en/rwanda": {
            "name": "Rwanda",
            "official_language": [
                "Kinyarwanda language",
                "English Language",
                "French Language"
            ],
            "currency_used": [
                "Rwandan franc"
            ],
            "gdp_nominal_per_capita": 900,
            "population": 9998000
        },
        "/en/republic_of_china": {
            "name": "Republic of China (Taiwan)",
            "official_language": [
                "Taiwanese Mandarin"
            ],
            "currency_used": [
                "New Taiwan dollar",
                "Old Taiwan dollar",
                "Chinese customs gold unit"
            ],
            "gdp_nominal_per_capita": 31900,
            "population": 23027672
        },
        "/en/spain": {
            "name": "Spain",
            "official_language": [
                "Spanish Language",
                "Basque Language",
                "Catalan language",
                "Galician Language",
                "Aranese language",
                "Occitan language",
                "Asturian language",
                "Aragonese Language",
                "Valencian"
            ],
            "currency_used": [
                "Euro",
                "Spanish peseta"
            ],
            "gdp_nominal_per_capita": 36500,
            "population": 45957671
        },
        "/en/switzerland": {
            "name": "Switzerland",
            "official_language": [
                "Romansh language",
                "Schwyzerdütsch Language",
                "German Language",
                "Italian Language",
                "French Language"
            ],
            "currency_used": [
                "Swiss franc"
            ],
            "gdp_nominal_per_capita": 40900,
            "population": 7731167
        },
        "/en/sri_lanka": {
            "name": "Sri Lanka",
            "official_language": [
                "Tamil Language",
                "Sinhala Language",
                "English Language",
                "Sinhala Language, English and Tamil also used"
            ],
            "currency_used": [
                "Sri Lankan rupee"
            ],
            "gdp_nominal_per_capita": 4400,
            "population": 20238000
        },
        "/en/suriname": {
            "name": "Suriname",
            "official_language": [
                "Dutch Language",
                "Sranan Tongo"
            ],
            "currency_used": [
                "Suriname dollar",
                "Surinamese gulden",
                "Dutch gulden"
            ],
            "gdp_nominal_per_capita": 8900,
            "population": 520000
        },
        "/en/slovakia": {
            "name": "Slovakia",
            "official_language": [
                "Slovak Language"
            ],
            "currency_used": [
                "Slovak koruna",
                "Euro"
            ],
            "gdp_nominal_per_capita": 22600,
            "population": 5411100
        },
        "/en/scotland": {
            "name": "Scotland",
            "official_language": [
                "Scottish English",
                "Goidelic languages",
                "Scottish Gaelic language"
            ],
            "currency_used": [
                "UK £"
            ],
            "gdp_nominal_per_capita": 16944,
            "population": 5168000
        },
        "/en/south_korea": {
            "name": "South Korea",
            "official_language": [
                "Korean Language"
            ],
            "currency_used": [
                "South Korean won ₩",
                "South Korean hwan",
                "South Korean won"
            ],
            "gdp_nominal_per_capita": 26000,
            "population": 48333000
        },
        "/en/saint_kitts_and_nevis": {
            "name": "Saint Kitts and Nevis",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "East Caribbean dollar"
            ],
            "gdp_nominal_per_capita": 20000,
            "population": 52000
        },
        "/en/saint_lucia": {
            "name": "Saint Lucia",
            "official_language": [
                "Antillean Creole",
                "Spanish Language",
                "English Language",
                "French-based creole languages"
            ],
            "currency_used": [
                "East Caribbean dollar"
            ],
            "gdp_nominal_per_capita": 11300,
            "population": 172000
        },
        "/en/saint_vincent_and_the_grenadines": {
            "name": "Saint Vincent and the Grenadines",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "East Caribbean dollar"
            ],
            "gdp_nominal_per_capita": 9200,
            "population": 109000
        },
        "/en/samoa": {
            "name": "Samoa",
            "official_language": [
                "Samoan Language",
                "English Language"
            ],
            "currency_used": [
                "Samoan tala"
            ],
            "gdp_nominal_per_capita": 5000,
            "population": 179000
        },
        "/en/san_marino": {
            "name": "San Marino",
            "official_language": [
                "Italian Language"
            ],
            "currency_used": [
                "Euro",
                "San Marinese lira"
            ],
            "gdp_nominal_per_capita": 41900,
            "population": 31451
        },
        "/en/senegal": {
            "name": "Senegal",
            "official_language": [
                "French Language"
            ],
            "currency_used": [
                "CFA franc",
                "West African CFA franc"
            ],
            "gdp_nominal_per_capita": 1800,
            "population": 12534000
        },
        "/en/seychelles": {
            "name": "Seychelles",
            "official_language": [
                "English Language",
                "Seselwa Creole French Language",
                "French Language"
            ],
            "currency_used": [
                "Seychelles rupee"
            ],
            "gdp_nominal_per_capita": 18700,
            "population": 84000
        },
        "/en/sierra_leone": {
            "name": "Sierra Leone",
            "official_language": [
                "English Language",
                "Bengali Language"
            ],
            "currency_used": [
                "Sierra Leonean leone"
            ],
            "gdp_nominal_per_capita": 700,
            "population": 5696000
        },
        "/en/singapore": {
            "name": "Singapore",
            "official_language": [
                "Tamil Language",
                "Standard Mandarin",
                "Chinese language",
                "Malay Language",
                "English Language"
            ],
            "currency_used": [
                "Singapore dollar"
            ],
            "gdp_nominal_per_capita": 52000,
            "population": 4839400
        },
        "/en/slovenia": {
            "name": "Slovenia",
            "official_language": [
                "Slovenian language"
            ],
            "currency_used": [
                "Euro",
                "Slovenian tolar"
            ],
            "gdp_nominal_per_capita": 30800,
            "population": 2053355
        },
        "/en/somalia": {
            "name": "Somalia",
            "official_language": [
                "Somali Language",
                "Arabic Language",
                "Italian Language"
            ],
            "currency_used": [
                "Somali shilling"
            ],
            "gdp_nominal_per_capita": 600,
            "population": 9133000
        },
        "/en/sudan": {
            "name": "Sudan",
            "official_language": [
                "Arabic Language",
                "English Language"
            ],
            "currency_used": [
                "Sudanese pound",
                "Sudanese dinar"
            ],
            "gdp_nominal_per_capita": 2200,
            "population": 42272435
        },
        "/en/swaziland": {
            "name": "Swaziland",
            "official_language": [
                "Swati Language",
                "Zulu Language",
                "English Language"
            ],
            "currency_used": [
                "Swazi lilangeni"
            ],
            "gdp_nominal_per_capita": 5100,
            "population": 1185000
        },
        "/en/syria": {
            "name": "Syria",
            "official_language": [
                "Arabic Language"
            ],
            "currency_used": [
                "Syrian pound",
                "Turkish new lira",
                "Turkish lira"
            ],
            "gdp_nominal_per_capita": 4900,
            "population": 21906000
        },
        "/en/serbia": {
            "name": "Serbia",
            "official_language": [
                "Serbian language"
            ],
            "currency_used": [
                "Serbian dinar"
            ],
            "gdp_nominal_per_capita": 8200,
            "population": 9850000
        },
        "/en/tajikistan": {
            "name": "Tajikistan",
            "official_language": [
                "Persian Language",
                "Tajiki Language",
                "Russian Language"
            ],
            "currency_used": [
                "Tajikistani somoni"
            ],
            "gdp_nominal_per_capita": 1800,
            "population": 6952000
        },
        "/en/tanzania": {
            "name": "Tanzania",
            "official_language": [
                "Swahili Language",
                "English Language"
            ],
            "currency_used": [
                "East African shilling",
                "Tanzanian shilling"
            ],
            "gdp_nominal_per_capita": 1400,
            "population": 43739000
        },
        "/en/thailand": {
            "name": "Thailand",
            "official_language": [
                "Thai Language"
            ],
            "currency_used": [
                "Thai baht"
            ],
            "gdp_nominal_per_capita": 8700,
            "population": 63389730
        },
        "/en/togo": {
            "name": "Togo",
            "official_language": [
                "French Language"
            ],
            "currency_used": [
                "CFA franc",
                "West African CFA franc"
            ],
            "gdp_nominal_per_capita": 900,
            "population": 6619000
        },
        "/en/tonga": {
            "name": "Tonga",
            "official_language": [
                "Tongan Language",
                "English Language",
                "French Language"
            ],
            "currency_used": [
                "Tongan pa'anga"
            ],
            "gdp_nominal_per_capita": 4400,
            "population": 104000
        },
        "/en/tunisia": {
            "name": "Tunisia",
            "official_language": [
                "Arabic Language",
                "Berber languages",
                "Modern Standard Arabic",
                "French Language"
            ],
            "currency_used": [
                "Tunisian dinar",
                "Tunisian franc"
            ],
            "gdp_nominal_per_capita": 8000,
            "population": 10432500
        },
        "/en/tuvalu": {
            "name": "Tuvalu",
            "official_language": [
                "Tuvaluan Language",
                "English Language"
            ],
            "currency_used": [
                "Tuvaluan dollar",
                "Australian dollar"
            ],
            "gdp_nominal_per_capita": 1600,
            "population": 10000
        },
        "/en/united_kingdom": {
            "name": "United Kingdom",
            "official_language": [
                "English Language",
                "Welsh Language",
                "Scottish Gaelic language"
            ],
            "currency_used": [
                "UK £",
                "Euro",
                "Falkland Islands pound",
                "Cayman Islands dollar",
                "Bermuda dollar",
                "East Caribbean dollar",
                "Saint Helena pound",
                "New Zealand dollar"
            ],
            "gdp_nominal_per_capita": 37400,
            "population": 61612300
        },
        "/en/ukraine": {
            "name": "Ukraine",
            "official_language": [
                "Ukrainian Language"
            ],
            "currency_used": [
                "Ukrainian Hrivna",
                "Ukrainian hryvnia"
            ],
            "gdp_nominal_per_capita": 6900,
            "population": 46143700
        },
        "/en/uganda": {
            "name": "Uganda",
            "official_language": [
                "Swahili Language",
                "English Language",
                "Ganda Language"
            ],
            "currency_used": [
                "Ugandan shilling",
                "East African shilling"
            ],
            "gdp_nominal_per_capita": 1100,
            "population": 32710000
        },
        "/en/uruguay": {
            "name": "Uruguay",
            "official_language": [
                "Spanish Language",
                "Riverense Portuñol language"
            ],
            "currency_used": [
                "Uruguayan peso"
            ],
            "gdp_nominal_per_capita": 12300,
            "population": 3334052
        },
        "/en/uzbekistan": {
            "name": "Uzbekistan",
            "official_language": [
                "Uzbek language"
            ],
            "currency_used": [
                "Uzbekistani som"
            ],
            "gdp_nominal_per_capita": 2700,
            "population": 27488000
        },
        "/en/venezuela": {
            "name": "Venezuela",
            "official_language": [
                "Spanish Language"
            ],
            "currency_used": [
                "Venezuelan bolívar"
            ],
            "gdp_nominal_per_capita": 14000,
            "population": 28685400
        },
        "/en/vanuatu": {
            "name": "Vanuatu",
            "official_language": [
                "Bislama Language",
                "English Language",
                "French Language"
            ],
            "currency_used": [
                "Vanuatu vatu"
            ],
            "gdp_nominal_per_capita": 4700,
            "population": 240000
        },
        "/en/west_bank": {
            "name": "West Bank",
            "official_language": [],
            "currency_used": [
                "Israeli new sheqel",
                "Jordanian dinar"
            ],
            "gdp_nominal_per_capita": 2900,
            "population": 2535927
        },
        "/en/zimbabwe": {
            "name": "Zimbabwe",
            "official_language": [
                "English Language",
                "South African English",
                "Ndebele Language",
                "Shona Language"
            ],
            "currency_used": [
                "US$"
            ],
            "gdp_nominal_per_capita": 200,
            "population": 12523000
        },
        "/en/zambia": {
            "name": "Zambia",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Zambian kwacha",
                "Zambian pound"
            ],
            "gdp_nominal_per_capita": 1500,
            "population": 12935000
        },
        "/en/democratic_republic_of_the_congo": {
            "name": "Democratic Republic of the Congo",
            "official_language": [
                "Lingala Language",
                "French Language"
            ],
            "currency_used": [
                "Congolese franc"
            ],
            "gdp_nominal_per_capita": 300,
            "population": 66020000
        },
        "/authority/iso/3166-1/numeric/268": {
            "name": "Georgia",
            "official_language": [
                "Georgian Language"
            ],
            "currency_used": [
                "Georgian lari",
                "Russian ruble"
            ],
            "gdp_nominal_per_capita": 5000,
            "population": 4260333
        },
        "/en/cote_divoire": {
            "name": "Côte d'Ivoire",
            "official_language": [
                "French Language"
            ],
            "currency_used": [
                "West African CFA franc",
                "CFA franc"
            ],
            "gdp_nominal_per_capita": 1700,
            "population": 21075000
        },
        "/en/the_gambia": {
            "name": "The Gambia",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Gambian dalasi"
            ],
            "gdp_nominal_per_capita": 1200,
            "population": 1705000
        },
        "/en/south_africa": {
            "name": "South Africa",
            "official_language": [
                "Zulu Language",
                "Xhosa Language",
                "Venda Language",
                "Tswana Language",
                "Tsonga Language",
                "Swati Language",
                "Southern Sotho",
                "Sotho, Northern Language",
                "Ndebele Language",
                "South African English",
                "Afrikaans Language",
                "Sotho, Southern Language",
                "English Language",
                "Arabic Language",
                "Greek Language",
                "Hebrew Language",
                "Hindi Language",
                "Portuguese Language",
                "Sanskrit Language",
                "Tamil Language",
                "Telugu language",
                "Gujarati Language",
                "South African Sign Language",
                "Khoe languages",
                "Nama Language",
                "Urdu Language",
                "German Language"
            ],
            "currency_used": [
                "South African rand",
                "ZAR"
            ],
            "gdp_nominal_per_capita": 10400,
            "population": 49320150
        },
        "/en/united_arab_emirates": {
            "name": "United Arab Emirates",
            "official_language": [
                "Arabic Language"
            ],
            "currency_used": [
                "United Arab Emirates dirham"
            ],
            "gdp_nominal_per_capita": 40400,
            "population": 4599000
        },
        "/en/sao_tome_and_principe": {
            "name": "São Tomé and Príncipe",
            "official_language": [
                "Portuguese Language"
            ],
            "currency_used": [
                "São Tomé and Príncipe dobra",
                "São Tomé and Príncipe escudo"
            ],
            "gdp_nominal_per_capita": 1400,
            "population": 163000
        },
        "/en/denmark": {
            "name": "Denmark",
            "official_language": [
                "Danish Language"
            ],
            "currency_used": [
                "Danish krone",
                "Faroese króna"
            ],
            "gdp_nominal_per_capita": 38900,
            "population": 5529270
        },
        "/en/kyrgyzstan": {
            "name": "Kyrgyzstan",
            "official_language": [
                "Russian Language",
                "Kyrgyz language"
            ],
            "currency_used": [
                "Kyrgyzstani som"
            ],
            "gdp_nominal_per_capita": 2200,
            "population": 5482000
        },
        "/en/peru": {
            "name": "Peru",
            "official_language": [
                "Aymara language",
                "Quechua",
                "Spanish Language"
            ],
            "currency_used": [
                "Peruvian libra",
                "Peruvian nuevo sol",
                "Peruvian sol",
                "Peruvian inti"
            ],
            "gdp_nominal_per_capita": 8500,
            "population": 29165000
        },
        "/en/nepal": {
            "name": "Nepal",
            "official_language": [
                "Nepali Language"
            ],
            "currency_used": [
                "Nepalese rupee"
            ],
            "gdp_nominal_per_capita": 1000,
            "population": 29331000
        },
        "/en/ethiopia": {
            "name": "Ethiopia",
            "official_language": [
                "Amharic Language"
            ],
            "currency_used": [
                "Ethiopian birr"
            ],
            "gdp_nominal_per_capita": 800,
            "population": 82824732
        },
        "/en/kenya": {
            "name": "Kenya",
            "official_language": [
                "Swahili Language",
                "English Language"
            ],
            "currency_used": [
                "Kenya Shilling",
                "Kenyan shilling",
                "East African shilling"
            ],
            "gdp_nominal_per_capita": 1800,
            "population": 39802000
        },
        "/en/turkmenistan": {
            "name": "Turkmenistan",
            "official_language": [
                "Turkmen Language"
            ],
            "currency_used": [
                "Turkmenistani manat"
            ],
            "gdp_nominal_per_capita": 5800,
            "population": 5110000
        },
        "/en/vietnam": {
            "name": "Vietnam",
            "official_language": [
                "Vietnamese Language"
            ],
            "currency_used": [
                "Vietnamese dong"
            ],
            "gdp_nominal_per_capita": 2900,
            "population": 88069000
        },
        "/en/solomon_islands": {
            "name": "Solomon Islands",
            "official_language": [
                "English Language",
                "Pijin Language"
            ],
            "currency_used": [
                "Solomon Islands dollar"
            ],
            "gdp_nominal_per_capita": 1900,
            "population": 523000
        },
        "/en/cambodia": {
            "name": "Cambodia",
            "official_language": [
                "Khmer language"
            ],
            "currency_used": [
                "Cambodian riel",
                "Cambodian franc"
            ],
            "gdp_nominal_per_capita": 2100,
            "population": 14805358
        },
        "/en/saudi_arabia": {
            "name": "Saudi Arabia",
            "official_language": [
                "Arabic Language"
            ],
            "currency_used": [
                "Saudi riyal"
            ],
            "gdp_nominal_per_capita": 21300,
            "population": 25721000
        },
        "/en/yemen": {
            "name": "Yemen",
            "official_language": [
                "Arabic Language"
            ],
            "currency_used": [
                "Yemeni rial"
            ],
            "gdp_nominal_per_capita": 2600,
            "population": 23580220
        },
        "/en/turkey": {
            "name": "Turkey",
            "official_language": [
                "Turkish Language"
            ],
            "currency_used": [
                "Turkish lira"
            ],
            "gdp_nominal_per_capita": 12900,
            "population": 74815703
        },
        "/en/bhutan": {
            "name": "Bhutan",
            "official_language": [
                "Dzongkha Language",
                "English Language"
            ],
            "currency_used": [
                "Bhutanese ngultrum",
                "Indian rupee"
            ],
            "gdp_nominal_per_capita": 4800,
            "population": 697000
        },
        "/en/united_states": {
            "name": "United States of America",
            "official_language": [
                "None"
            ],
            "currency_used": [
                "US$"
            ],
            "gdp_nominal_per_capita": 46842,
            "population": 308745538
        },
        "/en/trinidad_and_tobago": {
            "name": "Trinidad and Tobago",
            "official_language": [
                "Spanish Language",
                "English Language"
            ],
            "currency_used": [
                "Trinidad and Tobago dollar"
            ],
            "gdp_nominal_per_capita": 18600,
            "population": 1339000
        },
        "/en/malaysia": {
            "name": "Malaysia",
            "official_language": [
                "Malay Language",
                "English Language",
                "Malaysian language"
            ],
            "currency_used": [
                "Malaysian ringgit"
            ],
            "gdp_nominal_per_capita": 15700,
            "population": 28067000
        },
        "/en/mexico": {
            "name": "Mexico",
            "official_language": [
                "Spanish Language"
            ],
            "currency_used": [
                "MX",
                "Mexican peso"
            ],
            "gdp_nominal_per_capita": 14400,
            "population": 109610000
        },
        "/en/australia": {
            "name": "Australia",
            "official_language": [
                "English Language"
            ],
            "currency_used": [
                "Australian dollar",
                "Australian pound"
            ],
            "gdp_nominal_per_capita": 43163,
            "population": 21707964
        },
        "/en/new_zealand": {
            "name": "New Zealand",
            "official_language": [
                "Māori language",
                "New Zealand Sign Language",
                "English Language",
                "New Zealand English"
            ],
            "currency_used": [
                "New Zealand dollar",
                "Cook Islands dollar"
            ],
            "gdp_nominal_per_capita": 29698,
            "population": 4302010
        },
        "/en/cuba": {
            "name": "Cuba",
            "official_language": [
                "Spanish Language"
            ],
            "currency_used": [
                "Cuban peso",
                "Cuban convertible peso",
                "US$"
            ],
            "gdp_nominal_per_capita": 12700,
            "population": 11204000
        },
        "/en/iraq": {
            "name": "Iraq",
            "official_language": [
                "Kurdish language",
                "Arabic Language",
                "Turkmen Language",
                "Assyrian Neo-Aramaic Language",
                "Syriac language"
            ],
            "currency_used": [
                "Iraqi dinar",
                "Swiss dinar"
            ],
            "gdp_nominal_per_capita": 4000,
            "population": 30747000
        },
        "/en/china": {
            "name": "China",
            "official_language": [
                "Chinese language",
                "Standard Mandarin"
            ],
            "currency_used": [
                "Renminbi"
            ],
            "gdp_nominal_per_capita": 6100,
            "population": 1335962133
        },
        "/en/canada": {
            "name": "Canada",
            "official_language": [
                "English Language",
                "French Language"
            ],
            "currency_used": [
                "Canadian dollar"
            ],
            "gdp_nominal_per_capita": 40200,
            "population": 33598000
        },
        "/en/sweden": {
            "name": "Sweden",
            "official_language": [
                "Swedish Language"
            ],
            "currency_used": [
                "Swedish krona"
            ],
            "gdp_nominal_per_capita": 39600,
            "population": 9259828
        },
        "/en/france": {
            "name": "France",
            "official_language": [
                "French Language"
            ],
            "currency_used": [
                "Euro",
                "Monegasque franc"
            ],
            "gdp_nominal_per_capita": 32700,
            "population": 65073482
        }
    }
}