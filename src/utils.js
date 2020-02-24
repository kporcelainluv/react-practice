import {
  differenceInMonths,
  differenceInWeeks,
  differenceInYears,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds
} from "date-fns";

export const getDiffYears = birthday => {
  return differenceInYears(
    new Date(),
    new Date(birthday.year, birthday.month, birthday.day)
  );
};

export const getdiffMonths = birthday => {
  let difference = differenceInMonths(
    new Date(),
    new Date(new Date().getFullYear(), birthday.month, birthday.day)
  );
  if (difference === 0) {
    return 11;
  }
  if (difference < 0) {
    return 12 + difference;
  }
  return difference;
};

export const getdiffWeeks = birthday => {
  let updatedMonth = "";
  if (parseInt(new Date().getDate()) < parseInt(birthday.day)) {
    updatedMonth = (parseInt(new Date().getMonth()) - 1).toString();
  } else {
    updatedMonth = new Date().getMonth();
  }
  if (parseInt(new Date().getDate()) === parseInt(birthday.day)) {
    return 4;
  }
  const difference = parseInt(
    differenceInWeeks(
      new Date(),
      new Date(new Date().getFullYear(), updatedMonth, birthday.day)
    )
  );
  if (difference <= 0) {
    return 0;
  }
  if (difference === 4) {
    return difference - 1;
  }
  return difference;
};

export const getdiffDays = birthday => {
  let updatedMonth = "";
  if (parseInt(new Date().getDate()) < parseInt(birthday.day)) {
    updatedMonth = (parseInt(new Date().getMonth()) - 1).toString();
  } else {
    updatedMonth = new Date().getMonth();
  }
  return differenceInDays(
    new Date(),
    new Date(new Date().getFullYear(), updatedMonth, birthday.day)
  );
};
export const getDiffHours = birthday => {
  const difference = differenceInHours(
    new Date(),
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      "0",
      "0",
      "0"
    )
  );
  return difference;
};
export const getDiffMins = birthday => {
  const difference = differenceInMinutes(
    new Date(),
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      new Date().getHours(),
      "0",
      "0"
    )
  );
  return difference;
};

export const getDiffSecs = birthday => {
  const difference = differenceInSeconds(
    new Date(),
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      new Date().getHours(),
      new Date().getMinutes(),
      "0"
    )
  );
  return difference;
};

export const markTask = (elements, index) => {
  return [
    ...elements.slice(elements, index),
    { ...elements[index], checked: !elements[index].checked },
    ...elements.slice(index + 1)
  ];
};

export const deleteTask = (elements, index) => {
  return [...elements.slice(elements, index), ...elements.slice(index + 1)];
};
