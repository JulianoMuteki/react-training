using AlunosAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AlunosAPI.Context
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
        :base(options)
        {
            
        }

        public DbSet<Aluno> Alunos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.Entity<Aluno>().HasData(
                new Aluno{
                    Id = 1,
                    Nome = "Juliano C Pestili",
                    Email = "juliano.pestili@mail.com",
                    Idade = 16
                },
                new Aluno{
                    Id = 2,
                    Nome = "Guilherme",
                    Email = "guilherme@mail.com",
                    Idade = 16
                }
            );
        }
    }
}