import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {

  // estado para mostrar/esconder o formulário de vacinas
  const [showVacinaForm, setShowVacinaForm] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>MUNDO PET</title>
        <meta name="" content="" />
        <link rel="" href="" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cadastro de Pet
        </h1>

        <p className={styles.description}>
          Preencha os campos abaixo para cadastrar o seu pet.
        </p>

        <div className={styles.buttonContainer}>
          <button
            className={styles.formButton}
            onClick={() => setShowVacinaForm(!showVacinaForm)}
          >
            VACINA
          </button>
          <button
            className={styles.formButton}
            onClick={() => console.log("Vermifugos")}
          >
            Vermifugos
          </button>
          <button
            className={styles.formButton}
            onClick={() => console.log("Antipulga")}
          >
            Antipulga
          </button>
          <button
            className={styles.formButton}
            onClick={() => console.log("Medicamentos")}
          >
            Medicamentos
          </button>
          <button
            className={styles.formButton}
            onClick={() => console.log("Consulta")}
          >
            Consulta
          </button>
        </div>

        {/* Formulário de cadastro de pet */}
        {showVacinaForm && (
          <form className={styles.form}>
            <label htmlFor="petName">Nome do pet: </label>
            <input type="text" id="petName" name="petName" />

            <label htmlFor="lastVacinaDate"> Data da última vacina: </label>
            <input type="date" id="lastVacinaDate" name="lastVacinaDate" />

            <label htmlFor="nextVacinaDate">Data da próxima vacina:  </label>
            <input type=  "date" id=  "nextVacinaDate" name=   "nextVacinaDate" />

              <button type=   "submit">    Salvar </button>
          </form>
        )}
      </main>

      <footer className={styles.footer}>
        <a>
          {' '}
          <span className={styles.logo}>
            <Image src="" alt="" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
