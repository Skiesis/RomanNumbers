export const intoRoman = (num: string | number): string => {

    const inputValid = checkInput(num);
    if(inputValid != "Valid") return inputValid;

    num = +num;
  
    if (num < 0 || num >= 4000)
      return "Number should be between 1 and 2999";
  
    if (num >= 1000)
      return "M".repeat(num / 1000) + intoRoman(num % 1000);
    else if (num >= 900)
      return "CM" + intoRoman(num % 100);
    else if (num >= 500)
      return "D".repeat(num / 500) + intoRoman(num % 500);
    else if (num >= 400)
      return "CD" + intoRoman(num % 100);
    else if (num >= 100)
      return "C".repeat(num / 100) + intoRoman(num % 100);
    else if (num >= 90)
      return "XC" + intoRoman(num % 10);
    else if (num >= 50)
      return "L".repeat(num / 50) + intoRoman(num % 50);
    else if (num >= 40)
      return "XL" + intoRoman(num % 10);
    else if (num >= 10)
      return "X".repeat(num / 10) + intoRoman(num % 10);
    else if (num === 9)
      return "IX";
    else if (num >= 5)
      return "V".repeat(num / 5) + intoRoman(num % 5);
    else if (num === 4)
      return "IV";
  
    return "I".repeat(num);
  }
  
  const checkInput = (input: string | number) : string => {
    if (typeof input === "string" && !input) return "Invalid input, is empty";
    
    if (typeof input === "string" && input.includes(" ")) return "Invalid input, contains spaces";

    return "Valid"
  }