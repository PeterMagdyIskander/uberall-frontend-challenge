/*
Trying to understand how each part of the works
1. calling the POST API with this data
{
    "public_key": "GNpPyrkYiTS5BV4F8XckW3kYurprwSk7cRG3Z4jOtrTTBceyfPveAOvDFk3mYY0o",
    "name": "Uberall",
    "country": "DE",
    "street": "Hussitenstraße 32-33",
    "city": "Berlin",
    "zip": "13355"
}
response{
"alreadyManaged": true, 
    |-> this proabably translates to "This Location is already registered and is being optimized"

   "managedLocation": {
            "id": 20,
            "name": "Uberall",
            "street": "Hussitenstraße",
            "streetNo": "32-33",
            "zip": "13355",
            "city": "Berlin",
            "country": "DE",
            "province": "Berlin",
            "website": "https://uberall.com/de",
            "email": "hello@uberall.com",
            "phone": null,
            "fax": null,
            "cellphone": null,
            "openingHours": [
                {
                    "dayOfWeek": 1,
                    "from1": "09:00",
                    "to1": "17:00"
                },
                {
                    "dayOfWeek": 2,
                    "from1": "09:00",
                    "to1": "17:15"
                },
                {
                    "dayOfWeek": 3,
                    "from1": "09:00",
                    "to1": "17:15"
                },
                {
                    "dayOfWeek": 4,
                    "from1": "09:00",
                    "to1": "17:15"
                },
                {
                    "dayOfWeek": 5,
                    "from1": "09:00",
                    "to1": "17:15"
                }
            ],
            "profileCompleteness": 93,
            "photo": {
                "id": 118242363,
                "dateCreated": "2023-09-29T13:16:44.000+02:00",
                "repoKey": "PdS7s3Fcpr.png",
                "locationId": 20,
                "description": "",
                "identifier": null,
                "main": false,
                "logo": true,
                "type": "LOGO",
                "url": "/uploads/userpics/20/PdS7s3Fcpr.png",
                "publicUrl": "https://s3.eu-central-1.amazonaws.com/uberall-userpics-prod/20/medium_PdS7s3Fcpr.png",
                "thumbnailUrl": "https://s3.eu-central-1.amazonaws.com/uberall-userpics-prod/20/thumb_PdS7s3Fcpr.png",
                "cropHeight": null,
                "cropWidth": null,
                "cropOffsetX": null,
                "cropOffsetY": null,
                "sourceUrl": null
            },
            "managedListings": [
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": null,
                    "listingUrl": null,
                    "mandatoryFields": [],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "MICROSOFT_CORTANA"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "62543f93-af2a-45f9-b469-9297c95d2e01",
                    "listingUrl": "http://livepoi.navmii.com/p/view/62543f93-af2a-45f9-b469-9297c95d2e01",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "NAVMII"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "488d47aa-f798-45d0-9861-c6aaa5b65cb7",
                    "listingUrl": "https://nextdoor.de/pages/uberall-locations-berlin-berlin",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "NEXT_DOOR"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": null,
                    "listingUrl": null,
                    "mandatoryFields": [],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "VW"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": null,
                    "listingUrl": null,
                    "mandatoryFields": [],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "BAIDU"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "YN6740x15787441872495369455",
                    "listingUrl": "http://www.bing.com/maps?ss=ypid.YN6740x15787441872495369455&amp;amp;mkt=de-DE",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "BING"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": null,
                    "listingUrl": null,
                    "mandatoryFields": [],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "GM"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "515c4010fe701fcb8267a454",
                    "listingUrl": "http://4sq.com/11mdR4E",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "FOURSQUARE"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "DE103315763",
                    "listingUrl": "https://www.infobel.com/de/germany/uberall/berlin/DE103315763-030208479320/businessdetails.aspx",
                    "mandatoryFields": [
                        "PHONE"
                    ],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "INFOBEL"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "304333170",
                    "listingUrl": "https://www.goyellow.de/home/marketing-uberall-berlin--45tq90.html",
                    "mandatoryFields": [
                        "PHONE"
                    ],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "GO_YELLOW"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": null,
                    "listingUrl": null,
                    "mandatoryFields": [],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "INSTAGRAM"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "DE693248",
                    "listingUrl": "https://www.infoisinfo.com.de/karte/uberall/berlin/693248",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "INFO_IS_INFO"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": null,
                    "listingUrl": null,
                    "mandatoryFields": [],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "GOOGLE_ASSISTANT"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": null,
                    "listingUrl": null,
                    "mandatoryFields": [],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "BMW"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": null,
                    "listingUrl": null,
                    "mandatoryFields": [],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "MERCEDES"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "969401",
                    "listingUrl": "https://koomio.com/geschaeft/uberall-hussitenstrasse-berlin",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "KOOMIO"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "1dctzj6",
                    "listingUrl": "https://www.tupalo.de/berlin/uberall",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "TUPALO"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "103329560",
                    "listingUrl": "https://www.branchenbuchdeutschland.de/branchenbuch/eintrag/-103329560.html",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "BRANCHENBUCH_DEUTSCHLAND"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "1122890748936192",
                    "listingUrl": "https://www.hotfrog.de/company/1122890748936192",
                    "mandatoryFields": [
                        "PHONE"
                    ],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "HOTFROG"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "DE-608891",
                    "listingUrl": "https://www.iglobal.co/deutschland/berlin/uberall-9",
                    "mandatoryFields": [
                        "PHONE"
                    ],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "I_GLOBAL"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "940056339",
                    "listingUrl": null,
                    "mandatoryFields": [
                        "PHONE"
                    ],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "MEINUNGSMEISTER"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "16280555",
                    "listingUrl": "https://branchenbuch.meinestadt.de/berlin/company/16280555",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "MEINESTADT"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "52064776",
                    "listingUrl": "https://www.marktplatz-mittelstand.de/berlin/52064776-uberall",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "MARKTPLATZ_MITTELSTAND"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "15743533888470963070",
                    "listingUrl": "https://maps.google.com/maps?cid=2294725420402975364",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "GOOGLE_MAPS"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": null,
                    "listingUrl": null,
                    "mandatoryFields": [
                        "PHONE"
                    ],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "ALEXA"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": null,
                    "listingUrl": null,
                    "mandatoryFields": [],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "TOYOTA"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "515c4010fe701fcb8267a454",
                    "listingUrl": "http://4sq.com/11mdR4E",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "UBER"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "759435",
                    "listingUrl": "http://wogibtswas.de/location/759435-Uberall",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "WO_GIBTS_WAS"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "9014169",
                    "listingUrl": "https://berlin.stadtbranchenbuch.com/9014169.html",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "STADTBRANCHENBUCH"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "15679588681746108232",
                    "listingUrl": "https://wheretoapp.com/search?poi=15679588681746108232",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "WHERE_TO"
                },
                {
                    "connectStatus": "NOT_CONNECTED",
                    "listingId": null,
                    "listingUrl": null,
                    "mandatoryFields": [],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "FACEBOOK"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": null,
                    "listingUrl": null,
                    "mandatoryFields": [],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "FIAT"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "15743533888470963070",
                    "listingUrl": "https://www.waze.com/de/livemap/directions?place=ChIJx7Bk0ChRqEcRhKItpJyA2B8",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "WAZE"
                },
                {
                    "connectStatus": "CONNECTED",
                    "listingId": "15743533888470963070",
                    "listingUrl": "https://local.google.com/place?id=2294725420402975364&use=srp",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "GOOGLE"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "656097541",
                    "listingUrl": "http://places.tomtom.com/de_de/detail/uberall/berlin/78789885363117904",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "TOMTOM"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "DE13253712",
                    "listingUrl": "https://web2.cylex.de/firma-home/uberall-13253712.html",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "CYLEX"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "940056339",
                    "listingUrl": "https://www.golocal.de/deutschland/sonstige-gewerbe/location-11CnB1/",
                    "mandatoryFields": [
                        "PHONE"
                    ],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "GO_LOCAL"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "133406",
                    "listingUrl": "https://www.unternehmensauskunft.com/Uberall-132594.html",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "UNTERNEHMENSAUSKUNFT"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": null,
                    "listingUrl": null,
                    "mandatoryFields": [],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "FORD"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "2768lxx5-22d77c1bb418097ab735c52de2c92563",
                    "listingUrl": "https://share.here.com/p/s-Yz1idXNpbmVzcy1zZXJ2aWNlcztpZD0yNzY4bHh4NS0yMmQ3N2MxYmI0MTgwOTdhYjczNWM1MmRlMmM5MjU2MztsYXQ9NTIuNTI1MTtsb249MTMuMzkxNjc7bj1VYmVyYWxsO25sYXQ9NTIuNTI1MjQ7bmxvbj0xMy4zOTE3NjtwaD0lMkI0OTMwMjA4NDc5MzIwO2g9NzIyYzMz",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "NOKIA_HERE"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "3522373+DE",
                    "listingUrl": "https://www.oeffnungszeitenbuch.de/filiale/Berlin-Uberall-3522373I.html",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "OEFFNUNGSZEITENBUCH"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "DE13253712",
                    "listingUrl": "https://finde-offen.de/berlin/uberall-3164954",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "FIND_OPEN"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": "133406",
                    "listingUrl": "https://www.business-branchenbuch.de/Uberall-133406.html",
                    "mandatoryFields": [],
                    "status": "IN_PLAN_IN_SYNC",
                    "type": "BUSINESSBRANCHENBUCH"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": null,
                    "listingUrl": null,
                    "mandatoryFields": [
                        "PHONE"
                    ],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "UBERALL_SOCIAL_ADS"
                },
                {
                    "connectStatus": "NOT_NEEDED",
                    "listingId": null,
                    "listingUrl": null,
                    "mandatoryFields": [],
                    "status": "IN_PLAN_NOT_IN_SYNC",
                    "type": "AUDI"
                }
            ],
            "mandatoryFields": [
                "PHONE",
                "PHONE",
                "PHONE",
                "PHONE",
                "PHONE",
                "PHONE",
                "PHONE",
                "PHONE"
            ],
            "streetAndNo": "Hussitenstraße 32-33"
        }
      
}


*/