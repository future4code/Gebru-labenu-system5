-- Active: 1658862054504@@35.226.146.116@3306@gebru-4211669-rommel-cardoso
    
    CREATE TABLE IF NOT EXISTS labenusystem_team(
        id varchar(255) PRIMARY KEY NOT NULL,
        name varchar(255) NOT NULL,
        module ENUM("Module00", "Module01", "Module02", "Module03", "Module04", "Module05", "Module06") DEFAULT "Module00"
    );

    CREATE TABLE IF NOT EXISTS labenusystem_students (
        id varchar(255) PRIMARY KEY NOT NULL,
        name varchar(255) NOT NULL,
        email varchar(255) UNIQUE KEY NOT NULL,
        birth_date date NOT NULL,
        teamId varchar(255) NOT NULL,
        FOREIGN KEY (teamId) 
            REFERENCES labenusystem_team (id)
    );

    CREATE TABLE IF NOT EXISTS labenusystem_hobby (
        id varchar(255) PRIMARY KEY NOT NULL,
        name varchar(255) UNIQUE KEY NOT NULL
    );

    CREATE TABLE IF NOT EXISTS labenusystem_student_hobby (
        id varchar(255) PRIMARY KEY NOT NULL,
        studentId varchar(255) NOT NULL,
        hobbyId varchar(255) NOT NULL,
        FOREIGN KEY (studentId) 
            REFERENCES labenusystem_students (id),
        FOREIGN KEY (hobbyId) 
            REFERENCES labenusystem_hobby (id)
    );

    CREATE TABLE IF NOT EXISTS labenusystem_teacher (
        id varchar(255) PRIMARY KEY NOT NULL,
        name varchar(255) NOT NULL,
        email varchar(255) UNIQUE KEY NOT NULL,
        birth_date date NOT NULL,
        teamId varchar(255) NOT NULL, 
        FOREIGN KEY (teamId) 
            REFERENCES labenusystem_team (id)
    );

    CREATE TABLE IF NOT EXISTS labenusystem_specialty (
        id varchar(255) PRIMARY KEY NOT NULL,
        name varchar(255) UNIQUE KEY NOT NULL
    ); 

    CREATE TABLE IF NOT EXISTS labenusystem_teacher_specialty (
        id varchar(255) PRIMARY KEY NOT NULL,
        teacherId varchar(255) NOT NULL,
        specialtyId varchar(255) NOT NULL,
        FOREIGN KEY (teacherId) 
            REFERENCES labenusystem_teacher (id),
        FOREIGN KEY (specialtyId) 
            REFERENCES labenusystem_specialty (id)
    ); 