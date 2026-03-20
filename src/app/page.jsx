import CardUser from "./components/CardUser";

export default async function Home() {
  const data = await fetch("http://localhost:3000/api/users");
  const res = await data.json();
  console.log(res);

  return (
    <div className="flex flex-col gap-10">
      {res.payLoad.map((item) => (
        
          <CardUser key={item.id} users={item} />
      ))}
    </div>
  );
}
