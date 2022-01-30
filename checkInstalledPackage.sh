#!/usr/bin/env bash
# install packages
# "".sh "git vagrant"
stringPackageList=$1
install=false
for packageName in $stringPackageList; do
  status="$(dpkg-query -W --showformat='${db:Status-Status}' "$packageName" 2>&1)"
  if [ ! $? = 0 ] || [ ! "$status" = installed ]; then
    install=true
    break
  fi
done
if "$install"; then
  sudo apt install $stringPackageList
fi
