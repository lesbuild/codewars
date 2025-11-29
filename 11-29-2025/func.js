function zebulansNightmare(s) {
  return s.split("_").map((e,i)=>i>0 ? e[0].toUpperCase() + e.substring(1) : e).join("");
}
// Description:
// Zebulan has worked hard to write all his python code in strict compliance to PEP8 rules. In this kata, you are a mischievous hacker that has set out to sabotage all his good code.

// Your job is to take PEP8 compatible function names and convert them to camelCase. For example:

// "camel_case" --> "camelCase"
// "zebulans_nightmare" --> "zebulansNightmare"
// "get_string" --> "getString"
// "convert_to_uppercase" --> "convertToUppercase"
// "main" --> "main"