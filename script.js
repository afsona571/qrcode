document.addEventListener("DOMContentLoaded", function () {
    const qrText = document.getElementById("qrText"),
          qrSize = document.getElementById("qrSize"),
          colorLight = document.getElementById("colorLight"),
          colorDark = document.getElementById("colorDark"),
          qrCodeView = document.querySelector(".qrCodeView"),
          generateBtn = document.getElementById("generateBtn"),
          downloadBtn = document.getElementById("downloadBtn");

    let qr;

    function generateQRCode() {
        if (typeof QRCode === "undefined") {
            alert("Ошибка: QRCode библиотека не загружена!");
            return;
        }

        if (!qrText.value.trim()) {
            alert("Введите текст или URL для генерации QR-кода!");
            return;
        }

        qrCodeView.innerHTML = "";
        qr = new QRCode(qrCodeView, {
            text: qrText.value,
            width: parseInt(qrSize.value),
            height: parseInt(qrSize.value),
            colorDark: colorDark.value,
            colorLight: colorLight.value,
            correctLevel: QRCode.CorrectLevel.H
        });
    }

    function downloadQRCode() {
        if (!qr) return;
        const img = qrCodeView.querySelector("img");
        if (img) {
            const link = document.createElement("a");
            link.href = img.src;
            link.download = "qrcode.png";
            link.click();
        }
    }

    generateBtn.addEventListener("click", generateQRCode);
    downloadBtn.addEventListener("click", downloadQRCode);
});
