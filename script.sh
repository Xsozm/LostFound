#! /bin/bash

#echo or print
echo hello world

#Variables
#UPPER CASE BY CONVENTION
NAME="lohl"
# echo "my name is ${NAME}"
# echo $NAME

# #USER INPUT
# read -p "enter a name" INPUT
# echo "input is ${INPUT}"


# #simple if statment
# if [ $NAME == "hazem" ]
# then
#     echo "then "
# else
#     echo "else "
# fi

#if-else statment
# if [ $NAME == "lol" ]
# then
#     echo "lol"
# elif [ $NAME == "hazem" ]
# then
#     echo "hazem"
# else
#     echo "else"
# fi    

#Comparisons 
########
# val1 -eq val2 Returns true if the values are equal
# val1 -ne val2 Returns true if the values are not equal
# val1 -gt val2 Returns true if val1 is greater than val2
# val1 -ge val2 Returns true if val1 is greater than or equal to val2
# val1 -lt val2 Returns true if val1 is less than val2
# val1 -le val2 Returns true if val1 is less than or equal to val2
########

# VAL1=12
# VAL2=12
# if [ $VAL1 -eq $VAL2 ]
# then
#     echo "hhahaa"
# fi   



########
# -d file   True if the file is a directory
# -e file   True if the file exists (note that this is not particularly portable, thus -f is generally used)
# -f file   True if the provided string is a file
# -g file   True if the group id is set on a file
# -r file   True if the file is readable
# -s file   True if the file has a non-zero size
# -u    True if the user id is set on a file
# -w    True if the file is writable
# -x    True if the file is an executable
########
# FILE CONDITIONS
# FILE="test.txt"
# if [ -e $FILE ]
# then
#   echo "$FILE exists"
# else
#   echo "$FILE does NOT exist"
# fi


#CASE STATEMENT
# read -p "Are you 21 or over? Y/N " ANSWER
# case "$ANSWER" in 
#   [yY] | [yY][eE][sS])
#     echo "You can have a beer :)"
#     ;;
#   [nN] | [nN][oO])
#     echo "Sorry, no drinking"
#     ;;
#   *)
#     echo "Please enter y/yes or n/no"
#     ;;
# esac

#SIMPLE FOR LOOP
# NAMES="Brad Kevin Alice Mark"
# for NAME in $NAMES
#   do
#     echo "Hello $NAME"
# done

# FOR LOOP TO RENAME FILES
# FILES=$(ls *.txt)
# NEW="new"
# for FILE in $FILES  
#   do
#     echo "Renaming $FILE to new-$FILE"
#     mv $FILE $NEW-$FILE
# done

# WHILE LOOP - READ THROUGH A FILE LINE BY LINE
# LINE=1
# while read -r CURRENT_LINE
#   do
#     echo "$LINE: $CURRENT_LINE"
#     ((LINE++))
# done < "./new-1.txt"

# FUNCTION
# function sayHello() {
#   echo "Hello World"
# }
# sayHello

# FUNCTION WITH PARAMS
# function greet() {
#   echo "Hello, I am $1 and I am $2"
# }

# greet "Brad" "36"

# CREATE FOLDER AND WRITE TO A FILE
# mkdir hello
# touch "hello/world.txt"
# echo "Hello World" >> "hello/world.txt"
# echo "Created hello/world.txt"
