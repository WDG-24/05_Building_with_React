// Fallback-Komponente wird von ErrorBoundary verwenden
// Hat Zugriff auf Error und kann den Fehler zurücksetzen
export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className='p-4 bg-red-100 text-red-700 border border-red-300 rounded'>
      <p className='font-semibold'>There was an error while submitting the form:</p>
      <pre className='mt-2 text-sm'>{error.message}</pre>
      <button
        type='button'
        onClick={resetErrorBoundary}
        className='mt-2 px-4 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700'
      >
        Retry
      </button>
    </div>
  );
}
