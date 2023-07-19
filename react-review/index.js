const complexFunction = (arg1, arg2) => {
  const result = lessComplexPartOfFunction(arg1, arg2);
  // another 100 lines
};

const lessComplexPartOfFunction = (arg1, arg2) => {
  // 100 lines
  if (arg1 === 3) {
    console.log("its a 3");
  } else {
    console.log("its not a 3");
  }
  return 7;
};
