import Navbar from './navbar';

export default async function Nav() {
  const user = {
    name: "test",
    email: "email",
    image: ""
  }
  return <Navbar user={user} />;
}
