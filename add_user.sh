#!/bin/bash
username=$1
password=$2
toSudoers=$3
rootPassword=$4
if [ $(id -u) -eq 0 ]; then
	#read -p "Enter username : " username
	#read -s -p "Enter password : " password
	echo "Adding user: $username to /etc/passwd"
	echo $rootPassword | su -c 'egrep "^'$username'" /etc/passwd >/dev/null'
	if [ $? -eq 0 ]; then
		echo "$username exists in /etc/passwd!"
		#exit 1
	else
		pass=$(perl -e 'print crypt($ARGV[0], "password")' $password)
		echo $rootPassword | su -c 'sudo useradd -m -p "'$pass'" "'$username'"'
		[ $? -eq 0 ] && echo "User has been added to system!" || echo "Failed to add a user!"
	fi
	if [ $toSudoers = "y" ]; then 
		echo "Adding user: $username to sudoers"
		echo $rootPassword | su -c 'egrep "^'$username'" /etc/sudoers >/dev/null'
		
		if [ $? -eq 0 ]; then
			echo "$username exists in sudoers!"
			exit 1
		else  
			echo $rootPassword | su -c 'echo "'$username'	    ALL=(ALL:ALL) ALL" >> /etc/sudoers'
			[ $? -eq 0 ] && echo "User: $username has been added to sudoers!" || echo "Failed to add a user to sudoers!"
		fi	
	fi
else
	echo "Only root may add a user to the system."
	exit 2
fi
