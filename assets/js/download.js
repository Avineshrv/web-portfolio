document
  .getElementById('download-detailed-resume')
  .addEventListener('click', function () {
    downloadAndOpenPDF(
      'web-portfolio/assets/PDF/Avinesh Kumar Resume Detailed.pdf'
    );
  });

document
  .getElementById('download-light-resume')
  .addEventListener('click', function () {
    downloadAndOpenPDF(
      'web-portfolio/assets/PDF/Avinesh Kumar Resume Light.pdf'
    );
  });

document
  .getElementById('download-dark-resume')
  .addEventListener('click', function () {
    downloadAndOpenPDF(
      'web-portfolio/assets/PDF/Avinesh Kumar Resume Dark.pdf'
    );
  });

function downloadAndOpenPDF(pdfUrl) {
  window.open(pdfUrl, '_blank');

  var link = document.createElement('a');
  link.href = pdfUrl;
  link.download = pdfUrl.substring(pdfUrl.lastIndexOf('/') + 1);
  link.click();
}
