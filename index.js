var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  var serving = katzDeliLine[0];
  
  if (serving === '' || serving === null || serving === undefined) {
    return "There is nobody waiting to be served!";
  } else {
    katzDeliLine.shift();
    return `Currently serving ${serving}.`;
  }
}

function currentLine(katzDeliLine) {
  var line = [];
  if (katzDeliLine.length !== 0) {
    for(var i = 0; i < katzDeliLine.length; i++) {
      if (i === 0) {
        line.push(`The line is currently: ${i+1}. ${katzDeliLine[i]}`);
      } else {
        line.push(`${i+1}. ${katzDeliLine[i]}`);
      }
    }
  } else {
    return "The line is currently empty.";
  }
}
