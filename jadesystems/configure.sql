use master
go
DECLARE @creatingDatabase NVARCHAR(512) = 'BETHUNDER_'
DECLARE @COUNTER INT = 1
DECLARE @tsql NVARCHAR(MAX)
 
WHILE @COUNTER <= 12  
BEGIN  
    SET @creatingDatabase = 'BETHUNDER_'+CAST(@COUNTER AS VARCHAR(16))
    IF (@COUNTER < 10)
    	SET @creatingDatabase = 'BETHUNDER_000'+CAST(@COUNTER AS VARCHAR(16))
    ELSE IF (@COUNTER < 100)
    	SET @creatingDatabase = 'BETHUNDER_00'+CAST(@COUNTER AS VARCHAR(16))
    ELSE IF (@COUNTER < 1000)
    	SET @creatingDatabase = 'BETHUNDER_0'+CAST(@COUNTER AS VARCHAR(16))    	
    SET @tsql = 'IF NOT EXISTS(SELECT 1 FROM sys.databases WHERE name ='''+@creatingDatabase+''') CREATE DATABASE ['+@creatingDatabase+']'
    exec(@tsql)
    SET @COUNTER+=1 
END       
GO
DECLARE @database NVARCHAR(512)
DECLARE @tsql NVARCHAR(MAX)
DECLARE database_cursor CURSOR  
   FOR SELECT name FROM sys.databases WHERE name NOT IN ('master','tempdb','model','msdb')
OPEN database_cursor  
FETCH NEXT FROM database_cursor INTO @database
  
WHILE @@FETCH_STATUS = 0  
BEGIN  
    SET @tsql = 'ALTER DATABASE '+@database+' SET SINGLE_USER WITH ROLLBACK IMMEDIATE ALTER DATABASE '+@database+' SET MULTI_USER'
    exec(@tsql)
    FETCH NEXT FROM database_cursor	INTO @database
END   
CLOSE database_cursor;  
DEALLOCATE database_cursor;  
go

use master
go
EXEC sp_configure 'show advanced options', 1;  
GO  
RECONFIGURE ;  
GO  
EXEC sp_configure 'user connections', 325 ;  
GO  
RECONFIGURE;  
GO  

