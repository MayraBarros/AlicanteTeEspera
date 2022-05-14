const countDown = () =>{
    const cuentaRegresiva = new Date( 'June 16, 2022 9:30:00').getTime();
    const hoy = new Date().getTime();
    const diferencia = cuentaRegresiva - hoy;

    const segundos = 1000;
    const minutos = segundos * 60;
    const horas = minutos * 60;
    const dias = horas * 24;

    const txtDias = Math.floor(diferencia / dias);
    const txtHoras = Math.floor((diferencia % dias) / horas);
    const txtMinutos = Math.floor((diferencia % horas) / minutos);
    const txtSegundos = Math.floor((diferencia % minutos)/ segundos);

    document.querySelector('.dias').innerText = txtDias;
    document.querySelector('.hora').innerText = txtHoras;
    document.querySelector('.minutos').innerText = txtMinutos;
    document.querySelector('.segundos').innerText = txtSegundos;

}

setInterval(countDown,1000);
window.onload = countDown;