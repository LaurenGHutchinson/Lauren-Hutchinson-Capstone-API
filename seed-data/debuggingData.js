export default [
    {
        id:1,
      javascript: `\n//Prints numbers from 0 to 4.\nfunction printNumbers() {\n\tfor (var i = 0; i <= 5; i++) {\n\t\tconsole.log(i);\n
        \t}\n}\n\nprintNumbers();\n`,
      typescript: `\n//Prints numbers from 0 to 4.\nfunction printNumbers(): void {\n\tfor (let i = 0; i <= 5; i++) {\n
        \t\tconsole.log(i);\n\t}\n}\n\nprintNumbers();\n`,
      python: `\n//Prints numbers from 0 to 4.\ndef print_numbers():\n\tfor i in range(6):\n\t\tprint(i)\n
        \nprint_numbers()\n`,
      java: `\n//Prints numbers from 0 to 4.\npublic class Main {\n\tpublic static void printNumbers() {\n
        \t\tfor (int i = 0; i <= 5; i++) {\n\t\t\tSystem.out.println(i);\n\t\t}\n
        \t}\n\n\tpublic static void main(String[] args) {\n\t\tprintNumbers();\n\t}\n}\n`,
      csharp: `\n//Prints numbers from 0 to 4.\nusing System;\npublic class Program {\n\tpublic static void PrintNumbers() {\n\t\tfor (int i = 0; i <= 5; i++) {\n
        \t\t\tConsole.WriteLine(i);\n\t\t}\n\t}\n\n\tpublic static void Main(string[] args) {\n\t\tPrintNumbers();\n
        \t}\n}\n`},
    {
        id:2,
      javascript: `\n//Prints the sum of all even numbers in the array, which is 12.
        \nfunction sumEvenNumbers(numbers) {\n
        \tlet evenSum = 0;\n
        \tnumbers.forEach(function(number) {\n
        \t\tif (number % 2) {\n
        \t\t\tevenSum += number;\n
        \t\t}\n
        \t});\n
        \tconsole.log(evenSum);\n
        }\n\n
        sumEvenNumbers([1, 2, 3, 4, 5, 6]);\n
      `,
      typescript: `\n//Prints the sum of all even numbers in the array, which is 12.
        \nfunction sumEvenNumbers(numbers: number[]): void {\n
        \tlet evenSum = 0;\n
        \tnumbers.forEach(function(number) {\n
        \t\tif (number % 2) {\n
        \t\t\tevenSum += number;\n
        \t\t}\n
        \t});\n
        \tconsole.log(evenSum);\n
        }\n\n
        sumEvenNumbers([1, 2, 3, 4, 5, 6]);\n
      `,
      python: `\n//Prints the sum of all even numbers in the array, which is 12.
        \ndef sum_even_numbers(numbers):\n
        \teven_sum = 0\n
        \tfor number in numbers:\n
        \t\tif number % 2:\n
        \t\t\teven_sum += number\n
        \tprint(even_sum)\n\n
        sum_even_numbers([1, 2, 3, 4, 5, 6])\n
      `,
      java: `\n//Prints the sum of all even numbers in the array, which is 12.
        \nimport java.util.Arrays;\n
        public class Main {\n
        \tpublic static void sumEvenNumbers(int[] numbers) {\n
        \t\tint evenSum = 0;\n
        \t\tfor (int number : numbers) {\n
        \t\t\tif (number % 2 != 0) {\n
        \t\t\t\tevenSum += number;\n
        \t\t\t}\n
        \t\t}\n
        \t\tSystem.out.println(evenSum);\n
        \t}\n\n
        \tpublic static void main(String[] args) {\n
        \t\tsumEvenNumbers(new int[]{1, 2, 3, 4, 5, 6});\n
        \t}\n
        }\n
      `,
      csharp: `\n//Prints the sum of all even numbers in the array, which is 12.
        \nusing System;\npublic class Program {\n\tpublic static void SumEvenNumbers(int[] numbers) {\n
        \t\tint evenSum = 0;\n\t\tforeach (int number in numbers) {\n\t\t\tif (number % 2 != 0) {\n
        \t\t\t\tevenSum += number;\n\t\t\t}\n\t\t}\n\t\tConsole.WriteLine(evenSum);\n\t}\n\n
        \tpublic static void Main(string[] args) {\n\t\tSumEvenNumbers(new int[]{1, 2, 3, 4, 5, 6});\n\t}\n}\n`
    },
    {
        id:3,
      javascript: `\n//Prints "Strings are not equal." because the comparison is case-sensitive.
        \nfunction compareStrings(str1, str2) {\n
        \tif (str1 == str2) {\n
        \t\tconsole.log("Strings are equal!");\n
        \t} else {\n
        \t\tconsole.log("Strings are not equal.");\n
        \t}\n
        }\n\n
        compareStrings("Hello", "hello");\n
      `,
      typescript: `\n//Prints "Strings are not equal." because the comparison is case-sensitive.
        \nfunction compareStrings(str1: string, str2: string): void {\n
        \tif (str1 == str2) {\n
        \t\tconsole.log("Strings are equal!");\n
        \t} else {\n
        \t\tconsole.log("Strings are not equal.");\n
        \t}\n
        }\n\n
        compareStrings("Hello", "hello");\n
      `,
      python: `\n//Prints "Strings are not equal." because the comparison is case-sensitive.
        \ndef compare_strings(str1, str2):\n
        \tif str1 == str2:\n
        \t\tprint("Strings are equal!")\n
        \telse:\n
        \t\tprint("Strings are not equal.")\n\n
        compare_strings("Hello", "hello")\n
      `,
      java: `\n//Prints "Strings are not equal." because the comparison is case-sensitive.
        \npublic class Main {\n\tpublic static void compareStrings(String str1, String str2) {\n
        \t\tif (str1.equals(str2)) {\n\t\t\tSystem.out.println("Strings are equal!");\n
        \t\t} else {\n\t\t\tSystem.out.println("Strings are not equal.");\n
        \t\t}\n\t}\n\n\tpublic static void main(String[] args) {\n
        \t\tcompareStrings("Hello", "hello");\n\t}\n}\n
      `,
      csharp: `\n//Prints "Strings are not equal." because the comparison is case-sensitive.
        \nusing System;\npublic class Program {\n\tpublic static void CompareStrings(string str1, string str2) {\n
        \t\tif (str1 == str2) {\n\t\t\tConsole.WriteLine("Strings are equal!");\n\t\t} else {\n\t\t\tConsole.WriteLine("Strings are not equal.");\n\t\t}\n\t}\n\n
        \tpublic static void Main(string[] args) {\n\t\tCompareStrings("Hello", "hello");\n\t}\n}\n
      `
    },
    {
        id:4,
      javascript: `\n//Prints the calculated area of a circle with radius 5, which is approximately 78.5.
        \nfunction calculateArea(radius) {\n
        \treturn 3.14 * radius ^ 2;\n
        }\n\n
        console.log(calculateArea(5));\n
      `,
      typescript: `\n//Prints the calculated area of a circle with radius 5, which is approximately 78.5.
        \nfunction calculateArea(radius: number): number {\n
        \treturn 3.14 * radius ^ 2;\n
        }\n\n
        console.log(calculateArea(5));\n
      `,
      python: `\n//Prints the calculated area of a circle with radius 5, which is approximately 78.5.
        \ndef calculate_area(radius):\n
        \treturn 3.14 * radius ** 2\n\n
        print(calculate_area(5))\n
      `,
      java: `\n//Prints the calculated area of a circle with radius 5, which is approximately 78.5.
        \npublic class Main {\n
        \tpublic static double calculateArea(double radius) {\n
        \t\treturn 3.14 * Math.pow(radius, 2);\n
        \t}\n\n
        \tpublic static void main(String[] args) {\n
        \t\tSystem.out.println(calculateArea(5));\n
        \t}\n
        }\n
      `,
      csharp: `\n//Prints the calculated area of a circle with radius 5, which is approximately 78.5.
        \nusing System;\n
        public class Program {\n
        \tpublic static double CalculateArea(double radius) {\n`
    },
   

    ]  