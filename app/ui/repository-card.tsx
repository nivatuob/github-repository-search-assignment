import { Repository } from "@/app/lib/definitions";
import Image from "next/image";

interface RepositoryCardProps {
  repository: Repository;
}

export function RepositoryCard({
  repository: {
    full_name,
    description,
    html_url,
    owner: { login, avatar_url },
  },
}: RepositoryCardProps) {
  return (
    <a
      href={html_url}
      target="_blank"
      className="block flex p-6 gap-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <Image
        className="w-10 h-10 mb-3 rounded-full shadow-lg"
        src={avatar_url}
        alt={login}
        width={20}
        height={20}
      />

      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white break-all">
          {full_name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-wrap">
          {description}
        </p>
      </div>
    </a>
  );
}
