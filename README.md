<p align="center"><img src="https://live.staticflickr.com/65535/49784089877_0d7c611050_c.jpg" width="500px"></p>

<p align="center">
  <a href="https://travis-ci.com/Ekhel/frontend-kawal-corona-papua"><img src="https://travis-ci.com/Ekhel/frontend-kawal-corona-papua.svg?branch=master" alt="Build Status"></a>
  <a href="https://gitter.im/jayapura_dev/react?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/jayapura_dev/react.svg" alt="Gitter"></a>
  <a href="https://github.com/Ekhel/frontend-kawal-corona-papua/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License: MIT"></a>
</p>

## Tentang Kawal-Corona Papua :
  - Kawal Corona Papua adalah Web Applikasi sekaligus dapat Menjadi Portal Informasi Live Data Kasus Covid 19 di Papua, Sedikit Sumbangsih dari Kami untuk Papua, Project ini Open Source, Siapa Saja Boleh untuk Berkontribusi.</strong>
------------------------------------------------------------------------------------------------------------------------

## System Requirements :
* Bahasa Utama :
  - JavaScript
  - JSX
  
* Framework :
  - React

* Backend
  - [Backend Kawal Corona Papua](https://github.com/Ekhel/backend-kawal-corona-papua)

* HOST PaaS
  - Github Pages

------------------------------------------------------------------------------------------------------------
## Library Yang digunakan :

| Library           | Package Instalation                                                               |
| ---------------   | --------------------------------------------------------------------------------- |
| Redux             | *npm install --save redux*                                                        |
| React-Redux       | *npm install --save react-redux*                                                  |
| axios             | *npm install --save axios*                                                        |
| lodash            | *npm install --save lodash*                                                       |
| Redux-Thunk       | *npm install --save redux-thunk*                                                  |
| github Pages      | *npm install gh-pages --save-dev*                                                 |
| REDUX DEV TOOLS   | *extension browser untuk Redux Action Creator (Disesuikan dengan Browser)*        |


* Config REDUX DEV TOOLS (index.js From ROOT */src/*) :
  - ![Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)
  - ![Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
    
    ```JSX
       // Line of Code...
       // Setup untuk Koneksi ke Redux Action Creator
       import { createStore, applyMiddleware, compose } from 'redux';
       import reduxThunk from 'redux-thunk';

       const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
       const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));
       // line of Code...
    ```

--------------------------------------------------------------------------------------------------------------

## Sumber WEB dan API :

* WEB :
  - [Kawal Corona](https://kawalcorona.com)
  - [Ethical Hacker Indonesia](https://hack.co.id)
  - [Backend Kawal Corona Papua](https://kawal-corona.herokuapp.com)

* API Services :
  - [Data Indonesia : https://api.kawalcorona.com/indonesia](https://api.kawalcorona.com/indonesia)

    ```javascripts
    [
        {
          "name": "Indonesia",
          "positif": "514",
          "sembuh": "29",
          "meninggal": "48"
        }
    ]
    ```

  - [Data Provinsi : https://api.kawalcorona.com/indonesia/provinsi](https://api.kawalcorona.com/indonesia/provinsi)

    ```javascripts
    [
        {
            "attributes": {
              "FID": 11,
              "Kode_Provi": 31,
              "Provinsi": "DKI Jakarta",
              "Kasus_Posi": 307,
              "Kasus_Semb": 22,
              "Kasus_Meni": 29
            }
        }
    ]	
    ```

  - [Data Global Per Negara : https://api.kawalcorona.com/](https://api.kawalcorona.com/)

    ```javascripts
    [
        {
            "attributes": {
            "OBJECTID": 59,
            "Country_Region": "China",
            "Last_Update": 1584097775000,
            "Lat": 30.5928,
            "Long_": 114.3055,
            "Confirmed": 81346,
            "Deaths": 3265,
            "Recovered": 72355,
            "Active": 5726
            }
        }
    ]			
    ```
    
  - [Data Global Positif : https://api.kawalcorona.com/positif/](https://api.kawalcorona.com/positif)

    ```javascripts
    {
      "name": "Total Positif",
      "value": "307,278"
    }
    ```

  - [Data Global Meninggal : https://api.kawalcorona.com/meningggal/](https://api.kawalcorona.com/meniggal)

    ```javascripts
    {
      "name": "Total Meninggal",
      "value": "13,049"
    }
    ```
  - [Data Global Sembuh : https://api.kawalcorona.com/sembuh/](https://api.kawalcorona.com/sembuh)

    ```javascripts
    {
      "name": "Total Sembuh",
      "value": "92,373"
    }
    ```
------------------------------------------------------------------------------------------------------------

* Backend API (Data Khusus Provinsi Papua)
  - [API : ROOT](https://kawal-corona.herokuapp.com/api/)

  - [API : Kabupaten](https://kawal-corona.herokuapp.com/api/kabupeten/)
  
    ```javascripts
    {
      "count": 23,
      "next": "https://kawal-corona.herokuapp.com/api/kabupaten/?page=2",
      "previous": null,
      "results": [
        {
          "id_kabupaten": 1,
          "nama": "Jayapura Kota",
          "lon": "-",
          "lat": "-"
        }
      ] 
    }
    ```

  - [API : Data Personal](https://kawal-corona.herokuapp.com/api/penderita/)

    ```javascripts
    {
      "count": 3,
      "next": "null",
      "previous": null,
      "results": [
        {
          "id_penderita": 1,
          "nama_lengkap": "-----",
          "lokasi": 8,
          "gender": "perempuan",
          "status": "perawatan"
        },
      ] 
    }
    ```

  - [API : Rumah Sakit Rujukan Prov Papua](https://kawal-corona.herokuapp.com/api/rumahsakit/)

    ```javascripts
    {
      "count": 1,
      "next": "null",
      "previous": null,
      "results": [
        {
            "id_rs": 1,
            "rumah_sakit": "Rumah Sakit DOK II",
            "lokasi": "Jayapura Kota",
            "lat": "-",
            "lon": "-"
        }    
      ]
    }
    ```

-------------------------------------------------------------------------

## UI Style:
* Semantic UI CDN
  - https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css

* Route Page :
  - Fetch Global Data Komulatif
  - Fetch Global Data Per Negara
  - Fetch Data Indonesia Komulatif
  - Fetch Data Indonesia Per Provinsi
  - Fetch Data Personal Pasien Positif Provinsi Papua
  - Fetch Data Rumah Sakit Rujukan Di Provinsi Papua

--------------------------------------------------------------------------------------------------

## Screen :
  - Home :
    ![home](https://live.staticflickr.com/65535/49780804043_c28a99d937_b.jpg)

  - Data Total & Grafik Papua :
    ![Grafik](https://live.staticflickr.com/65535/49781343581_dffa780136_b.jpg)

  - Data Positif Papua :
    ![Positif](https://live.staticflickr.com/65535/49781674872_b49f7fd92d_b.jpg)

---------------------------------------------------------------------------------------------------

## Kontribusi Data & Project :
  - Saya Belum Memiliki Sumber Data yang benar" valid.
  - Sebagian Data Kasus di Provinsi Papua yang ada pada database backend diambil dari 60% Hasil Tracking Media.
  - Jika teman" ingin Berkontribusi terkait data dengan sangat senang hati saya akan menerima.
  - email saya terkait Data : **michaekarafir@gmail.com**
  - Atau bisa chat pada gitter klik pada badge gitter diatas, **chat on gitter**
  - Project ini Open Source siapa saja boleh untuk Berkontribusi Termasuk Data dan Repository.
  - Saran dan Masukan Sangat Saya butuhkan.

  Salam Sehat
  Michael.


