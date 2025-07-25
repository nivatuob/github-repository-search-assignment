"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  query: string;
};

export const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      query: searchParams.get("query")?.toString(),
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const search = data.query.trim();

    const params = new URLSearchParams(searchParams);

    if (search) {
      params.set("query", search);
      params.set("page", "1");
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-8 sm:gap-10 flex-col sm:flex-row w-full sm:w-auto"
    >
      <input
        className="block w-full rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
        placeholder="Search for repositories..."
        {...register("query")}
      />
      <button
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        disabled={formState.isSubmitting}
        type="submit"
      >
        Search
      </button>
    </form>
  );
};
