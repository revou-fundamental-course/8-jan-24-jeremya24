function changeShape() {
    var shapeSelect = document.getElementById('shapeSelect');
    var persegiContent = document.getElementById('persegiContent');
    var persegiPanjangContent = document.getElementById('persegiPanjangContent');
    var formulaPersegi = document.getElementById('formulaPersegi');
    var formulaPersegiPanjang = document.getElementById('formulaPersegiPanjang');

    if (shapeSelect.value === 'persegi') {
        persegiContent.style.display = 'block';
        persegiPanjangContent.style.display = 'none';
        formulaPersegi.style.display = 'block';
        formulaPersegiPanjang.style.display = 'none';
    } else if (shapeSelect.value === 'persegi-panjang') {
        persegiContent.style.display = 'none';
        persegiPanjangContent.style.display = 'block';
        formulaPersegi.style.display = 'none';
        formulaPersegiPanjang.style.display = 'block';
    }
}

function calculate() {
    var shapeSelect = document.getElementById('shapeSelect');
    var resultElement = document.getElementById('result');
    var formulaPersegi = document.getElementById('formulaPersegi');
    var formulaPersegiPanjang = document.getElementById('formulaPersegiPanjang');

    if (shapeSelect.value === 'persegi') {
        var sideLength = parseFloat(document.getElementById('sideLength').value);

        if (isNaN(sideLength) || sideLength <= 0) {
            alert('Masukkan panjang sisi dengan angka positif!');
            return;
        }

        var area = sideLength * sideLength;
        var perimeter = 4 * sideLength;

        var resultText = `Luas: ${area.toFixed(2)}<br>Keliling: ${perimeter.toFixed(2)}`;
        resultElement.innerHTML = resultText;

        // Menampilkan rincian perhitungan
        formulaPersegi.innerHTML = `
            <p>Luas Persegi: L = ${sideLength} x ${sideLength} </p>
            <p>Keliling Persegi: K = 4(${sideLength})</p>
        `;

    } else if (shapeSelect.value === 'persegi-panjang') {
        var length = parseFloat(document.getElementById('length').value);
        var width = parseFloat(document.getElementById('width').value);

        if (isNaN(length) || length <= 0 || isNaN(width) || width <= 0) {
            alert('Masukkan panjang dan lebar dengan angka positif!');
            return;
        }

        var area = length * width;
        var perimeter = 2 * (length + width);

        var resultText = `Luas: ${area.toFixed(2)}<br>Keliling: ${perimeter.toFixed(2)}`;
        resultElement.innerHTML = resultText;

        // Menampilkan rincian perhitungan
        formulaPersegiPanjang.innerHTML = `
            <p>Luas Persegi Panjang: L = ${length} x ${width} </p>
            <p>Keliling Persegi Panjang:Keliling Persegi Panjang: K = 2(${length} + ${width}) </p>
        `;
    }
}

window.onload = function () {
    changeShape();
};
