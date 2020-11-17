-- Define o banco de dados que ser� utilizado
USE Filmes;
GO

-- Insere dois g�neros na tabela Generos
INSERT INTO Generos	(Nome)
VALUES				('A��o')
					,('Drama');
GO

INSERT INTO Generos (Nome)
VALUES	('Aventura'),
		('Terror'),
		('Romance')

INSERT INTO Generos (Nome)
Values ('Anima��o')
		,('Fic��o')
		,('Com�dia')

-- Insere dois filmes na tabela Filmes
INSERT INTO Filmes	(Titulo, IdGenero)
VALUES				('A vida � bela', 2)
					,('Rambo', 1);
GO

-- Insere dois novos usu�rios
INSERT INTO Usuarios (Nome,Email, Senha, Permissao)
VALUES				 ('Saulo','saulo@email.com', '123', 'Comum')
					,('Helena','adm@adm.com', '123', 'Administrador');
GO

