CREATE TABLE pets (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    raca VARCHAR(255) NOT NULL,
    idade INT NOT NULL,
    sexo ENUM('M', 'F') NOT NULL,
    PRIMARY KEY (id)
  );
  