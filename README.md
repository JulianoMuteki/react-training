# react-training
React ASP.NET Core Macoratti

# Class 1
## Docker
### Commands
 - docker pull mcr.microsoft.com/mssql/server
 - docker run --name sqlserver -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=1q2w3e4r@#$" -p 1433:1433 -d mcr.microsoft.com/mssql/server

ConnectionStrings "Server=localhost,1433;Database=AlunosDB;User ID=sa;Password=1q2w3e4r@#$"

### Migrations commands line
- dotnet add package Microsoft.EntityFrameworkCore.SqlServer
- dotnet ef migrations add Initial
- dotnet tool install --global dotnet-ef
- dotnet tool update --global dotnet-ef
- dotnet ef migrations add Initial
- dotnet ef migrations add CreateUsers
- dotnet ef database update
