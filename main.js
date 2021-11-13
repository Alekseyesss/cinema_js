document.addEventListener("DOMContentLoaded", () => {

  let theatre = document.querySelector('.theatre'),
    count = 0,
    seats = [];

  theatre.addEventListener('click', (eve) => {
    let event = eve.target;

    if (event.classList.contains('seat')) {
      let atr = event.getAttribute('data-seat');

      if (event.classList.contains('active')) {
        let index = seats.indexOf(atr);
        count--;
        seats.splice(index, 1);
      } else {
        count++;
        seats.push(atr);
      }

      document.querySelector('.cinema-total-seats span').innerHTML = count;
      document.querySelector('.cinema-price span').innerHTML = count * 250 + "грн";
      document.querySelector('.cinema-seats span').innerHTML = String(seats);
      event.classList.toggle('active');

    }
  })

});