export const convertHexToRgbA = (hexVal, opacity) => { 
  var ret; 
    
  // If the hex value is valid. 
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexVal)) { 
        
      // Getting the content after '#', 
      // eg. 'ffffff' in case of '#ffffff' 
      ret = hexVal.slice(1); 
        
      // Splitting each character 
      ret = ret.split(''); 
        
      // Checking if the length is 3 
      // then make that 6 
      if(ret.length === 3) {
          var ar = []; 
          ar.push(ret[0]);  
          ar.push(ret[0]); 
          ar.push(ret[1]); 
          ar.push(ret[1]); 
          ar.push(ret[2]); 
          ar.push(ret[2]); 
          ret = ar; 
      } 
        
      // Starts with '0x'(in hexadecimal) 
      ret = '0x'+ ret.join(''); 
        
      // Converting the first 2 characters 
      // from hexadecimal to r value 
      var r = (ret>>16)&255; 
        
      // Converting the second 2 characters 
      // to hexadecimal to g value 
      var g = (ret>>8)&255; 
        
      // Converting the last 2 characters 
      // to hexadecimal to b value 
      var b = ret&255; 
        
      // Appending all of them to make 
      // the RGBA value 
      return 'rgba('+[r, g, b].join(',')+','+opacity+')'; 
  } 
} 

export const formatSecsToHMS = (sec) => {
  let s = Number.parseInt(sec, 10);
  let minutesStr = "", hoursStr = "", secsStr;
  let hours = Math.floor(s / 3600);
  s %= 3600;
  let minutes = Math.floor(s / 60);
  let seconds = s % 60;

  if (hours > 0)
    hoursStr = hours.toString()+":";

  if (minutes < 10)
    minutesStr = "0"+minutes.toString()+":";
  else
    minutesStr = minutes.toString()+":";

  if (seconds < 10)
    secsStr = "0"+seconds.toString();
  else
    secsStr = seconds.toString();

  return hoursStr+minutesStr+secsStr;
}