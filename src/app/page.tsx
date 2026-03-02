import { Header } from '@/components/Header'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Next.js Boilerplate</h1>
        <p>App Router + TypeScript + styled-components</p>
        <Button>Começar</Button>
      </main>
    </>
  )
}
