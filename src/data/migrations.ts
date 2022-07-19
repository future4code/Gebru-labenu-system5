import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
    .raw(`
    CREATE TABLE IF NOT EXISTS Turma(
        id varchar(255) NOT NULL,
        nome varchar(255) NOT NULL,
        modulo varchar(255) DEFAULT '0',
        PRIMARY KEY (id)
    );

    CREATE TABLE IF NOT EXISTS Estudantes (
        id varchar(255) NOT NULL,
        nome varchar(255) NOT NULL,
        email varchar(255) NOT NULL,
        dataNascimento date NOT NULL,
        turmaId varchar(255) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY email_UNIQUE (email),
        KEY turmaId (turmaId),
        CONSTRAINT Estudantes_ibfk_1 FOREIGN KEY (turmaId) REFERENCES Turma (id)
    );

    CREATE TABLE IF NOT EXISTS Hobby (
        id varchar(255) NOT NULL,
        nome varchar(255) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY nome_UNIQUE (nome)
    );

    CREATE TABLE IF NOT EXISTS Estudante_Hobby (
        id varchar(255) NOT NULL,
        estudanteId varchar(255) NOT NULL,
        hobbyId varchar(255) NOT NULL,
        PRIMARY KEY (id),
        KEY estudanteId (estudanteId),
        KEY hobbyId (hobbyId),
        CONSTRAINT Estudante_Hobby_ibfk_1 FOREIGN KEY (estudanteId) REFERENCES Estudantes (id),
        CONSTRAINT Estudante_Hobby_ibfk_2 FOREIGN KEY (hobbyId) REFERENCES Hobby (id)
    );

    CREATE TABLE FI NOT EXISTS Docente (
        id varchar(255) NOT NULL,
        nome varchar(255) NOT NULL,
        email varchar(255) NOT NULL,
        dataNascimento date NOT NULL,
        turmaId varchar(255) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY email_UNIQUE (email),
        KEY turmaId (turmaId),
        CONSTRAINT Docente_ibfk_1 FOREIGN KEY (turmaId) REFERENCES Turma (id)
    );

    CREATE TABLE IF NOT EXISTS Especialidade (
        id varchar(255) NOT NULL,
        nome varchar(255) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY nome_UNIQUE (nome)
    ); 

    CREATE TABLE IF NOT EXISTS Docente_especialidade (
        id varchar(255) NOT NULL,
        docenteId varchar(255) NOT NULL,
        especialidadeId varchar(255) NOT NULL,
        PRIMARY KEY (id),
        KEY docenteId (docenteId),
        KEY especialidadeId (especialidadeId),
        CONSTRAINT Docente_especialidade_ibfk_1 FOREIGN KEY (docenteId) REFERENCES Docente (id),
        CONSTRAINT Docente_especialidade_ibfk_2 FOREIGN KEY (especialidadeId) REFERENCES Especialidade (id)
    ); 

`)
    .then(() => { console.log("Tabelas criadas") })
    .catch(printError)
const closeConnection = () => { connection.destroy() }

createTables()
    .finally(closeConnection)