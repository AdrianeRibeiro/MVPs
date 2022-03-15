import { signOut } from "next-auth/react";

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => signOut()}>Sair</button>
    </div>
  )
}