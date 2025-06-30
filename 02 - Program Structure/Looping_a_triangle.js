/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
####### */

triangleBit = '#';

while (triangleBit.length < 8){
    console.log(triangleBit);
    triangleBit = triangleBit + '#';
}