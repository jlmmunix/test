#!/usr/bin/env bash

# Build PRODUCTIVE Server BETHUNDER Systems GmbH
# Author Jose Munoz
workingDir=$(pwd)
executingUser=$(whoami)
 
deployVagrantDirectory=~/$1
packagesAsRequirements="wget git openssh-server openssh-client zip geany"
vagrantPluginsAsRequirements="vagrant-disksize"
echo "$workingDir"
#$rootPassword=$rootPassword
. $workingDir/headers.sh #include usefull functions "$@"

if [ ! -d "$deployVagrantDirectory" ]; then
  myprint "deployVagrantDirectory: $deployVagrantDirectory does not exist. deployVagrantDirectory will be created" 
  mkdir -p ${deployVagrantDirectory}
fi
 
 
bar "1" "0.- TYPE  R O O T   P A S S W O R D " "1" 
read -s -p "Enter rootPassword : " rootPassword
echo "$rootPassword"



vagrantDirectory=$deployVagrantDirectory
bar "5" "1.- make vagrant directory under $vagrantDirectory " "1"


mkdir -p ${deployVagrantDirectory}
cd ${deployVagrantDirectory}
vagrantDirectory=$deployVagrantDirectory
  
prog "6" "2.- be root and install packages requirements wget, git, ssh client and server, zip" "1"
#2.- be root and install packages requirements wget, git, ssh client and server, zip
echo 'sh '$vagrantDirectory'/add_user.sh "$user1" "$pwd1" "y"'

echo $rootPassword | su -c "apt install ${packagesAsRequirements} -y"
#read -p "Enter administrator user1 : " user1
read -p "Enter administrator "$executingUser" pwd : " pwd1
echo $rootPassword | su -c 'sh '$workingDir'/add_user.sh "'$executingUser'" "'$pwd1'" "y" "'$rootPassword'"'
read -p "Enter administrator user2 : " user2
read -p "Enter administrator pwd2 : " pwd2
echo $rootPassword | su -c 'sh '$workingDir'/add_user.sh "'$user2'" "'$pwd2'" "y" "'$rootPassword'"'
#add the right repositories
aptContents="deb http://deb.debian.org/debian/ bullseye main
deb-src http://deb.debian.org/debian/ bullseye main

deb http://security.debian.org/debian-security bullseye-security main contrib
deb-src http://security.debian.org/debian-security bullseye-security main contrib

deb http://deb.debian.org/debian/ bullseye-updates main contrib
deb-src http://deb.debian.org/debian/ bullseye-updates main contrib
"
echo "${aptContents}" > sources.list
echo $rootPassword | su -c 'mv sources.list /etc/apt/sources.list'

# invoke checkPackageList and store its result to $out variable
checkPackageList "${packagesAsRequirements}"
returnVal=$(echo $?)
echo $returnVal
 
if [ "$returnVal" == 0 ]
then 
     prog "100" "Installation cannot continue. Packages "${packagesAsRequirements}" are not installed" "0"
     exit 1
else
     prog "10" "3.- Installation Packages "${packagesAsRequirements}" are correctlly installed" "1"
fi


prog "20" "4.- Installing Google Chrome last stable" "1"
installPackageURLMethod "google-chrome" "https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb" "n"


prog "30" "4.- Installing dbeaver last stable" "1"
installPackageURLMethod "dbeaver" "https://dbeaver.io/files/dbeaver-ce_latest_amd64.deb" "n"

cd $vagrantDirectory
pwd
#4.- download vagrant files
prog "40" "5.- download vagrant files" "1"
rm -rf master.zip
wget https://github.com/jlmmunix/test/archive/refs/heads/master.zip
unzip "${vagrantDirectory}/master.zip"
chmod -R 0777 "${vagrantDirectory}/test-master"
cp -r test-master/* "${vagrantDirectory}"
rm -rf test-master/
#cp -R * $vagrantDirectory

 
#5.- Go to vagrant 
cd $vagrantDirectory
pwd
ls
prog "50" "6.- install vagrant + vagrant plugins" "1"
#as normal user I am sudo now and install vagrant + vagrant plugins
sudo apt install vagrant -y
installVagrantPluginList "${vagrantPluginsAsRequirements}" "n"

prog "60" "7.- install Virtualbox with method from https://www.linuxbuzz.com/how-to-install-virtualbox-on-debian/" "1"
# install Virtualbox with method from https://www.linuxbuzz.com/how-to-install-virtualbox-on-debian/
wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -
wget -q https://www.virtualbox.org/download/oracle_vbox.asc -O- | sudo apt-key add -
echo "deb [arch=amd64] http://download.virtualbox.org/virtualbox/debian bullseye contrib" | sudo tee /etc/apt/sources.list.d/virtualbox.list
sudo apt update
sudo apt install virtualbox-6.1 -y
checkPackageList "virtualbox-6.1"
returnVal=$(echo $?)
echo $returnVal
 
if [ "$returnVal" == 0 ]
then 
     prog "100" "Installation cannot continue. Packages virtualbox-6.1 are not installed" "0"
     exit 1
else
     prog "65" "3.- Installation Packages virtualbox-6.1 are correctlly installed" "1"
fi

prog "70" "8.- Vagrant up" "1"

 
cd $vagrantDirectory
cd ubuntu/
vagrant up
prog "90" "8.- Vagrant provision" "1"
vagrant provision
prog "100" "9.- Deploy was done" "5"
