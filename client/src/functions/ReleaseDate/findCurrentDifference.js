// IMPORTING 'MOMENT' FOR MATHEMATICAL OPERTATIONS WITH TIME
import moment from "moment";

// THE END DATE IS SET STATICALLY AS IT IS THE RELEASE DATE OF THIS WEB APP
const endDate = moment(new Date("2022/10/18 18:00:00"));

const findCurrentDateDifference = () => {
  const currentDifference = {
    days: {
      number: "",
      type: "",
    },
    hours: {
      number: "",
      type: "",
    },
    minutes: {
      number: "",
      type: "",
    },
    seconds: {
      number: "",
      type: "",
    },
  };

  // EXACT DATE OF NOW
  let startDate = moment(new Date());

  // GETTING EXACT NUMBER OF SECONDS BETWEEN NOW AND TEH RELEASE DATE
  let seconds = Math.floor(
    moment.duration(endDate.diff(startDate)).asSeconds()
  );

  // ASSIGNINGT THE RESULT OBJECT THE SPECIFIC VALUES (DAYS, HOURS, MINUTES, SECONDS)
  currentDifference.days.number = Math.floor(seconds / (3600 * 24));
  currentDifference.hours.number = Math.floor((seconds % (3600 * 24)) / 3600);
  currentDifference.minutes.number = Math.floor((seconds % 3600) / 60);
  currentDifference.seconds.number = Math.floor(seconds % 60);

  // IF ANY OF THE VALUES IN THE RESULT OBJECT IS OF LENGTH 1 (1,2,3,..)
  // THE '0' IS ADDED BEFORE IT, SO IT BECOMES 01, 02, 03,...
  //
  // ALSO, THE TYPE OF THE NUMBER IS HERE ADDED TO EACH VALUE ON THE RESULT
  // OBJECT ACCORDING TO THE ACTUAL NUMBER. THIS IS DONE SO THAT ON THE FRONTEND
  // IS THEN ASSIGNED CORRECT STRING TO THE VALUE (E.G. 0 hodÍN BUT 1 hodiNA, ...)
  Object.keys(currentDifference).forEach((key) => {
    if (currentDifference[key].number < 5) {
      if (currentDifference[key].number.toString() === "0") {
        currentDifference[key].type = "MORE";
      } else if (currentDifference[key].number.toString() === "1") {
        currentDifference[key].type = "SINGLE";
      } else {
        currentDifference[key].type = "FEW";
      }
    } else {
      currentDifference[key].type = "MORE";
    }
    if (currentDifference[key].number.toString().length === 1) {
      currentDifference[key].number = `0${currentDifference[key].number}`;
    }
  });

  return currentDifference;
};

export default findCurrentDateDifference;
