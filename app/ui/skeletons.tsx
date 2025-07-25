export function RepositorySkeleton() {
  return (
    <div className="animate-pulse block flex p-6 gap-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="w-10 h-10 mb-3 rounded-full shadow-lg bg-gray-400 dark:bg-gray-200"></div>

      <div>
        <h5 className="h-6 leading-8 rounded mb-4 text-2xl font-bold tracking-tight bg-gray-900 dark:bg-white"></h5>
        <p className="h-5 leading-6 w-full mb-2 rounded bg-gray-700 dark:bg-gray-400"></p>
        <p className="h-5 leading-6 w-60 mb-2 rounded bg-gray-700 dark:bg-gray-400"></p>
        <p className="h-5 leading-6 w-30 mb-2 rounded bg-gray-700 dark:bg-gray-400"></p>
      </div>
    </div>
  );
}

export function ResultsSkeleton() {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 auto-rows-fr">
      <RepositorySkeleton />
      <RepositorySkeleton />
    </section>
  );
}
