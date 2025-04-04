pwd => present working directory

cd => change directory

ls => list files and directories in the current directory

ls -R => to view subdirectories of directories

ls -l => to view permissions or last modified date or size in bytes of particular file/folder

ls -t => list files

ls -lt => t gives timestamp of modified files/diectories

ls -la => To view all items including hidden

ls -lRa => To hidden files within subdirectories

ls -lr => shows modified items in reverse order

ls -s => list items by size

ls -lR | grep .js => list all js files
<!-- R stands for recursively -->

ls *.js => list all js files but not inside subdiectories

ls pro* => shows all files within that diectory that match regex "pro"

ls .. => all diectories present in parent directory of pwd

cd folderName => changes pwd to folderName

cd ../../ => hop back to two levels





mkdir folder && cd folder => make directory and chnages directory

mkdir -p folder/folder1 => cretaes subdirectory folder1 recursively 

touch newFile.txt => creates newfile

cat => to see content inside a file => cat newFile.txt

cat > newFile.txt => /* then press enter and write something. after writing press ctrl d now that something is written in the newFile.txt */

cat >> newFile.txt => append in the file. /* press enter then write and then prss ctrl d */

vi => vim terminal

mv fileName placeName => move file

mv oldfilename newfilename => rename

cp filenameToBeCopied placetoPutCOpiedFile => copy file

cp -r folderName placetobeplacedcopiedfolder => copy folder recursilvely

rm - r foldername => erase folder/file

chmod u+rwx fileaname => to add permission to file... u for user + sign for adding permission r read w write x execute

chmod g+wx filename => adding permission to file for group 

chmod u-x filename => execute permission removed

ugo means user group others

<!-- permission can also be given using numbers - 4 for read 2 for write 1 for execute -->

<!-- read more about permissions using numbers  -->

echo "namaste" => print something in terminal

echo $PATH => to get path

head newfile.txt => get first 10 rows of particular file

tail newfile.txt => get last 10 rows of particular file

head -20 newfile.txt => get first 20 rows of particular file

<!-- | character helps in inserting output from command1 to input of command2 -->

tail -n +25 filename | head -n +5 => To view custom rows like after 25 give 5 rows

wc newfile.txt => will give line count words count and characters count respectively

<!-- grep is a coomand thet lets find occurances of certain words phrases -->

grep "promise" promise.js => each occurances will be shown

grep "promise" promise.js | wc -l => count each occurances

grep -c "prmise" promise.js => count will be shown of that word 

grep -h "promise" promise.js => all occurance of that word will be shown

grep -hi "promise" promise.js => all occurance of that word and case will be ignored

grep -hir "promise" directoryname => all occurance of that word in given directory

grep -hin "promise" promise.js => all occurance of that word with line number

grep -w "promise" promise.js => all occurance of that word 

grep -o "promise" promise.js => all occurance of that exact word 

history => gives history of all commands that have been run


<!-- It is possible to run command written inside a file with just single command. It is necessary to mention bash in first line inside the file. -->
bash filename.sh => run every commands written inside the file. 


 grep "ERROR" filename  => will view all the error messages in that file.
55. grep -v "INFO" filename => will show error not extra info
56. grep -A 5 ERROR filename  => to view rows after the occurance of "ERROR" text in a file
56. grep -B 5 ERROR filename => to view rows before the occurance of ERROR text in a file
56. grep -C 5 ERROR filename => to view rows before and after the occurance of ERROR text in a file.


<!-- sed [options] script file -->

sed -n '/ERROR/ p' filename => print all lines where the word ERROR comes. p stands for print. -n so that sed does not print all lines it finds ints output stream.

sed 's/ERROR/CRITICAL/' filename.txt => error will be substituted by critical

sed -ibackup 's/ERROR/CRITICAL/' filename.txt => backup file will be created then error will be substituted by critical

sed '3 s/ERROR/CRITICAL/' filename.txt => In line number 3, error will be substituted by critical

sed '3,7 s/ERROR/CRITICAL/' filename.txt => In line range between 3 and 7, error will be substituted by critical

sed '3,/ERROR/ p' filename.txt => In line from 3, error will be printed

<!-- awk [options] script file          '(pattern){action}' -->

awk '/ERROR/{print $0}' filename.txt =>  all occurances of ERROR

awk '{gsub(/ERROR/, "CRITICAL")}{print}' filename.txt => substitute ERROR with CRITICAL and print

awk 'BEGIN {print "LOG SUMMARY\n--------------"} {print} END {print "--------------\nEND OF LOG SUMMARY"}' filename => add text in the beginning and ending of a file.

awk '{print $1, $2}' filename  => Print 1st and the 2nd column of the data (file).

awk -F "," '{print $1, $2}' filename  => 

awk '{count[$2]++} END {print count["ERROR"]}' filename => Count the occurance of ERROR in second column of the file.

awk '{ if ($1 > 1598863888 ) {print $0} }' log.txt  => view the rows after 1598863888 in first column.


nvm - node version manager

grep - used for search
 
npm - node package manager
