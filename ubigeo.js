// intervenir en caso de ultremega emergencia,caso contrario, intentar evitar a toda costa por el bien de tu salud mental
//tiempo perdido = 1.3 - hrs

const datos = [
  {
    "name": "AMAZONAS",
    "provinces": [
      {
        "name": "CHACHAPOYAS",
        "districts": [
          {
            "name": "ASUNCION",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BALSAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHACHAPOYAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHETO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHILIQUIN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHUQUIBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "GRANADA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANCAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA JALCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LEVANTO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LEYMEBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MAGDALENA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARISCAL CASTILLA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MOLINOPAMPA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MONTEVIDEO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OLLEROS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "QUINJALCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN FRANCISCO DE DAGUAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN ISIDRO DE MAINO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SOLOCO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SONCHE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "BAGUA",
        "districts": [
          {
            "name": "ARAMANGO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BAGUA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COPALLIN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "EL PARCO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "IMAZA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA PECA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "BONGARA",
        "districts": [
          {
            "name": "CHISQUILLA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHURUJA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COROSHA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CUISPES",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "FLORIDA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JAZAN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JUMBILLA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "RECTA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN CARLOS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SHIPASBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VALERA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YAMBRASBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CONDORCANQUI",
        "districts": [
          {
            "name": "EL CENEPA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "NIEVA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "RIO SANTIAGO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "LUYA",
        "districts": [
          {
            "name": "CAMPORREDONDO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COCABAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COLCAMAR",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CONILA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "INGUILPATA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LAMUD",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LONGUITA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LONYA CHICO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LUYA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LUYA VIEJO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARIA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OCALLI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OCUMAL",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PISUQUIA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PROVIDENCIA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN CRISTOBAL",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN FRANCISCO DEL YESO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JERONIMO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JUAN DE LOPECANCHA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA CATALINA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTO TOMAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TINGO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TRITA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "UTCUBAMBA",
        "districts": [
          {
            "name": "BAGUA GRANDE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CAJARURO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CUMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "EL MILAGRO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JAMALCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LONYA GRANDE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YAMON",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "RODRIGUEZ DE MENDOZA",
        "districts": [
          {
            "name": "CHIRIMOTO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "COCHAMAL",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "HUAMBO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "LIMABAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "LONGAR",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "MARISCAL BENAVIDES",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "MILPUC",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "OMIA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "SAN NICOLAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "SANTA ROSA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "TOTORA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "VISTA ALEGRE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "UN DISTRITO"
          }
        ]
      }
    ]
  },
  {
    "name": "ANCASH",
    "provinces": [
      {
        "name": "ANTONIO RAYMONDI",
        "districts": [
          {
            "name": "CHACCHO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "CHINGAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "LLAMELLIN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "ACZO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "MIRGAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "SAN JUAN DE RONTOY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          }
        ]
      },
      {
        "name": "HUARI",
        "districts": [
          {
            "name": "ANRA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "HUACACHI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "HUACCHIS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "PAUCAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "RAPAYAN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "UCO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "HUARI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "CAJAY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "CHAVIN DE HUANTAR",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "HUACHIS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "HUANTAR",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "MASIN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "PONTO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "RAHUAPAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "SAN MARCOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "SAN PEDRO DE CHANA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          }
        ]
      },
      {
        "name": "ASUNCION",
        "districts": [
          {
            "name": "CHACAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ACOCHACA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CARHUAZ",
        "districts": [
          {
            "name": "CARHUAZ",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ACOPAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "AMASHCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ANTA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ATAQUERO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARCARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PARIAHUANCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN MIGUEL DE ACO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SHILLA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TINCO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YUNGAR",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CARLOS F. FITZCARRALD",
        "districts": [
          {
            "name": "SAN LUIS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN NICOLAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YAUYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CORONGO",
        "districts": [
          {
            "name": "ACO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BAMBAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CORONGO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CUSCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA PAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YANAC",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YUPAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "MARISCAL LUZURIAGA",
        "districts": [
          {
            "name": "CASCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ELEAZAR GUZMAN BARRON",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "FIDEL OLIVAS ESCUDERO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LLAMA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LLUMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LUCMA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MUSGA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PISCOBAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "PALLASCA",
        "districts": [
          {
            "name": "BOLOGNESI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CABANA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CONCHUCOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUACASCHUQUE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANDOVAL",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LACABAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LLAPO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PALLASCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAMPAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA ROSA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TAUCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "POMABAMBA",
        "districts": [
          {
            "name": "HUAYLLAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAROBAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "POMABAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "QUINUABAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "SIHUAS",
        "districts": [
          {
            "name": "ACOBAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ALFONSO UGARTE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CASHAPAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHINGALPO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAYLLABAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "QUICHES",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "RAGASH",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JUAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SICSIBAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SIHUAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "HUAYLAS",
        "districts": [
          {
            "name": "CARAZ",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUALLANCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUATA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAYLAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MATO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAMPAROMAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PUEBLO LIBRE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA CRUZ",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTO TORIBIO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YURACMARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "YUNGAY",
        "districts": [
          {
            "name": "YUNGAY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CASCAPARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MANCOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MATACOTO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "QUILLO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "RANRAHIRCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SHUPLUY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YANAMA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "HUARAZ",
        "districts": [
          {
            "name": "HUARAZ",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COCHABAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COLCABAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANCHAY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "INDEPENDENCIA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JANGAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA LIBERTAD",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OLLEROS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAMPAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PARIACOTO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PIRA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TARICA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "BOLOGNESI",
        "districts": [
          {
            "name": "CHIQUIAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ABELARDO PARDO LEZAMETA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ANTONIO RAYMONDI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "AQUIA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CAJACAY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CANIS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COLQUIOC",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUALLANCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUASTA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAYLLACAYAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA PRIMAVERA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MANGAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PACLLON",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN MIGUEL DE CORPANQUI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TICLLOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "RECUAY",
        "districts": [
          {
            "name": "RECUAY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CATAC",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COTAPARACO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAYLLAPAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LLACLLIN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAMPAS CHICO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PARARIN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TAPACOCHA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TICAPAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "AIJA",
        "districts": [
          {
            "name": "AIJA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOS DISTRITOS"
          },
          {
            "name": "CORIS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOS DISTRITOS"
          },
          {
            "name": "HUACLLAN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "LA MERCED",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "SUCCHA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRES DISTRITOS"
          }
        ]
      },
      {
        "name": "OCROS",
        "districts": [
          {
            "name": "OCROS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "ACAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "CAJAMARQUILLA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "CARHUAPAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "CONGAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "LLIPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "SAN CRISTOBAL DE RAJAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "SANTIAGO DE CHILCAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "COCHAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "DOS DISTRITOS"
          },
          {
            "name": "SAN PEDRO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "DOS DISTRITOS"
          }
        ]
      },
      {
        "name": "HUARMEY",
        "districts": [
          {
            "name": "HUARMEY",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "DOS DISTRITOS"
          },
          {
            "name": "CULEBRAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "DOS DISTRITOS"
          },
          {
            "name": "COCHAPETI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "HUAYAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "MALVAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          }
        ]
      },
      {
        "name": "SANTA",
        "districts": [
          {
            "name": "CACERES DEL PERU",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "MACATE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "MORO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "CHIMBOTE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "COISHCO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "NEPEÑA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "SAMANCO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "SANTA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "NUEVO CHIMBOTE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "SEIS DISTRITOS"
          }
        ]
      },
      {
        "name": "CASMA",
        "districts": [
          {
            "name": "CASMA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BUENA VISTA ALTA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COMANDANTE NOEL",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YAUTAN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "APURIMAC",
    "provinces": [
      {
        "name": "COTABAMBAS",
        "districts": [
          {
            "name": "CALLHUAHUACHO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COTABAMBAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COYLLURQUI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HAQUIRA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TAMBOBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "GRAU",
        "districts": [
          {
            "name": "CHUQUIBAMBILLA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CURASCO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CURPAHUASI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "GAMARRA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAYLLATI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MAMARA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MICAELA BASTIDAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PATAYPAMPA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PROGRESO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN ANTONIO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA ROSA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TURPAY",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VILCABAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VIRUNDO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "ABANCAY",
        "districts": [
          {
            "name": "ABANCAY",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHACOCHE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CIRCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CURAHUASI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANIPACA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LAMBRAMA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PICHIRHUA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN PEDRO DE CACHORA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TAMBURCO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CHINCHEROS",
        "districts": [
          {
            "name": "ANCO-HUALLO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHINCHEROS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COCHARCAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUACCANA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OCOBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ONGOY",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "RANRACANCHA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "URANMARCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "EL PORVENIR",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LOS CHANKAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ROCHACC",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "ANDAHUAYLAS",
        "districts": [
          {
            "name": "ANDAHUAYLAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "ANDARAPA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "HUANCARAMA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "HUANCARAY",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "KAQUIABAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "KISHUARA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "PACOBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "PACUCHA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "SAN ANTONIO DE CACHI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "SAN JERONIMO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "SANTA MARIA DE CHICMO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "TALAVERA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "TURPO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "CHIARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "HUAYANA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "PAMPACHIRI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "POMACOCHA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "SAN MIGUEL DE CHACCRAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "TUMAY HUARACA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          }
        ]
      },
      {
        "name": "AYMARAES",
        "districts": [
          {
            "name": "CHAPIMARCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "COLCABAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "LUCRE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "SAN JUAN DE CHACÑA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "TINTAY",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "CAPAYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "CARAYBAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "CHALHUANCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "COTARUSE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "HUAYLLO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "JUSTO APU SAHUARAURA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "POCOHUANCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "SAÑAYCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "SORAYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "TAPAIRIHUA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "TORAYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "YANACA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          }
        ]
      },
      {
        "name": "ANTABAMBA",
        "districts": [
          {
            "name": "ANTABAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "EL ORO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAQUIRCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JUAN ESPINOZA MEDRANO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OROPESA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PACHACONAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SABAINO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "AREQUIPA",
    "provinces": [
      {
        "name": "LA UNION",
        "districts": [
          {
            "name": "COTAHUASI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ALCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHARCANA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAYNACOTAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAMPAMARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PUYCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "QUECHUALLA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAYLA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TAURIA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TOMEPAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TORO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CAYLLOMA",
        "districts": [
          {
            "name": "CHIVAY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ACHOMA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CABANACONDE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CALLALLI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CAYLLOMA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COPORAQUE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAMBO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ICHUPAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LARI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LLUTA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MACA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MADRIGAL",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN ANTONIO DE CHUCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SIBAYO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TAPAY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TISCO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TUTI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YANQUE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MAJES",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "UN DISTRITO"
          }
        ]
      },
      {
        "name": "CASTILLA",
        "districts": [
          {
            "name": "ANDAGUA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "AYO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "CHACHAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "CHILCAYMARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "CHOCO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "MACHAGUAY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "ORCOPAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "PAMPACOLCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "TIPAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "UÑON",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "VIRACO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "APLAO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "HUANCARQUI",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "URACA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRES DISTRITOS"
          }
        ]
      },
      {
        "name": "AREQUIPA",
        "districts": [
          {
            "name": "AREQUIPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "ALTO SELVA ALEGRE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "CAYMA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "CERRO COLORADO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "CHARACATO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "CHIGUATA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "JACOBO HUNTER",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "JOSE LUIS BUSTAMANTE Y RIVERO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "MARIANO MELGAR",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "MIRAFLORES",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "MOLLEBAYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "PAUCARPATA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "POCSI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "QUEQUEÑA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "SABANDIA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "SACHACA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "SAN JUAN DE TARUCANI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "SOCABAYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "TIABAYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "YANAHUARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "YURA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTIUN DISTRITOS"
          },
          {
            "name": "LA JOYA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "POLOBAYA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "SAN JUAN DE SIGUAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "SANTA ISABEL DE SIGUAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "SANTA RITA DE SIGUAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "UCHUMAYO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "VITOR",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "YARABAMBA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "OCHO DISTRITOS"
          }
        ]
      },
      {
        "name": "CONDESUYOS",
        "districts": [
          {
            "name": "CAYARANI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "CHICHAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "SALAMANCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "CHUQUIBAMBA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "ANDARAY",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "IRAY",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "RIO GRANDE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "YANAQUIHUA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "CINCO DISTRITOS"
          }
        ]
      },
      {
        "name": "ISLAY",
        "districts": [
          {
            "name": "MOLLENDO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COCACHACRA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "DEAN VALDIVIA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ISLAY",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MEJIA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PUNTA DE BOMBON",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CAMANA",
        "districts": [
          {
            "name": "CAMANA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JOSE MARIA QUIMPER",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARIANO NICOLAS VALCARCEL",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARISCAL CACERES",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "NICOLAS DE PIEROLA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OCOÑA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "QUILCA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAMUEL PASTOR",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CARAVELI",
        "districts": [
          {
            "name": "CARAVELI",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ACARI",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ATICO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ATIQUIPA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BELLA UNION",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CAHUACHO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHALA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHAPARRA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANUHUANU",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JAQUI",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LOMAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "QUICACHA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YAUCA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "AYACUCHO",
    "provinces": [
      {
        "name": "HUANTA",
        "districts": [
          {
            "name": "AYAHUANCO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "IGUAIN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAMANGUILLA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANTA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LLOCHEGUA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LURICOCHA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTILLANA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SIVIA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHACA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "LA MAR",
        "districts": [
          {
            "name": "ANCO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "AYNA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHILCAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHUNGUI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LUIS CARRANZA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN MIGUEL",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA ROSA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TAMBO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ORONCCOY",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "HUAMANGA",
        "districts": [
          {
            "name": "ACOCRO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "ACOSVINCHOS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "AYACUCHO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "JESUS NAZARENO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "OCROS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "PACAYCASA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "QUINUA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "SAN JOSE DE TICLLAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "SANTIAGO DE PISCHA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "TAMBILLO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "CARMEN ALTO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "CHIARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "SAN JUAN BAUTISTA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "SOCOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "VINCHOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          }
        ]
      },
      {
        "name": "VILCASHUAMAN",
        "districts": [
          {
            "name": "CONCEPCION",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "UN DISTRITO"
          },
          {
            "name": "ACCOMARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "CARHUANCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "HUAMBALPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "INDEPENDENCIA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "SAURAMA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "VILCASHUAMAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "VISCHONGO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          }
        ]
      },
      {
        "name": "HUANCA SANCOS",
        "districts": [
          {
            "name": "CARAPO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SACSAMARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANCOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTIAGO DE LUCANAMARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CANGALLO",
        "districts": [
          {
            "name": "CANGALLO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHUSCHI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LOS MOROCHUCOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARIA PARADO DE BELLIDO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PARAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TOTOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "PAUCAR DEL SARA SARA",
        "districts": [
          {
            "name": "COLTA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CORCULLA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARCABAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OYOLO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PARARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAUSA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JAVIER DE ALPABAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JOSE DE USHUA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SARA SARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "SUCRE",
        "districts": [
          {
            "name": "BELEN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHALCOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHILCAYOC",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUACAÑA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MORCOLLA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAICO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "QUEROBAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN PEDRO DE LARCAY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN SALVADOR DE QUIJE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTIAGO DE PAUCARAY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SORAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "VICTOR FAJARDO",
        "districts": [
          {
            "name": "ALCAMENCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "APONGO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ASQUIPATA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CANARIA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CAYARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COLCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAMANQUIQUIA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANCAPI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANCARAYLLA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SARHUA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VILCANCHOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "PARINACOCHAS",
        "districts": [
          {
            "name": "CHUMPI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "CORACORA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "CORONEL CASTAÑEDA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "PACAPAUSA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "SAN FRANCISCO DE RAVACAYCU",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "UPAHUACHO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "PULLO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "DOS DISTRITOS"
          },
          {
            "name": "PUYUSCA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "DOS DISTRITOS"
          }
        ]
      },
      {
        "name": "LUCANAS",
        "districts": [
          {
            "name": "AUCARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "CABANA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "CARMEN SALCEDO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "CHAVIÑA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "CHIPAO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "LUCANAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "PUQUIO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "SAN JUAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "SAN PEDRO DE PALCO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "SANTA ANA DE HUAYCAHUACHO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "HUAC-HUAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "LARAMATE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "LEONCIO PRADO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "LLAUTA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "OCAÑA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "OTOCA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "SAISA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "SAN CRISTOBAL",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "SAN PEDRO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "SANCOS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "SANTA LUCIA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "ONCE DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "CAJAMARCA",
    "provinces": [
      {
        "name": "HUALGAYOC",
        "districts": [
          {
            "name": "BAMBAMARCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHUGUR",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUALGAYOC",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "SAN IGNACIO",
        "districts": [
          {
            "name": "SAN IGNACIO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHIRINOS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUARANGO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA COIPA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "NAMBALLE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JOSE DE LOURDES",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TABACONAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CELENDIN",
        "districts": [
          {
            "name": "CELENDIN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHUMUCH",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CORTEGANA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUASMIN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JORGE CHAVEZ",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JOSE GALVEZ",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MIGUEL IGLESIAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OXAMARCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SOROCHUCO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SUCRE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "UTCO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA LIBERTAD DE PALLAN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CUTERVO",
        "districts": [
          {
            "name": "CUTERVO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CATORCE DISTRITOS"
          },
          {
            "name": "CALLAYUC",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CATORCE DISTRITOS"
          },
          {
            "name": "CHOROS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CATORCE DISTRITOS"
          },
          {
            "name": "CUJILLO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CATORCE DISTRITOS"
          },
          {
            "name": "LA RAMADA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CATORCE DISTRITOS"
          },
          {
            "name": "PIMPINGOS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CATORCE DISTRITOS"
          },
          {
            "name": "SAN ANDRES DE CUTERVO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CATORCE DISTRITOS"
          },
          {
            "name": "SAN JUAN DE CUTERVO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CATORCE DISTRITOS"
          },
          {
            "name": "SAN LUIS DE LUCMA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CATORCE DISTRITOS"
          },
          {
            "name": "SANTA CRUZ",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CATORCE DISTRITOS"
          },
          {
            "name": "SANTO DOMINGO DE LA CAPILLA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CATORCE DISTRITOS"
          },
          {
            "name": "SANTO TOMAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CATORCE DISTRITOS"
          },
          {
            "name": "SOCOTA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CATORCE DISTRITOS"
          },
          {
            "name": "TORIBIO CASANOVA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CATORCE DISTRITOS"
          },
          {
            "name": "QUEROCOTILLO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "UN DISTRITO"
          }
        ]
      },
      {
        "name": "JAEN",
        "districts": [
          {
            "name": "JAEN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "BELLAVISTA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "CHONTALI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "COLASAY",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "HUABAL",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "LAS PIRIAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "SAN JOSE DEL ALTO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "SANTA ROSA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "POMAHUACA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "PUCARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "SALLIQUE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "SAN FELIPE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CUATRO DISTRITOS"
          }
        ]
      },
      {
        "name": "SAN MARCOS",
        "districts": [
          {
            "name": "GREGORIO PITA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "ICHOCAN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "JOSE MANUEL QUIROZ",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "JOSE SABOGAL",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "CHANCAY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "EDUARDO VILLANUEVA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "PEDRO GALVEZ",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          }
        ]
      },
      {
        "name": "CHOTA",
        "districts": [
          {
            "name": "CHOTA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "ANGUIA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "CHADIN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "CHIGUIRIP",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "CHIMBAN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "CHOROPAMPA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "CONCHAN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "LAJAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "PACCHA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "PION",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "TACABAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "COCHABAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "HUAMBOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "LLAMA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "MIRACOSTA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "QUEROCOTO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "SAN JUAN DE LICUPIS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "TOCMOCHE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          }
        ]
      },
      {
        "name": "CAJABAMBA",
        "districts": [
          {
            "name": "CAJABAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "CACHACHI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "CONDEBAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "SITACOCHA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "UN DISTRITO"
          }
        ]
      },
      {
        "name": "CAJAMARCA",
        "districts": [
          {
            "name": "ENCAÑADA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "UN DISTRITO"
          },
          {
            "name": "CAJAMARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "ASUNCION",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "CHETILLA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "COSPAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "JESUS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "LLACANORA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "LOS BAÑOS DEL INCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "MAGDALENA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "MATARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "NAMORA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          }
        ]
      },
      {
        "name": "CONTUMAZA",
        "districts": [
          {
            "name": "CONTUMAZA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHILETE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CUPISNIQUE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "GUZMANGO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN BENITO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA CRUZ DE TOLED",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TANTARICA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YONAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "SAN MIGUEL",
        "districts": [
          {
            "name": "SAN MIGUEL",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BOLIVAR",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CALQUIS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CATILLUC",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "EL PRADO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA FLORIDA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LLAPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "NANCHOC",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "NIEPOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN GREGORIO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN SILVESTRE DE COCHAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TONGOD",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "UNION AGUA BLANCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "SAN PABLO",
        "districts": [
          {
            "name": "SAN PABLO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN BERNARDINO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN LUIS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TUMBADEN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "SANTA CRUZ",
        "districts": [
          {
            "name": "SANTA CRUZ",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ANDABAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CATACHE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHANCAYBAÑOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA ESPERANZA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "NINABAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PULAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAUCEPAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SEXI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "UTICYACU",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YAUYUCAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "CALLAO",
    "provinces": [
      {
        "name": "CALLAO",
        "districts": [
          {
            "name": "CALLAO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BELLAVISTA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CARMEN DE LA LEGUA REYNOSO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA PERLA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA PUNTA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VENTANILLA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MI PERU",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "CUSCO",
    "provinces": [
      {
        "name": "CALCA",
        "districts": [
          {
            "name": "CALCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COYA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LAMAY",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LARES",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PISAC",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN SALVADOR",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TARAY",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YANATILE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "URUBAMBA",
        "districts": [
          {
            "name": "URUBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHINCHERO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAYLLABAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MACHUPICCHU",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OLLANTAYTAMBO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YUCAY",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "PAUCARTAMBO",
        "districts": [
          {
            "name": "PAUCARTAMBO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CAICAY",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHALLABAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COLQUEPATA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANCARANI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "KOSÑIPATA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "ANTA",
        "districts": [
          {
            "name": "ANTA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ANCAHUASI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CACHIMAYO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHINCHAYPUJIO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAROCONDO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LIMATAMBO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MOLLEPATA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PUCYURA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ZURITE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "QUISPICANCHIS",
        "districts": [
          {
            "name": "URCOS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ANDAHUAYLILLAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CAMANTI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "UN DISTRITO"
          },
          {
            "name": "CCARHUAYO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CCATCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CUSIPATA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUARO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LUCRE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARCAPATA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OCONGATE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OROPESA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "PARURO",
        "districts": [
          {
            "name": "PARURO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ACCHA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CCAPI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COLCHA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANOQUITE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OMACHA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PACCARITAMBO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PILLPINTO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YAURISQUE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CANCHIS",
        "districts": [
          {
            "name": "SICUANI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHECACUPE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COMBAPATA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARANGANI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PITUMARCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN PABLO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN PEDRO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TINTA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CANAS",
        "districts": [
          {
            "name": "YANAOCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHECCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "KUNTURKANKI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LANGUI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LAYO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAMPAMARCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "QUEHUE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TUPAC AMARU",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "ACOMAYO",
        "districts": [
          {
            "name": "ACOMAYO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ACOPIA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ACOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MOSOC LLACTA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "UN DISTRITO"
          },
          {
            "name": "POMACANCHI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "RONDOCAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANGARARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CUSCO",
        "districts": [
          {
            "name": "CUSCO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CCORCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "POROY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JERONIMO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN SEBASTIAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTIAGO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAYLLA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "WANCHAQ",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "LA CONVENCION",
        "districts": [
          {
            "name": "SANTA ANA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ECHARATE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAYOPATA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARANURA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OCOBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "QUELLOUNO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "KIMBIRI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PICHARI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VILLA VIRGEN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VILLA KINTIARINA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MEGANTONI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CHUMBIVILCAS",
        "districts": [
          {
            "name": "CAPACMARCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "CHAMACA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "COLQUEMARCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "LIVITACA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "SANTO TOMAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "LLUSCO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "QUIÑOTA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "VELILLE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CUATRO DISTRITOS"
          }
        ]
      },
      {
        "name": "ESPINAR",
        "districts": [
          {
            "name": "ESPINAR",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CONDOROMA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COPORAQUE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OCORURO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PALLPATA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PICHIGUA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SUYCKUTAMBO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ALTO PICHIGUA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "HUANCAVELICA",
    "provinces": [
      {
        "name": "CHURCAMPA",
        "districts": [
          {
            "name": "ANCO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHINCHIHUASI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHURCAMPA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COSME",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "EL CARMEN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA MERCED",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LOCROJA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PACHAMARCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAUCARBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN MIGUEL DE MAYOCC",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN PEDRO DE CORIS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "ACOBAMBA",
        "districts": [
          {
            "name": "ACOBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ANDABAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ANTA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CAJA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARCAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAUCARA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "POMACOCHA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ROSARIO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "TAYACAJA",
        "districts": [
          {
            "name": "COLCABAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "DANIEL HERNANDEZ",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "HUACHOCOLPA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "HUARIBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "QUISHUAR",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "SALCABAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "SAN MARCOS DE ROCCHAC",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "SALCAHUASI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "SURCUBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "TINTAY PUNCU",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "PICHOS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "ROBLE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "ACOSTAMBO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "ACRAQUIA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "AHUAYCHA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "HUANDO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "ÑAHUIMPUQUIO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "PAMPAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "PAZOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "SANTIAGO DE TUCUMA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "OCHO DISTRITOS"
          }
        ]
      },
      {
        "name": "ANGARAES",
        "districts": [
          {
            "name": "CHINCHO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "UN DISTRITO"
          },
          {
            "name": "ANCHONGA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "CALLANMARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "CCOCHACCASA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "CONGALLA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "HUANCA HUANCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "HUAYLLAY GRANDE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "JULCAMARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "LIRCAY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "SAN ANTONIO DE ANTAPARCO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "SECCLLA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "SANTO TOMAS DE PATA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          }
        ]
      },
      {
        "name": "HUANCAVELICA",
        "districts": [
          {
            "name": "ACOBAMBILLA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ACORIA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ASCENSION",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CONAYCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CUENCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUACHOCOLPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANCAVELICA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAYLLAHUARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "IZCUCHACA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LARIA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MANTA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARISCAL CACERES",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MOYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "NUEVO OCCORO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PALCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PILCHACA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VILCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YAULI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CASTROVIRREYNA",
        "districts": [
          {
            "name": "ARMA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "AURAHUA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "CASTROVIRREYNA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "CHUPAMARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "COCAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "HUACHOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "HUAMATAMBO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "MOLLEPAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "SANTA ANA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "TANTARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "TICRAPO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "CAPILLAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "DOS DISTRITOS"
          },
          {
            "name": "SAN JUAN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "DOS DISTRITOS"
          }
        ]
      },
      {
        "name": "HUAYTARA",
        "districts": [
          {
            "name": "SAN ANTONIO DE CUSICANCHA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "PILPICHACA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "QUERCO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "AYAVI",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "CORDOVA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "HUAYACUNDO ARMA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "HUAYTARA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "LARAMARCA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "OCOYO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "QUITO ARMA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "SAN FRANCISCO DE SANGAYAICO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "SAN ISIDRO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "SANTIAGO DE CHOCORVOS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "SANTIAGO DE QUIRAHUARA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "SANTO DOMINGO DE CAPILLAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRECE DISTRITOS"
          },
          {
            "name": "TAMBO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRECE DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "HUANUCO",
    "provinces": [
      {
        "name": "HUANUCO",
        "districts": [
          {
            "name": "PILLCO MARCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANUCO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YACUS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "AMARILIS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHINCHAO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHURUBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARGOS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "QUISQUI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN FRANCISCO DE CAYRAN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN PEDRO DE CHAULAN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA MARIA DEL VALLE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YARUMAYO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "HUACAYBAMBA",
        "districts": [
          {
            "name": "HUACAYBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CANCHABAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COCHABAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PINRA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "LEONCIO PRADO",
        "districts": [
          {
            "name": "PUCAYACU",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VILLA FLORES",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "RUPA RUPA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CASTILLO GRANDE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "DANIEL ALOMIA ROBLES",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HERMILIO VALDIZAN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JOSE CRESPO Y CASTILLO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LUYANDO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARIANO DAMASO BERAUN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "MARAÑON",
        "districts": [
          {
            "name": "LA MORADA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUACRACHUCO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHOLON",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN BUENAVENTURA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "PUERTO INCA",
        "districts": [
          {
            "name": "PUERTO INCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CODO DEL POZUZO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HONORIA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TOURNAVISTA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YUYAPICHIS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "YAROWILCA",
        "districts": [
          {
            "name": "CHAVINILLO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CAHUAC",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHACABAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "APARICIO POMARES",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JACAS CHICO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OBAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAMPAMARCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHORAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "PACHITEA",
        "districts": [
          {
            "name": "PANAO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHAGLLA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MOLINO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "UMARI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "AMBO",
        "districts": [
          {
            "name": "AMBO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CAYNA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COLPAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CONCHAMARCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUACAR",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN FRANCISCO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN RAFAEL",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TOMAY KICHWA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "HUAMALIES",
        "districts": [
          {
            "name": "ARANCAY",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "CHAVIN DE PARIARCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "JACAS GRANDE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "JIRCAN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "MONZON",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "PUNCHAO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "SINGA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "TANTAMAYO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "LLATA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "MIRAFLORES",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "PUÑOS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRES DISTRITOS"
          }
        ]
      },
      {
        "name": "DOS DE MAYO",
        "districts": [
          {
            "name": "LA UNION",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "PACHAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "RIPAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "SHUNQUI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "SILLAPATA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "YANAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "QUIVILLA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "MARIAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "CHUQUIS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRES DISTRITOS"
          }
        ]
      },
      {
        "name": "LAURICOCHA",
        "districts": [
          {
            "name": "SAN MIGUEL DE CAURI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JESUS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BAÑOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JIVIA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "QUEROPALCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "RONDOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN FRANCISCO DE ASIS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "ICA",
    "provinces": [
      {
        "name": "CHINCHA",
        "districts": [
          {
            "name": "SAN PEDRO DE HUACARPANA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "UN DISTRITO"
          },
          {
            "name": "ALTO LARAN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "CHAVIN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "CHINCHA ALTA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "CHINCHA BAJA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "EL CARMEN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "GROCIO PRADO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "PUEBLO NUEVO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "SAN JUAN DE YANAC",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "SUNAMPE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "TAMBO DE MORA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "DIEZ DISTRITOS"
          }
        ]
      },
      {
        "name": "PALPA",
        "districts": [
          {
            "name": "LLIPATA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PALPA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "RIO GRANDE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA CRUZ",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TIBILLO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "ICA",
        "districts": [
          {
            "name": "ICA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA TINGUIÑA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LOS AQUIJES",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OCUCAJE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PACHACUTEC",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PARCONA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PUEBLO NUEVO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SALAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JOSE DE LOS MOLINOS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JUAN BAUTISTA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTIAGO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SUBTANJALLA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TATE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YAUCA DEL ROSARIO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "NAZCA",
        "districts": [
          {
            "name": "CHANGUILLO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "EL INGENIO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARCONA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "NAZCA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VISTA ALEGRE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "PISCO",
        "districts": [
          {
            "name": "HUANCANO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUMAY",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "INDEPENDENCIA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PARACAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PISCO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN ANDRES",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN CLEMENTE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TUPAC AMARU INCA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "JUNIN",
    "provinces": [
      {
        "name": "CHANCHAMAYO",
        "districts": [
          {
            "name": "CHANCHAMAYO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PERENE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PICHANAQUI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN LUIS DE SHUARO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN RAMON",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VITOC",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "SATIPO",
        "districts": [
          {
            "name": "SATIPO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COVIRIALI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LLAYLLA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MAZAMARI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAMPA HERMOSA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PANGOA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "RIO NEGRO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "RIO TAMBO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "TARMA",
        "districts": [
          {
            "name": "ACOBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "HUASAHUASI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "PALCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "PALCAMAYO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "SAN PEDRO DE CAJAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "TAPO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "TARMA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "LA UNION",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "HUARICOLCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TRES DISTRITOS"
          }
        ]
      },
      {
        "name": "CONCEPCION",
        "districts": [
          {
            "name": "CONCEPCION",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "ACO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "CHAMBARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "HEROINAS TOLEDO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "MANZANARES",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "MATAHUASI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "MITO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "NUEVE DE JULIO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "ORCOTUNA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "SAN JOSE DE QUERO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "SANTA ROSA DE OCOPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "ONCE DISTRITOS"
          },
          {
            "name": "ANDAMARCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "COCHAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "COMAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "MARISCAL CASTILLA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          }
        ]
      },
      {
        "name": "CHUPACA",
        "districts": [
          {
            "name": "CHUPACA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "AHUAC",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHONGOS BAJO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUACHAC",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAMANCACA CHICO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JUAN DE YSCOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JUAN DE JARPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TRES DE DICIEMBRE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YANACANCHA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "HUANCAYO",
        "districts": [
          {
            "name": "PARIAHUANCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOS DISTRITOS"
          },
          {
            "name": "SANTO DOMINGO DE ACOBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOS DISTRITOS"
          },
          {
            "name": "CARHUACALLANGA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "CHACAPAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "CHICCHE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "CHILCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "CHONGOS ALTO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "CHUPURO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "COLCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "CULLHUAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "EL TAMBO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "HUACRAPUQUIO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "HUALHUAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "HUANCAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "HUANCAYO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "HUASICANCHA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "HUAYUCACHI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "INGENIO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "PILCOMAYO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "PUCARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "QUICHUAY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "QUILCAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "SAN AGUSTIN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "SAN JERONIMO DE TUNAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "SAÑO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "SAPALLANGA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "SICAYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          },
          {
            "name": "VIQUES",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTISEIS DISTRITOS"
          }
        ]
      },
      {
        "name": "JAUJA",
        "districts": [
          {
            "name": "JAUJA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "ACOLLA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "ATAURA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "CANCHAYLLO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "CURICACA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "EL MANTARO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "HUAMALI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "HUARIPAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "HUERTAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "JANJAILLO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "JULCAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "LEONOR ORDOÑEZ",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "LLOCLLAPAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "MARCO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "MASMA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "MASMA CHICCHE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "MUQUI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "MUQUIYAUYO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "PACA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "PACCHA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "PANCAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "PARCO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "POMACANCHA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "SAN LORENZO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "SAN PEDRO DE CHUNAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "SAUSA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "SINCOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "TUNAN MARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "YAULI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "YAUYOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TREINTA DISTRITOS"
          },
          {
            "name": "APATA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "MOLINOS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "MONOBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "RICRAN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          }
        ]
      },
      {
        "name": "JUNIN",
        "districts": [
          {
            "name": "CARHUAMAYO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOS DISTRITOS"
          },
          {
            "name": "ULCUMAYO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOS DISTRITOS"
          },
          {
            "name": "JUNIN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOS DISTRITOS"
          },
          {
            "name": "ONDORES",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOS DISTRITOS"
          }
        ]
      },
      {
        "name": "YAULI",
        "districts": [
          {
            "name": "CHACAPALPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAY-HUAY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA OROYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARCAPOMACOCHA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MOROCOCHA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PACCHA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA BARBARA DE CARHUACAYAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA ROSA DE SACCO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SUITUCANCHA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YAULI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "LA LIBERTAD",
    "provinces": [
      {
        "name": "BOLIVAR",
        "districts": [
          {
            "name": "BOLIVAR",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BAMBAMARCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CONDORMARCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LONGOTEA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "UCHUMARCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "UCUNCHA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "PATAZ",
        "districts": [
          {
            "name": "TAYABAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BULDIBUYO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHILLIA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANCASPATA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAYLILLAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUAYO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ONGON",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PARCOY",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PATAZ",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PIAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTIAGO DE CHALLAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TAURIJA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "URPAY",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "SANCHEZ CARRION",
        "districts": [
          {
            "name": "COCHORCO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOS DISTRITOS"
          },
          {
            "name": "SARTIMBAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DOS DISTRITOS"
          },
          {
            "name": "HUAMACHUCO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "CHUGAY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "CURGOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "MARCABAL",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "SANAGORAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "SARIN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          }
        ]
      },
      {
        "name": "SANTIAGO DE CHUCO",
        "districts": [
          {
            "name": "SANTIAGO DE CHUCO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ANGASMARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CACHICADAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MOLLEBAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MOLLEPATA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "QUIRUVILCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA CRUZ DE CHUCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SITABAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "GRAN CHIMU",
        "districts": [
          {
            "name": "CASCAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LUCMA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARMOT",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAYAPULLO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "JULCAN",
        "districts": [
          {
            "name": "JULCAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CALAMARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CARABAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUASO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "OTUZCO",
        "districts": [
          {
            "name": "OTUZCO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "AGALLPAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHARAT",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUARANCHAL",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA CUESTA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MACHE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PARANDAY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SALPO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SINSICAP",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "USQUIL",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CHEPEN",
        "districts": [
          {
            "name": "CHEPEN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PACANGA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PUEBLO NUEVO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "ASCOPE",
        "districts": [
          {
            "name": "ASCOPE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHICAMA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHOCOPE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MAGDALENA DE CAO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAIJAN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "RAZURI",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTIAGO DE CAO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CASA GRANDE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "PACASMAYO",
        "districts": [
          {
            "name": "SAN PEDRO DE LLOC",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "GUADALUPE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JEQUETEPEQUE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PACASMAYO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JOSE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "TRUJILLO",
        "districts": [
          {
            "name": "TRUJILLO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "EL PORVENIR",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "FLORENCIA DE MORA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANCHACO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA ESPERANZA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LAREDO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MOCHE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "POROTO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SALAVERRY",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SIMBAL",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VICTOR LARCO HERRERA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "VIRU",
        "districts": [
          {
            "name": "VIRU",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHAO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "GUADALUPITO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "LAMBAYEQUE",
    "provinces": [
      {
        "name": "FERREÑAFE",
        "districts": [
          {
            "name": "CAÑARIS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOS DISTRITOS"
          },
          {
            "name": "INCAHUASI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOS DISTRITOS"
          },
          {
            "name": "FERREÑAFE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "MANUEL ANTONIO MESONES MURO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "PITIPO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "PUEBLO NUEVO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "CUATRO DISTRITOS"
          }
        ]
      },
      {
        "name": "LAMBAYEQUE",
        "districts": [
          {
            "name": "SALAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "UN DISTRITO"
          },
          {
            "name": "LAMBAYEQUE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHOCHOPE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ILLIMO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JAYANCA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MOCHUMI",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MORROPE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MOTUPE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OLMOS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PACORA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JOSE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TUCUME",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CHICLAYO",
        "districts": [
          {
            "name": "CHICLAYO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHONGOYAPE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ETEN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ETEN PUERTO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JOSE LEONARDO ORTIZ",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA VICTORIA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LAGUNAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MONSEFU",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "NUEVA ARICA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OYOTUN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PICSI",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PIMENTEL",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "REQUE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA ROSA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAÑA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CAYALTI",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PATAPO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "POMALCA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PUCALA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TUMAN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "LIMA",
    "provinces": [
      {
        "name": "CAJATAMBO",
        "districts": [
          {
            "name": "CAJATAMBO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "GORGOR",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANCAPON",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MANAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "OYON",
        "districts": [
          {
            "name": "OYON",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ANDAJES",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CAUJUL",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COCHAMARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "NAVAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PACHANGARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "YAUYOS",
        "districts": [
          {
            "name": "YAUYOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "ALIS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "AYAUCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "AYAVIRI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "AZANGARO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "CACRA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "CARANIA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "CATAHUASI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "CHOCOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "COCHAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "COLONIA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "HONGOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "HUAMPARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "HUANCAYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "HUANGASCAR",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "HUANTAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "HUAÑEC",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "LARAOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "LINCHA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "MADEAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "MIRAFLORES",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "PUTINZA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "QUINCHES",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "SAN JOAQUIN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "SAN PEDRO DE PILAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "TANTA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "TOMAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "TUPE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "VIÑAC",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "VITIS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTINUEVE DISTRITOS"
          },
          {
            "name": "OMAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "QUINOCAY",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "TAURIPAMPA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRES DISTRITOS"
          }
        ]
      },
      {
        "name": "HUAROCHIRI",
        "districts": [
          {
            "name": "MATUCANA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "CALLAHUANCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "CARAMPOMA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "CHICLA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "HUACHUPAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "HUANZA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "HUAROCHIRI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "LAHUAYTAMBO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "LANGA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "LARAOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "SAN ANDRES DE TUPICOCHA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "SAN BARTOLOME",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "SAN DAMIAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "SAN JUAN DE IRIS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "SAN JUAN DE TANTARANCHE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "SAN LORENZO DE QUINTI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "SAN MATEO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "SAN MATEO DE OTAO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "SAN PEDRO DE CASTA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "SAN PEDRO DE HUANCAYRE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "SANGALLAYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "SANTA CRUZ DE COCACHACRA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "SANTIAGO DE ANCHUCAYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "SANTIAGO DE TUNA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "SURCO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "VEINTICINCO DISTRITOS"
          },
          {
            "name": "ANTIOQUIA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "CUENCA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "MARIATANA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "RICARDO PALMA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "SAN ANTONIO DE CHACLLA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "SANTA EULALIA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "SANTO DOMINGO DE LOS OLLEROS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "SIETE DISTRITOS"
          }
        ]
      },
      {
        "name": "CANTA",
        "districts": [
          {
            "name": "CANTA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "HUAROS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "LACHAQUI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "SAN BUENAVENTURA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "ARAHUAY",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "HUAMANTANGA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "SANTA ROSA DE QUIVES",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRES DISTRITOS"
          }
        ]
      },
      {
        "name": "HUARAL",
        "districts": [
          {
            "name": "HUARAL",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "AUCALLAMA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "CHANCAY",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "ATAVILLOS ALTO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "NUEVE DISTRITOS"
          },
          {
            "name": "ATAVILLOS BAJO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "NUEVE DISTRITOS"
          },
          {
            "name": "IHUARI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "NUEVE DISTRITOS"
          },
          {
            "name": "LAMPIAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "NUEVE DISTRITOS"
          },
          {
            "name": "PACARAOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "NUEVE DISTRITOS"
          },
          {
            "name": "SAN MIGUEL DE ACOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "NUEVE DISTRITOS"
          },
          {
            "name": "SANTA CRUZ DE ANDAMARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "NUEVE DISTRITOS"
          },
          {
            "name": "SUMBILCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "NUEVE DISTRITOS"
          },
          {
            "name": "VEINTISIETE DE NOVIEMBRE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "NUEVE DISTRITOS"
          }
        ]
      },
      {
        "name": "HUAURA",
        "districts": [
          {
            "name": "CHECRAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "LEONCIO PRADO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "PACCHO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "SANTA LEONOR",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "HUACHO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "AMBAR",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "CALETA DE CARQUIN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "HUALMAY",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "HUAURA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "SANTA MARIA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "SAYAN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "VEGUETA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "OCHO DISTRITOS"
          }
        ]
      },
      {
        "name": "CAÑETE",
        "districts": [
          {
            "name": "SAN VICENTE DE CAÑETE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "QUINCE DISTRITOS"
          },
          {
            "name": "ASIA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "QUINCE DISTRITOS"
          },
          {
            "name": "CALANGO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "QUINCE DISTRITOS"
          },
          {
            "name": "CERRO AZUL",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "QUINCE DISTRITOS"
          },
          {
            "name": "CHILCA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "QUINCE DISTRITOS"
          },
          {
            "name": "COAYLLO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "QUINCE DISTRITOS"
          },
          {
            "name": "IMPERIAL",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "QUINCE DISTRITOS"
          },
          {
            "name": "LUNAHUANA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "QUINCE DISTRITOS"
          },
          {
            "name": "MALA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "QUINCE DISTRITOS"
          },
          {
            "name": "NUEVO IMPERIAL",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "QUINCE DISTRITOS"
          },
          {
            "name": "PACARAN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "QUINCE DISTRITOS"
          },
          {
            "name": "QUILMANA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "QUINCE DISTRITOS"
          },
          {
            "name": "SAN ANTONIO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "QUINCE DISTRITOS"
          },
          {
            "name": "SAN LUIS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "QUINCE DISTRITOS"
          },
          {
            "name": "SANTA CRUZ DE FLORES",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "QUINCE DISTRITOS"
          },
          {
            "name": "ZUÑIGA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "UN DISTRITO"
          }
        ]
      },
      {
        "name": "BARRANCA",
        "districts": [
          {
            "name": "BARRANCA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PARAMONGA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PATIVILCA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SUPE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SUPE PUERTO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "LIMA",
        "districts": [
          {
            "name": "LIMA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ANCON",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ATE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BARRANCO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BREÑA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CARABAYLLO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHACLACAYO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHORRILLOS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CIENEGUILLA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COMAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "EL AGUSTINO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "INDEPENDENCIA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JESUS MARIA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA MOLINA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA VICTORIA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LINCE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LOS OLIVOS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LURIGANCHO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LURIN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MAGDALENA DEL MAR",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MIRAFLORES",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PACHACAMAC",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PUCUSANA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PUEBLO LIBRE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PUENTE PIEDRA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PUNTA HERMOSA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PUNTA NEGRA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "RIMAC",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN BARTOLO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN BORJA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN ISIDRO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JUAN DE LURIGANCHO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JUAN DE MIRAFLORES",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN LUIS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN MARTIN DE PORRES",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN MIGUEL",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA ANITA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA MARIA DEL MAR",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA ROSA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTIAGO DE SURCO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SURQUILLO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VILLA EL SALVADOR",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VILLA MARIA DEL TRIUNFO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "LORETO",
    "provinces": [
      {
        "name": "MARISCAL RAMON CASTILLA",
        "districts": [
          {
            "name": "RAMON CASTILLA",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PEBAS",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN PABLO",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YAVARI",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "MAYNAS",
        "districts": [
          {
            "name": "ALTO NANAY",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BELEN",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "FERNANDO LORES",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "INDIANA",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "IQUITOS",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LAS AMAZONAS",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MAZAN",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "NAPO",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PUNCHANA",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PUTUMAYO",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JUAN BAUTISTA",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TNTE. MANUEL CLAVERO",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TORRES CAUSANA",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "REQUENA",
        "districts": [
          {
            "name": "SAQUENA",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "UN DISTRITO"
          },
          {
            "name": "REQUENA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "CAPELO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "SOPLIN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "TAPICHE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "JENARO HERRERA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "YAQUERANA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "ALTO TAPICHE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "EMILIO SAN MARTIN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "MAQUIA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "PUINAHUA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "DIEZ DISTRITOS"
          }
        ]
      },
      {
        "name": "LORETO",
        "districts": [
          {
            "name": "NAUTA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PARINARI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TIGRE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TROMPETEROS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "URARINAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "ALTO AMAZONAS",
        "districts": [
          {
            "name": "LAGUNAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "UN DISTRITO"
          },
          {
            "name": "YURIMAGUAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "BALSAPUERTO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "JEBEROS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "SANTA CRUZ",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "TNTE. CESAR LOPEZ ROJAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          }
        ]
      },
      {
        "name": "UCAYALI",
        "districts": [
          {
            "name": "CONTAMANA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "INAHUAYA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PADRE MARQUEZ",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAMPA HERMOSA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SARAYACU",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ALFREDO VARGAS GUERRA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YANAYACU",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "DATEM DEL MARAÑON",
        "districts": [
          {
            "name": "MANSERICHE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "MORONA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "PASTAZA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "ANDOAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "BARRANCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOS DISTRITOS"
          },
          {
            "name": "CAHUAPANAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "MADRE DE DIOS",
    "provinces": [
      {
        "name": "TAMBOPATA",
        "districts": [
          {
            "name": "TAMBOPATA",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "INAMBARI",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LAS PIEDRAS",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LABERINTO",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "MANU",
        "districts": [
          {
            "name": "FITZCARRALD",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUEPETUHE",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MADRE DE DIOS",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MANU",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "TAHUAMANU",
        "districts": [
          {
            "name": "IÑAPARI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "IBERIA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TAHUAMANU",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "MOQUEGUA",
    "provinces": [
      {
        "name": "GENERAL SANCHEZ CERRO",
        "districts": [
          {
            "name": "LA CAPILLA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "UN DISTRITO"
          },
          {
            "name": "OMATE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "CHOJATA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "COALAQUE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "ICHUÑA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "LLOQUE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "MATALAQUE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "PUQUINA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "QUINISTAQUILLAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "UBINAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "YUNGA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          }
        ]
      },
      {
        "name": "MARISCAL NIETO",
        "districts": [
          {
            "name": "MOQUEGUA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "UN DISTRITO"
          },
          {
            "name": "CARUMAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "CUCHUMBAYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "SAMEGUA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "SAN CRISTOBAL",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "TORATA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          }
        ]
      },
      {
        "name": "ILO",
        "districts": [
          {
            "name": "ILO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "EL ALGARROBAL",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PACOCHA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "PASCO",
    "provinces": [
      {
        "name": "PASCO",
        "districts": [
          {
            "name": "HUACHON",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "HUARIACA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "NINACACA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "PALLANCHACRA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "PAUCARTAMBO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "SAN FRANCISCO DE ASIS DE YARUSYACAN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "TICLACAYAN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "YANACANCHA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "OCHO DISTRITOS"
          },
          {
            "name": "CHAUPIMARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "HUAYLLAY",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "SIMON BOLIVAR",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "TINYAHUARCO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          },
          {
            "name": "VICCO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "CINCO DISTRITOS"
          }
        ]
      },
      {
        "name": "DANIEL ALCIDES CARRION",
        "districts": [
          {
            "name": "YANAHUANCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHACAYAN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "GOYLLARISQUIZGA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAUCAR",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN PEDRO DE PILLAO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA ANA DE TUSI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TAPUC",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VILCABAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "OXAPAMPA",
        "districts": [
          {
            "name": "OXAPAMPA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHONTABAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANCABAMBA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PALCAZU",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "POZUZO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PUERTO BERMUDEZ",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VILLA RICA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "PIURA",
    "provinces": [
      {
        "name": "HUANCABAMBA",
        "districts": [
          {
            "name": "HUANCABAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CANCHAQUE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "EL CARMEN DE LA FRONTERA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUARMACA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LALAQUIZ",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN MIGUEL DE EL FAIQUE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SONDOR",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SONDORILLO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "AYABACA",
        "districts": [
          {
            "name": "AYABACA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "JILILI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "LAGUNAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "MONTERO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "PACAIPAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "SICCHEZ",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "FRIAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "PAIMAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "SAPILLICA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "SUYO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "CUATRO DISTRITOS"
          }
        ]
      },
      {
        "name": "MORROPON",
        "districts": [
          {
            "name": "BUENOS AIRES",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "CHALACO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "SALITRAL",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "SAN JUAN DE BIGOTE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "SANTA CATALINA DE MOSSA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "YAMANGO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SEIS DISTRITOS"
          },
          {
            "name": "CHULUCANAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "LA MATANZA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "MORROPON",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "SANTO DOMINGO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "CUATRO DISTRITOS"
          }
        ]
      },
      {
        "name": "PIURA",
        "districts": [
          {
            "name": "PIURA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VEINTISEIS DE OCTUBRE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CASTILLA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CATACAOS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CURA MORI",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "EL TALLAN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA ARENA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA UNION",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LAS LOMAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TAMBO GRANDE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "PAITA",
        "districts": [
          {
            "name": "PAITA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "AMOTAPE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ARENAL",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COLAN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA HUACA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TAMARINDO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VICHAYAL",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "SECHURA",
        "districts": [
          {
            "name": "SECHURA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BELLAVISTA DE LA UNION",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BERNAL",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CRISTO NOS VALGA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VICE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "RINCONADA LLICUAR",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "SULLANA",
        "districts": [
          {
            "name": "SULLANA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BELLAVISTA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "IGNACIO ESCUDERO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LANCONES",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MARCAVELICA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MIGUEL CHECA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "QUERECOTILLO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SALITRAL",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "TALARA",
        "districts": [
          {
            "name": "PARIÑAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "EL ALTO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA BREA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LOBITOS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LOS ORGANOS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MANCORA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "PUNO",
    "provinces": [
      {
        "name": "SANDIA",
        "districts": [
          {
            "name": "ALTO INAMBARI",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "SAN JUAN DEL ORO",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "YANAHUAYA",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "CUYOCUYO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "LIMBANI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "PATAMBUCO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "PHARA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "QUIACA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "SAN PEDRO DE PUTINA PUNCO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "SANDIA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "SIETE DISTRITOS"
          }
        ]
      },
      {
        "name": "SAN ANTONIO DE PUTINA",
        "districts": [
          {
            "name": "ANANEA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "QUILCAPUNCU",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SINA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PEDRO VILCA APAZA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PUTINA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CARABAYA",
        "districts": [
          {
            "name": "AYAPATA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COASA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CRUCERO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ITUATA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN GABAN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "USICAYOS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "AJOYANI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CORANI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MACUSANI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OLLACHEA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "HUANCANE",
        "districts": [
          {
            "name": "COJATA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANCANE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUATASANI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "INCHUPALLA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PUSI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ROSASPATA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TARACO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "VILQUE CHICO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "MOHO",
        "districts": [
          {
            "name": "HUAYRAPATA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MOHO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CONIMA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TILALI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "PUNO",
        "districts": [
          {
            "name": "COATA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "CAPACHICA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "AMANTANI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "ACORA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "ATUNCOLLA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "CHUCUITO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "HUATA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "MAÑAZO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "PAUCARCOLLA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "PICHACANI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "PLATERIA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "PUNO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "SAN ANTONIO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "TIQUILLACA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          },
          {
            "name": "VILQUE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DOCE DISTRITOS"
          }
        ]
      },
      {
        "name": "AZANGARO",
        "districts": [
          {
            "name": "AZANGARO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ACHAYA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ARAPA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ASILLO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CAMINACA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CHUPA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JOSE DOMINGO CHOQUEHUANCA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MUÑANI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "POTONI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAMAN",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN ANTON",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JOSE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JUAN DE SALINAS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTIAGO DE PUPUJA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TIRAPATA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CHUCUITO",
        "districts": [
          {
            "name": "DESAGUADERO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUACULLANI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JULI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "KELLUYO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PISACOMA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "POMATA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ZEPITA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "EL COLLAO",
        "districts": [
          {
            "name": "CAPAZO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CONDURIRI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ILAVE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PILCUYO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA ROSA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "LAMPA",
        "districts": [
          {
            "name": "CALAPUJA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "NICASIO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "PUCARA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TRES DISTRITOS"
          },
          {
            "name": "CABANILLA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "LAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "OCUVIRI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "PALCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "PARATIA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "SANTA LUCIA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          },
          {
            "name": "VILAVILA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "SIETE DISTRITOS"
          }
        ]
      },
      {
        "name": "MELGAR",
        "districts": [
          {
            "name": "ANTAUTA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "AYAVIRI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CUPI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LLALLI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MACARI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "NUÑOA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ORURILLO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA ROSA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "UMACHIRI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "SAN ROMAN",
        "districts": [
          {
            "name": "JULIACA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CABANA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CABANILLAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CARACOTO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "YUNGUYO",
        "districts": [
          {
            "name": "YUNGUYO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ANAPIA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "COPANI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CUTURAPI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "OLLARAYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TINICACHI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "UNICACHI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "SAN MARTIN",
    "provinces": [
      {
        "name": "BELLAVISTA",
        "districts": [
          {
            "name": "BELLAVISTA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ALTO BIAVO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BAJO BIAVO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUALLAGA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN PABLO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN RAFAEL",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "HUALLAGA",
        "districts": [
          {
            "name": "SAPOSOA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ALTO SAPOSOA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "EL ESLABON",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PISCOYACU",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SACANCHE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TINGO DE SAPOSOA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "LAMAS",
        "districts": [
          {
            "name": "LAMAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ALONSO DE ALVARADO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BARRANQUITA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CAYNARACHI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CUÑUMBUQUI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PINTO RECODO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "RUMISAPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN ROQUE DE CUMBAZA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SHANAO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TABALOSOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ZAPATERO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "MARISCAL CACERES",
        "districts": [
          {
            "name": "JUANJUI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CAMPANILLA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUICUNGO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PACHIZA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAJARILLO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "PICOTA",
        "districts": [
          {
            "name": "PICOTA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "BUENOS AIRES",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CASPISAPA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PILLUANA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PUCACACA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN CRISTOBAL",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN HILARION",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SHAMBOYACU",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TINGO DE PONASA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TRES UNIDOS",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "MOYOBAMBA",
        "districts": [
          {
            "name": "MOYOBAMBA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CALZADA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HABANA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "JEPELACIO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SORITOR",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YANTALO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "RIOJA",
        "districts": [
          {
            "name": "RIOJA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "AWAJUN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ELIAS SOPLIN VARGAS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "NUEVA CAJAMARCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PARDO MIGUEL",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "POSIC",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN FERNANDO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YORONGOS",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YURACYACU",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "SAN MARTIN",
        "districts": [
          {
            "name": "TARAPOTO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "ALBERTO LEVEAU",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "CACATACHI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "CHAZUTA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "CUATRO DISTRITOS"
          },
          {
            "name": "CHIPURANA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "EL PORVENIR",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "HUIMBAYOC",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "JUAN GUERRA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "LA BANDA DE SHILCAYO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "MORALES",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "PAPAPLAYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "SAN ANTONIO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "SAUCE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          },
          {
            "name": "SHAPAJA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "DIEZ DISTRITOS"
          }
        ]
      },
      {
        "name": "TOCACHE",
        "districts": [
          {
            "name": "TOCACHE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "NUEVO PROGRESO",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "POLVORA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SHUNTE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "UCHIZA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "EL DORADO",
        "districts": [
          {
            "name": "SAN JOSE DE SISA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "AGUA BLANCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN MARTIN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SANTA ROSA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SHATOJA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "TACNA",
    "provinces": [
      {
        "name": "TARATA",
        "districts": [
          {
            "name": "TARATA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HEROES ALBARRACIN",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ESTIQUE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ESTIQUE PAMPA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SITAJARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SUSAPAYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TARUCACHI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TICACO",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CANDARAVE",
        "districts": [
          {
            "name": "CANDARAVE",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CAIRANI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CAMILACA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CURIBAYA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "HUANUARA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "QUILAHUANI",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "JORGE BASADRE",
        "districts": [
          {
            "name": "LOCUMBA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ILABAYA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "ITE",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "TACNA",
        "districts": [
          {
            "name": "PALCA",
            "zone": "3",
            "zFactor": "0.35",
            "ambito": "UN DISTRITO"
          },
          {
            "name": "TACNA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "NUEVE DISTRITOS"
          },
          {
            "name": "ALTO DE LA ALIANZA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "NUEVE DISTRITOS"
          },
          {
            "name": "CALANA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "NUEVE DISTRITOS"
          },
          {
            "name": "CIUDAD NUEVA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "NUEVE DISTRITOS"
          },
          {
            "name": "INCLAN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "NUEVE DISTRITOS"
          },
          {
            "name": "PACHIA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "NUEVE DISTRITOS"
          },
          {
            "name": "POCOLLAY",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "NUEVE DISTRITOS"
          },
          {
            "name": "SAMA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "NUEVE DISTRITOS"
          },
          {
            "name": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "NUEVE DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "TUMBES",
    "provinces": [
      {
        "name": "CONTRALMIRANTE VILLAR",
        "districts": [
          {
            "name": "ZORRITOS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CASITAS",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CANOAS DE PUNTA SAL",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "TUMBES",
        "districts": [
          {
            "name": "TUMBES",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CORRALES",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "LA CRUZ",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAMPAS DE HOSPITAL",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JACINTO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SAN JUAN DE LA VIRGEN",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "ZARUMILLA",
        "districts": [
          {
            "name": "ZARUMILLA",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "AGUAS VERDES",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MATAPALO",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PAPAYAL",
            "zone": "4",
            "zFactor": "0.45",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  },
  {
    "name": "UCAYALI",
    "provinces": [
      {
        "name": "PURUS",
        "districts": [
          {
            "name": "PURUS",
            "zone": "1",
            "zFactor": "0.10",
            "ambito": "UNICO DISTRITO"
          }
        ]
      },
      {
        "name": "ATALAYA",
        "districts": [
          {
            "name": "RAIMONDI",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "SEPAHUA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "TAHUANIA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YURUA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "PADRE ABAD",
        "districts": [
          {
            "name": "CURIMANA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "IRAZOLA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "PADRE ABAD",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      },
      {
        "name": "CORONEL PORTILLO",
        "districts": [
          {
            "name": "CALLERIA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "CAMPOVERDE",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "IPARIA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MANANTAY",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "MASISEA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "NUEVA REQUENA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          },
          {
            "name": "YARINACOCHA",
            "zone": "2",
            "zFactor": "0.25",
            "ambito": "TODOS LOS DISTRITOS"
          }
        ]
      }
    ]
  }
]

export default datos;