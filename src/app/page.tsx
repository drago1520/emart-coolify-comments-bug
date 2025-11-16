export default async function Home() {
  if(process.env.NO_COMMENT != '123456789') throw new Error('Enviroment variable process.env.NO_COMMENT is parsed incorrectly')
  if(process.env.WITH_COMMENT != '123456789') throw new Error('Enviroment variable process.env.WITH_COMMENT is parsed incorrectly')
  return <div>Test</div>;
}
