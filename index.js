function scuberGreetingForFeet(n){
  if (n > 2500) {
    return 'No can do.'
  } else if (n > 2000 && n < 2501) {
    return 'I will gladly take your thirty bucks.'
  } else if (2000 > n && n > 400) {
    return 'That will be twenty bucks.'
  } else {
    return 'This one is on me!'
  }
}

function ternaryCheckCity(city){
  return city  === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}