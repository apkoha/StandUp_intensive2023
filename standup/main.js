import "./style.css";
import TomSelect from "tom-select";

/*<li class="booking__comedian">
  <select class="booking__select booking__select_comedian" name="comedian">
    <option value="1">Юлия Ахмедова</option>
    <option value="2">Слава Петушаренко</option>
  </select>

  <select class="booking__select booking__select_time" name="time">
    <option value="20:00">20:00</option>
    <option value="22:0">22:00</option>
  </select>
  <button class="booking__hall">Зал 1</button>
</li>;*/

const bookingComediansList = document.querySelector(".booking__comedian-list");

const createComedianBlock = () => {
  const bookingComedian = document.createElement("li");
  bookingComedian.classList.add("booking__comedian");

  const bookingSelectComedian = document.createElement("select");
  bookingSelectComedian.classList.add(
    "booking__select",
    "booking__select_comedian"
  );

  const bookingSelectTime = document.createElement("select");
  bookingSelectTime.classList.add("booking__select", "booking__select_time");

  const inputHidden = document.createElement("input");
  inputHidden.type = "hidden";
  inputHidden.name = "booking";

  const bookingHall = document.createElement("button");
  bookingHall.classList.add("booking__hall");

  booking__comedian.append(
    bookingSelectComedian,
    bookingSelectTime,
    inputHidden
  );

  const bookingTomSelectComedian = new TomSelect(bookingSelectComedian, {
    hideSelected: true,
    placeholder: "выбрать комика",
    options: [
      {
        value: 1,
        text: "Карлин",
      },
      {
        value: 2,
        text: "Карр",
      },
    ],
  });

  const bookingTomSelectTime = new TomSelect(bookingSelectTime, {
    hideSelected: true,
    placeholder: "Время",
  });
  bookingTomSelectTime.disable();

  bookingTomSelectComedian.on("change", () => {
    bookingTomSelectTime.enable();
    bookingTomSelectComedian.blur();

    bookingTomSelectTime.addOptions([]);
  });

  return bookingComedian;
};

// закончил на 55 минуте

const init = () => {
  const comedianBlock = createComedianBlock();

  bookingComediansList.append(comedianBlock);
};

init();
