# So far, it looks like only the Microsoft stuff needs this:
sudo apt-get install -y -q apt-transport-https

# echo "Installing Microsoft key"
# https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-ubuntu
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -

echo "Installing MS SQL Client"
# Client
# Apparently the repository name hasn't changed
sudo add-apt-repository "$(wget -qO- https://packages.microsoft.com/config/ubuntu/16.04/prod.list)"
#sudo apt-get -y -q update
sudo apt-get update
ACCEPT_EULA=y DEBIAN_FRONTEND=noninteractive sudo -E apt-get install -y -q --no-install-recommends mssql-tools unixodbc-dev
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc
source ~/.bashrc
# `rails dbconsole` uses `sqsh`
sudo apt-get install -y -q sqsh

echo "Installing MS SQL Server"
# Server
# Apparently the repository name hasn't changed
sudo add-apt-repository "$(wget -qO- https://packages.microsoft.com/config/ubuntu/16.04/mssql-server-2017.list)"
sudo apt-get -y -q update
# Current version breaks TLS
sudo apt-get install -y -q mssql-server=14.0.3192.2-2
sudo apt-mark hold mssql-server
# Choose developer edition
# https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-configure-environment-variables
sudo systemctl stop mssql-server
ACCEPT_EULA=y MSSQL_PID=Developer MSSQL_LCID=1033 MSSQL_SA_PASSWORD="Micro-scope" sudo -E /opt/mssql/bin/mssql-conf setup
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bash_profile 
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc
sudo /opt/mssql/bin/mssql-conf set sqlagent.enabled true
#sudo mkdir /tmp/data
#sudo mkdir /tmp/log
#sudo chown mssql /tmp/data
#sudo chown mssql /tmp/log
#sudo /opt/mssql/bin/mssql-conf set filelocation.defaultdatadir /tmp/data
#sudo /opt/mssql/bin/mssql-conf set filelocation.defaultlogdir /tmp/log
#sudo mkdir /tmp/masterdatabasedir
#sudo chown mssql /tmp/masterdatabasedir
#sudo chgrp mssql /tmp/masterdatabasedir
#sudo chmod -R 0775 /var/log
#sudo chmod -R 0775 /var/opt/mssql/log/
sudo apt-get install -y ufw
sudo ufw enable
sudo ufw allow 1433

#sudo /opt/mssql/bin/mssql-conf set filelocation.masterdatafile /tmp/masterdatabasedir/master.mdf
#sudo /opt/mssql/bin/mssql-conf set filelocation.masterlogfile /tmp/masterdatabasedir/mastlog.ldf      

sudo systemctl start mssql-server
/opt/mssql-tools/bin/sqlcmd -U sa -P 'Micro-scope' -i configure.sql -e
# echo "Starting MS SQL Server"
#sudo systemctl restart mssql-server.service

# Since this is for development and test databases, we don't want the log files
# to grow forever. Setting the model database sets all databases subsequently
# created on this server.
# sqlcmd comes from the client tools, so they have to be installed first.
# echo "Configuring Logs on MS SQL Server"
/opt/mssql-tools/bin/sqlcmd -U sa -P 'Micro-scope' <<-CONFIG_DB
alter database model set recovery simple;
go
CONFIG_DB


sudo apt-get install -y -q build-essential
sudo apt-get install -y -q libc6-dev

sudo systemctl status mssql-server
