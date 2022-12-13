let challange = " 30 Days Of JavaScript";
console.log(challange);
console.log(challange.length);
console.log(challange.toUpperCase());
console.log(challange.toLowerCase());
console.log(challange.substring(0, 2));
console.log(challange.slice(3, 21));
console.log(challange.includes("Script"));
console.log(challange.split(" "));
console.log(challange.split(""));
console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(".")
);
console.log(challange.replace("JavaScript", "Python"));
console.log(challange.charAt(15));
console.log(challange.charCodeAt("J"));
console.log(challange.indexOf("a"));
console.log(challange.lastIndexOf("a"));
console.log(
  "You cannot end a sentence with because because because is a conjunction".indexOf(
    "because"
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".lastIndexOf(
    "because "
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".search(
    "because"
  )
);
console.log(challange.trim(""));
console.log(challange.startsWith(" 30"));
console.log(challange.endsWith("Script"));
console.log(challange.match("a"));
console.log(challange.concat("30", "Days", "Of", "JavaScript"));
console.log(challange.repeat(2));
