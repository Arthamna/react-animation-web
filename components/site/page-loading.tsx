export function PageLoading() {
  return (
    <main className="min-h-screen bg-[#f1f0ec] px-[5vw] pt-40" aria-busy="true" aria-label="Loading page">
      <div className="h-3 w-24 animate-pulse rounded-full bg-black/10" />
      <div className="mt-8 h-20 max-w-3xl animate-pulse rounded-2xl bg-black/10" />
      <div className="mt-20 h-px w-full bg-black/10" />
    </main>
  );
}
