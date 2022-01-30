#!/bin/bash
# Purpose - Script to add a user to Linux system including passsword
# Author - Vivek Gite <www.cyberciti.biz> under GPL v2.0+
# ------------------------------------------------------------------
# Am i Root user?
username=$1
password=$2
toSudoers=$3
if [ $(id -u) -eq 0 ]; then
	#read -p "Enter username : " username
	#read -s -p "Enter password : " password
	
	egrep "^$username" /etc/passwd >/dev/null
	if [ $? -eq 0 ]; then
		echo "$username exists in /etc/passwd!"
		#exit 1
	else
		pass=$(perl -e 'print crypt($ARGV[0], "password")' $password)
		useradd -m -p "$pass" "$username"
		[ $? -eq 0 ] && echo "User has been added to system!" || echo "Failed to add a user!"
	fi
	if [ $toSudoers = "y" ]; then 
		egrep "^$username" /etc/sudoers >/dev/null
		
		if [ $? -eq 0 ]; then
			echo "$username exists in sudoers!"
			exit 1
		else  
			echo "$username	    ALL=(ALL:ALL) ALL" >> /etc/sudoers
			[ $? -eq 0 ] && echo "User: $username has been added to sudoers!" || echo "Failed to add a user to sudoers!"
		fi	
	fi
else
	echo "Only root may add a user to the system."
	exit 2
fi
