/* Write a program that creates a string that represents an 8×8 grid, using 
newline characters to separate lines. At each position of the grid there is 
either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 
and change the program so that it works for any size, outputting a grid of the 
given width and height. */

let bindingSize = 8;

for (let line = 1; line <= bindingSize; line++) { //line counter
    let i = ""; //Initialize the string.
    for (let square = 1; square <= bindingSize; square++) { //square counter
        if (line % 2 != 0) { //If the line is odd-numbered...
            if (square % 2 != 0) { //If the square number is odd...
                i += " "; //Append a blank square.
            }
            else { //If the square number is not odd...
                i += "#"; //Append a pound-sign square.
            }
        }
        else { //If the line is not odd-numbered...
            if (square % 2 != 0) { //If the square number is odd...
                i += "#"; //Append a pound-sign square.
            }
            else { //If the square number is not odd...
                i += " "; //Append a blank square.
            }
        }
    } //End of the square counter
    i +="\n"; //Add a newline to the end of the line.
    console.log(i); //Print the line.
} //End of the line counter