function presses(phrase) {
    var sumPress = 0;
    for (var i = 0; i < phrase.length; i++)
    {
      switch (true)
      {
        case (/[1adgjmptw\s]/i.test(phrase[i])):
          sumPress++;
          break;
        case (/[behknqux0]/i.test(phrase[i])):
          sumPress += 2;
          break;
        case (/[cfilorvy]/i.test(phrase[i])):
          sumPress += 3;
          break;
        case (/[sz234568]/i.test(phrase[i])):
          sumPress += 4;
          break;
        case (/[79]/.test(phrase[i])):
          sumPress += 5;
          break;
        default:
          sumPress++;
          break;
      }
    }
    return sumPress;
  }