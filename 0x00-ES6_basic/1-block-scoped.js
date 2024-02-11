export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
//To prevent the variables from being overwritten inside the
//conditional block, you can use let or const instead of var
