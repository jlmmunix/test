
#!/bin/bash
# progress bar function

TRANSFER_FILES_SHARED_PATH="\\\\cx9-dc02\transfer\Jose"
TRANSFER_FILES_DIR_PATH="/home/jmunoz/transfer/Jose/"

#TRANSFER_FILES_SHARED_PATH="\\\\ku-fs01.kunden.local\deployment\single\updates"
#TRANSFER_FILES_DIR_PATH="/home/jmunoz/deployment/single/updates/"

RED="\e[31m"
ORANGE="\e[33m"
BLUE="\e[94m"
GREEN="\e[92m"
STOP="\e[0m"

prog() {
    local w=60 p=$1;  
    shift 
    sim="-"
    simNumber=($p*$w)/100
    sim="*"
    # create a string of spaces, then change them to dots
    printf -v dots "%*s" "$(( $simNumber ))"; dots=${dots// /$sim};
    printf ""
    # print those dots on a fixed-width space plus the percentage etc. 
    printf "\r[K[%-*s] %3d%% %s" "$w" "$dots" "$p" "$*"; 
    #clear
}

bar() {
    local message=$2 p=$1 status=$3 ;  shift
    x=$p
    statusMessage="$x update unknown status"
    if [ "$status" = "0" ]; then 
      statusMessage="$x update cancelled."
    fi   
    if [ "$status" = "1" ]; then 
      statusMessage="$x update running ... "
    fi    
    if [ "$status" = "2" ]; then 
      statusMessage="$x update will continue ... "
    fi        
    if [ "$status" = "5" ]; then 
      statusMessage="$x update completed"
    fi 
    prog $statusMessage
    echo ""
    echo -e " $message "
    echo -e "\n"   
    sleep .1 
    #echo  
} #echo 


myprint() {
    local message=$1 shift
    echo ""
    echo -e "\e[38;5;198m $message \e[0m" 
    sleep .1 
}
#printf "${ORANGE}" 
echo "W E L C O M E   T O   C X 9   M E R G E   R E Q U E S T"
echo -e "\n\n\n "  
this_file="$(basename "$(test -L "$0" && readlink "$0" || echo "$0")")"
EXTRA_COMMANDS=$5
 
