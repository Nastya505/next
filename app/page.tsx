import ProductCard from "./components/product-card";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>Hello,{session && <span>{session.user!.name}</span>}</h1>
      <ProductCard/>
    </div>
  );
}
