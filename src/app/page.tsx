export default async function Home() {
  if(process.env.NO_COMMENT != '123456789') throw new Error('Enviroment variable is parsed incorrectly')
  if(process.env.WITH_COMMENT != '123456789') throw new Error('Enviroment variable is parsed incorrectly')
  return <div>Test</div>;
}
