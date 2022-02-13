# Password Generator Starter Code
Challenge Week 3

## Description

AS AN employee with access to sensitive data

I WANT to randomly generate a password that meets certain criteria

SO THAT I can create a strong password that provides greater security.

With the HTML and CSS provided, I have been endowed with the responsibility of building a password generator using JavaScript. The practice will help familiarize myself both with JavaScript and with seeking answers on the web to typicl developer issues. Furthermore, the job will help me become more comfortable using Chrome DevTools as a debugger. 

The password generator itself will be able, with the conditions set by the user, to create passwords of various lengths and of various characters. Having such a tool will help keep data safe and my passwords diverse. 

My job is to build the JavaScript so that:

GIVEN I need a new, secure password

WHEN I click the button to generate a password

THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria

THEN I select which criteria to include in the password

WHEN prompted for the length of the password

THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password

THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt

THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered

THEN a password is generated that matches the selected criteria

WHEN the password is generated

THEN the password is either displayed in an alert or written to the page

First, I set up the prompts asking the user what character sets were allowed and how many characters were desired in the password length, and then added the variables at the top to store the answers. Then I created a password generator using the approved character set and the math.random() function in symphony with math.floor to give an integer index number. 

Next, I had to double check the password to make sure at least one of each approved character family appeared in the password. I created a separate function and used if/else statements to check the password, and return a true/false value depending. This caused me the most trouble, because I initially had the password regenerate within the doubleCheck, which caused the correct result to be found, but then be replaced with the original, incorrect password as soon as it left the doubleCheck. With the help of debugging and tinkering, I realized that the issue was to be found in the nesting. I solved the problem by having the doubleCheck simply provide a true/false statement, and having that true/false statement reflected in the password generator (gen()) through an answer/false statement. Only by bringing the answer all the way out of the gen() function was I able to then ask the gen() function to try again if it came out false. 

Once the doubleCheck was completed, I placed the entire passwordGenerator() function around the prompts so that they only appeared once the button was clicked. After testing it a few times, I noticed that if the user presses the button again with different character conditions, they were not met. I realized this is because the totalChar variable carries over iteration to iteration, so I added a way to clear it once a correct password was found.  

Now, when the button is pressed, the conditions are asked and followed, and at least one of each approved character type appears in the resulting password. Furthermore, upon multiple clicks, the password generator continues to perform its function, making it a reliable generator. 

## Installation

My repository on GitHub is named password-generator. The link to this repository is below.

[https://github.com/willjduncan/Professional-Portfolio.git](hhttps://github.com/willjduncan/Professional-Portfolio.git)


The link to the live website is below: 

[https://willjduncan.github.io/Professional-Portfolio/](https://willjduncan.github.io/Professional-Portfolio/)


## Usage

Screenshots are shown of the Professional Portfolio at the screen dimensions of 375px, 568px, 768px, and 812px respectively, to show how Chrome DevTools was used to help make sure the webpage is user-friendly and mobile-accessible. 

![screenshot at 375px](/assets/images/screenshot-375px.png)
![screenshot at 568px](/assets/images/screenshot-568px.png)
![screenshot at 768px](/assets/images/screenshot-768px.png)
![screenshot at 812px](/assets/images/screenshot-812px.png)

## Credits

No classmates or instructors were used in the making of this website. The coding boot camp Professional README Guide found at https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide was used as a template for this README. The license was picked from [https://choosealicense.com/](https://choosealicense.com/), as suggested by the README Guide aforementioned. The WHEN/THEN section of this README was taken directly from the homework assignment Acceptance Criteria. The Robot-Gladiator project of Module 3 was used as an example. Stack Overflow, MDN Web Docs, and Google were critical to my success. 

## License

MIT License

Copyright (c) [2022] [Will Duncan]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.