import QrScanner from 'qr-scanner';
import moment from 'moment'
import recive_item from './_recive';
const videoElem = document.getElementById('videoElem')

function output(param) {
    document.getElementById("videoElem").classList.add("d-none")
    document.getElementById("empty").classList.remove("d-none")

    const date = new Date()
    document.getElementById('table_output').innerHTML +=
        `<tr>
      <td>${moment().startOf(date).fromNow()}</td>
      <td>${param}</td>
    </tr>`
}

function setcamara(param) {

    qrScanner.setCamera(param)
}


function scanqr() {
    document.getElementById("empty").classList.add("d-none")
    document.getElementById("videoElem").classList.remove("d-none")
    const qrScanner = new QrScanner(videoElem, result => {
        qrScanner.stop();
        output(result)
        recive_item(result)
    }, { highlightScanRegion: true, returnDetailedScanResult: true });
    qrScanner.start();
}

export function init() {
    // if (await !QrScanner.hasCamera()) {
    //     console.log("Camara Not found");
    // }
    QrScanner.listCameras(true).then((payload) => {
        payload.map(({ id, label }) => {
            document.getElementById("camlist").innerHTML += `<option value="${id}" 
            onclick="${setcamara(id)}">${label}</option>`
        })
    }).catch((error) => console.log(error))
}


window.scanqr = scanqr;
window.setcamara = setcamara;


