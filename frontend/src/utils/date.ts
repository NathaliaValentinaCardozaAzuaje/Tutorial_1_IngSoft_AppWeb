export function formatDate(date?: string): string {
  if (!date) return '';

  return new Intl.DateTimeFormat('es-CO', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
}
