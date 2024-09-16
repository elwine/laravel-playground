import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="flex flex-col items-center gap-6 mx-auto mt-9 font-bold text-6xl text-slate-200">
      I am the bone of my sword
      <Image
        alt="silver wolf"
        src={
          "https://media.discordapp.net/attachments/910835497193054298/1283039619398631444/458766524_540567245383287_2116321523170147503_n.png?ex=66e8cb82&is=66e77a02&hm=a92d6f80bcbc59d56fd30a98f01e57cd6812a50d9dc4c05b35a0bdd4707dba71&=&format=webp&quality=lossless&width=525&height=701"
        }
        width={200}
        height={200}
        className="rounded-lg w-96 h-fit"
      />
    </div>
  );
}
