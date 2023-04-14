<main className={styles.main}>
<h1 className={styles.title}>
  Meu Pet
</h1>

<div className={styles.grid}>
  <a href="/cadastro-pet" className={styles.card}>
    <h2>Cadastrar Pet &rarr;</h2>
    <p>Adicione o nome, idade, raça e foto do seu pet.</p>
  </a>

  <a href="/vacinas" className={styles.card}>
    <h2>Vacinas &rarr;</h2>
    <p>Cadastre as vacinas que seu pet tomou.</p>
  </a>

  <a href="/vermifugo" className={styles.card}>
    <h2>Vermífugo &rarr;</h2>
    <p>Cadastre a data que seu pet tomou o vermífugo.</p>
  </a>

  <a href="/antipulga" className={styles.card}>
    <h2>Antipulga &rarr;</h2>
    <p>Cadastre a data que seu pet tomou o antipulga.</p>
  </a>

  <a href="/medicamento" className={styles.card}>
    <h2>Medicamento &rarr;</h2>
    <p>Cadastre a data e horário que seu pet tomou o medicamento.</p>
  </a>

  <a href="/consulta-veterinario" className={styles.card}>
    <h2>Consulta Veterinário &rarr;</h2>
    <p>Cadastre a data da próxima consulta do seu pet.</p>
  </a>
</div>
</main>

<footer className={styles.footer}>
<a
  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  target="_blank"
  rel="noopener noreferrer"
>
  Powered by{' '}
  <span className={styles.logo}>
    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  </span>
</a>
</footer>
</div>
