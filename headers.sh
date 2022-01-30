#!/usr/bin/env bash
# progress bar function

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
    statusMessage="$x install unknown status"
    if [ "$status" = "0" ]; then 
      statusMessage="$x install cancelled."
    fi   
    if [ "$status" = "1" ]; then 
      statusMessage="$x install running ... "
    fi    
    if [ "$status" = "2" ]; then 
      statusMessage="$x install will continue ... "
    fi        
    if [ "$status" = "5" ]; then 
      statusMessage="$x install completed"
    fi 
    prog $statusMessage
    echo ""
    echo -e "$RED $message "
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
myprintGreen() {
    local message=$1 shift
    echo ""
    echo -e "$GREEN $message \e[0m"
    sleep .1 
}
myprintWarning() {
    local message=$1 shift
    echo ""
    echo -e "$RED $message \e[0m"
    sleep .1 
}
checkPackageList(){
	local stringPackageList=$1
	local returnVal=""
	myprint "Checking packages.... $stringPackageList!\n"
	for packageName in $stringPackageList; do
	myprint "Checking.... $packageName!\n"
	  dpkg -l | grep $packageName >/dev/null
		if [ $? -eq 0 ]; then
		myprintGreen "$packageName already installed!\n"
		returnVal=1
		else 
			myprintWarning "$packageName not installed!\n"
			returnVal=0
		fi
	done
	return $returnVal
}
installVagrantPluginList(){
	checkPackageList "vagrant"
	local returnVal=$(echo $?)
	local vagrantPluginList=$1
	local forceInstall=$2
	 
	if [ "$returnVal" == 0 ]
	then 
		 prog "0" "Installation cannot continue. Packages "${checkPackageList}" are not installed" "0"
		 exit 1
	else
		 prog "0" "3.- Installation Packages "${checkPackageList}" are correctlly installed" "1"
	fi	
	
	myprint "Checking packages.... $vagrantPluginList!\n"
	for vagrantPluginName in $vagrantPluginList; do
	myprint "Checking.... $vagrantPluginName!\n"
	  vagrant plugin list | grep "${vagrantPluginName}" >/dev/null
		if [ $? -eq 0 ]; then
			myprintGreen "$vagrantPluginName plugin is already installed!\n"
			if [ $forceInstall = "y" ]; then 
				myprintGreen "Installing $vagrantPluginName!\n"
				vagrant plugin install "${vagrantPluginName}" 
			fi		 
		else 
			myprintGreen "Installing $vagrantPluginName!\n"
			vagrant plugin install "${vagrantPluginName}"
		fi
	done
}
installPackageURLMethod(){
	local packageName=$1
	local urlPackage=$2
	local urlForceInstall=$3
	local install=true
	local FILE="${urlPackage##*/}"
	echo $FILE
	local FILE_WITH_PATH="/tmp/debs/${FILE}"
	echo $FILE_WITH_PATH
	echo "${FILE}*"
	mkdir -p /tmp/debs
	cd /tmp/debs
	sudo rm -rf "${FILE}"
	sudo rm -rf "$FILE_WITH_PATH.*"
	find "/tmp/debs" -name "${FILE}.*" -type f -delete
	ls 
	sudo rm -rf "${FILE_WITH_PAH}*"
	ls
	#echo "TEST"
	echo "${packageName}"
        #dpkg -l | grep "${packageName}" >/dev/null
        dpkg -l | grep $packageName >/dev/null
	if [ $? -eq 0 ]; then
		myprintGreen "$packageName already installed!"
		install=false
		if [ $urlForceInstall = "y" ]; then 
			myprint "Forcing installation of packageName: "$packageName 
			install=true
		fi	
		if [ $urlForceInstall != "y" ]; then 
			myprintWarning "Installation of packageName: "$packageName" was cancelled."
		fi				
	fi
	#echo "TEST2"	
	#echo "${install}"
        if [ "$install" = true ]; then 
		wget $urlPackage
		FILE="${urlPackage##*/}"
		if test -f "$FILE"; then
			myprintGreen "$FILE exists and is going to be installed"
			sudo apt install ./"$FILE"
		fi
		myprintGreen "$FILE will be removed"
		ls
		rm -rf "${FILE}"
		ls
       fi 	    


}


#printf "${ORANGE}" 
echo "W E L C O M E   B U I L D   P R O D U C T I V E   R O O T"
echo -e "\n\n\n "  
this_file="$(basename "$(test -L "$0" && readlink "$0" || echo "$0")")"

 
